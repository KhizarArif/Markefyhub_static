'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function TeamSection({ teams }) {
  return (
    <motion.section
      className="w-full py-16 mt-3 bg-[#FAFAFA]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 text-center space-y-10"
        variants={fadeUp}
      >
        {/* Section Header */}
        <motion.h4
          className="text-[#2C35A5] uppercase tracking-wide font-semibold"
          variants={fadeUp}
        >
          Expert Team
        </motion.h4>
        <motion.h2 className="text-4xl font-bold" variants={fadeUp}>
          Meet our expert team behind the success
        </motion.h2>

        {/* Team Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
        >
          {teams?.map((team, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={team?.image}
                alt="team-member"
                width={300}
                height={300}
                className="object-cover w-full h-72 bg-blue-900"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{team?.name}</h3>
                <p className="text-gray-500 text-sm">{team?.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons (Optional Animation) */}
        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#2C35A5]">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-[#2C35A5] text-white flex items-center justify-center">
            <i className="fas fa-chevron-right"></i>
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
