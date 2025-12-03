"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold gradient-text">
            SH
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
