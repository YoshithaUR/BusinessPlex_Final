import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaPhoneAlt,
} from "react-icons/fa";

import images from "../../assets/Images/images";
import logo from "../../assets/Images/HomeSlideShow/logo.png";

import { GiTennisBall } from "react-icons/gi";
import { BsFlag, BsCreditCard2Front } from "react-icons/bs";
import { PiBooksDuotone } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const IMAGES = [
  images.image_one,
  images.image_two,
  images.image_three,
  images.image_four,
  images.image_five,
];

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/qualifications", label: "Qualification" },
  { to: "/blog", label: "Blog" },
  { to: "/policies", label: "Our Policies" },
  { to: "/gallery", label: "Gallery" },
  { to: "/login", label: "Student Login" },
];

const highlights = [
  { icon: <GiTennisBall size={36} />, title: "Perth Based" },
  { icon: <BsFlag size={36} />, title: "Nationally Recognized" },
  { icon: <PiBooksDuotone size={36} />, title: "Australia Wide Training" },
  { icon: <FaGraduationCap size={36} />, title: "E-Skilled LMS" },
  { icon: <BsCreditCard2Front size={36} />, title: "Flexible Payment Method" },
  { icon: <AiOutlineStar size={36} />, title: "Recruitment Licence" },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const BlueNavBar = () => (
    <div className="w-full bg-cyan-400 text-white text-sm py-2 px-4 flex justify-between items-center z-50 fixed top-0 left-0">
      <div className="flex items-center gap-5">
        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram />
          </a>
        </div>
        <a
          href="tel:1300894480"
          className="font-medium hover:text-gray-200 transition-all"
        >
          INQUIRIES? CALL: 1300 894 480
        </a>
      </div>
      <div className="flex items-center bg-white text-black px-2 py-1 rounded-md transition duration-300 focus-within:ring-2 ring-blue-300">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-24 sm:w-40"
        />
        <button
          title="Search"
          className="text-gray-700 hover:text-black transition"
          onClick={() => alert("Search button clicked!")}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-[96px]">
      {/* Top Blue Bar */}
      <BlueNavBar />

      {/* Background Slideshow */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={src}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Contact Us Button */}
     <div className="fixed top-[110px] right-0 z-0  rounded-md bg-white shadow-red-glow">
        <button
          onClick={() => {
            window.location.href = "tel:1300894480";
          }}
          className="w-[180px] flex justify-center items-center gap-4 bg-[rgba(255,149,0,1)] text-black px-6 py-3 font-semibold hover:bg-[rgba(255,165,0,1)] transition"
        >
          Contact Us
          <FaPhoneAlt size={18} />
        </button>
      </div>

      {/* Main Navbar */}
      <div className="fixed top-[40px] left-0 w-full z-40 bg-white/60 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 sm:h-12" />
            <span className="text-2xl font-bold text-blue-800 tracking-wide">
              Business Plex
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-700">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => {
                  setMenuOpen(false);
                  handleScroll();
                }}
                ref={sectionRef}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full transition-all duration-300 transform ${
                    isActive
                      ? "bg-blue-800 text-white shadow-md scale-105"
                      : "hover:bg-blue-100 hover:text-blue-800 hover:scale-105"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="absolute bottom-[32px] left-0 w-full bg-white py-2 px-4 sm:px-6 md:px-12 z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-black">{item.icon}</div>
              <p className="text-sm font-semibold leading-tight text-black">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 left-0 w-full bg-cyan-400 py-2 z-30 overflow-hidden">
        <div className="flex justify-center">
          <div className="inline-flex whitespace-nowrap animate-marquee text-white text-sm">
            {[...Array(11)].map((_, i) => (
              <span key={i} className="mx-4">
                News Alert..
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
