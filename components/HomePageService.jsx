'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Variants for scroll animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePageService() {
  return (
    <motion.section
      className="w-full py-18 bg-[#FAFAFA]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Top Text Block */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-12 mb-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="max-w-4xl w-full px-4 md:px-0" variants={fadeUp}>
            <h2 className="text-3xl font-bold text-[#282C4B] leading-snug text-left">
              Our Expert Services <br />
              That Grow Traffic & Increase <br />
              Revenue
            </h2>
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={fadeUp}>
            <div className="max-w-4xl w-full px-4 md:px-0">
              <p className="text-[#6E6A74] text-xl text-left mt-4 leading-relaxed">
                We are the top digital marketing agency for branding corp. We
                offer a full range of services to help clients improve their
                search engine rankings and drive more traffic to their
                websites.
              </p>
            </div>

            <Link href="/services">
              <motion.button
                className="bg-[#2C35A5] text-white w-[46%] px-6 py-3 rounded-3xl h-[4rem]"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                See All Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: '/home3.png', title: 'Content Strategy' },
            { icon: '/home4.png', title: 'App Development' },
            { icon: '/home5.png', title: 'Web Development' },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl h-[120%] shadow-md p-8 flex flex-col items-center text-center"
              variants={fadeUp}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={150}
                className="object-contain"
              />
              <h3 className="text-xl font-semibold mt-8">{service.title}</h3>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                We are the top digital marketing agency for branding corp.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
