import { motion } from "framer-motion";
import Link from "next/link";

const textStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function IntroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">
      {/* Left Text Area with stagger */}
      <motion.div
        className="flex-1 space-y-6"
        variants={textStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl font-bold leading-tight text-[#282C4B]"
          variants={fadeUp}
        >
          We Help to Grow Your Business With our Expert Marketing Solutions
        </motion.h1>

        <motion.p
          className="text-[#6E6A74] leading-relaxed text-xl"
          variants={fadeUp}
        >
          Our digital marketing services encompass consulting and management
          across a wide range of online strategies, including SEO, PPC
          advertising, Amazon store optimization, copywriting, conversion rate
          optimization (CRO), and more.
        </motion.p>

        <motion.div className="flex flex-col gap-4 mt-4" variants={fadeUp}>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 p-4 rounded-md border border-gray-300 outline-none bg-[#E7E7E7] h-[4rem] text-[#282c4b]"
          />

          <Link href="/portfolio">
            <button className="bg-[#2C35A5] w-[40%] text-white px-6 py-3 rounded-md h-[4rem]">
              Get My Free Proposal
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Image Area */}
      <motion.div
        className="flex-1 flex justify-center relative ml-[10%]"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-[80%] aspect-[7/8] bg-[url('/home1.png')] bg-cover bg-center clip-path-[polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] shadow-lg">
          <motion.button
            className="absolute bottom-4 left-4 bg-[#D8DBFF] text-[#000000] px-6 py-4 rounded-md font-bold shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            Affordable
          </motion.button>

          <motion.button
            className="absolute top-4 right-4 bg-[#D8DBFF] text-[#000000] px-6 py-4 rounded-md font-bold shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          >
            Professional
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
