// Same imports as yours...
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
      { root: null, threshold: 0.1 }
    );

    if (slideshowRef.current) observer.observe(slideshowRef.current);
    return () => {
      if (slideshowRef.current) observer.unobserve(slideshowRef.current);
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const BlueNavBar = () => (
    <div className="w-full overflow-x-hidden text-white text-sm py-2 px-4 flex justify-between items-center z-50 fixed top-0 left-0"
      style={{ backgroundColor: "rgb(165, 14, 14)" }}>
      <div className="flex items-center gap-5 max-w-screen-xl mx-auto w-full">
        <div className="flex gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaInstagram /></a>
        </div>
        <a href="tel:1300894480" className="hidden sm:block font-medium hover:text-gray-200">INQUIRIES? CALL: 1300 894 480</a>
      </div>
      <div className="flex items-center bg-white text-black px-2 py-1 rounded-md">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-16 sm:w-24 md:w-40" />
        <button title="Search" className="text-gray-700 hover:text-black"><FaSearch /></button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-x-hidden min-h-fit pt-[96px]">
      <BlueNavBar />

      <div className="fixed top-[40px] left-0 w-full z-40 bg-white/60 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 sm:h-12" />
            <span className="text-xl sm:text-2xl font-bold text-blue-800">Business Plex</span>
          </div>
          <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-all duration-300 transform ${isActive
                    ? "bg-[rgb(165,14,14)] text-white shadow-md scale-105"
                    : "hover:bg-[rgb(165,10,10)] hover:text-white hover:scale-105"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button className="lg:hidden hamburger-button text-gray-700 hover:text-[rgb(165,14,14)] p-2"
            onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={closeMenu}>
          <div className="absolute inset-0" />
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform z-50 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8" />
            <span className="text-lg font-bold text-blue-800">Business Plex</span>
          </div>
          <button onClick={closeMenu} className="text-gray-700 hover:text-[rgb(165,14,14)] p-2">
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
                `px-6 py-4 text-lg font-medium border-l-4 transition-all ${isActive
                  ? "bg-[rgb(165,14,14)] text-white border-[rgb(165,14,14)]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[rgb(165,14,14)] hover:border-[rgb(165,14,14)] border-transparent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t bg-gray-50">
          <a href="tel:1300894480" className="flex items-center justify-center gap-3 bg-[rgb(165,14,14)] text-white px-4 py-3 rounded-lg">
            <FaPhoneAlt size={16} /> Call: 1300 894 480
          </a>
        </div>
      </div>

      {/* Slideshow */}
      <div ref={slideshowRef} className="relative w-full h-[60vh] md:h-[76vh] z-0 overflow-hidden">
        {IMAGES.map((src, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"}`}>
            <img src={src} alt={`slide-${index}`} className="w-full h-full object-cover max-w-full" />
          </div>
        ))}
      </div>

      {/* Contact Button */}
      {showContactButton && (
        <div className="fixed top-[110px] right-4 z-10">
          <button
            onClick={() => window.location.href = "tel:1300894480"}
            className="bg-[rgb(165,14,14)] text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
          >
            <span className="hidden sm:inline">Contact Us</span>
            <span className="sm:hidden">Call</span>
            <FaPhoneAlt className="ml-2" />
          </button>
        </div>
      )}

      {/* Highlights */}
      <div className="bg-white py-6 px-4 sm:px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-3xl text-black group-hover:text-purple-600 transition">{item.icon}</div>
              <p className="text-sm font-semibold text-black group-hover:text-purple-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full py-2 overflow-hidden" style={{ backgroundColor: "rgb(165, 14, 14)" }}>
        <div className="flex justify-center">
          <div className="inline-flex whitespace-nowrap animate-marquee text-white text-sm">
            {[...Array(11)].map((_, i) => (
              <span key={i} className="mx-4">News Alert..</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[rgb(165,14,14)] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Header;
