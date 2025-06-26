"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function MarketingSection() {
  return (
    <section className="w-full py-16">
      {/* First Block */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeLeft}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
            Effective Social Media Management Solutions
          </h2>
          <p className="text-[#6E6A74] leading-relaxed text-lg">
            We help businesses establish a strong social media presence through
            strategic content creation, community engagement, and data-driven
            campaign management across all major platforms.
          </p>
          <motion.button
            className="bg-[#2C35A5] text-white px-6 py-3 rounded-md mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeRight}
          viewport={{ once: true }}
        >
          <Image
            src="/home7.png"
            alt="social-media"
            width={500}
            height={400}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Second Block */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeLeft}
          viewport={{ once: true }}
        >
          <Image
            src="/home8.png"
            alt="megaphone"
            width={500}
            height={400}
            className="object-contain"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeRight}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
            Transform Your Digital Presence
          </h2>
          <p className="text-[#6E6A74] leading-relaxed text-lg">
            Our digital transformation solutions are customized to meet your
            business needs. We utilize cutting-edge technologies and proven
            strategies to strengthen your online presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
