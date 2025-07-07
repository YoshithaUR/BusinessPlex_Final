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
  FaBell,
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
  { to: "https://businessplex.e-learnme.com.au/login/index.php", label: "Student Login" },
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
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const timeoutRef = useRef(null);
  const slideshowRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowContactButton(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (slideshowRef.current) observer.observe(slideshowRef.current);
    return () => slideshowRef.current && observer.unobserve(slideshowRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = slideshowRef.current?.offsetHeight || 0;
      setShowScrollTop(scrollY > headerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".hamburger-button")
      ) {
        setIsMenuOpen(false);
      }

      if (
        isNotifOpen &&
        notifRef.current &&
        !notifRef.current.contains(e.target) &&
        !e.target.closest(".notif-bell-icon")
      ) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen, isNotifOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleNotif = () => setIsNotifOpen((prev) => !prev);

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
          className="font-medium hover:text-gray-200 hidden sm:block"
        >
          INQUIRIES? CALL: 1300 894 480
        </a>
      </div>

      <div className="flex items-center gap-4 ml-auto">
           
          <button
            title="Search"
            className="text-gray-700 hover:text-black transition px-2 absolute right-6"
            aria-label="Search"
          >
            <FaSearch />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
  
  <div className="relative flex items-center bg-white text-black rounded-md overflow-visible px-2 py-1">
    <input
      type="text"
      placeholder="Search..."
      className="bg-transparent outline-none text-sm w-16 sm:w-24 md:w-40 pr-20"
    />

    {/* Search icon */}
    <button
      title="Search"
      className="text-gray-700 hover:text-black transition px-2 absolute right-6"
      aria-label="Search"
    >
      <FaSearch />
    </button>

    {/* Notification bell icon */}
    <FaBell
      onClick={toggleNotif}
      className="notif-bell-icon text-gray-700 hover:text-yellow-400 cursor-pointer absolute right-2"
      size={18}
    />

    {/* Notification Popup */}
    {isNotifOpen && (
      <div
        ref={notifRef}
        className="absolute top-full right-0 mt-2 w-64 max-h-48 overflow-y-auto bg-white text-black text-xs rounded shadow-xl px-4 py-3 z-50 border border-gray-300"
        style={{ minWidth: "240px" }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsNotifOpen(false)}
          className="absolute top-2 right-2 text-black hover:text-red-500"
          title="Close"
        >
          <FaTimes size={14} />
        </button>

        <h4 className="flex items-center gap-2 font-bold text-sm mb-2 text-blue-600">
          <FaBell className="text-yellow-500" size={16} />
          News Alerts
        </h4>

        <ul className="space-y list-disc  text-[12px]">
          <li>New course enrollment open now!</li>
          <li>Workshop scheduled for July 12.</li>
          <li>Congrats to our recent graduates!</li>
          <li>System update on July 9 (12AM–2AM)</li>
          <li>More notifications can be added here as needed.</li>
          <li>Scroll to see more notifications if list grows.</li>
        </ul>
      </div>
      
    )}
  </div>
</div>
</div>
  
</div>

  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BlueNavBar />

      {/* Main Navbar */}
      <div className="fixed top-[40px] left-0 w-full z-40 bg-white/60 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 sm:h-10" />
            <span className="text-lg sm:text-xl font-bold text-blue-800">
              Business Plex
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[rgb(26,43,60,1)] text-white shadow-md scale-105"
                      : "hover:bg-[rgb(26,43,60,1)] hover:text-white hover:scale-105"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button className="lg:hidden hamburger-button  text-black " onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 text-black/50 z-50 lg:hidden"
          onClick={closeMenu}
        >
          <div className="absolute inset-0" />
        </div>
      )}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
            <span className="text-lg font-bold text-blue-800">Business Plex</span>
          </div>
          <button className="text-black hover:text-red-500" onClick={closeMenu}>
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
                `px-6 py-4 text-lg font-medium border-l-4 ${
                  isActive
                    ? "bg-[rgb(26,43,60,1)] text-white border-[rgb(26,43,60,1)]"
                    : "text-gray-700 hover:bg-gray-50 hover:border-[rgb(26,43,60,1)] border-transparent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t bg-gray-50">
          <a
            href="tel:1300894480"
            className="block text-center bg-[rgb(26,43,60,1)] text-white py-2 rounded-lg font-semibold shadow-md"
          >
            <span className="inline-flex items-center justify-center mr-2">
              <FaPhoneAlt />
            </span>
            Call: 1300 894 480
          </a>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="flex flex-col h-full pt-[88px]">
        <div ref={slideshowRef} className="relative w-full flex-1 z-0">
          {IMAGES.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex
                  ? "opacity-100 scale-100 z-0"
                  : "opacity-0 scale-105 -z-10"
              }`}
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="relative bg-white py-3 px-4 z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 group transition-transform"
              >
                <div className="text-black text-2xl group-hover:text-purple-600 group-hover:scale-125">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-black group-hover:text-purple-600">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      {showContactButton && (
        <div className="fixed top-[100px] right-4 z-10 transition-opacity duration-500">
          <button
            onClick={() => (window.location.href = "tel:1300894480")}
            className="w-[120px] sm:w-[140px] md:w-[160px] bg-[rgb(26,43,60,1)] text-white px-3 py-2 text-sm font-semibold rounded-md shadow-lg hover:bg-[rgb(165,14,14)] flex items-center justify-center gap-2"
          >
            <span className="inline-flex items-center">
              <FaPhoneAlt size={14} />
            </span>
            <span className="hidden sm:inline">Contact Us</span>
            <span className="sm:hidden">Call</span>
          </button>
        </div>
      )}

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 z-50 bg-[rgb(26,43,60,1)] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 outline outline-2 outline-white"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Header;
