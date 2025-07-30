import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaHandPointRight } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { CheckCircle, Users, Building2, Shield, AlertCircle, FileText, Award, Globe } from 'lucide-react';
// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaYoutube,
//   FaFacebook,
//   FaLinkedin,
// } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

import images from "../assets/Images/images";
import pdf from "../assets/Images/pdf";
import ApplyNow from "../components/Modal/ApplyNow"; 

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
 const logos = [
  images.image_partnes01,
  images.image_partnes02,
  images.image_partnes03,
  images.image_partnes04,
  images.image_partnes05,
  
];
  const paragraphData = [
    "Small Business Training. ",
    "Business Plan Development.",
    "Mentorship.",
    "Exploring Self-Employment Workshop.",
    "Business Health Check .",
    "Business Advice.",
  ];

  // const paragraphData2 = [
  //   "You must be at least 18 years of age for Small Business Training",
  //   "You must not be prohibited by law from working in Australia",
  //   "You must not be an overseas visitor on a working holiday visa or an overseas student studying in Australia",
  //   "You cannot be an undischarged bankrupt.",
  // ];

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
   
  ];
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc",
    rating: 5,
    review: "Absolutely fantastic service! The team exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovation Labs",
    rating: 5,
    review: "Working with this team has been a game-changer for our business. Professional, reliable, and incredibly talented. Highly recommended!",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Solutions",
    rating: 5,
    review: "The results speak for themselves. Our project was delivered on time, within budget, and exceeded all our quality expectations. Simply amazing!",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Operations Manager",
    company: "Global Enterprises",
    rating: 4,
    review: "Great experience from start to finish. The communication was excellent and the final product was exactly what we envisioned.",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Creative Director",
    company: "Design Studio Pro",
    rating: 5,
    review: "Outstanding creativity and technical expertise. They transformed our vision into reality with incredible precision and style.",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 6,
    name: "James Miller",
    role: "Founder",
    company: "StartupX",
    rating: 5,
    review: "As a startup, we needed a partner we could trust. They delivered exceptional results and helped us achieve our goals faster than expected.",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          } transition-colors duration-200`}
        />
      ))}
    </div>
  );
};
  const openServiceModal = (index) => {
    setServiceModalIndex(index);
  };

  const closeServiceModal = () => {
    setServiceModalIndex(null);
  };

  const handleApplyNow = (serviceTitle) => {
    navigate("/ApplicationForm", { state: { selectedService: serviceTitle } });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Business Support Services Section */}
      <section className="relative bg-gradient-to-br from-white via-green-50 to-yellow-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 font-[Poppins,Roboto,sans-serif] overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left - Timeline Text Content */}
          <div className="w-full lg:w-1/2 relative">
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
                >
                  {/* Ping Dot */}
                  <div className="absolute -left-1.5 sm:-left-2 md:-left-3 top-1.5 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-blue-700 shadow-lg border-2 sm:border-2 md:border-4 border-white z-10 animate-ping-slow"></div>

                  {/* Text Card */}
                  <div className="bg-white/80 p-2 sm:p-3 md:p-4 lg:p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 backdrop-blur-lg cursor-pointer group-hover:scale-[1.02] transform">
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
          </div>

          {/* Right - Video Preview */}
          <div
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
      </section>

      <ApplyNow />

          {/* Image Column */}
          {/* <div
            className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[450px] overflow-hidden rounded-3xl shadow-2xl group order-2 lg:order-1"

          >
            <img
              src={images.image_Criteria01}
              alt="Performance Criteria"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>  */}

     

      {/* Services Section */}
      <section className="bg-gradient-to-br from-white via-green-50 to-yellow-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 font-[Poppins,Roboto,sans-serif]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] xl:h-[520px] bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 group cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Default Image + Overlay */}
                <div
                  className={`absolute inset-0 z-20 p-3 sm:p-4 md:p-6 transition-all duration-700 ease-in-out bg-cover bg-top flex flex-col justify-center items-center rounded-3xl shadow-xl 
                  ${hoveredCard === index
                      ? "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                    }`}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/30 z-0" />

                  {/* Content */}
                  <div className="relative z-10 text-white text-center px-2 md:px-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wider text-white  drop-shadow-lg animate-fade-in mb-4 font-[Montserrat,Open_Sans,sans-serif] leading-tight"
                    style={{ WebkitTextStroke: "1px amber-700" }}>
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
                    className="relative z-10 bg-transparent border border-blue-800 text-white  font-semibold px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg font-[Poppins,Roboto,sans-serif] text-xs sm:text-sm md:text-base hover:bg-blue-600/20 transition-all duration-300"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeServiceModal}
        >
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            aria-hidden="true"
          />

          {/* Blurred Background Image */}
          <div
            className="absolute inset-0 bg-center bg-cover filter blur-sm scale-105"
            style={{
              backgroundImage: `url(${services[serviceModalIndex].backgroundImage})`,
            }}
            aria-hidden="true"
          />

          {/* Content Modal */}
          <div
            className="relative bg-black/70 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] border border-white/20"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            {/* Top Section */}
            <div
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <img
                src={services[serviceModalIndex].modalImage}
                alt={services[serviceModalIndex].title}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg shadow-lg object-cover flex-shrink-0"
                data-aos="zoom-in"
                data-aos-duration="800"
              />
              <div
                className="flex-1"
                data-aos="fade-left"
                data-aos-duration="700"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center sm:text-left">
                  {services[serviceModalIndex].title}
                </h2>
                {services[serviceModalIndex].paragraph.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-white/90 mb-2 sm:mb-3 text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed text-center sm:text-left"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Points */}
            <ul
              className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm md:text-[15px] leading-relaxed mb-6 sm:mb-7 md:mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
              >
              {services[serviceModalIndex].points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 sm:gap-3"
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                >
                  <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <button
                onClick={() =>
                  handleApplyNow(services[serviceModalIndex].title)
                }
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm md:text-base"
              >
                Apply Now
                <FaHandPointRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={closeServiceModal}
              className="absolute top-2 sm:top-3 right-3 sm:right-4 text-white hover:text-red-500 font-bold text-xl sm:text-2xl md:text-3xl"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}


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
          <div data-aos="zoom-in" data-aos-duration="800" className="text-center mb-8 sm:mb-12 md:mb-16">
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
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Age Requirements</h3>
              </div>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                      Be at least 15 years of age to access Exploring Self-Employment Workshop
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
                      Note:  Be at least 18 years of age to access Small Business Coaching
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
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Citizenship & Visa Status</h3>
              </div>
              <div className="space-y-1 sm:space-y-2 md:space-y-3">
                {[
                  "You must not be prohibited by law from working in Australia",
                  "You must not be an overseas visitor on a working holiday visa or an overseas student studying in Australia",
                  // "New Zealand Special Category Visa",
                  // "Temporary Protection Visa",
                  // "Safe Haven Visa",
                ].map((text, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-500 flex-shrink-0" />
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">{text}</p>
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
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Financial Standing</h3>
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
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Business-Specific</h3>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0" />
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                 Meet additional eligibility criteria specific to chosen business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

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
                onClick={() => navigate("/ApplicationForm")}
                data-aos="slide-right"
                data-aos-delay="200"
                className="w-full sm:w-auto bg-white text-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Apply Now
              </button>
              <button
                data-aos="slide-left"
                data-aos-delay="400"
                className="w-full sm:w-auto border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <a href={pdf.pdf_StudentInformation}>
                  Student Handbook
                </a>
              </button>
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
            className="w-full md:w-2/3 mb-4 sm:mb-6 md:mb-0 mt-6 sm:mt-8 md:mt-16 bg-white/10 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
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
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-center  md:text-justify max-w-2xl font-[Poppins,Roboto,sans-serif]"
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
            className="w-full md:w-1/3 flex justify-center md:justify-end mt-2 sm:mt-4 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="600"
          >
            <div className="text-center pt-4 sm:pt-6 md:pt-10" data-aos="zoom-in" data-aos-delay="600">
              <button
                onClick={() => navigate("/SelfEmployment")}
                className="bg-white text-blue-800 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold flex items-center justify-center mx-auto hover:scale-105 hover:bg-gray-100 transition duration-300 shadow-[0_8px_24px_rgba(0,59,122),0_0_10px_rgba(34,197,94,0.6)] text-xs sm:text-sm md:text-base"
              >
                Read More
                <FaHandPointRight className="ml-2 text-sm sm:text-base md:text-lg lg:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        className="w-full py-6 sm:py-8 md:py-12 bg-gradient-to-br from-white via-green-50 to-yellow-50 flex items-center justify-center px-4"
        data-aos="fade-up"
      >
        <div className="relative bg-black/80 rounded-3xl shadow-xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 overflow-hidden">
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
                  className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-full border border-blue-500 outline-none focus:ring-2 focus:ring-blue-400 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base"
                />
              )
            )}
          </div>

          {/* Right Column - Textarea + Button */}
          <div
            className="z-10 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-12 px-1 sm:px-2 md:px-4"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <textarea
              placeholder="Type your message..."
              className="w-full h-20 sm:h-24 md:h-32 lg:h-36 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-xl border border-blue-500 outline-none resize-none focus:ring-2 focus:ring-blue-400 placeholder-white text-white bg-transparent text-xs sm:text-sm md:text-base"
            />
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-black font-semibold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full shadow hover:scale-105 transition duration-300 w-full text-xs sm:text-sm md:text-base">
              Submit
            </button>
          </div>
        </div>
      </section>

{/* Custom Review  */}


{/* Partnes */}
 <section className="bg-gradient-to-br from-white via-green-50 to-emerald-100 py-20 px-6 sm:px-12 lg:px-24 font-[Poppins,sans-serif]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 relative inline-block">
      <span className="relative z-10">Our Trusted Partners</span>
    </h2>
    <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
      We proudly collaborate with these industry leaders to drive innovation and excellence.
    </p>

    {/* Center the 5 logos */}
    <div className="flex flex-wrap justify-center gap-6">
      {logos.slice(0, 5).map((logo, index) => (
        <div
          key={index}
          className="bg-white/40 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 duration-300 w-40 h-24"
        >
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-14 w-auto object-contain transition duration-300"
          />
        </div>
      ))}
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
        
        /* Mobile-first responsive fixes */
        * {
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
        
        /* Prevent horizontal scroll */
        .w-full {
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Ensure all containers respect viewport width */
        .max-w-7xl, .max-w-6xl, .max-w-5xl, .max-w-4xl {
          max-width: 100% !important;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Mobile spacing adjustments */
        @media (max-width: 640px) {
          .space-y-8 > * + * {
            margin-top: 1rem !important;
          }
          
          .space-y-6 > * + * {
            margin-top: 0.75rem !important;
          }
          
          .space-y-4 > * + * {
            margin-top: 0.5rem !important;
          }
          
          .gap-8 {
            gap: 1rem !important;
          }
          
          .gap-6 {
            gap: 0.75rem !important;
          }
          
          /* Fix text overflow */
          h1, h2, h3, h4, h5, h6, p {
            word-wrap: break-word;
            hyphens: auto;
          }
          
          /* Fix button spacing */
          .flex.gap-3 {
            gap: 0.5rem !important;
          }
          
          .flex.gap-4 {
            gap: 0.75rem !important;
          }
        }
        
        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 768px) {
          .max-w-7xl {
            max-width: 95% !important;
          }
          
          .max-w-6xl {
            max-width: 92% !important;
          }
        }
        
        /* Large mobile adjustments */
        @media (min-width: 480px) and (max-width: 640px) {
          .text-xs {
            font-size: 0.75rem !important;
          }
          
          .text-sm {
            font-size: 0.875rem !important;
          }
        }
        
        /* Extra small mobile */
        @media (max-width: 479px) {
          .px-4 {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          
          .py-8 {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
          
          .py-12 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          .text-2xl {
            font-size: 1.25rem !important;
          }
          
          .text-3xl {
            font-size: 1.5rem !important;
          }
          
          .text-4xl {
            font-size: 1.75rem !important;
          }
        }
        
        /* Modal responsive fixes */
        @media (max-width: 640px) {
          .fixed.inset-0 {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          
          .max-h-90vh {
            max-height: 90vh;
          }
          
          .overflow-y-auto {
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Fix video aspect ratio on mobile */
        @media (max-width: 640px) {
          video {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        
        /* Grid responsive fixes */
        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .sm\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Home;
