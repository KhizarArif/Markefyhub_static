import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, label }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      let start = 0;
      const duration = 1000;
      const step = end / (duration / 10);

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 10);
    }
  }, [inView, end, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="text-center"
    >
      <p className="text-5xl font-bold">{count}+</p>
      <p className="text-xl">{label}</p>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section
      className="w-full py-20 bg-cover bg-center text-white relative mt-3"
      style={{ backgroundImage: "url('/home9.png')" }}
    >
      <div className="absolute inset-0 bg-[#2C35A5]/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-10"
        >
          Showcase some impressive numbers.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-16">
          <Counter end={860} label="Projects" />
          <Counter end={55} label="Clients" />
          <Counter end={10} label="Awards" />
        </div>
      </div>
    </section>
  );
}
