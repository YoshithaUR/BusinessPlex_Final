import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaPhoneAlt,
  FaArrowUp,
  FaBars,
  FaTimes,
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
  const [showContactButton, setShowContactButton] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const slideshowRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowContactButton(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (slideshowRef.current) {
      observer.observe(slideshowRef.current);
    }

    return () => {
      if (slideshowRef.current) {
        observer.unobserve(slideshowRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = slideshowRef.current?.offsetHeight || 0;
      setShowScrollTop(scrollPosition > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const BlueNavBar = () => (
    <div
      className="w-full text-white text-sm py-2 px-4 flex justify-between items-center z-50 fixed top-0 left-0"
      style={{ backgroundColor: "rgba(26, 43, 60, 1)" }}
    >
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
          className="font-medium hover:text-gray-200 transition-all hidden sm:block"
        >
          INQUIRIES? CALL: 1300 894 480
        </a>
      </div>
      <div className="flex items-center bg-white text-black px-2 py-1 rounded-md">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-16 sm:w-24 md:w-40"
          aria-label="Search"
        />
        <button
          title="Search"
          className="text-gray-700 hover:text-black transition"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Top Red Bar */}
      <BlueNavBar />

      {/* Fixed White Nav */}
      <div className="fixed top-[40px] left-0 w-full z-40 bg-white/60 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 sm:h-10" />
            <span className="text-lg sm:text-xl font-bold text-blue-800 tracking-wide">
              Business Plex
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold text-gray-700">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full transition-all duration-300 transform ${isActive
                    ? "bg-[rgb(26,43,60,1)] text-white shadow-md scale-105"
                    : "hover:bg-[rgb(26,43,60,1)] hover:text-white hover:scale-105"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden hamburger-button text-gray-700 hover:text-[rgb(165,14,14)] transition-colors duration-300 p-2"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={closeMenu}
        >
          <div className="absolute inset-0" />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8" />
            <span className="text-lg font-bold text-blue-800 tracking-wide">
              Business Plex
            </span>
          </div>
          <button
            onClick={closeMenu}
            className="text-gray-700 hover:text-[rgb(26,43,60,1)] transition-colors duration-300 p-2"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="flex flex-col py-4">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-6 py-4 text-lg font-medium transition-all duration-300 border-l-4 ${isActive
                  ? "bg-[rgb(26,43,60,1)] text-white border-[rgb(26,43,60,1)] shadow-md"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[rgb(26,43,60,1)] hover:border-[rgb(26,43,60,1)] border-transparent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <a
            href="tel:1300894480"
            className="flex items-center justify-center gap-3 bg-[rgb(26,43,60,1)] text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            <FaPhoneAlt size={16} />
            Call: 1300 894 480
          </a>
        </div>
      </div>

      {/* Content Container - Fixed to screen height */}
      <div className="flex flex-col h-full pt-[88px]">
        {/* Slideshow - Reduced height */}
        <div ref={slideshowRef} className="relative w-full flex-1 z-0">
          {IMAGES.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={src}
                alt={`slide-${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Highlights - Compact */}
        <div className="relative bg-white py-3 px-4 sm:px-6 md:px-12 z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 group transition-transform duration-300"
              >
                <div className="text-black text-2xl transition-all duration-300 transform group-hover:scale-125 group-hover:text-purple-600">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold leading-tight text-black group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Bar - Compact */}
        <div
          className="w-full py-1 z-30 overflow-hidden"
          style={{ backgroundColor: "rgb(26,43,60,1)" }}
        >
          <div className="flex justify-center">
            <div className="inline-flex whitespace-nowrap animate-marquee text-white text-xs">
              {[...Array(11)].map((_, i) => (
                <span key={i} className="mx-4">
                  News Alert..
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      {showContactButton && (
        <div className="fixed top-[100px] right-4 z-10 transition-opacity duration-500">
          <button
            onClick={() => (window.location.href = "tel:1300894480")}
            className="w-[120px] sm:w-[140px] md:w-[160px] flex justify-center items-center gap-2 bg-[rgb(26,43,60,1)] text-white px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-[rgb(165,14,14)]    transition rounded-md shadow-lg"
            aria-label="Contact Us"
          >
            <span className="hidden sm:inline">Contact Us</span>
            <span className="sm:hidden">Call</span>
            <FaPhoneAlt size={14} />
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 z-50 bg-[rgb(26,43,60,1)] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition cursor-pointer outline outline-2 outline-white"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

    </div>
  );
};

export default Header;
