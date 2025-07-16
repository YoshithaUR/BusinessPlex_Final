import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaHandPointRight } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { CheckCircle, Users, Building2, Shield, AlertCircle, FileText, Award, Globe } from 'lucide-react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import images from "../assets/Images/images";
import ApplyNow from "../components/Modal/.ApplyNow";

const Home = () => {
  const [serviceModalIndex, setServiceModalIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 120,
    });
  }, []);

  const paragraphData = [
    "Small Business Training. ",
    "Business Plan Development.",
    "Mentorship.",
    "Exploring Self-Employment Workshop.",
    "Business Health Check .",
    "Business Advice.",
  ];

  const paragraphData2 = [
    "You must be at least 18 years of age for Small Business Training",
    "You must not be prohibited by law from working in Australia",
    "You must not be an overseas visitor on a working holiday visa or an overseas student studying in Australia",
    "You cannot be an undischarged bankrupt.",
  ];

  const services = [
    {
      title: "Small Business Training",
      image: images.image_Card01,
      gif: images.image_GIF01,
      link: "./ApplicationForm",
      paragraph: [
        "Our Small Business Training equips you with the essential skills to start, manage, and grow a successful business. As part of the program, you'll also develop a comprehensive business plan to help guide your business strategy and long-term goals. ",
        "Training is delivered two days per week over four weeks, with both online and classroom options available. ",
        "You can choose from the following nationally accredited qualifications:",
      ],
      points: [
        "Certificate III in Entrepreneurship and New Business (BSB30220)",
        "Certificate IV in Entrepreneurship and New Business (BSB40320) ",
      ],
      modalImage: images.image_Card01,
      backgroundImage: images.image_ServicePopup01,
    },
    {
      title: "Business Advice",
      image: images.image_Card02,
      gif: images.image_GIF02,
      paragraph: [
        "Our Business Advice Sessions are personalised, one-hour consultations with an experienced business advisor. Whether you're starting out or already running a business, these sessions are designed to provide practical guidance tailored to your unique needs.",
        "You can use these sessions for:",
      ],
      points: [
        "Strategies to improve your business's commercial viability ",
        "Support on a wide range of small business-related topics",
        "Referrals to other relevant business support networks ",
        "If you're eligible, you can access up to 2 free sessions every 12 months.",
      ],
      modalImage: images.image_Card02,
      backgroundImage: images.image_ServicePopup02,
    },
    {
      title: "Business Health Check",
      image: images.image_Card03,
      gif: images.image_GIF03,
      paragraph: [
        "A Business Health Check is a comprehensive 3-hour one-on-one session. It's designed to help you evaluate how your business is performing and identify practical steps to improve its operations and outcomes.",
        "During the session, your provider will help you:",
      ],
      points: [
        "Analyse key areas of your business ",
        "Identify challenges and opportunities for growth",
        "Connect with other relevant local business support services ",
        "If you're eligible, you can access one free Business Health Check every 12 months.",
      ],
      modalImage: images.image_Card03,
      backgroundImage: images.image_ServicePopup03,
    },
    {
      title: "Exploring Self-Employment Workshop",
      image: images.image_Card04,
      gif: images.image_GIF04,
      paragraph: [
        "Our Exploring Self-Employment Workshops are designed to help you understand the fundamentals of self-employment and assess if it's the right path for you. Workshops are delivered one day a week over four weeks, giving you time to reflect and apply what you learn. ",
        "Through these sessions, you'll gain the skills to:",
      ],
      points: [
        "Understand what's involved in starting and managing a business",
        "Develop or validate a business idea",
        "Make an informed decision about pursuing self-employment",
        "This is the ideal first step if you're unsure about where to begin or whether running a business suits your goals.",
      ],
      modalImage: images.image_Card04,
      backgroundImage: images.image_ServicePopup04,
    },
  ];

  const openServiceModal = (index) => {
    setServiceModalIndex(index);
  };

  const closeServiceModal = () => {
    setServiceModalIndex(null);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Business Support Services Section */}
      <section className="relative bg-amber-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 font-[Poppins,Roboto,sans-serif] overflow-hidden">
        {/* Background Decorations */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left - Timeline Text Content */}
          <div className="w-full lg:w-1/2 relative">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 md:mb-8 font-[Montserrat,Open_Sans,sans-serif] text-center lg:text-left"
              data-aos="fade-up"
            >
              Business Support Services
            </h2>

            <div className="relative border-l-4 border-yellow-400 pl-4 md:pl-6 space-y-6 md:space-y-8">
              {paragraphData.map((text, index) => (
                <div
                  key={index}
                  className="relative group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Ping Dot */}
                  <div className="absolute -left-2 md:-left-3 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-400 shadow-lg border-2 md:border-4 border-white z-10 animate-ping-slow"></div>

                  {/* Text Card */}
                  <div className="bg-white/80 p-3 md:p-4 lg:p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 backdrop-blur-lg cursor-pointer group-hover:scale-[1.02] transform">
                    <div className="flex items-start gap-2 md:gap-3">
                      <TiTickOutline className="text-yellow-500 text-lg md:text-xl animate-bounce flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed font-[Poppins,Roboto,sans-serif]">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Video Preview */}
          <div
            className="w-full lg:w-1/2 h-64 md:h-80 lg:h-[450px] mt-6 lg:mt-0"
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
      </section>

      <ApplyNow />

      {/* Eligibility Criteria Section */}
      <section className="relative bg-gradient-to-br from-amber-100 via-white to-amber-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 font-[Poppins,Roboto,sans-serif] overflow-hidden">
        {/* Background Decorations */}
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Main Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Image Column */}
          <div
            className="relative w-full h-64 md:h-80 lg:h-[450px] overflow-hidden rounded-3xl shadow-2xl group order-2 lg:order-1"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={images.image_Criteria01}
              alt="Performance Criteria"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 lg:mb-10 tracking-tight text-center lg:text-left"
              data-aos="fade-right"
            >
              Businessplex Eligibility Criteria
            </h2>

            <div className="space-y-4 md:space-y-6">
              {paragraphData2.map((text, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl shadow-md bg-white/60 backdrop-blur-xl border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-[1.02]">
                    <div className="flex-shrink-0 mt-1">
                      <span className="block w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-ping shadow-md"></span>
                    </div>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto text-center">
          <div data-aos="fade-down" data-aos-duration="1200">
            <Award className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Eligibility Criteria
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              for Self-Employment Assistance Program
            </p>
          </div>
        </div>
      </section>

      {/* General Requirements Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div data-aos="zoom-in" data-aos-duration="800" className="text-center mb-12 md:mb-16">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              General Requirements
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Basic eligibility criteria for all applicants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Age Requirements */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Age Requirements</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium text-sm md:text-base">
                      Be at least 15 years of age
                    </p>
                    <p className="text-xs md:text-sm text-blue-600 mt-1">
                      Eligible for Exploring Self-Employment Workshop
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 md:p-4 rounded-r-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <p className="text-amber-800 font-medium text-xs md:text-sm">
                      Note: Must be 18+ for Small Business Coaching
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citizenship & Visa */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-green-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Citizenship & Visa Status</h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                {[
                  "Australian citizen",
                  "Permanent visa holder",
                  "New Zealand Special Category Visa",
                  "Temporary Protection Visa",
                  "Safe Haven Visa",
                ].map((text, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Standing */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-purple-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Financial Standing</h3>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Not be an undischarged bankrupt
                </p>
              </div>
            </div>

            {/* Business Requirements */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-indigo-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Business-Specific</h3>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Meet additional eligibility criteria specific to chosen business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Business Coaching Section */}
      <section className="relative py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className="text-center mb-12 md:mb-16"
          >
            <FileText className="w-10 h-10 md:w-12 md:h-12 text-blue-700 mx-auto mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">
              Small Business Coaching
            </h2>
            <p className="text-base md:text-lg text-black">
              Additional criteria for accessing coaching services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <Users />,
                title: "Business Size",
                text: "New or existing micro-business with up to 4 employees",
              },
              {
                icon: <AlertCircle />,
                title: "Risk Assessment",
                text: "Be at risk of not operating commercially",
              },
              {
                icon: <Award />,
                title: "Viability",
                text: "Be assessed as viable by Businessplex",
              },
              {
                icon: <Building2 />,
                title: "Structure",
                text: "Have an independent business structure",
              },
              {
                icon: <Shield />,
                title: "Legal Standards",
                text: "Be lawful and able to withstand public scrutiny",
              },
              {
                icon: <Globe />,
                title: "Location",
                text: "Established, located, and operated entirely within Australia",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${(i + 1) * 100}`}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 text-blue-700 mr-2 md:mr-3 flex-shrink-0">{item.icon}</div>
                  <h3 className="text-base md:text-lg font-bold text-black">{item.title}</h3>
                </div>
                <p className="text-black text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Controlling Interest */}
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="mt-8 md:mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center mb-3 md:mb-4">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-700 mr-0 md:mr-4 mb-2 md:mb-0" />
              <h3 className="text-lg md:text-xl font-bold text-black">
                Ownership Control
              </h3>
            </div>
            <p className="text-blue-700 text-sm md:text-base">
              Allow you to maintain controlling interest in the business while
              accessing the program
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <CheckCircle className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base md:text-lg text-green-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              If you meet these eligibility criteria, take the next step towards
              building your successful business
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/ApplicationForm")}
                data-aos="slide-right"
                data-aos-delay="200"
                className="w-full md:w-auto bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Apply Now
              </button>
              <button
                data-aos="slide-left"
                data-aos-delay="400"
                className="w-full md:w-auto border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <a href={images.pdf_StudentInformation}>
                  Student Handbook
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Employment Program Section */}
      <section
        className="relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden mb-4"
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

        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full px-4 md:px-6 lg:px-8 text-white">
          <div
            className="w-full md:w-2/3 mb-6 md:mb-0 mt-8 md:mt-16 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 md:mb-6 drop-shadow-md text-center md:text-left font-[Montserrat,Open_Sans,sans-serif]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              Self-Employment Assistance Program
            </h1>

            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-center md:text-left md:text-justify max-w-2xl font-[Poppins,Roboto,sans-serif]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              We offer a range of practical workshops across{" "}
              <strong>Perth, Australia</strong>. They are{" "}
              <strong>delivered</strong> by selected presenters who are
              specialists in their subject matters and have a background in
              small business. Self-Employment Assistance Program is{" "}
              <strong>funded</strong> by the Australian Federal Government to
              assist unemployed, under-employed and owners of existing
              micro-businesses (with up to 4 employees) to explore opportunities
              for self-employment.
            </p>
          </div>

          <div
            className="w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="600"
          >
            <div className="text-center pt-6 md:pt-10" data-aos="zoom-in" data-aos-delay="600">
              <button
                onClick={() => navigate("/SelfEmployment")}
                className="bg-white text-green-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center mx-auto hover:scale-105 hover:bg-gray-100 transition duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2),0_0_10px_rgba(34,197,94,0.6)] text-sm md:text-base"
              >
                Read More
                <FaHandPointRight className="ml-2 text-lg md:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-amber-50 py-8 md:py-12 px-4 md:px-6 lg:px-8 font-[Poppins,Roboto,sans-serif]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative h-[400px] md:h-[480px] lg:h-[520px] bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 group cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Default Image + Overlay */}
                <div
                  className={`absolute inset-0 z-20 p-4 md:p-6 transition-all duration-700 ease-in-out bg-cover bg-top flex flex-col justify-center items-center rounded-3xl shadow-xl 
                  ${hoveredCard === index
                      ? "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                    }`}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/30 z-0" />

                  {/* Content */}
                  <div className="relative z-10 text-white text-center px-2 md:px-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider text-green-300 drop-shadow-lg animate-fade-in mb-4 font-[Montserrat,Open_Sans,sans-serif] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Hover GIF + Button */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover transition-all duration-500 ease-in-out 
                  ${hoveredCard === index
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                    }`}
                  style={{ backgroundImage: `url(${service.gif})` }}
                >
                  <div className="absolute inset-0 bg-black/60 z-0" />
                  <button
                    onClick={() => openServiceModal(index)}
                    className="relative z-10 bg-transparent border border-orange-600 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg font-[Poppins,Roboto,sans-serif] text-sm md:text-base hover:bg-orange-600/20 transition-all duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {serviceModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeServiceModal}
        >
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-50"
            style={{
              backgroundImage: `url(${services[serviceModalIndex].image})`,
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${services[serviceModalIndex].backgroundImage})`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div
            className="relative bg-transparent rounded-xl p-4 md:p-6 max-w-full sm:max-w-2xl lg:max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[90vh] md:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-4 md:mb-6"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <img
                src={services[serviceModalIndex].modalImage}
                alt={services[serviceModalIndex].title}
                className="w-full md:w-40 lg:w-48 h-48 md:h-auto rounded-lg shadow-lg object-cover"
                data-aos="zoom-in"
                data-aos-duration="800"
              />
              <div
                className="flex-1"
                data-aos="fade-left"
                data-aos-duration="700"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 text-center md:text-left">
                  {services[serviceModalIndex].title}
                </h2>
                {services[serviceModalIndex].paragraph.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-white mb-2 md:mb-3 text-sm md:text-base leading-relaxed text-center md:text-left"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <ul
              className="space-y-2 md:space-y-3 text-white text-sm md:text-base leading-relaxed mb-6 md:mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {services[serviceModalIndex].points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 md:gap-3"
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                >
                  <span className="mt-1 w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full flex-shrink-0" />
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <div
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <button
                onClick={() => navigate("/ApplicationForm")}
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                Apply Now
                <FaHandPointRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>

            <button
              onClick={closeServiceModal}
              className="absolute top-2 md:top-3 right-3 md:right-4 text-white hover:text-red-500 font-bold text-2xl md:text-3xl z-10"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section
        className="w-full py-8 md:py-12 bg-amber-50 flex items-center justify-center px-4"
        data-aos="fade-up"
      >
        <div className="relative bg-black/80 rounded-3xl shadow-xl px-4 md:px-6 lg:px-8 py-8 md:py-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 rounded-3xl z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images.image_Question01})` }}
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Header */}
          <div className="absolute top-3 md:top-4 w-full text-center z-10">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white drop-shadow px-4">
              Have any Question?
            </h2>
          </div>

          {/* Left Column - Inputs */}
          <div
            className="z-10 flex flex-col justify-center space-y-3 md:space-y-4 mt-8 md:mt-12 px-2 md:px-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {["First Name", "Last Name", "E-Mail", "Age", "Contact Number"].map(
              (placeholder, i) => (
                <input
                  key={i}
                  type={
                    placeholder === "E-Mail"
                      ? "email"
                      : placeholder === "Age"
                        ? "number"
                        : "text"
                  }
                  placeholder={placeholder}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-green-400 placeholder-white text-white bg-transparent text-sm md:text-base"
                />
              )
            )}
          </div>

          {/* Right Column - Textarea + Button */}
          <div
            className="z-10 flex flex-col justify-center gap-3 md:gap-4 mt-4 md:mt-12 px-2 md:px-4"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <textarea
              placeholder="Type your message..."
              className="w-full h-24 md:h-32 lg:h-36 px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-green-400 placeholder-white text-white bg-transparent text-sm md:text-base"
            />
            <button className="bg-gradient-to-r from-green-400 to-green-300 text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow hover:scale-105 transition duration-300 w-full text-sm md:text-base">
              Submit
            </button>
          </div>
        </div>
      </section>

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