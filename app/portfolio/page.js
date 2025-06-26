"use client";

import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Feedback from "@/components/Feedback"; 
import "swiper/css"; 
import MainPortfolio from "./../../components/MainPortfolio";

const about = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">
        <div className="flex-1 space-y-6 max-w-[450px]">
          <h1 className="text-4xl w-[50vw] font-bold leading-tight text-[#282C4B]">
            Have a <span className="text-blue-600">look</span> to our{" "}
            <span className="text-blue-600">Creative</span> <br />
            <span className="text-blue-600">work</span>
          </h1>
          <p className="text-black leading-relaxed text-xl w-[50vw]">
            Explore our portfolio to see how we transform ideas into reality
            with expert web development, UI/UX design, digital marketing, and
            creative solutions. From sleek websites to engaging visuals, our
            work reflects innovation, precision, and a results-driven approach.
            Let our projects speak for themselves!
          </p>
        </div>

        <div className="ml-[30%] flex justify-center">
          <Image
            src="/rf.png"
            alt="social-media"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      <section className="w-full flex flex-wrap justify-center items-center gap-10 py-10 px-4 bg-[#EBF1F9]">
        {[
          "/main1.png",
          "/main2.png",
          "/main3.png",
          "/main4.png", 
        ].map((logo, index) => (
          <div key={index} className="w-30 h-20 relative">
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </section>

      <section className="w-full bg-white py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F32]">
           Our Recent Work
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-sm md:text-base mb-5">
          Recently, We Delivered Top-Notch Projects in Graphic Design, UI/UX,
          Web Development, Video Editing, And Digital Marketing. Our Work
           Creativity And Innovation, Helping Brands Enhance Their
          Online Presence And Achieve Growth.
        </p>

        {/* Grid of Work Samples */}
        <MainPortfolio />
      </section>
      <Feedback />
    </main>
  );
};

export default about;
