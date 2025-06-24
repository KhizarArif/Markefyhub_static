"use client"; // For App Router
import { motion } from "framer-motion";
import Image from "next/image";

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Column (Scroll Animation) */}
      <motion.div
        className="flex-1 flex justify-center"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/home2.png"
          alt="choose-us"
          width={600}
          height={450}
          className="object-contain"
        />
      </motion.div>

      {/* Text Column (Scroll Animation) */}
      <motion.div
        className="flex-1 space-y-6"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-[#2C35A5] font-bold text-xl">Why Choose Us</h3>
        <h2 className="text-[#061E42] text-3xl font-bold">
          Why Choose MarkefyHub For Your Digital Marketing Agency?
        </h2>
        <p className="text-[#6E6A74] leading-relaxed text-xl">
          Thrive is a full-service digital marketing agency. We’ve been
          providing a wide range of services to clients of all industries since
          2005. Our digital marketing services include consulting and management
          options for a variety of online marketing tactics including SEO, PPC
          ads, Amazon store optimization, copywriting, CRO, and more.
        </p>

        <motion.button
          className="mt-6 bg-[#2C35A5] text-white py-3 px-6 rounded-md"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Request A Quote
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
