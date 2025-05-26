"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);

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
        <a
          href="/"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Home
        </a>
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
            <div className="absolute top-full left-0 w-[800px] bg-white shadow-lg rounded-md p-6 grid grid-cols-4 gap-6 z-50 cursor-pointer">
              {/* Column 1: Development */}
              <div>
                <h3 className="font-semibold mb-2">🛠️ Development</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <a href="/services/PHP">PHP & Frameworks</a>
                  </li>
                  <li>
                    <a href="/services/cross-app">Cross-App Development</a>
                  </li>
                  <li>
                    <a href="/services/dotnet">.NET & Frameworks</a>
                  </li>
                  <li>
                    <a href="/services/cms">CMS Development</a>
                  </li>
                  <li>
                    <a href="/services/frontend">Frontend Development</a>
                  </li>
                  <li>
                    <a href="/services/database">Database Management</a>
                  </li>
                  <li>
                    <a href="/services/python-django">Python & Django</a>
                  </li>
                  <li>
                    <a href="/services/mobile-app">Mobile App Development</a>
                  </li>
                  <li>
                    <a href="/services/blockchain">Blockchain Development</a>
                  </li>
                  <li>
                    <a href="/services/cloud">Cloud Services</a>
                  </li>
                  <li>
                    <a href="/services/devops">DevOps Services</a>
                  </li>
                  <li>
                    <a href="/services/api">API Development</a>
                  </li>
                  <li>
                    <a href="/services/ecommerce">E-commerce Solutions</a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Marketing */}
              <div>
                <h3 className="font-semibold mb-2">
                  📈 Marketing & Growth Services
                </h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <a href="/services/seo">SEO Expert</a>
                  </li>
                  <li>
                    <a href="/services/social-media">Social Media Management</a>
                  </li>
                  <li>
                    <a href="/services/linkedin">LinkedIn Account Handling</a>
                  </li>
                  <li>
                    <a href="/services/email-marketing">Email Marketing</a>
                  </li>
                  <li>
                    <a href="/services/youtube">YouTube Channel Management</a>
                  </li>
                  <li>
                    <a href="/services/content">Content Marketing</a>
                  </li>
                  <li>
                    <a href="/services/ppc">PPC Advertising</a>
                  </li>
                  <li>
                    <a href="/services/influencer">Influencer Marketing</a>
                  </li>
                  <li>
                    <a href="/services/analytics">Analytics & Reporting</a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Other Services */}
              <div>
                <h3 className="font-semibold mb-2">🧩 Other Services</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <a href="/services/qa">QA Expert</a>
                  </li>
                  <li>
                    <a href="/services/video-editing">Video Editing</a>
                  </li>
                  <li>
                    <a href="/services/pwa">Progressive Web App</a>
                  </li>
                  <li>
                    <a href="/services/chatbot">Chatbot Development</a>
                  </li>
                  <li>
                    <a href="/services/crm-erp">Custom CRM/ERP Solutions</a>
                  </li>
                  <li>
                    <a href="/services/cybersecurity">Cybersecurity Services</a>
                  </li>
                  <li>
                    <a href="/services/data-migration">
                      Data Migration & Integration
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Design */}
              <div>
                <h3 className="font-semibold mb-2">
                  🎨 Design & Creative Services
                </h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <a href="/services/ui-ux">UI/UX Design</a>
                  </li>
                  <li>
                    <a href="/services/branding">Branding and Graphic Design</a>
                  </li>
                  <li>
                    <a href="/services/animation">
                      Animation & Motion Graphics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <a
          href="/blog"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Blogs
        </a>
        <a
          href="/portfolio"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Results
        </a>
        <a
          href="/career"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Career
        </a>
        <a
          href="/contact"
          className="hover:bg-[#2C35A5] hover:text-white text-black px-2 py-2 rounded-md"
        >
          Contact Us
        </a>
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
          <div className="bg-white w-[250px] h-full p-6 space-y-4 relative">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <a href="/" className="block text-black hover:text-[#2C35A5]">
              Home
            </a>
            <a href="/about" className="block text-black hover:text-[#2C35A5]">
              About
            </a>
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
              </button>

              {isMobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  {/* Development */}
                  <div>
                    <p className="font-semibold">🛠️ Development</p>
                    <ul className="ml-2 text-gray-700">
                      <li>
                        <a href="/services/PHP">PHP & Frameworks</a>
                      </li>
                      <li>
                        <a href="/services/cross-app">Cross-App Development</a>
                      </li>
                      <li>
                        <a href="/services/dotnet">.NET & Frameworks</a>
                      </li>
                      <li>
                        <a href="/services/cms">CMS Development</a>
                      </li>
                      <li>
                        <a href="/services/frontend">Frontend Development</a>
                      </li>
                      <li>
                        <a href="/services/database">Database Management</a>
                      </li>
                      <li>
                        <a href="/services/python-django">Python & Django</a>
                      </li>
                      <li>
                        <a href="/services/mobile-app">
                          Mobile App Development
                        </a>
                      </li>
                      <li>
                        <a href="/services/blockchain">
                          Blockchain Development
                        </a>
                      </li>
                      <li>
                        <a href="/services/cloud">Cloud Services</a>
                      </li>
                      <li>
                        <a href="/services/devops">DevOps Services</a>
                      </li>
                      <li>
                        <a href="/services/api">API Development</a>
                      </li>
                      <li>
                        <a href="/services/ecommerce">E-commerce Solutions</a>
                      </li>
                    </ul>
                  </div>

                  {/* Marketing */}
                  <div>
                    <p className="font-semibold">
                      📈 Marketing & Growth Services
                    </p>
                    <ul className="ml-2 text-gray-700">
                      <li>
                        <a href="/services/seo">SEO Expert</a>
                      </li>
                      <li>
                        <a href="/services/social-media">
                          Social Media Management
                        </a>
                      </li>
                      <li>
                        <a href="/services/linkedin">
                          LinkedIn Account Handling
                        </a>
                      </li>
                      <li>
                        <a href="/services/email-marketing">Email Marketing</a>
                      </li>
                      <li>
                        <a href="/services/youtube">
                          YouTube Channel Management
                        </a>
                      </li>
                      <li>
                        <a href="/services/content">Content Marketing</a>
                      </li>
                      <li>
                        <a href="/services/ppc">PPC Advertising</a>
                      </li>
                      <li>
                        <a href="/services/influencer">Influencer Marketing</a>
                      </li>
                      <li>
                        <a href="/services/analytics">Analytics & Reporting</a>
                      </li>
                    </ul>
                  </div>

                  {/* Other Services */}
                  <div>
                    <p className="font-semibold">🧩 Other Services</p>
                    <ul className="ml-2 text-gray-700">
                      <li>
                        <a href="/services/qa">QA Expert</a>
                      </li>
                      <li>
                        <a href="/services/video-editing">Video Editing</a>
                      </li>
                      <li>
                        <a href="/services/pwa">Progressive Web App</a>
                      </li>
                      <li>
                        <a href="/services/chatbot">Chatbot Development</a>
                      </li>
                      <li>
                        <a href="/services/crm-erp">Custom CRM/ERP Solutions</a>
                      </li>
                      <li>
                        <a href="/services/cybersecurity">
                          Cybersecurity Services
                        </a>
                      </li>
                      <li>
                        <a href="/services/data-migration">
                          Data Migration & Integration
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Design */}
                  <div>
                    <p className="font-semibold">
                      🎨 Design & Creative Services
                    </p>
                    <ul className="ml-2 text-gray-700">
                      <li>
                        <a href="/services/ui-ux">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="/services/branding">
                          Branding and Graphic Design
                        </a>
                      </li>
                      <li>
                        <a href="/services/animation">
                          Animation & Motion Graphics
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a href="/blog" className="block text-black hover:text-[#2C35A5]">
              Blogs
            </a>
            <a
              href="/portfolio"
              className="block text-black hover:text-[#2C35A5]"
            >
              Results
            </a>
            <a href="/career" className="block text-black hover:text-[#2C35A5]">
              Career
            </a>
            <a
              href="/contact"
              className="block text-black hover:text-[#2C35A5]"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
