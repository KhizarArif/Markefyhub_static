import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "From start to finish, working with this team was a seamless experience...",
    name: "Theresa Webb",
    title: "CEO of Redbird Company",
  },
  {
    text: "Working with Katalyst Studio has been an incredible experience...",
    name: "Alan Baker",
    title: "CEO of Redbird Company",
  },
  {
    text: "Their team delivered on time and within budget...",
    name: "Michael Smith",
    title: "CTO of Redbird Company",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevTestimonial = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  const cardVariants = {
    left: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    middle: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    right: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
  };

  return (
    <section className="w-full py-16 bg-[#2C35A5] text-white text-center relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-4">
        Hear what our{" "}
        <span className="bg-white text-[#2C35A5] px-2 py-1 rounded">
          amazing
        </span>{" "}
        customers say
      </h2>
      <p className="max-w-xl mx-auto text-lg mb-10">
        Read through our testimonials to see why our clients love working with
        us and how we can help you achieve your business goals through creative
        and effective design.
      </p>

      <div className="flex justify-center gap-6 px-4">
        {testimonials.map((t, i) => {
          let position =
            i < currentIndex ? "left" : i === currentIndex ? "middle" : "right";

          return (
            <motion.div
              key={i}
              className={`rounded-2xl p-6 ${
                position === "middle"
                  ? "w-[360px] bg-white text-black shadow-lg"
                  : "w-[300px] bg-white/10 text-white/80 backdrop-blur-sm"
              } text-left`}
              variants={cardVariants[position]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {position === "middle" ? (
                <>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.title}</p>
                    </div>
                  </div>
                  <p className="italic">{t.text}</p>
                </>
              ) : (
                <>
                  <p className="text-sm">{t.text}</p>
                  <p className="mt-4 font-bold">{t.name}</p>
                  <p className="text-xs">{t.title}</p>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={prevTestimonial}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
            currentIndex === 0
              ? "bg-white text-[#2C35A5]"
              : "border border-white text-white"
          }`}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextTestimonial}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
            currentIndex === testimonials.length - 1
              ? "bg-white text-[#2C35A5]"
              : "border border-white text-white"
          }`}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
