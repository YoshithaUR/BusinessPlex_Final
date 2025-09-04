import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../../assets/Images/images";
import {
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaChevronUp,
  FaArrowRight,
  FaCheck,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axiosInstance from "../../../api/api";

// Email validation functions
const isValidSyntax = (email) => {
  // Enhanced email validation regex
  // Checks for: username@domain.tld format
  // Username: alphanumeric, dots, underscores, hyphens, plus signs
  // Domain: alphanumeric, hyphens, dots
  // TLD: at least 2 characters, alphanumeric
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};



const MainFooter = () => {
  const navigate = useNavigate();
  const [formResetKey, setFormResetKey] = useState(0);
  const [newsletterData, setNewsletterData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleServiceClick = () => {
    // Navigate to ApplicationForm page
    navigate("/ApplicationForm");
  };

  // New handler for Small Business Training modal
  const handleSmallBusinessTrainingClick = () => {
    // Navigate to home page first
    navigate("/");
    
    // Dispatch custom event to open Small Business Training modal
    setTimeout(() => {
      const event = new CustomEvent('openServiceModal', { 
        detail: { serviceIndex: 0 } // 0 is the index for Small Business Training
      });
      window.dispatchEvent(event);
    }, 300); // Delay to ensure navigation completes
  };

  // New handler for Business Plan Development modal
  const handleBusinessPlanDevelopmentClick = () => {
    // Navigate to home page first
    navigate("/");
    
    // Dispatch custom event to open Business Plan Development modal
    setTimeout(() => {
      const event = new CustomEvent('openServiceModal', { 
        detail: { serviceIndex: 1 } // 1 is the index for Business Plan Development
      });
      window.dispatchEvent(event);
    }, 300); // Delay to ensure navigation completes
  };

  // New handler for Small Business Coaching modal
  const handleSmallBusinessCoachingClick = () => {
    navigate("/");
    setTimeout(() => {
      const event = new CustomEvent('openServiceModal', { detail: { serviceIndex: 2 } });
      window.dispatchEvent(event);
    }, 300);
  };

  // New handler for Exploring Self-Employment Workshop modal
  const handleExploringSelfEmploymentClick = () => {
    navigate("/");
    setTimeout(() => {
      const event = new CustomEvent('openServiceModal', { detail: { serviceIndex: 3 } });
      window.dispatchEvent(event);
    }, 300);
  };

  // New handler for Business Health Check modal
  const handleBusinessHealthCheckClick = () => {
    navigate("/");
    setTimeout(() => {
      const event = new CustomEvent('openServiceModal', { detail: { serviceIndex: 4 } });
      window.dispatchEvent(event);
    }, 300);
  };

  // New handler for Business Advice modal
  const handleBusinessAdviceClick = () => {
    navigate("/");
    setTimeout(() => {
      const event = new CustomEvent('openServiceModal', { detail: { serviceIndex: 5 } });
      window.dispatchEvent(event);
    }, 300);
  };

  // Validation function for the newsletter form
  const validateNewsletterForm = () => {
    const errors = {};

    // Name validation
    if (!newsletterData.name.trim()) {
      errors.name = "Name is required";
    } else if (newsletterData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else if (newsletterData.name.trim().length > 50) {
      errors.name = "Name cannot exceed 50 characters";
    }

    // Email validation
    if (!newsletterData.email.trim()) {
      errors.email = "Email is required";
    } else {
      // Basic email syntax validation - check for proper email format
      if (!isValidSyntax(newsletterData.email)) {
        errors.email = "Please enter a valid email address (must contain @ and a valid domain)";
      }
    }

    return errors;
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    const errors = validateNewsletterForm();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Don't submit if there are validation errors
    }

    setIsSubmitting(true);

    try {
      // Add a small delay to make loading state visible
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axiosInstance.post("/newsletter", newsletterData);

              if (response.data.success) {
          // ✅ Clear fields for both cases
          setNewsletterData({ name: "", email: "" });
          // ✅ Force a fresh form instance (prevents autofill sticking)
          setFormResetKey((k) => k + 1);
          // Clear validation errors and error messages on success
          setValidationErrors({});
          setSubmitError("");

          if (response.data.alreadySubscribed) {
            setAlreadySubscribed(true);
            setSubmitSuccess(false);
          } else {
            setSubmitSuccess(true);
            setAlreadySubscribed(false);
          }

          // Reset messages after 3 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
            setAlreadySubscribed(false);
          }, 3000);
        }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "An error occurred while subscribing. Please try again.";
      setSubmitError(errorMessage);
      // Clear any previous success messages
      setSubmitSuccess(false);
      setAlreadySubscribed(false);
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitError("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsletterData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear submit error when user starts typing
    if (submitError) {
      setSubmitError("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Quick link navigation handlers
  const handleQuickLinkClick = (path) => {
    // Navigate to the target page
    navigate(path);
  };

  const quickLinks = [
    { path: "/", label: "Home", onClick: () => handleQuickLinkClick("/") },
    { path: "/about", label: "About Us", onClick: () => handleQuickLinkClick("/about") },
    { path: "/qualifications", label: "Qualifications", onClick: () => handleQuickLinkClick("/qualifications") },
    { path: "/policies", label: "Our Policies", onClick: () => handleQuickLinkClick("/policies") },
  ];

  const services = [
    { label: "Small Business Training" },
    { label: "Business Plan Development" },
    { label: "Small Business Coaching" },
    { label: "Exploring Self-Employment Workshop" },
    { label: "Business Health check" },
    { label: "Business Advice" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="flex-shrink-0 mt-1" size={14} />,
      content: (
        <a
          href="https://www.google.com/maps?q=1/3+Marchant+Way,+Morley+WA+6062"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          1/3 Marchant Way, Morley, WA 6062
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="flex-shrink-0 mt-1" size={14} />,
      content: (
        <a
          href="https://www.google.com/maps?q=16/30+Hasler+Road,+Osborne+Park,+WA+6017"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
             16/30 Hasler Road, Osborne Park, WA 6017 (Based on Appointments)
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt className="flex-shrink-0 mt-1" size={14} />,
      content: (
        <a
          href="tel:1300894480"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Free call  : 1300 894 480
        </a>
      ),
    },
    {
      icon: (
        <FaPhoneAlt
          className="flex-shrink-0 mt-1 text-gray-900 py-3"
          size={14}
        />
      ),
      content: (
        <a className="hover:text-blue-400 transition-colors duration-200">
           RTO  : 45725
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt className="flex-shrink-0 mt-1" size={14} />,
      content: (
        <a
          href="tel:08 6156 5320"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          08 6156 5320
        </a>
      ),
    },

    {
      icon: <MdEmail className="flex-shrink-0 mt-1" size={16} />,
      content: (
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@businessplex.com.au"
          className="hover:text-blue-400 transition-colors duration-200 break-words"
        >
          admin@businessplex.com.au
        </a>
      ),
    },
  ];

  const socialLinks = [
    // {
    //   href: "https://wa.me/ ?text=Hello%20Businessplex%2C%20I%20am%20interested%20in%20your%20programs.%20Please%20send%20me%20details.",
    //   icon: <FaWhatsapp size={20} />,
    //   label: "WhatsApp",
    //   hoverColor: "hover:text-green-500"
    // },
    // {
    //   href: "https://www.youtube.com/",
    //   icon: <FaYoutube size={20} />,
    //   label: "YouTube",
    //   hoverColor: "hover:text-red-500"
    // },
    {
      href: "https://www.linkedin.com/company/businessplex/",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
    },
    {
      href: "https://web.facebook.com/BusinessplexTrainingCentre",
      icon: <FaFacebook size={20} />,
      label: "Facebook",
      hoverColor: "hover:text-blue-500",
    },

    {
      href: "https://www.instagram.com/businessplex_rto?igsh=ZHY3aHlyNWg2dzM1",
      icon: <FaInstagram size={20} />,
      label: "FaInstagram",
      hoverColor: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="relative  z-20 text-white mt-10 ">
      {/* Scroll to Top Button */}
      <div className="relative z-30">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:scale-110 transition-all duration-300 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={16} className="group-hover:animate-bounce" />
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-br  from-gray-900 via-slate-900 to-gray-900 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 rounded-t-3xl -mt-6 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info & Contact */}
            <div className="lg:col-span-1">
              <div className="text-center md:text-left">
                <img
                  src={images.image_logo}
                  alt="Businessplex"
                  className="w-32 h-auto mb-6 mx-auto md:mx-0 filter brightness-110"
                />
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Empowering businesses through quality training and
                  professional development. Your success is our mission.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 justify-center md:justify-start"
                    >
                      <div className="text-blue-400 mt-0.5">{item.icon}</div>
                      <div className="text-sm text-gray-300">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-16 h-0.5 bg-blue-400 mx-auto md:mx-0"></div>
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={link.onClick}
                      className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                    >
                      <FaArrowRight
                        size={10}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-white relative">
                Services
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-16 h-0.5 bg-blue-400 mx-auto md:mx-0"></div>
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {services.map((service, idx) => (
                  <li key={idx}>
                    {service.label === "Small Business Training" ? (
                      <button
                        onClick={handleSmallBusinessTrainingClick}
                        className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                      >
                        <FaArrowRight
                          size={10}
                          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                        <span>{service.label}</span>
                      </button>
                    ) : service.label === "Business Plan Development" ? (
                      <button
                        onClick={handleBusinessPlanDevelopmentClick}
                        className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                      >
                        <FaArrowRight
                          size={10}
                          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                        <span>{service.label}</span>
                      </button>
                    ) : service.label === "Small Business Coaching" ? (
                      <button
                        onClick={handleSmallBusinessCoachingClick}
                        className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                      >
                        <FaArrowRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span>{service.label}</span>
                      </button>
                    ) : service.label === "Exploring Self-Employment Workshop" ? (
                      <button
                        onClick={handleExploringSelfEmploymentClick}
                        className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                      >
                        <FaArrowRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span>{service.label}</span>
                      </button>
                    ) : service.label === "Business Health check" ? (
                      <button
                        onClick={handleBusinessHealthCheckClick}
                        className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                      >
                        <FaArrowRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span>{service.label}</span>
                      </button>
                    ) : service.label === "Business Advice" ? (
                      <button
                        onClick={handleBusinessAdviceClick}
                        className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                      >
                        <FaArrowRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span>{service.label}</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleServiceClick}
                        className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm w-full text-left bg-transparent border-none cursor-pointer"
                      >
                        <FaArrowRight
                          size={10}
                          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                        <span>{service.label}</span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-white relative">
                Newsletter
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-16 h-0.5 bg-blue-400 mx-auto md:mx-0"></div>
              </h3>
              <p className="text-gray-300 text-sm mb-6 text-center md:text-left">
                Stay updated with our latest courses, workshops, and business
                insights.
              </p>

                             {submitSuccess ? (
                 <div className="bg-blue-600 text-white p-4 rounded-lg text-center relative">
                   <button
                     onClick={() => setSubmitSuccess(false)}
                     className="absolute top-2 right-2 text-blue-200 hover:text-white transition-colors duration-200"
                     aria-label="Close success message"
                   >
                     ×
                   </button>
                   <FaCheck className="mx-auto mb-2" size={20} />
                   <p className="text-sm font-semibold">
                     Successfully subscribed!
                   </p>
                 </div>
               ) : alreadySubscribed ? (
                 <div className="bg-green-600 text-white p-4 rounded-lg text-center relative">
                   <button
                     onClick={() => setAlreadySubscribed(false)}
                     className="absolute top-2 right-2 text-green-200 hover:text-white transition-colors duration-200"
                     aria-label="Close message"
                   >
                     ×
                   </button>
                   <FaCheck className="mx-auto mb-2" size={20} />
                   <p className="text-sm font-semibold">
                     You are already subscribed!
                   </p>
                   <p className="text-xs mt-1">
                     Thank you for your continued interest.
                   </p>
                 </div>
               ) : submitError ? (
                 <div className="bg-red-600 text-white p-4 rounded-lg text-center relative">
                   <button
                     onClick={() => setSubmitError("")}
                     className="absolute top-2 right-2 text-red-200 hover:text-white transition-colors duration-200"
                     aria-label="Close error message"
                   >
                     ×
                   </button>
                   <div className="mx-auto mb-2 text-red-200 text-xl">⚠️</div>
                   <p className="text-sm font-semibold">
                     Subscription Failed
                   </p>
                   <p className="text-xs mt-1">
                     {submitError}
                   </p>
                 </div>
               ) : (
                <form
                  key={formResetKey}
                  onSubmit={handleNewsletterSubmit}
                  className="space-y-4 max-w-sm mx-auto md:mx-0"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={newsletterData.name}
                      onChange={handleInputChange}
                      autoComplete="off"
                      className={`w-full px-4 py-3 rounded-lg text-gray-900 bg-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                        validationErrors.name
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {validationErrors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {validationErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={newsletterData.email}
                      onChange={handleInputChange}
                      autoComplete="off"
                      className={`w-full px-4 py-3 rounded-lg text-gray-900 bg-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                        validationErrors.email
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-300"
                      }`}
                      required
                    />
                    {validationErrors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                        Subscribing...
                      </span>
                    ) : (
                      "Subscribe Now"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Certification Logos */}
            <div className="flex items-center space-x-6">
              {/* <img
                src={images.image_Footer1}
                alt="Australian Qualification Framework"
                className="h-30 sm:h-30 w-auto filter brightness-110 hover:brightness-125 transition-all duration-200"
              /> */}
              <img
                src={images.image_Footer7}
                alt="Workforce Australia"
                className="h-30 sm:h-30 w-auto filter brightness-110 hover:brightness-125 transition-all duration-200"
              />
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-white text-sm">
                Copyright 2025 ©{" "}
                <span className="text-blue-400 font-semibold">
                  Businessplex
                </span>
                . All Rights Reserved.Development by{" "}
                <span className="text-blue-400">
                  <a href="">A4Technologies</a>
                </span>
              </p>
              <p className="text-white text-xs mt-1"></p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.hoverColor} transition-colors duration-200 transform hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default MainFooter;
