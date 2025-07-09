import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaAward,
  FaCheckCircle,
  FaBullhorn,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";


import images from "../assets/Images/images";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  const rplSteps = [
    "Skills Audit",
    "Assessment",
    "Portfolio Submission",
    "Validation",
    "Certification",
  ];
  const paragraphData = [
    "You must be at least 18 years of age for Small Business Training",
    "You must not be prohibited by law from working in Australia",
    "You must not be an overseas visitor on a working holiday visa or an overseas student studying in Australia",
    "You cannot be an undischarged bankrupt.",
   
  ];

  const team = [
    {
      name: "Thinu Jayasinghe",
      role: "Operation Manager",
      image: images.image_Founder01,
    },
    {
      name: "Joel Legaspi",
      role: "Business Trainer/Assessor/Mentor",
      image: images.image_Founder01,
    },
    {
      name: "Jeeva Padayachee",
      role: "Business Trainer/Assessor/Mentor",
      image: images.image_Founder01,
    },
    {
      name: "Rachmat Abader",
      role: "Business Trainer/Assessor/Mentor",
      image: images.image_Founder01,
    },
    {
      name: "Moni Nair",
      role: "Administrator & Student Support",
      image: images.image_Founder01,
    },
    {
      name: "Erika Legaspi",
      role: "Administrator & Student Support",
      image: images.image_Founder01,
    },
    {
      name: "Sharmin Sultana",
      role: "RTO Compliance Consultant ",
      image: images.image_Founder01,
    },
    {
      name: "Amila Rathnayake",
      role: "IT Consultant",
      image: images.image_Founder01,
    },
  ];

  // Background images for sections (update these according to your images import)
  const bgAbout = images.image_Question01 || "";
  const bgVision = images.image_Question01 || "";
  const bgRPL = images.image_Question01 || "";
  const bgCEO = images.image_Question01 || "";
  const bgTeam = images.image_Question01 || "";
  const bgCTA = images.image_Question01 || "";

  return (
    
    <div className="bg-white text-gray-800 font-[Poppins,sans-serif] select-none">
      {/* Hero Section */}
      <div className="relative h-[85vh] overflow-hidden flex items-center justify-center mb-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover brightness-75 transition-opacity duration-700"
          src={images.video_aboutVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            data-aos="fade-down"
          >
            Welcome to <span className="text-blue-600">BUSINESSPLEX</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white mt-5 max-w-xl drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Empowering growth through knowledge, innovation and quality
            learning.
          </p>
        </div>
      </div>

      {/* Color */}
<section className="relative bg-gradient-to-br from-amber-100 via-white to-amber-50 py-20 px-6 sm:px-12 lg:px-24 font-[Poppins,Roboto,sans-serif] overflow-hidden">

  <div
    className="absolute inset-0 opacity-10 z-0"
    style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)`,
      backgroundSize: "30px 30px",
    }}
  ></div>

  <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-300 opacity-30 rounded-full blur-[100px] z-0" />


  <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-[120px] z-0" />

 
</section>
{/* End color  */}
      {/* About Section with Background Image */}
      <section
        style={{
          // backgroundImage: `url(${bgAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-white bg-opacity-90 mb-20"
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none "
          style={{
            backgroundImage: `url(${images.image_aboutBG01})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0)", // transparent black overlay
            mixBlendMode: "multiply", // (optional) to blend image with overlay
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />

        <img
          src={images.image_abouteHome01}
          alt="About"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 w-full md:w-1/2 object-cover relative z-10"
        />
        <div className="md:w-1/2 relative z-10">
          <h2 className="relative flex items-center gap-4 text-3xl md:text-4xl font-bold text-green-600 mb-6 pl-10">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-16 bg-green-500 rounded-lg"></span>
            <FaBullhorn className="text-green-600" />
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed text-gray-100">
            "Businessplex** is a Registered Training Organisation (RTO ID 45725)
            accredited by ASQA to deliver nationally recognised qualifications
            across Australia. Specialising in Business and Quality Auditing, the
            organisation offers Certificate III, IV, and Diploma-level programs,
            both in-class and hybrid (online) formats. Businessplex also
            delivers the **Self-Employment Assistance Program** under Workforce
            Australia in the Perth North region, supporting aspiring and
            existing business owners through tailored business advice and
            12-month coaching. With a strong focus on Recognition of Prior
            Learning (RPL), Businessplex helps individuals—particularly in the
            public and private sectors—gain qualifications based on their
            experience, backed by expert trainers and real employment pathways."
          </p>
        </div>
      </section>

      {/* ,,,,,,,,,,,, */}
      
      <section className="relative bg-gradient-to-br from-amber-100 via-white to-amber-50 py-20 px-6 sm:px-12 lg:px-24 font-[Poppins,Roboto,sans-serif] overflow-hidden">
  {/* Background Decorations - Subtle Grid Dots */}
  <div
    className="absolute inset-0 opacity-10 z-0"
    style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)`,
      backgroundSize: "30px 30px",
    }}
  ></div>

  {/* Main Content Wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    {/* Left Column - Services List */}
    <div>
      <h2
        className="text-4xl font-bold text-gray-800 mb-10 tracking-tight"
        data-aos="fade-right"
      >
        Businessplex Eligibility Criteria
      </h2>

      <div className="space-y-6">
        {paragraphData.map((text, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-all"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => {
              setZoomIndex(index);
              setZoomActive(true);
              setTimeout(() => setModalVisible(true), 50);
            }}
          >
            <div className="flex items-start gap-4 p-4 rounded-xl shadow-md bg-white/60 backdrop-blur-xl border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-[1.03]">
              <div className="flex-shrink-0 mt-1">
                <span className="block w-4 h-4 bg-yellow-400 rounded-full animate-ping shadow-md"></span>
              </div>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column - Video */}
   <div
  className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-3xl shadow-2xl group"
  data-aos="zoom-in"
  data-aos-delay="300"
>
  <img
    src={images.image_Criteria01}
    alt="Performance Criteria"
    className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
  />
</div>
  </div>
</section>


      {/* Vision & Mission Section with Background Image */}
      <section
        className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-20 px-6 md:px-32 text-center space-y-16 overflow-hidden bg-opacity-90 mb-20"
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-25 pointer-events-none rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_aboutBG02})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0)", // transparent black overlay
            mixBlendMode: "multiply", // (optional) to blend image with overlay
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />
        {/* Decorative SVG blobs */}
        {/* <svg
          className="absolute top-[-100px] left-[-80px] w-64 h-64 opacity-20 text-green-400 animate-pulse rounded-3xl"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          style={{ zIndex: 0 }}
        >
          <path
            fill="currentColor"
            d="M40.5,-58.7C52.6,-52.3,57.5,-37.6,60.4,-24.3C63.3,-11,64.2,1.9,60.4,15.7C56.6,29.4,48,44,36.7,49.9C25.3,55.7,12.7,52.9,0.9,51.5C-10.9,50.2,-21.7,50.3,-32.6,48.1C-43.5,45.9,-54.5,41.5,-57.1,32.9C-59.8,24.2,-53.9,11.4,-54.1,-2.9C-54.3,-17.1,-60.5,-34.2,-54.8,-42.3C-49.1,-50.4,-31.7,-49.5,-17.3,-53.5C-2.9,-57.6,8.5,-66.9,21.6,-70.1C34.7,-73.4,48.7,-70.9,40.5,-58.7Z"
            transform="translate(100 100)"
          />
        </svg> */}

        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="relative z-10"
        >
          <h3 className="relative flex items-center justify-center gap-4 text-4xl font-extrabold text-green-600 mb-6 drop-shadow-lg pl-10">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-16 bg-green-600 rounded-lg"></span>
            <FaLightbulb className="text-green-700 animate-bounce" />
            Our Vision
          </h3>
          <p className="max-w-xl mx-auto text-gray-100 text-lg leading-relaxed tracking-wide">
            To provide top quality support and services to enable clients to
            establish, grow and prosper their business dreams.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="relative z-10"
        >
          <h3 className="relative flex items-center justify-center gap-4 text-4xl font-extrabold text-green-600 mb-6 drop-shadow-lg pl-10">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-16 bg-green-600 rounded-lg"></span>
            <FaUsers className="text-green-700 animate-bounce" />
            Our Mission
          </h3>
          <p className="max-w-xl mx-auto text-gray-100 text-lg leading-relaxed tracking-wide">
            To be the preferred Self-Employment Assistance Program for
            nationally recognised qualifications and providing assistance to
            grow small business by proving mentoring, coaching, business advice,
            business health checks and business planning.
          </p>
        </div>
      </section>

      {/* RPL Process Section with Background Image */}
      <section
        className="relative py-20 px-6 md:px-20 bg-white bg-opacity-90 mb-20"
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_abouteBG03l})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0)", // transparent black overlay
            mixBlendMode: "multiply", // (optional) to blend image with overlay
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />
        <h2 className=" text-4xl font-bold text-center text-green-600 mb-12 flex justify-center items-center gap-3 z-10 relative">
          <FaCheckCircle className="text-green-600 animate-pulse" />
          RPL (Recognition of Prior Learning)
        </h2>
        <div className="grid md:grid-cols-5 gap-6 relative z-10">
          {rplSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-green-200 hover:shadow-xl p-6 rounded-xl text-center transition-transform hover:-translate-y-2 duration-500 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />
              <h4 className="text-xl font-bold mb-1">{step}</h4>
              <p className="text-gray-600 text-sm">
                Step {index + 1} in your journey
              </p>
            </div>
          ))}
        </div>
      </section>

    <section
  className="relative py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-green-50 bg-opacity-90 mb-20 overflow-hidden"
  data-aos="fade-up"
>
  {/* Background Image Overlay */}
  <div
    className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none rounded-3xl"
    style={{
      backgroundImage: `url(${images.image_aboutBG04})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      mixBlendMode: "multiply",
    }}
  />
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 rounded-3xl" />

  {/* CEO Image Card */}
  <div className="relative z-10 w-72 h-72 flex-shrink-0 group">
    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white transition-transform duration-700 group-hover:scale-110 animate-float-up">
      <img
        src={images.image_Founder01}
        alt="CEO"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* CEO Info */}
  <div className="md:w-1/2 relative z-10 text-center md:text-left space-y-4">
    
    <h2 className="relative flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 pl-10 justify-center md:justify-start">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-16 bg-green-600 rounded-lg hidden md:block"></span>
      <FaAward className="text-green-600" />
      We will help you to start or grow your existing business
    </h2>

    <p className="text-base sm:text-lg text-gray-100 leading-relaxed px-4 md:px-0">
      Gish has worked in the NEIS and SEA programs for 9 years as a Small
      Business Trainer, Assessor and Mentor delivering NEIS program
      (Certificate III in Micro Business) from 2015 to 2021 and SEA
      Program (Certificate III and Cert IV in Entrepreneurship and New
      Business) from 2022 onwards to help eligible job seekers to start or
      grow their own business.
    </p>
    {/* Contact Info */}
    <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-4 text-white text-sm sm:text-base font-medium">
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-green-300" />
        <span className="hover:underline">gish@businessplex.com.au</span>
      </div>
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-green-300" />
        <span>08 6156 5319</span>
      </div>
    </div>

  </div>
  
</section>


      {/* Our Team Section with Background Image */}
      <section
        className="relative py-20 px-6 md:px-20 bg-gray-50 bg-opacity-90 mb-20"
        data-aos="fade-up"
        aria-label="Meet Our Team Section"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_TeamBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0)", // transparent black overlay
            mixBlendMode: "multiply", // (optional) to blend image with overlay
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />
        <h2 className="relative flex justify-center items-center gap-4 text-4xl font-bold text-green-600 mb-6 pl-10 z-10">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-16 bg-green-600 rounded-lg"></span>
          <FaUsers className="text-green-600 animate-pulse" /> Meet Our Team
        </h2>
        <p className="text-center text-gray-100 max-w-2xl mx-auto mb-12 relative z-10">
          Our team is a dynamic blend of professionals committed to delivering
          exceptional results. Each member brings unique strengths that drive
          our collective success.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {team.map((member, idx) => (
            <article
              key={idx}
              className="group relative bg-white shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden transition-shadow duration-500 rounded-tl-[50px] rounded-br-[50px] rounded-tr-md rounded-bl-md"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              tabIndex={0}
              aria-label={`${member.name}, ${member.role}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              {/* Overlay on hover with name and role */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white px-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <span className="mt-2 inline-block bg-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {member.role}
                </span>
              </div>
              {/* Role tag top right */}
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md select-none">
                {member.role.split(" ")[0]}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call To Action Section with Background Image */}
      <section
        className="relative py-20 text-white text-center flex flex-col items-center justify-center space-y-6  bg-opacity-90 mb-20"
        data-aos="zoom-in"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_END01})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0)", // transparent black overlay
            mixBlendMode: "multiply", // (optional) to blend image with overlay
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg relative z-10">
          Ready to Transform Your Future?
        </h2>
        <p className="text-lg max-w-xl leading-relaxed drop-shadow-md relative z-10">
          Join the Bizplex community and take your skills to the next level.
        </p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition relative z-10">
          Contact Us
        </button>
      </section>

      
    </div>
  );
};

export default AboutUs;
