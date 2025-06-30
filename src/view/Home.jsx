import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/Styles/home.css";
import images from "../assets/Images/images";
import {
  FaBriefcase,
  FaChartLine,
  FaStethoscope,
  FaUsers,
} from "react-icons/fa";
import {
  FaBaseballBall,
  FaFlag,
  FaRegEdit,
  FaBookOpen,
  FaFileInvoiceDollar,
  FaStar,
} from "react-icons/fa";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Allow animations to repeat on scroll
      easing: "ease-in-out",
      mirror: true, // Animations play on scroll up too
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  const testimonials = [
    {
      name: "Business Station",
      title: "Mark South - General Manager",
      quote:
        "I think that one of Gish's strongest attributes is his ability to build rapport and solid relationships,both with ients and with other stakeholders. I understand that this will be a critical factor for this contract, being able to successfully work with a variety of stakeholders, encourage collaboration and create opportunities for the clients / job seekers",
      img: images.image_testimonials2,
    },
    {
      name: "Boss Centre",
      title: "Liz Haselgrove - CEO",
      quote:
        "I have known Gish for several years,having previously worked with him as a NEIS trainer and mentor, and have since supported and collaborated together. Gish is one of the kindest, most honest and respectful people that I have ever met with a true passion for helping people to succeed in business. He has many years of experience in running a successful business and also helping people to move forward with their business journey.",
      img: images.image_testimonials1,
    },
    {
      name: "SW & Hart",
      title: "Kevin Wright - CEO",
      quote:
        "Gish has extensive recruitment and HR experience, as well as years mentoring aspiring small business owners. This background allows him to offer job seekers a well-rounded view and help them assess whether employment or self-employment is the best fit—and guide them forward confidently.",

      img: images.image_testimonials3,
    },
  ];
  return (
    <section className="bg-white py-10 px-4">
      <div className="m-4 sm:m-8 md:m-10">
        {/* Main Container - Flex layout for images and text */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Images Container with fixed height */}
          <div className="relative w-[380px] sm:w-[520px] md:w-[680px] lg:w-[850px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex-shrink-0">
            <div
              ref={containerRef}
              className="relative w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-full"
            >
              {/* Top Image */}
              <img
                src={images.image_six}
                alt="Image 1"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl z-20"
              />

              {/* Bottom Image */}
              <img
                src={images.image_seven}
                alt="Image 2"
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl z-10 transition-transform duration-700 rotate-3 ${inView
                  ? "translate-x-[180px] sm:translate-x-[220px] md:translate-x-[280px] lg:translate-x-[350px]"
                  : "translate-x-0"
                  }`}
              />
            </div>
          </div>

          {/* Right Side Text */}
          <div
            className="flex-1 p-4 sm:p-8 overflow-hidden"
            style={{ minWidth: 0, maxHeight: "100%" }}
          >
            <div
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              style={{ minHeight: 0 }}
            >
              <div className="relative mb-4 overflow-hidden">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {/* First line: Black */}
                  <span className="relative block text-black overflow-hidden">
                    BUSINESS SUPPORT
                    {/* BEFORE overlay */}
                    <span
                      className="absolute top-0 right-0 w-full h-full bg-gray-300 z-10"
                      style={{
                        animation:
                          "revealBefore 2s cubic-bezier(0.77, 0, 0.18, 1) forwards",
                        transform: "translateX(0)",
                      }}
                    />
                    {/* AFTER overlay */}
                    <span
                      className="absolute top-0 right-0 w-full h-full bg-white z-20"
                      style={{
                        animation:
                          "revealAfter 2s cubic-bezier(0.77, 0, 0.18, 1) forwards",
                        transform: "translateX(-100%)",
                      }}
                    />
                  </span>

                  {/* Second line: Blue */}
                  <span className="relative block text-blue-900 overflow-hidden">
                    SERVICES
                    {/* BEFORE overlay */}
                    <span
                      className="absolute top-0 right-0 w-full h-full bg-gray-300 z-10"
                      style={{
                        animation:
                          "revealBefore 2s cubic-bezier(0.77, 0, 0.18, 1) forwards",
                        animationDelay: "0.5s",
                        transform: "translateX(0)",
                      }}
                    />
                    {/* AFTER overlay */}
                    <span
                      className="absolute top-0 right-0 w-full h-full bg-white z-20"
                      style={{
                        animation:
                          "revealAfter 2s cubic-bezier(0.77, 0, 0.18, 1) forwards",
                        animationDelay: "0.5s",
                        transform: "translateX(-100%)",
                      }}
                    />
                  </span>
                </h2>

                {/* CSS animations */}
                <style>{`
            @keyframes revealBefore {
              0% { transform: translateX(0); }
              100% { transform: translateX(200%); }
            }

            @keyframes revealAfter {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(101%); }
            }
          `}</style>
              </div>

              <div className="h-[250px] overflow-y-auto overflow-x-hidden p-1 bg-white rounded-lg shadow-inner scroll-hide">
                <p className="text-gray-600 text-base sm:text-xl leading-relaxed">
                  Businessplex is an Australian-owned Registered Training
                  Organisation (RTO ID: 45725), established in 2021. It helps
                  individuals start and run successful businesses through the
                  Self-Employment Assistance Program, Diploma of Quality
                  Auditing, and Traineeship programs. Offering both online and
                  classroom learning, including Recognition of Prior Learning
                  (RPL), Businessplex is the ideal place to launch your business
                  or career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex flex-col md:flex-row items-center justify-between p-8 bg-white min-h-screen overflow-hidden"
        data-aos="fade-right"
      >
        {/* Global Ellipse Background */}
        <div className="absolute bottom-0 left-0 w-[150%] h-[185%] bg-gray-100 rounded-[100%/100%] -z-10 rotate-[20deg]"></div>

        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-2xl md:text-4xl font-serif font-semibold text-gray-900 leading-snug">
            Start Your New Business or
            <br />
            Grow Your Existing Micro <span className="font-bold">Business</span>
          </h1>
          <p className="mt-6 text-sm text-gray-700 max-w-md mx-auto text-center">
            The <strong>Start Your New Business or Grow Your Existing Micro Business</strong>
            course is tailored for aspiring entrepreneurs and small business
            owners. It provides practical knowledge and tools to successfully
            launch a new venture or enhance an existing micro business. Covering
            key areas such as business planning, marketing, finance, and
            operations, this course helps participants build a strong foundation
            for sustainable business growth.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded shadow transition-all">
            APPLY NOW
          </button>
        </div>

        {/* Right Image (on top of ellipse) */}
        <div
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center z-20"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div
            className="rounded-[40px] overflow-hidden shadow-xl border-2 border-black transform transition-transform duration-700 hover:scale-105"
            style={{ width: "521px", height: "470px" }}
          >
            <img
              src={images.image_HomeImg1}
              alt="Business woman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8 bg-white min-h-screen overflow-hidden"
        data-aos="fade-left"
      >
        {/* Ellipse Background */}
        <div
          className="absolute top-0 left-0 w-[150%] h-[185%] bg-gray-100 rounded-[100%/100%] -z-10 rotate-[-20deg]"
          style={{ transformOrigin: "left top" }}
        ></div>

        {/* Image on the Left */}
        <div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 z-20"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div
            className="rounded-[40px] overflow-hidden shadow-xl border-2 border-black transition-transform duration-700 hover:scale-105"
            style={{ width: "100%", maxWidth: "521px", height: "auto" }}
          >
            <img
              src={images.image_HomeImg3}
              alt="Business help"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text and Button on the Right */}
        <div className="w-full md:w-1/2 z-10 px-4 md:px-10 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-serif font-semibold text-gray-900 leading-snug">
            Diploma of Quality
            <br />
            <span className="font-bold">Auditing</span>
          </h1>
          <p className="mt-6 text-sm text-gray-700 max-w-md mx-auto text-center">
            The <strong>Diploma of Quality Auditing</strong> is designed for
            individuals seeking to develop advanced skills in planning,
            conducting, and reporting on quality audits. This course provides
            comprehensive knowledge of audit processes, compliance standards,
            and continuous improvement practices. It prepares participants to
            ensure organizational effectiveness and meet industry and regulatory
            requirements through professional auditing techniques.
          </p>

          <button className="mt-6 px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded shadow transition-all">
            APPLY NOW
          </button>
        </div>
      </div>

      {/* Third Section */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8 bg-white min-h-screen overflow-hidden"
        data-aos="fade-right"
      >
        {/* Ellipse Background Behind Everything */}
        <div className="absolute bottom-0 left-0 w-[228%] h-[150%] bg-gray-100 rounded-[100%/100%] -z-10 rotate-[20deg]"></div>

        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10 px-4 md:px-0 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-serif font-semibold text-gray-900 leading-snug">
            Self-Employment
            <br />
            <span className="font-bold">Assistance </span>
          </h1>
          <p className="mt-6 text-sm text-gray-700 max-w-md mx-auto text-center">
            The <strong>Self-Employment Assistance</strong> course is designed
            for individuals who wish to start or grow their own business. It
            provides essential knowledge and skills in areas such as business
            fundamentals, marketing, financial management, and business
            planning. This course aims to empower participants to successfully
            establish and manage their own self-employment ventures.
          </p>

          <button className="mt-6 px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded shadow transition-all">
            APPLY NOW
          </button>
        </div>

        {/* Right Image on Top of Ellipse */}
        <div
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 z-20"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div
            className="rounded-[40px] overflow-hidden shadow-xl border-2 border-black transition-transform duration-700 hover:scale-105"
            style={{ width: "100%", maxWidth: "521px", height: "auto" }}
          >
            <img
              src={images.image_HomeImg2}
              alt="Business help"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>


      <div className="bg-white py-10 px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* OUR VISION Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-105 aspect-[4/5]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={images.image_vision1}
            alt="Vision Background"
            className="absolute w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out group-hover:opacity-0"
          />
          <img
            src={images.image_vision2}
            alt="Vision Hover"
            className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-in-out"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-[1000ms] ease-in-out"></div>

          <div className="absolute top-0 left-0 w-full py-2 bg-[#3E50FB] text-center z-10 shadow-md shadow-black/50">
            <span className="text-white font-semibold text-sm md:text-base flex items-center justify-center gap-2">
              💎 OUR VISION
            </span>
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-in-out backdrop-blur-md bg-black/30">
            <p className="text-sm leading-relaxed text-blue-100 max-w-[90%]">
              To provide top quality support and services to enable clients to establish, grow, and prosper their business dreams.
            </p>
          </div>
        </div>

        {/* IMAGE ONLY Card 1 */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-105 aspect-[4/5]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={images.image_other1}
            alt="Image 2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* OUR MISSION Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-105 aspect-[4/5]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={images.image_Mission1}
            alt="Mission Background"
            className="absolute w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out group-hover:opacity-0"
          />
          <img
            src={images.image_Mission2}
            alt="Mission Hover"
            className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-in-out"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-[1000ms] ease-in-out"></div>

          <div className="absolute top-0 left-0 w-full py-2 bg-[#3E50FB] text-center z-10 shadow-md shadow-black/50">
            <span className="text-white font-semibold text-sm md:text-base flex items-center justify-center gap-2">
              🏛️ OUR MISSION
            </span>
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-in-out backdrop-blur-md bg-black/30">
            <p className="text-sm leading-relaxed text-blue-100 max-w-[90%]">
              To be the preferred Self-Employment Assistance Program for nationally recognised qualifications and helping small businesses through mentoring, coaching, and strategic planning.
            </p>
          </div>
        </div>

        {/* IMAGE ONLY Card 2 */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-105 aspect-[4/5]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={images.image_other2}
            alt="Image 4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Services Section */}
      <div
        className="bg-blue-800 px-4 md:px-16 text-white rounded-t-3xl text-center"
        style={{
          paddingTop: "0.5rem",
          paddingBottom: "2rem",
          marginTop: "3rem",
        }}
        data-aos="fade-up"
      >
        <h2
          className="text-3xl font-bold mb-12 relative inline-block bg-white text-black px-6 py-2 rounded-full mx-auto"
          style={{
            marginTop: "-60px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaBriefcase size={28} />,
              title: "Small Business Training",
              desc: "Small Business Training programs aim to equip aspiring entrepreneurs with the essential skills and knowledge needed to successfully start and manage a small business. These trainings cover areas such as business planning, marketing, finance, and legal requirements, helping individuals build confidence and capability to thrive in the competitive business world.",
              img: images.image_services1,
              hoverImg: images.image_services2,
            },
            {
              icon: <FaChartLine size={28} />,
              title: "Business Advice",
              desc: "Business Advice provides entrepreneurs and small business owners with expert guidance to make informed decisions and overcome challenges. It includes support on topics like business planning, marketing strategies, financial management, and legal compliance, helping businesses grow sustainably and achieve their goals.",
              img: images.image_services3,
              hoverImg: images.image_services4,
            },
            {
              icon: <FaStethoscope size={28} />,
              title: "Business Health Check",
              desc: "Business Health Check is a diagnostic tool that helps business owners assess the current performance of their business. It examines key areas such as finances, operations, marketing, and strategy to identify strengths, weaknesses, and opportunities for improvement, enabling better decision-making and sustainable growth.",
              img: images.image_services5,
              hoverImg: images.image_services6,
            },
            {
              icon: <FaUsers className="text-3xl text-blue-600" />,
              title: "Exploring Self-Employment Workshop",
              desc: "Exploring Self-Employment Workshop is designed for individuals who are considering starting their own business. This workshop provides insights into self-employment opportunities, the realities of running a business, and the key steps involved in starting and managing a successful venture. It helps participants assess their readiness and build confidence to take the next step in their entrepreneurial journey.",
              img: images.image_services7,
              hoverImg: images.image_services8,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-3xl overflow-hidden shadow-md flex flex-col transform transition-transform duration-500 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={100 + index * 100}
            >
              <div className="relative h-48 flex items-center justify-center rounded-t-3xl overflow-hidden group">
                <img
                  src={service.img}
                  alt=""
                  className="absolute w-full h-full object-cover transition duration-500 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={service.hoverImg}
                  alt="hover"
                  className="absolute w-full h-full object-cover opacity-0 transition duration-500 ease-in-out group-hover:opacity-100"
                />
                <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center relative z-10 drop-shadow-lg">
                  <span role="img" className="text-3xl">
                    {service.icon}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black opacity-30 rounded-t-3xl"></div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow text-center">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm mb-4">{service.desc}</p>
                <button className="bg-black text-white rounded-full px-4 py-2 text-sm mt-auto hover:bg-gray-800 transition-colors duration-300">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full min-h-screen bg-white font-serif overflow-hidden">
        <div
          className="absolute -top-20 -left-40 w-[700px] h-[450px] opacity-40 z-0 transform rotate-12 rounded-full"
          style={{ backgroundColor: "#408CE4" }}
        ></div>

        <div
          className="absolute top-[250px] -right-40 w-[700px] h-[450px] opacity-40 z-0 transform rotate-45 rounded-full"
          style={{ backgroundColor: "#408CE4" }}
        ></div>

        <div className="relative z-10 px-6 pt-16 max-w-5xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            data-aos="fade-down"
          >
            Self-Employment Assistance Program
          </h1>

          <div
            className="text-left text-black text-lg md:text-xl leading-relaxed mb-10 max-w-2xl p-6 rounded-xl shadow-lg bg-white/30 backdrop-blur-md"
            data-aos="fade-right"
          >
            <p>
              {/* <p className=" text-center"></p> */}
              We offer a{" "}
              <span className="font-semibold">
                range of practical workshops
              </span>{" "}
              across Perth, Australia. <br />
              They are delivered by selected presenters who are specialists in
              their subject matters and have a background in small business.
            </p>
          </div>

          <div
            className="text-right text-black text-lg md:text-xl leading-relaxed mb-10 max-w-2xl ml-auto p-6 rounded-xl shadow-lg bg-white/30 backdrop-blur-md"
            data-aos="fade-left"
          >
            <p>
              {/* <p className=" text-center"> */}
              Self-Employment Assistance Program is funded by the{" "}
              <span className="font-semibold">
                Australian Federal Government
              </span>{" "}
              to assist unemployed, under-employed and owners of existing
              micro-businesses (with up to 4 employees) to explore opportunities
              for <span className="font-semibold">self-employment</span>.
            </p>
          </div>
        </div>

        <div
          className="bg-blue-600 text-white px-6 py-10 mx-6 md:mx-20 my-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative z-10 rounded-[42px]"
          data-aos="zoom-in"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left leading-snug">
              Exploring Self-Employment
              <br />
              Workshops.
            </h2>

            <p className="text-base md:text-lg mb-6 text-left leading-relaxed">
              Join our expert-led workshops to discover how you can start and
              grow your own business. Whether you're unemployed or looking for a
              new path, we’re here to support your journey to self-employment.
            </p>

            <img
              src={images.image_AllLogos1}
              alt="Workforce Australia"
              className="h-20 mt-2"
            />
          </div>

          <div className="relative flex-shrink-0">
            <img
              src={images.image_OtherIMG1}
              alt="Group"
              className="h-52 md:h-60 lg:h-72 object-contain"
              data-aos="fade-up"
            />
            <button className="absolute bottom-3 right-3 bg-white text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg hover:bg-blue-100 transition-transform transform duration-300 hover:scale-110">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* progress bar section start */}

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Recognition of Prior Learning <span className="text-amber-400">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "fas fa-file-alt",
                title: "Free Assessment",
                desc: "Fill learning gaps and gain qualifications through our online courses.",
              },
              {
                icon: "fas fa-briefcase",
                title: "Evidence Portfolio",
                desc: "Submit proof of skills like resumes, references, and work samples for review.",
              },
              {
                icon: "fas fa-search",
                title: "Evidence Review",
                desc: "We assess your evidence and conduct competency discussions or observations if needed.",
              },
              {
                icon: "fas fa-chalkboard-teacher",
                title: "Training if Needed",
                desc: "Complete any required learning through our online courses to earn qualifications.",
              },
              {
                icon: "fas fa-award",
                title: "Qualified!",
                desc: "Receive nationally recognized certifications from our RTO.",
              },
              {
                icon: "fas fa-rocket",
                title: "Start Your Career",
                desc: "Use your certification to apply for jobs, gain promotions, or start a new career.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-aos="fade-up"
                data-aos-delay={100 * idx}
              >
                <div className="relative -top-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto">
                    <i className={`${step.icon} text-2xl`}></i>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">{step.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="py-20 px-6 bg-white text-center">
          <h2
            className="text-4xl font-extrabold mb-16 text-blue-800"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Testimonials
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`text-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition duration-500 ease-in-out relative
            ${idx === 1 ? "bg-blue-600 min-h-[540px] pt-16 z-20" : ""}
            ${idx === 0 ? "bg-blue-700 md:translate-x-16 z-10" : ""}
            ${idx === 2 ? "bg-blue-700 md:-translate-x-16 z-10" : ""}
            hover:scale-105
          `}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 150} // 100ms, 250ms, 400ms delays
              >
                <div className="flex flex-col items-center h-full">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-xl -mt-16 mb-6 object-cover"
                  />

                  <div className="bg-white text-black p-6 rounded-2xl shadow-lg flex flex-col justify-between min-h-[340px] w-full">
                    <div>
                      <h3 className="text-xl font-semibold">{t.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 italic">
                        {t.title}
                      </p>
                      <div className="text-3xl text-gray-500 mb-2 leading-none">
                        “
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {t.quote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dots (static for now) */}
                <div className="mt-6 flex justify-center gap-2">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className={`w-3 h-3 rounded-full ${idx === dot ? "bg-white" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* progress bar section end */}
      <section>
        <footer className="text-white text-sm">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 px-4 flex flex-col md:flex-row justify-around items-center gap-6 rounded-t-3xl">
            {[
              { icon: <FaBaseballBall size={40} />, text: "Perth Based" },
              { icon: <FaFlag size={40} />, text: "Nationally\nRecognized" },
              { icon: <FaRegEdit size={40} />, text: "Australia wide\nTraining" },
              { icon: <FaBookOpen size={40} />, text: "E-Skilled LMS" },
              { icon: <FaFileInvoiceDollar size={40} />, text: "Flexible Payment\nMethod" },
              { icon: <FaStar size={40} />, text: "Recruitment\nLicence" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-[150px]">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="whitespace-pre-line font-semibold text-sm text-center">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-t-3xl -mt-6">
            <div>
              <img src={images.image_logo} alt="Businessplex" className="w-28 mb-4 mx-auto md:mx-0" />
              <div className="space-y-2 text-center md:text-left">
                <a
                  href="https://www.google.com/maps?q=1/3+Marchant+Way,+Morley+WA+6062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-amber-400 transition"
                >
                  1/3 Marchant Way, Morley 6062
                </a>
                <a href="tel:1300894480" className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition">
                  <FaPhoneAlt /> Free call: 1300 894 480
                </a>
                <a href="tel:0861565820" className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition">
                  <FaPhoneAlt /> 08 6156 5820
                </a>
                <a href="mailto:admin@businessplex.com.au" className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition">
                  <MdEmail /> admin@businessplex.com.au
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Quick Links</h3>
              <ul className="space-y-2 text-center md:text-left">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/team", label: "Our Team" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="block hover:text-amber-400 transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Services</h3>
              <ul className="space-y-2 text-center md:text-left">
                {[
                  { href: "/small-business-training", label: "Small Business Training" },
                  { href: "/self-employment-workshops", label: "Exploring Self-Employment Workshops" },
                  { href: "/business-health-checks", label: "Business Health Checks" },
                  { href: "/business-advice", label: "Business Advice" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="block hover:text-amber-400 transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Newsletter</h3>
              <form className="flex flex-col space-y-3 max-w-xs mx-auto md:mx-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-3 py-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <button className="bg-amber-400 text-blue-900 font-semibold py-2 rounded hover:bg-amber-500 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="bg-gray-800 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="flex gap-4 mb-4 md:mb-0">
              <img src={images.image_AllLogos2} alt="Australian Qualification" className="h-16" />
              <img src={images.image_AllLogos1} alt="Workforce Australia" className="h-16" />
            </div>
            <p className="text-center md:text-left">
              Copyright 2025 © Businessplex. All Rights Reserved. Development by A4Technologies.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://wa.me/" target="_blank" className="hover:text-green-500 transition">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" className="hover:text-red-500 transition">
                <FaYoutube size={20} />
              </a>
              <a href="https://web.facebook.com/BusinessplexTrainingCentre" target="_blank" className="hover:text-blue-500 transition">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/businessplex/" target="_blank" className="hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </section>
  );
};

export default Home;
