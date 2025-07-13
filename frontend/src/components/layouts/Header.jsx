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
  { to: "/blog", label: "Training Resources" },
  { to: "/policies", label: "Our Policies" },
  // { to: "/gallery", label: "Gallery" },
  { to: "https://businessplex.e-learnme.com.au/login/index.php", label: "Student Login" },
];

const highlights = [
  { icon: <GiTennisBall size={36} />, title: "Perth Based" },
  { icon: <BsFlag size={36} />, title: "Nationally Recognized" },
  // { icon: <PiBooksDuotone size={36} />, title: "Australia Wide Training" },  
  { icon: <FaGraduationCap size={36} />, title: "E-Skilled LMS" },
  // { icon: <BsCreditCard2Front size={36} />, title: "Flexible Payment Method" },
  // { icon: <AiOutlineStar size={36} />, title: "Recruitment Licence" },
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
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [hasManuallyClosed, setHasManuallyClosed] = useState(false);

  const applyTriggerRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasManuallyClosed) {
          setShowApplyModal(true);
        } else {
          setShowApplyModal(false); // Optional: auto-hide if not visible
        }
      },
      { threshold: 0.5 } // Adjust sensitivity
    );

    if (applyTriggerRef.current) {
      observer.observe(applyTriggerRef.current);
    }

    return () => {
      if (applyTriggerRef.current) {
        observer.unobserve(applyTriggerRef.current);
      }
    };
  }, [hasManuallyClosed]);


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
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={() => {
                setShowApplyModal(false);
                setHasManuallyClosed(true);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              title="Close"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-green-700">
              Ready to Enroll?
            </h2>
            <p className="text-sm mb-4 text-center text-gray-700">
              Apply now to start your journey with us!
            </p>
            <div className="flex justify-center">
              <a
                href="/apply"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}

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

                <ul className=" list-disc list-inside text-[12px]">
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
              BusinessPlex
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-2 text-m font-semibold text-gray-700">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full transition-all duration-300 ${isActive
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
        className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
                `px-6 py-4 text-lg font-medium border-l-4 ${isActive
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
        <div ref={slideshowRef} className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] z-0">
          {IMAGES.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex
                ? "opacity-100 scale-100 z-0"
                : "opacity-0 scale-105 -z-10"
                }`}
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Slideshow Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          
          {/* Optional: Slideshow Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Highlights Section */}
        <div className="relative bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12 px-4 z-20 border-t border-gray-200 shadow-lg">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            {/* Section Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Why Choose BusinessPlex?</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2"
                >
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-6">
                    <div className="text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="relative z-10 text-center font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 text-lg">
                    {item.title}
                  </h4>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Bottom Decorative Line */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animation: 'pulse 2s infinite'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Add CSS Animation */}
          <style jsx>{`
            @keyframes pulse {
              0%, 100% {
                opacity: 0.6;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.2);
              }
            }
            
            .group:hover .border-gradient-to-r {
              background: linear-gradient(45deg, #60a5fa, #a855f7);
              background-clip: border-box;
            }
          `}</style>
        </div>
      </div>

      {/* Enhanced Floating Contact Button */}
      {showContactButton && (
        <div className="fixed top-[100px] right-4 z-10 transition-all duration-500">
          <div className="relative">
            {/* Pulsing Ring Effect */}
            <div className="absolute inset-0 bg-[rgb(26,43,60)] rounded-md opacity-20 animate-ping"></div>
            <button
              onClick={() => (window.location.href = "tel:1300894480")}
              className="relative w-[120px] sm:w-[140px] md:w-[160px] bg-gradient-to-r from-[rgb(26,43,60)] to-[rgb(165,14,14)] text-white px-3 py-2 text-sm font-semibold rounded-md shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 transition-all duration-300 border border-white/20"
            >
              <span className="inline-flex items-center animate-bounce">
                <FaPhoneAlt size={14} />
              </span>
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Call</span>
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-20 right-6 z-50">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[rgb(26,43,60)] rounded-full blur-lg opacity-30"></div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative bg-gradient-to-r from-[rgb(26,43,60)] to-blue-700 text-white p-3 rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 border-2 border-white/20"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={20} className="animate-bounce" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;