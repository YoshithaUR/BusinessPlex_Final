import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaSearch,
  FaPhoneAlt,
  FaMapMarkerAlt,
  // FaArrowUp,
  FaBars,
  FaTimes,
  FaBell,
  FaChevronDown,
  FaFileAlt,
  FaUserGraduate,
} from "react-icons/fa";

import images from "../../assets/Images/images";
// import pdf from "../../assets/Images/pdf";
import logo from "../../assets/Images/HomeSlideShow/logo.png";

// import { GiTennisBall } from "react-icons/gi";
// import { BsFlag } from "react-icons/bs";
// import { FaGraduationCap } from "react-icons/fa";

const DESKTOP_IMAGES = [
  images.image_one,
  images.image_two,
  images.image_three,
  images.image_four,
  images.image_five,
];

const MOBILE_IMAGES = [
  images.mobile_image_one,
  images.mobile_image_two,
  images.mobile_image_three,
  images.mobile_image_four,
  images.mobile_image_five,
];

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/qualifications", label: "Qualification" },
  // { to: "/trainingResources", label: "Training Resources" },
  // {
  //   to: "#",
  //   label: "Forms",
  //   hasDropdown: true,
  //   dropdownItems: [
  //     { to: "/applicationForm", label: "Application Form", type: "route" },
  //     { to: "/enrolment", label: "Enrolment Form", type: "route" },
  //     { to: "/expressionOfInterest", label: "ExpressionOfInterest Form", type: "route" },
  //     { to: "/monthlyFeedbackForm", label: "MonthlyFeedbackForm Form", type: "route" },
  //     // {
  //     //   to: pdf.pdf_businessRegistration,
  //     //   label: "Business Registration Form",
  //     //   type: "pdf",
  //     // },
  //     // {
  //     //   to: pdf.pdf_expression_pdf,
  //     //   label: "Expression of Interest Form",
  //     //   type: "pdf",
  //     // },
  //     // { to: pdf.pdf_feedback, label: "Monthly Feedback Form", type: "pdf" },
  //   ],
  // },
  { to: "/policies", label: "Our Policies" },
  {
    to: "https://businessplex.e-learnme.com.au/login/index.php",
    label: "Student Login",
  },
  {
    to: "/ApplicationForm",
    label: "Apply Now",
    isApplyButton: true,
  },
];

// const highlights = [
//   { icon: <GiTennisBall size={24} />, title: "Perth Based" },
//   { icon: <BsFlag size={24} />, title: "Nationally Recognized" },
//   {icon: <FaGraduationCap size={24} />, title: "E-Skilled LMS"},
// ];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContactButton, setShowContactButton] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [hasManuallyClosed, setHasManuallyClosed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const timeoutRef = useRef(null);
  const slideshowRef = useRef(null);
  const notifRef = useRef(null);
  const dropdownRef = useRef(null);
  const applyTriggerRef = useRef(null);
  const headerEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Updated function to handle logo click - scroll to nav bar area
  const handleLogoClick = () => {
  // Check if we're currently on the home page
  if (location.pathname === "/") {
    // If already on home page, just scroll to the slideshow
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    // If on another page, navigate to home first
    navigate("/");
    
    // Wait a moment for navigation to complete, then scroll to slideshow
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 100);
  }
};
  // Function to handle address click and open Google Maps
  const handleAddressClick = () => {
    const address = "1/3 Marchant Way, Morley, WA 6062, Australia";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Function to handle second address click and open Google Maps
  const handleSecondAddressClick = () => {
    const address = "16/30 Hasler Road, Osborne Park, WA 6017, Australia";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Check screen size for mobile/desktop images
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Get current images based on screen size
  const getCurrentImages = () => {
    return isMobile ? MOBILE_IMAGES : DESKTOP_IMAGES;
  };

  // Check if current path matches nav item
  const isActiveNavItem = (to) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(to);
  };

  const scrollToHeaderEnd = () => {
    if (headerEndRef.current) {
      headerEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle navigation click with scroll
  const handleNavClick = (to, isDropdown = false) => {
    if (!isDropdown) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      // Close dropdown if open
      setActiveDropdown(null);

      // Navigate to the route
      if (to.startsWith("http")) {
        // External link
        window.open(to, "_blank");
      } else if (to !== "#") {
        navigate(to);
      }

      // Scroll to end of header after a short delay to allow navigation
      setTimeout(() => {
        scrollToHeaderEnd();
      }, 100);
    }
  };

  // Handle dropdown item click - CORRECTED VERSION
  const handleDropdownClick = (dropdownItem) => {
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
    setIsMenuOpen(false);

    // Check if it's a PDF or regular route
    if (dropdownItem.type === "pdf") {
      // Open PDF in new tab
      window.open(dropdownItem.to, "_blank");
    } else {
      // Navigate to route
      navigate(dropdownItem.to);

      // Scroll to end of header after navigation
      setTimeout(() => {
        scrollToHeaderEnd();
      }, 100);
    }
  };

  // Slideshow autoplay - automatically moves to next slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      const currentImages = getCurrentImages();
      setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isMobile]);

  // Intersection observers and scroll handlers
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowContactButton(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (slideshowRef.current) observer.observe(slideshowRef.current);
    return () =>
      slideshowRef.current && observer.unobserve(slideshowRef.current);
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

  // Outside click handlers
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

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Apply modal intersection observer
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

const handleApplyNow = (serviceTitle) => {
    navigate("/ApplicationForm", { state: { selectedService: serviceTitle } });
  };

  // Event handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleNotif = () => setIsNotifOpen((prev) => !prev);
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const handleMobileDropdownToggle = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  // Top Blue Navigation Bar
  const BlueNavBar = () => (
    <div className="w-full bg-slate-800 text-white text-sm py-3 px-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Social links and phone */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/share/16yoXUzBX7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-900 transition-colors duration-200 cursor-pointer"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://www.instagram.com/businessplex_rto?igsh=N2hlZWh6M2hnbXY4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors duration-200 cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://au.linkedin.com/company/businessplex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
            </a>
          </div>
          <div className="hidden md:block h-4 w-px bg-white/30"></div>
          <a
            href="tel:1300894480"
            className="hidden md:flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 cursor-pointer"
          >
            <FaPhoneAlt size={12} />
            <span className="font-medium">INQUIRIES? CALL: 1300 894 480</span>
          </a>
          <div className="hidden lg:block h-4 w-px bg-white/30"></div>
          <button
            onClick={handleAddressClick}
            className="hidden lg:flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 cursor-pointer"
            aria-label="View location on Google Maps"
            title="Click to view location on Google Maps"
          >
            <FaMapMarkerAlt size={12} />
            <span className="font-medium">1/3 Marchant Way, Morley, WA 6062</span>
          </button>
          <div className="hidden lg:block h-4 w-px bg-white/30"></div>
          <button
            onClick={handleSecondAddressClick}
            className="hidden lg:flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 cursor-pointer"
            aria-label="View second location on Google Maps"
            title="Click to view second location on Google Maps"
          >
            <FaMapMarkerAlt size={12} />
            <span className="font-medium">16/30 Hasler Road, Osborne Park, WA 6017</span>
          </button>
        </div>

        {/* Right side - Search and notifications */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            {/* <div className="flex items-center bg-white rounded-lg px-3 py-1 min-w-0">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-gray-700 text-sm outline-none w-20 sm:w-24 md:w-32 lg:w-40"
              /> */}
              {/* <button
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 ml-2 cursor-pointer"
                aria-label="Search"
              >
                <FaSearch size={14} />
              </button> */}
            {/* </div> */}
          </div>

          <div className="relative">
            <button
              onClick={toggleNotif}
              className="notif-bell-icon text-white hover:text-yellow-400 transition-colors duration-200 p-1 cursor-pointer"
              aria-label="Notifications"
            >
              {/* <FaBell size={16} /> */}
            </button>

            {isNotifOpen && (
              <div
                ref={notifRef}
                className="absolute top-full right-0 mt-2 w-80 max-w-[90vw] bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 z-50 transform transition-all duration-200 origin-top-right"
              >
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h4 className="flex items-center gap-2 font-semibold text-gray-800">
                      <FaBell className="text-yellow-500" size={16} />
                      News Alerts
                    </h4>
                    <button
                      onClick={() => setIsNotifOpen(false)}
                      className="text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                      aria-label="Close notifications"
                    >
                      <FaTimes size={14} />
                    </button>
                  </div>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <ul className="p-4 space-y-3">
                    <li className="text-sm text-gray-700 flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>New course enrollment open now!</span>
                    </li>
                    <li className="text-sm text-gray-700 flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Workshop scheduled for July 12.</span>
                    </li>
                    <li className="text-sm text-gray-700 flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Congrats to our recent graduates!</span>
                    </li>
                    <li className="text-sm text-gray-700 flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>System update on July 9 (12AM–2AM)</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full bg-gradient-to-br from-white via-green-50 to-yellow-50">
      <BlueNavBar />

      {/* Main Navigation - Updated logo click handler */}
      <nav className="fixed top-[40px] left-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo - Now stays on current page and scrolls to slideshow */}
            <div
              className="flex items-center space-x-3 flex-shrink-0 cursor-pointer -ml-4 hover:opacity-80 transition-opacity duration-200"
              onClick={handleLogoClick}
              title="Click to scroll to nav bar"
            >
              <img src={logo} alt="BusinessPlex Logo" className="h-15 w-auto" />
              <span className="text-xl font-bold text-slate-800">
                Businessplex
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item, index) => (
                <div
                  key={item.to}
                  className="relative"
                  ref={item.hasDropdown ? dropdownRef : null}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                          activeDropdown === index
                            ? "bg-slate-800 text-white shadow-lg"
                            : "text-gray-700 hover:bg-slate-100 hover:text-slate-800"
                        }`}
                      >
                        <span>{item.label}</span>
                        <FaChevronDown
                          className={`transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                          size={12}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn">
                          {item.dropdownItems.map(
                            (dropdownItem, dropdownIndex) => (
                              <button
                                key={`${dropdownItem.to}-${dropdownIndex}`}
                                onClick={() =>
                                  handleDropdownClick(dropdownItem)
                                }
                                className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-200 border-b border-gray-100 last:border-b-0 w-full text-left cursor-pointer ${
                                  dropdownItem.type !== "pdf" &&
                                  isActiveNavItem(dropdownItem.to)
                                    ? "bg-slate-800 text-white"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                }`}
                              >
                                <FaFileAlt
                                  size={14}
                                  className={`flex-shrink-0 ${
                                    dropdownItem.type !== "pdf" &&
                                    isActiveNavItem(dropdownItem.to)
                                      ? "text-white"
                                      : "text-blue-500"
                                  }`}
                                />
                                <span className="truncate">
                                  {dropdownItem.label}
                                </span>
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : item.isApplyButton ? (
                    // Special Apply Now button with colorful design
                    <button
                      onClick={() => handleNavClick(item.to)}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-pulse hover:animate-none"
                    >
                      <FaPaperPlane size={14} className="animate-bounce" />
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.to)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                        isActiveNavItem(item.to)
                          ? "bg-slate-800 text-white shadow-lg"
                          : "text-gray-700 hover:bg-slate-100 hover:text-slate-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden hamburger-button p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] sm:max-w-[70vw] md:max-w-[60vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header - Updated with logo click handler */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-gray-50">
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => {
              handleLogoClick();
              closeMenu(); // Close mobile menu after click
            }}
            title="Click to scroll to nav bar"
          >
            <img src={logo} alt="BusinessPlex Logo" className="h-6 sm:h-8 w-auto" />
            <span className="text-base sm:text-lg font-bold text-slate-800">
              BusinessPlex
            </span>
          </div>
          <button
            onClick={closeMenu}
            className="p-1.5 sm:p-2 rounded-lg text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors duration-200 cursor-pointer"
            aria-label="Close mobile menu"
          >
            <FaTimes size={16} className="sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="py-2 sm:py-4">
          {NAV_ITEMS.map((item, index) => (
            <div key={item.to}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => handleMobileDropdownToggle(index)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 hover:bg-gray-50 hover:text-slate-800 transition-colors duration-200 border-l-4 border-transparent hover:border-slate-800 cursor-pointer"
                  >
                    <span className="font-medium">{item.label}</span>
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        mobileActiveDropdown === index ? "rotate-180" : ""
                      }`}
                      size={12}
                    />
                  </button>
                  {mobileActiveDropdown === index && (
                    <div className="bg-gray-50 border-l-4 border-blue-200">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={`${dropdownItem.to}-${dropdownIndex}`}
                          onClick={() => handleDropdownClick(dropdownItem)}
                          className={`flex items-center space-x-3 px-8 sm:px-10 py-2.5 sm:py-3 text-xs sm:text-sm transition-colors duration-200 w-full text-left cursor-pointer ${
                            dropdownItem.type !== "pdf" &&
                            isActiveNavItem(dropdownItem.to)
                              ? "bg-slate-800 text-white"
                              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                          }`}
                        >
                          <FaFileAlt
                            size={10}
                            className={`flex-shrink-0 sm:w-3 sm:h-3 ${
                              dropdownItem.type !== "pdf" &&
                              isActiveNavItem(dropdownItem.to)
                                ? "text-white"
                                : "text-blue-500"
                            }`}
                          />
                          <span className="truncate">{dropdownItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : item.isApplyButton ? (
                // Special Apply Now button for mobile - smaller and more compact
                <div className="px-4 sm:px-6 py-2">
                  <button
                    onClick={() => handleNavClick(item.to)}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <FaPaperPlane size={12} className="sm:w-3 sm:h-3" />
                    <span>{item.label}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(item.to)}
                  className={`block px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium border-l-4 transition-colors duration-200 w-full text-left cursor-pointer ${
                    isActiveNavItem(item.to)
                      ? "bg-slate-800 text-white border-slate-800"
                      : "text-gray-700 hover:bg-gray-50 hover:text-slate-800 border-transparent hover:border-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50 space-y-2 sm:space-y-3">
          <a
            href="tel:1300894480"
            className="flex items-center justify-center space-x-2 w-full bg-slate-800 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors duration-200 cursor-pointer text-sm sm:text-base"
          >
            <FaPhoneAlt size={14} className="sm:w-4 sm:h-4" />
            <span>Call: 1300 894 480</span>
          </a>
          
          {/* Mobile Address Buttons */}
          <button
            onClick={handleAddressClick}
            className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 cursor-pointer group text-sm sm:text-base"
            aria-label="View location on Google Maps"
          >
            <FaMapMarkerAlt size={14} className="group-hover:animate-bounce sm:w-4 sm:h-4" />
            <span>Morley Location</span>
          </button>
          
          <button
            onClick={handleSecondAddressClick}
            className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer group text-sm sm:text-base"
            aria-label="View second location on Google Maps"
          >
            <FaMapMarkerAlt size={14} className="group-hover:animate-bounce sm:w-4 sm:h-4" />
            <span>Osborne Park Location</span>
          </button>
        </div>
      </div>

      {/* Slideshow Section - Full viewport coverage */}
      <div className="relative mt-[88px] md:mt-[88px]">
        <div
          ref={slideshowRef}
          className="relative w-full h-[calc(100vh-88px)] overflow-hidden bg-gray-900"
        >
          {getCurrentImages().map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{ pointerEvents: index === currentIndex ? "auto" : "none" }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Overlay clickable area only on image_two */}
              {src === images.image_two && index === currentIndex && (
                <button
                  onClick={() => {
                    // Navigate to application form when clicked
                    window.location.href = "/ApplicationForm";
                  }}
                  style={{
                    position: "absolute",
                    left: "690px",
                    top: "470px",
                    width: `${868 - 690}px`,
                    height: `${506 - 470}px`,
                    background: "rgba(0,0,0,0.1)", // Slightly visible for testing, set to 'transparent' for production
                    border: "none",
                    cursor: "pointer",
                    zIndex: 10,
                  }}
                  aria-label="applyone_one"
                  title="applyone_one"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            </div>
          ))}

          {/* Slide Indicators - COMMENTED OUT TO HIDE THE DOTS */}
          {/* 
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {getCurrentImages().map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "w-8 h-3 bg-white shadow-lg"
                    : "w-3 h-3 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          */}
        </div>

        {/* Highlights Section - Removed margin */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center space-x-8 md:space-x-16">
              <div className="group flex items-center space-x-3 text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300"></div>
                  </div> */}
                </div>
                <span className="font-semibold text-sm md:text-base text-white group-hover:text-blue-200 transition-colors duration-300"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header End Reference Point */}
      <div ref={headerEndRef} className="w-full h-0"></div>

      {/* Contact Button - Now hidden since Apply Now is in navbar */}
      {false && showContactButton && (
        <div className="fixed top-[125px] right-4 z-10">
          <button
            onClick={() => (window.location.href = "/ApplicationForm")}
            className="flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 border border-white/20 cursor-pointer"
          >
            <FaPaperPlane  size={14} className="animate-pulse" />
            <span className="font-semibold text-sm hidden sm:inline">
              Apply
            </span>
            <span className="font-semibold text-sm sm:inline">Now</span>
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {/* {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-900 hover:scale-110 transform transition-all duration-300 z-30 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )} */}

      {/* Trigger element for apply modal */}
      <div
        ref={applyTriggerRef}
        className="absolute bottom-0 left-0 w-full h-1"
      />

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