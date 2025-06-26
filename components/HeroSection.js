"use client";
import "@/app/globals.css";
import Image from "next/image";
import React, { useState } from "react";
import Feedback from "./Feedback";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import MainPortfolio from "./MainPortfolio";
import { motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";
import HomePageService from "./HomePageService";
import TeamSection from "./TeamSection";
import MarketingSection from "./MarketingSection";
import TestimonialsSection from "./TestimonialsSection";
import StatsSection from "./StatsSection";
import IntroSection from "./IntroSection";

const testimonials = [
  {
    name: "Alan Baker",
    title: "CEO of Redbird Company",
    quote:
      "Working with Markefyhub has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Theresa Webb",
    title: "CEO of Redbird Company",
    quote:
      "From start to finish, working with this team has been a seamless experience. They delivered on time and within budget.",
  },
  {
    name: "Robert Fox",
    title: "CEO of Redbird Company",
    quote:
      "The team is amazing! Their designs transformed our brand identity and we saw immediate positive feedback from customers.",
  },
];
const jobs = [
  {
    type: "Full Time",
    location: "Glendale, CA",
    title: "Product Manager",
    department: "Marketing",
    salary: "$2,000 - 5,000",
    filled: true,
  },
  {
    type: "Part Time",
    location: "Glen wood, CA",
    title: "Product Designer",
    department: "Designer",
    salary: "$2,000 - 5,000",
    filled: false,
  },
  {
    type: "Part Time",
    location: "Tropico, CA",
    title: "Recruiting Coordinator",
    department: "Customers Service",
    salary: "$2,000 - 5,000",
    filled: false,
  },
];

const teams = [
  {
    name: "Waleed Yousaf",
    title: "Chief Executive Officer",
    image: "/CEO.jpg",
  },
  {
    name: "Abdul Samad",
    title: "Project Manager",
    image: "/Project_Manager.jpg",
  },
  {
    name: "Faizan",
    title: "Video Editor",
    image: "/Video_Editor.jpg",
  },
  {
    name: "Ahmed",
    title: "Ui and Ux Designer",
    image: "/Ui_Ux_designer.jpg",
  },
];

export default function HeroSection() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Array(5).fill({
    title: "Lirante",
    image: "/home10.png",
  });
  const visibleCards = 2;

  const prevTestimonial = () => {
    setCurrentIndex1((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex1((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleNext = () => {
    if (currentIndex + visibleCards < items.length) {
      setCurrentIndex(currentIndex + visibleCards);
    }
  };

  const handlePrev = () => {
    if (currentIndex - visibleCards >= 0) {
      setCurrentIndex(currentIndex - visibleCards);
    }
  };

  return (
    <main className="flex flex-col items-center w-full">
      {/* Intro Section */} 
      <IntroSection />

      <section className="w-full flex flex-wrap justify-center items-center gap-10 py-10 px-4 bg-[#EBF1F9]">
        {[
          "/main1.png",
          "/main2.png",
          "/main3.png",
          "/main4.png",
          "/main1.png",
        ].map((logo, index) => (
          <div key={index} className="w-30 h-20 relative">
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={150}
              height={150}
              objectFit="contain"
            />
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Home Page Services */}
      <HomePageService />

      {/* Team Section */}
      <TeamSection teams={teams} />

      {/* Portfolio */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Lets have a look at <br />
              my <span className="text-[#2C35A5]">Portfolio</span>
            </h2>
            <Link href="/portfolio">
              <button className="bg-[#2C35A5] text-white px-7 py-2 rounded-full font-medium">
                See All
              </button>
            </Link>
          </div>

          <MainPortfolio />
        </div>
      </section>

      {/* Social Media Management */}
      <MarketingSection />

      {/* Testimonial Section */} 
      <TestimonialsSection />

      {/* Our Features Jobs */}
      <section className="w-[100%] py-20 bg-cover px-3 bg-center text-white relative mt-3">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-black">Our Features Jobs</h2>
          <Link href="career">
            <button className="bg-[#2C35A5] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition">
              View All →
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex gap-3 mb-4">
                <span className="text-sm text-black border px-4 py-1 rounded-full bg-gray-100">
                  {job.type}
                </span>
                <span className="text-sm text-black border px-4 py-1 rounded-full bg-gray-100">
                  {job.location}
                </span>
              </div>

              <h3 className="text-lg text-black font-semibold mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-black mb-1">{job.department}</p>
              <p className="text-sm text-black font-medium mb-5">
                {job.salary}
              </p>

              <Link href="/career">
                <button
                  className={`w-full py-2 text-sm font-medium rounded-full border ${
                    job.filled
                      ? "bg-[#2C35A5] text-white"
                      : "text-black border-gray-300"
                  }`}
                >
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <StatsSection />

      <Feedback />
    </main>
  );
}
