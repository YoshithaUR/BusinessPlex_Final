import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaHandPointRight } from "react-icons/fa";
// import { TiTickOutline } from "react-icons/ti";
import { FaRocket, FaLightbulb, FaHandshake, FaFacebook } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import CountUp from "react-countup";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  CheckCircle,
  Users,
  Building2,
  Shield,
  AlertCircle,
  Award,
  Globe,
  MessageCircle,
  Share2,
  Heart,
  CloudCog,
} from "lucide-react";

// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaYoutube,
//   FaFacebook,
//   FaLinkedin,
// } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

import images from "../assets/Images/images";
import ApplyNow from "../components/Modal/ApplyNow";
import GoogleReviewSection from "./Google Reviews/googleReviws";
import Story from "./Google Reviews/story";
import Rationg from "./rating";
import axiosInstance from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [serviceModalIndex, setServiceModalIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

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



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 120,
    });
  }, []);

  // Add this useEffect to listen for footer service modal events
  useEffect(() => {
    const handleFooterServiceClick = (event) => {
      const { serviceIndex } = event.detail;
      openServiceModal(serviceIndex);
    };

    window.addEventListener("openServiceModal", handleFooterServiceClick);

    return () => {
      window.removeEventListener("openServiceModal", handleFooterServiceClick);
    };
  }, []);

  // Handle browser back button for modals
  useEffect(() => {
    const handlePopState = () => {
      if (serviceModalIndex !== null) {
        // If modal is open and back button is pressed, close the modal
        closeServiceModal();
        // Push a new state to prevent navigation away from the page
        window.history.pushState(null, "", window.location.pathname);
      }
    };

    // Listen for popstate (back button) events
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [serviceModalIndex]);

  const logos = [
    images.image_partnes05,
    images.image_partnes01,
    images.image_partnes02,
    images.image_partnes03,
    images.image_partnes06,
    images.image_partnes04,

    // images.image_partnes07,
    // images.image_partnes08,
  ];
  const services = [
    {
      title: "Small Business Training",
      image: images.image_Card01,
      gif: images.image_GIF01,
      link: "./ApplicationForm",
      paragraph: [
        "Our Small Business Training equips participants with the essential skills to start, manage, and grow a successful business. As part of the program, you'll also develop a comprehensive business plan to guide your business strategy and long-term goals.",
        "Training is delivered two days per week over four weeks, with flexible online and classroom options available.",
      ],

      // Enhanced structure with 4 subtopics
      subtopics: [
        {
          title: "Nationally Accredited Qualifications:",
          points: [
            "Certificate III in Entrepreneurship and New Business (BSB30220)",
            "Certificate IV in Entrepreneurship and New Business (BSB40320)",
          ],
        },
        {
          title: "Program Benefits for Eligible Participants:",
          points: [
            "Fully government-funded training",
            "Development of a business plan tailored to your business",
            "Creation of a financial plan for your business",
            "Development of a marketing plan to drive growth",
            "Award of a nationally accredited certificate upon successful completion of the full qualification",
          ],
        },
        {
          title: " Pathway to Small Business Coaching",
          points: [
            "Once your business plan and financial plan are successfully completed, participants may progress to Small Business Coaching, receiving 12 months of personalised mentoring and support to help implement their plans and grow their business successfully.",
          ],
        },
        {
          title: "",
          points: [],
        },
      ],

      modalImage: images.image_Card01,
      backgroundImage: images.image_ServicePopup01,
    },
    {
      title: "Business Plan Development",
      image: images.image_Card05,
      gif: images.image_GIF05,
      paragraph: [
        "Participants who choose not to enrol in Small Business Training can access the Business Plan Development service directly. A well-prepared business plan is essential for new and existing micro-business owners, helping them clearly define the steps necessary to achieve success.",
        "Once your business plan is complete and assessed for viability, you may progress to Small Business Coaching. This gives you access to 12 months of personalised mentoring, ongoing support, and guidance to help you implement your plan, overcome challenges, and grow your business successfully.",
      ],

      subtopics: [
        {
          title: "",
          points: [],
        },
        {
          title: "",
          points: [],
        },
        {
          title: "",
          points: [],
        },
        {
          title: "",
          points: [],
        },
      ],

      modalImage: images.image_Card05,
      backgroundImage: images.image_ServicePopup05,
    },
    {
      title: "Small Business Coaching",
      image: images.image_Card06,
      gif: images.image_GIF06,
      paragraph: [
        "Our Small Business Coaching program provides 12 months of personalised mentoring and support to help you successfully start and manage your small business.",
      ],

      subtopics: [
        {
          title:
            "Under Small Business Coaching, eligible participants can benefit from:",
          points: [
            "Earning unlimited business income",
            "Access up to $300 for eligible business costs (e.g.: business insurance, registration etc)",
            "Access self-employment allowance payments for up to 39 weeks",
            "Access self-employment rental assistance payments for up to 26 weeks (if eligible)",
            "Access free mentoring session every 2 months over the course of Small Business Coaching Agreement",
          ],
        },
        {
          title: "One-on-One Mentoring Sessions",
          points: [
            "Our one-on-one mentoring sessions are delivered by experienced mentors who bring proven business expertise, strong knowledge of small business management, and excellent communication skills.",
            "In addition to these personalised sessions, we maintain regular contact with participants, at least monthly, to provide ongoing support and guidance. This may include a phone call from your dedicated mentor/forms to be filled with any concern or invitations to participate in small business seminars and workshops, ensuring you have the assistance you need to successfully run and grow your business.",
          ],
        },
        {
          title: "",
          points: [],
        },
        {
          title: "",
          points: [],
        },
      ],

      modalImage: images.image_Card06,
      backgroundImage: images.image_ServicePopup06,
    },
    {
      title: "Exploring Self-Employment Workshop",
      image: images.image_Card04,
      gif: images.image_GIF04,
      paragraph: [
        "Our Exploring Self-Employment Workshops are designed to help you understand the fundamentals of self-employment and assess whether it's the right path for you. Delivered one day per week over four weeks, these workshops provide time to reflect, learn, and apply new knowledge.",
      ],

      subtopics: [
        {
          title: "Through these workshops, you will:",
          points: [
            "Gain a clear understanding of what starting a business involves",
            "Generate a new business idea (if required)",
            "Validate your existing business idea",
            "Make an informed decision about pursuing self-employment",
          ],
        },
        {
          title: "Exploring Self-Employment Workshop",
          points: [
            "The Exploring Self-Employment Workshops are your first step toward confidently starting and running a successful business.",
          ],
        },
        {
          title: "",
          points: [],
        },
        {
          title: "",
          points: [],
        },
      ],

      modalImage: images.image_Card04,
      backgroundImage: images.image_ServicePopup04,
    },
    {
      title: "Business Health check",
      image: images.image_Card03,
      gif: images.image_GIF03,
      paragraph: [
        "A Business Health Check is a comprehensive, 3-hour one-on-one session designed to give small business owners a clear picture of how their business is performing and actionable strategies to improve. This service is ideal for both new and existing micro-businesses that want to enhance operations, increase profitability, and plan for sustainable growth",
      ],

      subtopics: [
        {
          title: "What the Session Covers.",
          points: [],
        },
        {
          title:
            " During your Business Health Check, your provider will work closely with you to:",
          points: [
            "Analyse key business areas: Examine your operations, marketing, financials, and customer engagement to identify strengths and weaknesses.",
            "Identify challenges and opportunities: Pinpoint potential risks and discover growth opportunities to make your business more competitive and resilient.",
            "Connect with support services: Link you to relevant local business networks, training, or government resources that can help your business thrive.",
          ],
        },
        {
          title: "Eligibility and Access",
          points: [
            "If eligible, participants can access one free Business Health Check every 12 months, providing ongoing expert guidance to ensure your business stays on track and continues to grow.",
          ],
        },
        {
          title: "",
          points: [],
        },
      ],

      modalImage: images.image_Card03,
      backgroundImage: images.image_ServicePopup03,
    },
    {
      title: "Business Advice",
      image: images.image_Card02,
      gif: images.image_GIF02,
      paragraph: [
        "Our Business Advice Sessions are personalised, one-hour consultations with an experienced business advisor. Whether you are starting a new business or managing an existing one, these sessions provide practical guidance tailored to your unique needs.",
      ],

      subtopics: [
        {
          title: "What You Can Use These Sessions For",
          points: [
            "Develop strategies to improve your business's commercial viability",
            "Receive advice on a wide range of small business topics",
            "Get referrals to other relevant business support networks",
            "Eligible participants can access up to 2 free sessions every 12 months, helping you make informed decisions and strengthen your business for long-term success.",
          ],
        },
        {
          title: "",
          points: [],
        },
        {
          title: "",
          points: [],
        },
        {
          title: "",
          points: [],
        },
      ],

      modalImage: images.image_Card02,
      backgroundImage: images.image_ServicePopup02,
    },
  ];

  const openServiceModal = (index) => {
    setServiceModalIndex(index);
    // Add a history state when opening modal so back button can close it
    window.history.pushState(
      { modal: true, serviceIndex: index },
      "",
      window.location.pathname
    );
  };

  const closeServiceModal = () => {
    setServiceModalIndex(null);
    // Go back in history to remove the modal state
    if (window.history.state && window.history.state.modal) {
      window.history.back();
    }
  };

  const handleApplyNow = (serviceTitle) => {
    navigate("/ApplicationForm", { state: { selectedService: serviceTitle } });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchData = async (formJson, resetForm) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/contact", formJson);
      const { message, success } = response.data;
      if (success) {
        toast.success(message);
        // Reset the form when submission is successful
        resetForm();
      } else {
        toast.error(message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Business Support Services Section */}

      <section className="relative bg-gradient-to-br from-white via-green-50 to-yellow-50 py-40 px-6 sm:px-12 lg:px-24 font-[Poppins,sans-serif]">
        {/* Hero Image - Option 2: Featured Image */}
        <div data-aos="fade-up" data-aos-delay="250" className="mb-10">
          <img
            src={images.image_yearimg}
            alt="Business meeting and entrepreneurship"
            className="w-90 max-w-6xl mx-auto rounded-2xl shadow-2xl opacity-80"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Tagline */}
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-extrabold text-black mb-4 py-10"
          >
            "Best place to start your own business"
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
          >
            Thinking of starting a business or taking the existing business to
            the next level?
          </p>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-8"
          >
            Businessplex offers small business training & mentoring that are
            designed to help you establish, grow, and succeed in your business
            journey. Whether you're starting a new venture or looking to grow
            your existing business, we're here to guide you every step of the
            way!
          </p>

          {/* Program Highlight */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto"
          >
            We deliver the <strong>Self-Employment Assistance Program</strong>{" "}
            (formerly known as NEIS), fully funded by the Department of
            Employment and Workplace Relations (DEWR) under Workforce Australia
            for eligible start-ups and established businesses in the Perth-North
            area.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-6 text-base md:text-lg text-gray-700 font-medium"
          >
            The only program in Australia focused on helping individuals launch
            their small business from scratch!
          </p>

          {/* Feature Icons */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              data-aos="zoom-in"
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-transform hover:scale-105"
            >
              <FaRocket className="text-4xl text-blue-800 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Launch Your Idea
              </h4>
              <p className="text-sm text-gray-600">
                Start your dream business from scratch with full support &
                guidance.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-transform hover:scale-105"
            >
              <FaLightbulb className="text-4xl text-blue-800 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Mentoring
              </h4>
              <p className="text-sm text-gray-600">
                Business coaching tailored to help you grow faster and smarter.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-transform hover:scale-105"
            >
              <FaHandshake className="text-4xl text-blue-800 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Government Support
              </h4>
              <p className="text-sm text-gray-600">
                Fully funded program by DEWR under Workforce Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Support Services */}
      {/* <section className="relative bg-gradient-to-br from-white via-green-50 to-yellow-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 font-[Poppins,Roboto,sans-serif] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div> */}

      {/* Main Content */}
      {/* <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12"> */}
      {/* Left - Timeline Text Content */}
      {/* <div className="w-full lg:w-1/2 relative">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 md:mb-8 font-[Montserrat,Open_Sans,sans-serif] text-center lg:text-left"
              data-aos="fade-up"
            >
              Business Support Services
            </h2>

            <div className="relative border-l-4 border-blue-700 pl-3 sm:pl-4 md:pl-6 space-y-4 sm:space-y-6 md:space-y-8">
              {paragraphData.map((text, index) => (
                <div
                  key={index}
                  className="relative group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                > */}
      {/* Ping Dot */}
      {/* <div className="absolute -left-1.5 sm:-left-2 md:-left-3 top-1.5 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-blue-700 shadow-lg border-2 sm:border-2 md:border-4 border-white z-10 animate-ping-slow"></div> */}

      {/* Text Card */}
      {/* <div className="bg-white/80 p-2 sm:p-3 md:p-4 lg:p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 backdrop-blur-lg cursor-pointer group-hover:scale-[1.02] transform">
                    <div className="flex items-start gap-2 md:gap-3">
                      <TiTickOutline className="text-blue-500 text-base sm:text-lg md:text-xl animate-bounce flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-[Poppins,Roboto,sans-serif]">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

      {/* Right - Video Preview */}
      {/* <div
            className="w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-[450px] mt-4 sm:mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <video
              autoPlay
              muted
              loop
              src={images.video_video2}
              className="w-full h-full object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section> */}
      <ApplyNow />
      {/* Services Section */}
      <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 font-[Poppins,Roboto,sans-serif]">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Grid (always visible) */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 group cursor-pointer aspect-[650/614]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Default Image */}
                <div
                  className={`absolute inset-0 z-20 p-3 sm:p-4 md:p-6 transition-all duration-700 ease-in-out bg-cover bg-center flex flex-col justify-center items-center rounded-xl shadow-xl 
            ${
              hoveredCard === index
                ? "-translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/30 z-0" />
                  <div className="relative z-10 text-white text-center px-2 md:px-4">
                    <h3
                      className="text-lg font-bold tracking-wider text-white drop-shadow-lg mb-4"
                      style={{ WebkitTextStroke: "1px #B45309" }}
                    ></h3>
                  </div>
                </div>

                {/* Hover GIF */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover bg-center transition-all duration-500 ease-in-out 
            ${
              hoveredCard === index
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
                  // style={{ backgroundImage: `url(${service.gif})` }}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60 z-0" />
                  <button
                    onClick={() => openServiceModal(index)}
                    className="relative z-10 bg-transparent border border-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-600/20 transition-all"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="relative lg:hidden overflow-hidden">
            {/* Cards Container */}
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-full px-2">
                  <div
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 group cursor-pointer aspect-[650/614]"
                  >
                    {/* Default Image */}
                    <div
                      className={`absolute inset-0 z-20 p-3 transition-all duration-700 ease-in-out bg-cover bg-center flex flex-col justify-center items-center rounded-xl shadow-xl 
                ${
                  hoveredCard === index
                    ? "-translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/30 z-0" />
                      <div className="relative z-10 text-white text-center px-2">
                        <h3
                          className="text-base font-bold tracking-wider text-white drop-shadow-lg mb-4"
                          style={{ WebkitTextStroke: "1px #B45309" }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Hover GIF */}
                    <div
                      className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover bg-center transition-all duration-500 ease-in-out 
                ${
                  hoveredCard === index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/60 z-0" />
                      <button
                        onClick={() => openServiceModal(index)}
                        className="relative z-10 bg-transparent border border-blue-800 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-600/20 transition-all"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-red-600 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Modal with Smooth Tailwind Animations */}
      {serviceModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={closeServiceModal}
        >
          {/* Background Image Overlay with smooth fade */}
          <div
            className="absolute inset-0 bg-black/80 transition-opacity duration-500 ease-out animate-fade-in"
            aria-hidden="true"
          />

          {/* Blurred Background Image with scale animation */}
          <div
            className="absolute inset-0 bg-center bg-cover filter blur-sm transition-all duration-700 ease-out animate-scale-in"
            style={
              {
                // backgroundImage: `url(${services[serviceModalIndex].backgroundImage})`,
              }
            }
            aria-hidden="true"
          />

          {/* Content Modal with enhanced animations */}
          <div
            className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-3 sm:p-4 md:p-6 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl w-full shadow-2xl overflow-y-auto max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] border border-white/30 transform transition-all duration-500 ease-out animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Section with smooth slide animation */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6 animate-slide-in-left animation-delay-200">
              <img
                src={services[serviceModalIndex].modalImage}
                alt={services[serviceModalIndex].title}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl shadow-xl object-cover flex-shrink-0 transform transition-all duration-300 hover:scale-105"
              />
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3 md:mb-4 text-center sm:text-left transform transition-all duration-300">
                  {services[serviceModalIndex].title}
                </h2>
                {services[serviceModalIndex].paragraph.map((para, idx) => (
                  <p
                    key={idx}
                    className={`text-gray-800 mb-2 sm:mb-3 text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed text-center font-bold sm:text-left font-poppins transform transition-all duration-500 animate-fade-in-up animation-delay-${
                      300 + idx * 100
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Enhanced Subtopics Section with staggered animations */}
            {services[serviceModalIndex].subtopics && (
              <div className="space-y-6 sm:space-y-7 md:space-y-8">
                {services[serviceModalIndex].subtopics.map((subtopic, idx) => (
                  <div
                    key={idx}
                    className={`mb-6 transform transition-all duration-300 hover:scale-[1.02] animate-slide-in-right animation-delay-${
                      400 + idx * 100
                    }`}
                  >
                    {/* Bold Black Subtopic Title with hover effect */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-3 sm:mb-4 font-poppins transition-colors duration-300 hover:text-blue-800">
                      {subtopic.title}
                    </h3>

                    {/* Points for this subtopic with staggered fade-in */}
                    <ul className="space-y-2 sm:space-y-3 text-gray-800 text-xs sm:text-sm md:text-[15px] leading-relaxed font-bold font-poppins">
                      {subtopic.points.map((point, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 sm:gap-3 transform transition-all duration-300 hover:translate-x-2 animate-fade-in-left animation-delay-${
                            500 + idx * 100 + i * 50
                          }`}
                        >
                          <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0 animate-pulse" />
                          <span className="transition-colors duration-300 hover:text-blue-900">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button with enhanced animation */}
            <div className="flex justify-center mt-8 animate-bounce-in animation-delay-800">
              <button
                onClick={() =>
                  handleApplyNow(services[serviceModalIndex].title)
                }
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 text-sm sm:text-base md:text-lg transform hover:scale-105 hover:shadow-2xl"
              >
                Apply Now
                <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">
                  👉
                </span>
              </button>
            </div>

            {/* Close Button with smooth hover effects */}
            <button
              onClick={closeServiceModal}
              className="absolute top-3 sm:top-4 right-4 sm:right-5 text-white hover:text-red-400 font-bold text-2xl sm:text-3xl md:text-4xl transition-all duration-300 transform hover:scale-110 hover:rotate-90 bg-black/30 hover:bg-red-500/30 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center backdrop-blur-sm"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-white via-green-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="bg-gradient-to-r from-blue-900 to-blue-500 rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl"
          >
            <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-green-100 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
              If you meet these eligibility criteria, take the next step towards
              building your successful business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                onClick={() =>
                  navigate("/ApplicationForm", {
                    state: { scrollToForm: true },
                  })
                }
                data-aos="slide-right"
                data-aos-delay="200"
                className="w-50 sm:w-auto bg-white text-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Apply Now
              </button>
              {/* <button
                data-aos="slide-left"
                data-aos-delay="400"
                className="w-full sm:w-auto border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <a href={pdf.pdf_StudentInformation}>Student Handbook</a>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-white via-green-50 to-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <div data-aos="fade-down" data-aos-duration="1200">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-blue-600 mx-auto mb-3 sm:mb-4 md:mb-6" />
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
              Eligibility Criteria
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              for Self-Employment Assistance Program
            </p>
          </div>
        </div>
      </section>

      {/* General Requirements Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-white via-green-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-2 sm:mb-3 md:mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              General Requirements
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Basic eligibility criteria for all applicants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Age Requirements */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-2 sm:mr-3 md:mr-4">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-800" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  Age Requirements
                </h3>
              </div>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                      Be at least 15 years of age to access Exploring
                      Self-Employment Workshop
                    </p>
                    <p className="text-xs sm:text-xs md:text-sm text-blue-600 mt-1">
                      Eligible for Exploring Self-Employment Workshop
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-blue-400 p-2 sm:p-3 md:p-4 rounded-r-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-600 mr-2 flex-shrink-0" />
                    <p className="text-red-600 font-medium text-xs sm:text-xs md:text-sm">
                      Note: Be at least 18 years of age to access Small Business
                      Coaching
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citizenship & Visa */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="bg-gradient-to-br from-white via-green-50 to-yellow-50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-2 sm:mr-3 md:mr-4">
                  <Globe className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-800" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  Citizenship & Visa Status
                </h3>
              </div>
              <div className="space-y-1 sm:space-y-2 md:space-y-3">
                {[
                  "You must not be prohibited by law from working in Australia",
                  "You must not be an overseas visitor on a working holiday visa or an overseas student studying in Australia",
                  // "New Zealand Special Category Visa",
                  // "Temporary Protection Visa",
                  // "Safe Haven Visa",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-500 flex-shrink-0" />
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Standing */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-2 sm:mr-3 md:mr-4">
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-800" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  Financial Standing
                </h3>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                  You cannot be an undischarged bankrupt
                </p>
              </div>
            </div>

            {/* Business Requirements */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-2 sm:mr-3 md:mr-4">
                  <Building2 className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-800" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  Business-Specific
                </h3>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                  Meet additional eligibility criteria specific to chosen
                  business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Self-Employment Program Section */}
      <section
        className="relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden mb-4 bg-gradient-to-br from-white via-green-50 to-yellow-50"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-700"
          style={{
            backgroundImage: `url(${images.image_program})`,
          }}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full px-4 sm:px-6 md:px-8 text-white">
          <div
            className="w-full md:w-2/3 mb-6 md:mb-0 mt-6 sm:mt-8 md:mt-16 bg-white/10 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 drop-shadow-md text-center md:text-left font-[Montserrat,Open_Sans,sans-serif]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              Self-Employment Assistance Program
            </h1>

            <p
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-center md:text-justify max-w-2xl font-[Poppins,Roboto,sans-serif]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              We offer business training and coaching across Perth North,
              Western Australia. Our programs are delivered by experienced
              industry specialists with a strong background in small business.
              The Self-Employment Assistance Program, funded by the Australian
              Federal Government, supports unemployed and under-employed
              individuals, as well as owners of existing micro-businesses (up to
              4 employees), to explore and pursue opportunities for
              self-employment.
            </p>
          </div>

          <div
            className="w-full md:w-1/3 flex justify-center items-center md:justify-center md:items-center h-full md:h-auto"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="600"
          >
            <div
              className="flex justify-center items-center w-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <button
                onClick={() => {
                  navigate("/SelfEmployment#after-slideshow");
                }}
                className="bg-white text-blue-800 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-full font-semibold flex items-center justify-center hover:scale-105 hover:bg-gray-100 transition duration-300 shadow-[0_8px_24px_rgba(0,59,122),0_0_10px_rgba(34,197,94,0.6)] text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Read More
                <FaHandPointRight className="ml-2 text-sm sm:text-base md:text-lg lg:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Rationg />

      {/* Story */}
      <Story />

      {/* Google Review */}
      <GoogleReviewSection />
      {/* Contact Section */}
      <section
        className="w-full py-6 sm:py-8 md:py-12 bg-gradient-to-br from-white via-green-50 to-yellow-50 flex items-center justify-center px-4"
        data-aos="fade-up"
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            contactNumber: "",
            message: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(2, "First name must be at least 2 characters")
              .max(50, "First name cannot exceed 50 characters")
              .required("Please enter your first name"),
            lastName: Yup.string()
              .min(2, "Last name must be at least 2 characters")
              .max(50, "Last name cannot exceed 50 characters")
              .required("Please enter your last name"),
            email: Yup.string()
              .test(
                "syntax",
                "Please enter a valid email address (must contain @ and a valid domain)",
                function (value) {
                  if (!value) return true; // Let required validation handle empty values
                  return isValidSyntax(value);
                }
              )
              .required("Please enter your email address"),
            age: Yup.number()
              .min(15, "You must be at least 15 years old")
              .max(100, "Please enter a valid age")
              .required("Please enter your age"),
            contactNumber: Yup.string()
              .matches(
                /^(\+?61|0)[\s-]?(\d{4,5})[\s-]?(\d{4})$/,
                "Please enter a valid Australian phone number (e.g., +61 412 345 678 or 0412 345 678)"
              )
              .required("Please enter your contact number"),
            message: Yup.string()
              .min(10, "Message must be at least 10 characters")
              .required("Please enter your message"),
          })}
          onSubmit={(values, { resetForm }) => {
            fetchData(values, resetForm);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form
              className="relative bg-black/80 rounded-3xl shadow-xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 overflow-hidden"
              onSubmit={handleSubmit}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 rounded-3xl z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${images.image_Question01})` }}
                />
                <div className="absolute inset-0 bg-black/80" />
              </div>

              {/* Header */}
              <div className="absolute top-2 sm:top-3 md:top-4 w-full text-center z-10">
                <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white drop-shadow px-4">
                  Have any Question?
                </h2>
              </div>

              {/* Left Column - Inputs */}
              <div
                className="z-10 flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 mt-6 sm:mt-8 md:mt-12 px-1 sm:px-2 md:px-4"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className={`w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-full border outline-none focus:ring-2 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base ${
                    errors.firstName && touched.firstName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-blue-500 focus:ring-blue-400"
                  }`}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className={`w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-full border outline-none focus:ring-2 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base ${
                    errors.lastName && touched.lastName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-blue-500 focus:ring-blue-400"
                  }`}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  className={`w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-full border outline-none focus:ring-2 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base ${
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-blue-500 focus:ring-blue-400"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
                <Field
                  type="number"
                  name="age"
                  placeholder="Age"
                  className={`w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-full border outline-none focus:ring-2 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base ${
                    errors.age && touched.age
                      ? "border-red-500 focus:ring-red-400"
                      : "border-blue-500 focus:ring-blue-400"
                  }`}
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
                <Field
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  className={`w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-full border outline-none focus:ring-2 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base ${
                    errors.contactNumber && touched.contactNumber
                      ? "border-red-500 focus:ring-red-400"
                      : "border-blue-500 focus:ring-blue-400"
                  }`}
                />
                <ErrorMessage
                  name="contactNumber"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
              </div>

              {/* Right Column - Textarea + Button */}
              <div
                className="z-10 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-12 px-1 sm:px-2 md:px-4"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Type your message..."
                  className={`w-full h-20 sm:h-24 md:h-32 lg:h-36 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-xl border outline-none resize-none focus:ring-2 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base ${
                    errors.message && touched.message
                      ? "border-red-500 focus:ring-red-400"
                      : "border-blue-500 focus:ring-blue-400"
                  }`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-black font-semibold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full shadow hover:scale-105 transition duration-300 w-full text-xs sm:text-sm md:text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>

      {/* FB Update */}

      {/* <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 px-6 sm:px-12 overflow-hidden"> */}
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div> */}

      {/* <div className="relative max-w-6xl mx-auto"> */}
      {/* Header */}
      {/* <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
              <div className="p-2 bg-blue-600 rounded-full">
                <FaFacebook className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">
                Social Connection
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 mb-6 leading-tight">
              Stay Connected
            </h2>

            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Follow our journey and get the latest updates from our community
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Join our community</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Latest updates</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Behind the scenes</span>
              </div>
            </div>
          </div> */}

      {/* Main Content */}
      {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20"> */}
      {/* Left Content */}
      {/* <div className="flex-1 max-w-lg">
              <div className="space-y-8"> */}
      {/* Feature Cards */}
      {/* <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                      <MessageCircle className="w-6 h-6 text-blue-800" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">
                      Latest Updates
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Get real-time updates about our projects, achievements, and
                    company news directly from our Facebook page.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                      <Users className="w-6 h-6 text-blue-800" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">
                      Community
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Join thousands of followers who are part of our growing
                    community and engage with our content.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                      <Share2 className="w-6 h-6 text-blue-800" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">
                      Share & Connect
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Share our posts with your network and help us spread the
                    word about our mission and values.
                  </p>
                </div>
              </div>
            </div> */}

      {/* Right Facebook Embed */}
      {/* <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-blue-200/50 transition-all duration-500">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <FaFacebook className="w-8 h-8 text-blue-600" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-blue-700">
                        Live Feed
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-md mx-auto shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
      <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F16yoXUzBX7&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
        width="340"
        height="500"
        style="border:none;overflow:hidden;border-radius:12px;"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    `,
                      }}
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-slate-500 mb-4">
                      Follow us for more updates and behind-the-scenes content
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Heart className="w-3 h-3" />
                        <span>1.2k likes</span>
                      </div>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <MessageCircle className="w-3 h-3" />
                        <span>89 comments</span>
                      </div>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Share2 className="w-3 h-3" />
                        <span>45 shares</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

      {/* Bottom CTA */}
      {/* <div className="mt-20 text-center">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Don't miss out on our updates!
              </h3>
              <p className="text-slate-600 mb-6">
                Like our page and turn on notifications to stay in the loop with
                all our latest news and announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <FaFacebook className="w-5 h-5" />
                  <a href="https://www.facebook.com/share/16yoXUzBX7/">
                    Follow on Facebook
                  </a>
                </button>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-slate-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
                >
                  <Share2 className="w-5 h-5" />
                  Share with Friends
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partners */}
      <section className="bg-gradient-to-br from-white via-green-50 to-emerald-100 py-20 px-6 sm:px-12 lg:px-24 font-[Poppins,sans-serif]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 relative inline-block">
            <span className="relative z-10">Our Trusted Partners</span>
          </h2>
          <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
            We proudly collaborate with these industry leaders to drive
            innovation and excellence.
          </p>

          {/* Logos grid: 3 per row with better balance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 duration-300 w-full h-32"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-20 w-auto object-contain transition duration-300 max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Branding */}
      {/* <section className="bg-gradient-to-br from-white via-green-50 to-yellow-50 py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Branding</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
      <div>
        <img
          src={images.image_Footer1}
          alt="Logo 1"
          className="w-32 h-auto transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div>
        <img
          src={images.image_Footer2}
          alt="Logo 2"
          className="w-32 h-auto transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div>
        <img
          src={images.image_Footer3}
          alt="Logo 3"
          className="w-32 h-auto transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div>
        <img
          src={images.image_Footer7}
          alt="Logo 4"
          className="w-32 h-auto transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div>
        <img
          src={images.image_Footer5}
          alt="Logo 5"
          className="w-32 h-auto transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  </div>
</section> */}

      <style>
        {`
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        /* Ensure proper mobile responsiveness */
        @media (max-width: 640px) {
          .line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          /* Fix horizontal scrolling issues */
          * {
            max-width: 100%;
            box-sizing: border-box;
          }
          
          /* Ensure containers don't overflow */
          .container, .max-w-7xl, .max-w-6xl, .max-w-5xl, .max-w-4xl {
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Fix any potential width issues */
        .w-full {
          width: 100% !important;
        }
        
        /* Ensure proper spacing on mobile */
        @media (max-width: 768px) {
          .space-y-6 > * + * {
            margin-top: 1.5rem;
          }
          
          .space-y-4 > * + * {
            margin-top: 1rem;
          }
          
          .gap-8 {
            gap: 1.5rem;
          }
          
          .gap-6 {
            gap: 1rem;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Home;
