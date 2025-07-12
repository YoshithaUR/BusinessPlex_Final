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
import images from "../assets/Images/images"; // Ensure all images used below exist here

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

  const team = [
    { name: "Thinu Jayasinghe", role: "Operation Manager", image: images.image_Founder01 },
    { name: "Joel Legaspi", role: "Business Trainer/Assessor/Mentor", image: images.image_Founder01 },
    { name: "Jeeva Padayachee", role: "Business Trainer/Assessor/Mentor", image: images.image_Founder01 },
    { name: "Rachmat Abader", role: "Business Trainer/Assessor/Mentor", image: images.image_Founder01 },
    { name: "Moni Nair", role: "Administrator & Student Support", image: images.image_Founder01 },
    { name: "Erika Legaspi", role: "Administrator & Student Support", image: images.image_Founder01 },
    { name: "Sharmin Sultana", role: "RTO Compliance Consultant", image: images.image_Founder01 },
    { name: "Amila Rathnayake", role: "IT Consultant", image: images.image_Founder01 },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg" data-aos="fade-down">
            Welcome to <span className="text-blue-600">BUSINESSPLEX</span>
          </h1>
          <p className="text-lg md:text-xl text-white mt-5 max-w-xl drop-shadow-md" data-aos="fade-up" data-aos-delay="300">
            Empowering growth through knowledge, innovation and quality learning.
          </p>
        </div>
      </div>

      {/* Decorative Background Color Section */}
      <section className="relative bg-gradient-to-br from-amber-100 via-white to-amber-50 py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-300 opacity-30 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-[120px] z-0" />
      </section>

      {/* About Section */}
      <section
        className="relative py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-white bg-opacity-90 mb-20"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />
        <div className="absolute inset-0 rounded-3xl" style={{
          backgroundImage: `url(${images.image_aboutBG01})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply",
        }} />

        <img
          src={images.image_abouteHome01}
          alt="About"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 w-full md:w-1/2 object-cover relative z-10"
        />

        <div className="md:w-1/2 relative z-10">
          <h2 className="relative flex items-center gap-4 text-3xl md:text-4xl font-bold text-green-600 mb-6 pl-10">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-16 bg-green-500 rounded-lg" />
            <FaBullhorn className="text-green-600" />
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed text-gray-100">
            Businessplex is a Registered Training Organisation (RTO ID 45725) accredited by ASQA...
            {/* (You can keep or shorten the paragraph if needed) */}
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section
        className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-20 px-6 md:px-32 text-center space-y-16 mb-20"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_aboutBG02})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply"
          }}
        />
        <div className="relative z-10">
          <h3 className="flex items-center justify-center gap-4 text-4xl font-extrabold text-green-600 mb-6">
            <FaLightbulb className="text-green-700 animate-bounce" />
            Our Vision
          </h3>
          <p className="max-w-xl mx-auto text-gray-100 text-lg leading-relaxed">
            To provide top quality support and services to enable clients to grow their business dreams.
          </p>
        </div>

        <div className="relative z-10" data-aos-delay="200">
          <h3 className="flex items-center justify-center gap-4 text-4xl font-extrabold text-green-600 mb-6">
            <FaUsers className="text-green-700 animate-bounce" />
            Our Mission
          </h3>
          <p className="max-w-xl mx-auto text-gray-100 text-lg leading-relaxed">
            To be the preferred Self-Employment Assistance Program provider...
          </p>
        </div>
      </section>

      {/* RPL Section */}
      <section className="relative py-20 px-6 md:px-20 bg-white mb-20" data-aos="fade-up">
        <div className="absolute inset-0 bg-black/50 rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_abouteBG03l})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
          }}
        />
        <h2 className="text-4xl font-bold text-center text-green-600 mb-12 relative z-10 flex justify-center items-center gap-3">
          <FaCheckCircle className="text-green-600 animate-pulse" />
          RPL (Recognition of Prior Learning)
        </h2>

        <div className="grid md:grid-cols-5 gap-6 relative z-10">
          {rplSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-green-200 p-6 rounded-xl text-center hover:shadow-xl transition hover:-translate-y-2 duration-500 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />
              <h4 className="text-xl font-bold mb-1">{step}</h4>
              <p className="text-gray-600 text-sm">Step {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-green-50 mb-20" data-aos="fade-up">
        <div className="absolute inset-0 bg-black/50 rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_aboutBG04})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply"
          }}
        />
        <div className="relative z-10 w-72 h-72 group">
          <img
            src={images.image_Founder01}
            alt="CEO"
            className="rounded-full w-full h-full object-cover border-4 border-white shadow-2xl transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="md:w-1/2 relative z-10 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-green-700 flex items-center gap-4 justify-center md:justify-start">
            <FaAward className="text-green-600" />
            We will help you to start or grow your business
          </h2>
          <p className="text-base text-gray-100">
            Gish has worked in the NEIS and SEA programs for 9 years...
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-4 text-white text-sm font-medium">
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

      {/* Team Section */}
      <section className="relative py-20 px-6 md:px-20 bg-gray-50 mb-20" data-aos="fade-up">
        <div className="absolute inset-0 bg-black/50 rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_TeamBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply"
          }}
        />
        <h2 className="text-4xl font-bold text-green-600 mb-6 relative z-10 text-center flex items-center justify-center gap-3">
          <FaUsers className="text-green-600 animate-pulse" />
          Meet Our Team
        </h2>
        <p className="text-center text-gray-100 max-w-2xl mx-auto mb-12 relative z-10">
          Our team is a dynamic blend of professionals...
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {team.map((member, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-md rounded-bl-md shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-500"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white px-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <span className="mt-2 inline-block bg-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {member.role}
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                {member.role.split(" ")[0]}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white text-center flex flex-col items-center justify-center space-y-6 mb-20" data-aos="zoom-in">
        <div className="absolute inset-0 bg-black/50 rounded-3xl"
          style={{
            backgroundImage: `url(${images.image_END01})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply"
          }}
        />
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
