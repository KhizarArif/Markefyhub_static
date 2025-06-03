"use client";

import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { menuItems } from "@/dummyData/menu";
import Link from "next/link";

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categoryBoxStyle =
    "bg-white shadow-md border border-gray-200 rounded-lg p-3 w-full hover:bg-gray-100 transition duration-300 ease-in-out";

  return (
    <nav className="relative flex w-full justify-between items-center py-4 px-8 shadow-md bg-white z-50">
      <img src="/logo.png" width={150} height={150} />

      {/* Hamburger menu icon (only visible on mobile) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Desktop Menu */}

      {/* Nav Links */}
      <div className="space-x-6 hidden md:flex relative items-center">
        <Link
          href="/"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Home
        </Link>
        <a
          href="/about"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          About
        </a>

        {/* Services with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <a
            href="/services"
            className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md cursor-pointer"
          >
            Services
          </a>
          {showServices && (
            <div className="absolute top-full -left-32 w-[1000px] bg-white shadow-lg rounded-md p-6 grid grid-cols-4 gap-6 z-50 cursor-pointer">
              {menuItems?.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2"> {item?.title} </h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {item?.subMenu?.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem?.link}
                          className="flex items-center gap-3 my-3"
                        >
                          {subItem?.icon}
                          {subItem?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/blog"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Blogs
        </Link>
        <Link
          href="/portfolio"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Results
        </Link>
        <Link
          href="/career"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Career
        </Link>
        <Link
          href="/contact"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Contact Us
        </Link>
      </div>

      {/* Contact Info */}
      <div className="space-x-6 hidden md:flex items-center">
        <div className="flex items-center space-x-2 text-black px-5 py-2 rounded-md cursor-pointer transition">
          <i className="fas fa-phone"></i>
          <span>+92 3709022870</span>
        </div>
        <div className="flex items-center space-x-2 text-black px-5 py-2 rounded-md cursor-pointer transition">
          <i className="fas fa-globe"></i>
          <span>English</span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-[300px] h-full p-6 space-y-4 relative overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <Link href="/" className="block text-black hover:text-[#2C35A5]">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-black hover:text-[#2C35A5]"
            >
              About
            </Link>
            {/* <a
              href="/services"
              className="block text-black hover:text-[#2C35A5]"
            >
              Services
            </a> */}
            <div>
              <button
                className="block text-black hover:text-[#2C35A5] w-full text-left"
                onClick={() => setMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services
                <span
                  className={`ml-2 inline-block transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isMobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2 text-sm max-h-[500px] overflow-y-auto pr-2">
                  {/* Category Item */}
                  {menuItems?.map((item, index) => (
                    <div className={categoryBoxStyle} key={index}>
                      <button
                        className="flex items-center justify-between font-semibold w-full text-left"
                        onClick={() => toggleCategory(item?.title)}
                      >
                        <span> {item?.title} </span>
                        {openCategories[item?.title] ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                      {openCategories[item?.title] && (
                        <ul className="ml-2 text-gray-700">
                          {item?.subMenu?.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem?.link}
                                className="flex items-center gap-2"
                              >
                                {subItem?.icon}
                                {subItem?.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block text-black hover:text-[#2C35A5]"
            >
              Blogs
            </Link>
            <Link
              href="/portfolio"
              className="block text-black hover:text-[#2C35A5]"
            >
              Results
            </Link>
            <Link
              href="/career"
              className="block text-black hover:text-[#2C35A5]"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="block text-black hover:text-[#2C35A5]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
