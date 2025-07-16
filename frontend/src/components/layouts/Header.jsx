import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaSearch,
  FaPhoneAlt,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaBell,
  FaChevronDown,
  FaFileAlt,
} from "react-icons/fa";

import images from "../../assets/Images/images";
import logo from "../../assets/Images/HomeSlideShow/logo.png";

import { GiTennisBall } from "react-icons/gi";
import { BsFlag } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

const IMAGES = [
  images.image_one,
  images.image_two,
  images.image_three,
  images.image_four,
  images.image_five,
];

const formlink = {
  link: "./ApplicationForm",
};

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/qualifications", label: "Qualification" },
  { to: "/trainingResources", label: "Training Resources" },
  {
    to: "#",
    label: "Forms",
    hasDropdown: true,
    dropdownItems: [
      { to: "/forms/expression-of-interest", label: "Expression of Interest Form" },
      { to: "/forms/enrolment", label: "Enrolment Form" },
      { to: "/forms/business-registration", label: "Business Registration Form" },
      { to: "/forms/business-information", label: "Business Information Form" },
      { to: "/forms/application-assessment", label: "Application Assessment Form" },
      { to: "/forms/quarterly-income", label: "Quarterly Income Statement Form" },
      { to: "/forms/monthly-feedback", label: "Monthly Feedback Form" },
      { to: "/forms/change-of-circumstance", label: "Change of Circumstance Form" },
    ]
  },
  { to: "/policies", label: "Our Policies" },
  { to: "https://businessplex.e-learnme.com.au/login/index.php", label: "Student Login" },
];

const highlights = [
  { icon: <GiTennisBall size={24} />, title: "Perth Based" },
  { icon: <BsFlag size={24} />, title: "Nationally Recognized" },
  { icon: <FaGraduationCap size={24} />, title: "E-Skilled LMS" },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContactButton, setShowContactButton] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const slideshowRef = useRef(null);
  const notifRef = useRef(null);
  const dropdownRef = useRef(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [hasManuallyClosed, setHasManuallyClosed] = useState(false);
  const navigate = useNavigate();
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

      if (
        activeDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen, isNotifOpen, activeDropdown]);

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
          setShowApplyModal(false);
        }
      },
      { threshold: 0.5 }
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

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileDropdownToggle = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  const BlueNavBar = () => (
    <div
      className="w-full text-white text-sm py-2 px-4 flex justify-between items-center z-90 fixed top-0 left-0 "
      style={{ backgroundColor: "rgba(26, 43, 60, 1)" }}
    >
      <div className="flex items-center gap-5">
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/share/16yoXUzBX7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/businessplex_rto?igsh=N2hlZWh6M2hnbXY4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://au.linkedin.com/company/businessplex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
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
              <button
                onClick={() => navigate("/ApplicationForm")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 sm:gap-4 ml-auto relative">
        <div className="relative flex items-center bg-white text-black rounded-md px-2 py-1 min-w-0">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40 pr-12 sm:pr-16 md:pr-20"
          />
          <button className="text-gray-700 hover:text-black transition px-1 sm:px-2 absolute right-4 sm:right-6"><FaSearch size={14} /></button>
          <FaBell
            onClick={toggleNotif}
            className="notif-bell-icon text-gray-700 hover:text-yellow-400 cursor-pointer absolute right-1 sm:right-2"
            size={16}
          />

          {isNotifOpen && (
            <div
              ref={notifRef}
              className="absolute top-full right-0 mt-2 w-48 sm:w-56 md:w-64 max-h-48 overflow-y-auto bg-white text-black text-xs rounded shadow-xl px-3 sm:px-4 py-3 z-50 border border-gray-300"
              style={{ minWidth: "240px" }}
            >
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

              <ul className="list-disc list-inside text-[10px] sm:text-[12px]">
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
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BlueNavBar />

      {/* Main Navbar */}
      <div className="fixed top-[40px] left-0 w-full z-99 bg-white/60 backdrop-blur-md shadow-md overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-2 sm:px-4 py-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-6 sm:h-8 md:h-10" />
            <span className="text-sm sm:text-lg md:text-xl font-bold text-blue-800 truncate">
              BusinessPlex
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm xl:text-base font-semibold text-gray-700">
            {NAV_ITEMS.map((item, index) => (
              <div key={item.to} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`px-2 xl:px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-1 ${activeDropdown === index
                          ? "bg-[rgb(26,43,60,1)] text-white shadow-md scale-105"
                          : "hover:bg-[rgb(26,43,60,1)] hover:text-white hover:scale-105"
                        }`}
                    >
                      {item.label}
                      <FaChevronDown
                        className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''
                          }`}
                        size={12}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn ">
                        {item.dropdownItems.map((dropdownItem) => (
                          <NavLink
                            key={dropdownItem.to}
                            to={dropdownItem.to}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-3 text-sm text-black hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0 "
                          >
                            <div className="flex items-center gap-2">
                              <FaFileAlt size={14} className="text-blue-500" />
                              {dropdownItem.label}
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `px-2 xl:px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${isActive
                        ? "bg-[rgb(26,43,60,1)] text-white shadow-md scale-105"
                        : "hover:bg-[rgb(26,43,60,1)] hover:text-white hover:scale-105"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
          <button className="lg:hidden hamburger-button text-black" onClick={toggleMenu}>
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
        className={`mobile-menu fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 transition-transform duration-300 overflow-y-auto ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-6 sm:h-8" />
            <span className="text-base sm:text-lg font-bold text-blue-800">BusinessPlex</span>
          </div>
          <button className="text-black hover:text-red-500" onClick={closeMenu}>
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="flex flex-col py-4">
          {NAV_ITEMS.map((item, index) => (
            <div key={item.to}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => handleMobileDropdownToggle(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium border-l-4 text-gray-700 hover:bg-gray-50 hover:border-[rgb(26,43,60,1)] border-transparent flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <FaChevronDown
                      className={`transition-transform duration-200 ${mobileActiveDropdown === index ? 'rotate-180' : ''
                        }`}
                      size={14}
                    />
                  </button>
                  {mobileActiveDropdown === index && (
                    <div className="bg-gray-50 border-l-4 border-blue-200">
                      {item.dropdownItems.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.to}
                          to={dropdownItem.to}
                          onClick={closeMenu}
                          className="block px-8 sm:px-10 py-2 sm:py-3 text-sm sm:text-base text-black hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-2">
                            <FaFileAlt size={12} className="text-blue-500" />
                            {dropdownItem.label}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium border-l-4 ${isActive
                      ? "bg-[rgb(26,43,60,1)] text-white border-[rgb(26,43,60,1)]"
                      : "text-gray-700 hover:bg-gray-50 hover:border-[rgb(26,43,60,1)] border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
        <div className="p-4 border-t bg-gray-50">
          <a
            href="tel:1300894480"
            className="block text-center bg-[rgb(26,43,60,1)] text-white py-2 rounded-lg text-sm sm:text-base font-semibold shadow-md"
          >
            <span className="inline-flex items-center justify-center mr-2">
              <FaPhoneAlt />
            </span>
            Call: 1300 894 480
          </a>
        </div>
      </div>

      {/* Slideshow Section with Full Image Display */}
      <div className="flex flex-col h-full pt-[88px]">
        <div ref={slideshowRef} className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh] z-0 overflow-hidden bg-gray-900">
          {IMAGES.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === currentIndex
                  ? "opacity-100 scale-100 z-10 translate-x-0"
                  : index === (currentIndex - 1 + IMAGES.length) % IMAGES.length
                    ? "opacity-0 scale-110 z-0 -translate-x-full"
                    : "opacity-0 scale-95 z-0 translate-x-full"
                }`}
            >
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className={`max-w-full max-h-full object-contain transition-transform duration-[8000ms] ease-out ${index === currentIndex ? "scale-105" : "scale-100"
                    }`}
                  loading="lazy"
                />
                {/* Subtle parallax overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 transition-opacity duration-[2000ms] ${index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>
            </div>
          ))}

          {/* Enhanced overlay with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20 z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 animate-pulse"></div>
          </div>

          {/* Enhanced slide indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-1 sm:gap-2">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-500 ${index === currentIndex
                    ? "w-8 h-3 sm:w-10 sm:h-4"
                    : "w-2 h-2 sm:w-3 sm:h-3"
                  } rounded-full overflow-hidden group`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`absolute inset-0 transition-all duration-500 ${index === currentIndex
                    ? "bg-gradient-to-r from-white via-blue-200 to-white shadow-lg"
                    : "bg-white/50 group-hover:bg-white/75"
                  } rounded-full`} />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Slide transition effects */}
          <div className="absolute inset-0 pointer-events-none z-25">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse delay-1000" />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900 py-3 sm:py-4 px-2 sm:px-4 z-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-wrap">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 sm:gap-3 text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon container */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <div className="text-white text-sm sm:text-base md:text-xl group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(item.icon, { size: 20 })}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <span className="font-semibold text-xs sm:text-sm md:text-base bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-white transition-all duration-300 whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top border effect */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Contact Button */}
      {showContactButton && (
        <div className="fixed top-[90px] sm:top-[100px] right-2 sm:right-4 z-10 transition-all duration-500">
          <div className="relative">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[rgb(26,43,60)] rounded-md opacity-20 animate-ping"></div>
            <button
              onClick={() => (window.location.href = "tel:1300894480")}
              className="relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] bg-gradient-to-r from-[rgb(26,43,60)] to-[rgb(165,14,14)] text-white px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-md shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 transition-all duration-300 border border-white/20"
            >
              <span className="inline-flex items-center animate-bounce">
                <FaPhoneAlt size={12} className="sm:w-3.5 sm:h-3.5" />
              </span>
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Call</span>
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 z-60 bg-[rgb(26,43,60,1)] text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-orange-600 outline-2 outline-white cursor-alias transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} className="sm:w-5 sm:h-5" />
        </button>
      )}

      <style>
        {`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }

    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
  `}
      </style>
    </div>
  );
};

export default Header;