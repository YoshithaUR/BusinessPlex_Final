import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar,  FaHandPointRight } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import images from "../assets/Images/images";

const Home = () => {
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [serviceModalIndex, setServiceModalIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 120,
    });
  }, []);
  // testamonial
  const testimonials = [
    {
      id: 1,
      image: images.image_Testamonial1,
      alt: "Boss Centre CEO",
      text: `I have known Gish for several years, having previously worked with him as a NIS trainer and mentor, and have since supported and collaborated together. Gish is one of the kindest, most honest and respectful people that I have ever met with a true passion for helping people to succeed in business. He has many years of experience in running a successful business and also helping people to move forward with their business journey.`,
      company: "Boss Centre",
      name: "Liz Haselgrove – CEO",
    },
    {
      id: 2,
      image: images.image_Testamonial2,
      alt: "Business Station Manager",
      text: `I think that one of Gish’s strongest attributes is his ability to build rapport and solid relationships, both with clients and with other stakeholders. I understand that this will be a critical factor for this contract, being able to successfully work with a variety of stakeholders, encourage collaboration and create opportunities for the clients / job seekers`,
      company: "Business Station",
      name: "Mark South – General Manager",
    },
    {
      id: 3,
      image: images.image_Testamonial3,
      alt: "SW & Hart CEO",
      text: `As well as his extensive recruitment / HR experience, Gish also has several years’ experience training and mentoring aspiring small business owners. With this being a field that may well be a better option for many job seekers, I believe that Gish is in a unique position to be able to give clients / job seekers a more holistic assessment of what might be the best fit for them, and so help them to successfully move forward with their business.`,
      company: "SW & Hart",
      name: "Kevin Wright – CEO",
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const paragraphData = [
    "We provide administrative support tailored to your business needs.",
    "Our virtual assistant services help you stay productive and organized.",
    "Data entry and management solutions are offered with accuracy and speed.",
    "Customized customer support services enhance your client satisfaction.",
    "Bookkeeping and invoicing handled by professionals for smooth finances.",
    "HR support services including recruitment and payroll assistance.",
    "Technical support solutions tailored to small and medium businesses.",
    "Project management and reporting services that drive efficiency.",
  ];

  const services = [
    {
      title: "Small Business Training",
      image: images.image_Card01,
      gif: images.image_GIF01,
      paragraph: [
        "Let us help build your business plan. The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
        "You can develop your Business Plan in various ways.",
      ],
      points: [
        "Participants can have individual business plan mentoring with us through a single 3 hour business planning session or over a number of smaller sessions in total of 3 hours.",
        "Participants can enrol in Small Business Training(Cert III in New Business and Entrepreneurship or Skills Set) to start developing their Business Plan during their training.",
        "Participants may develop a Business Plan on their own and seek assistance from us to ensure it is a viable plan.",
      ],
      modalImage: images.image_Card01,
    },
    {
      title: "Business Advice",
      image: images.image_Card02,
      gif: images.image_GIF01,
      paragraph: [
        "Let us help build your business plan. The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
        "You can develop your Business Plan in various ways.",
      ],
      points: [
        "Participants can have individual business plan mentoring with us through a single 3 hour business planning session or over a number of smaller sessions in total of 3 hours.",
        "Participants can enrol in Small Business Training(Cert III in New Business and Entrepreneurship or Skills Set) to start developing their Business Plan during their training.",
        "Participants may develop a Business Plan on their own and seek assistance from us to ensure it is a viable plan.",
      ],
      modalImage: images.image_Card02,
    },
    {
      title: "Business Health Check",
      image: images.image_Card03,
      gif: images.image_GIF01,
      paragraph: [
        "Let us help build your business plan. The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
        "You can develop your Business Plan in various ways.",
      ],
      points: [
        "Participants can have individual business plan mentoring with us through a single 3 hour business planning session or over a number of smaller sessions in total of 3 hours.",
        "Participants can enrol in Small Business Training(Cert III in New Business and Entrepreneurship or Skills Set) to start developing their Business Plan during their training.",
        "Participants may develop a Business Plan on their own and seek assistance from us to ensure it is a viable plan.",
      ],
      modalImage: images.image_Card03,
    },
    {
      title: "Exploring Self-Employment Workshop",
      image: images.image_Card04,
      gif: images.image_GIF01,
      paragraph: [
        "Let us help build your business plan. The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
        "You can develop your Business Plan in various ways.",
      ],
      points: [
        "Participants can have individual business plan mentoring with us through a single 3 hour business planning session or over a number of smaller sessions in total of 3 hours.",
        "Participants can enrol in Small Business Training(Cert III in New Business and Entrepreneurship or Skills Set) to start developing their Business Plan during their training.",
        "Participants may develop a Business Plan on their own and seek assistance from us to ensure it is a viable plan.",
      ],
      modalImage: images.image_Card04,
    },
  ];
  const closeZoom = () => {
    setModalVisible(false);
    setTimeout(() => {
      setZoomActive(false);
      setZoomIndex(null);
    }, 300);
  };

  const openServiceModal = (index) => {
    setServiceModalIndex(index);
  };

  const closeServiceModal = () => {
    setServiceModalIndex(null);
  };

  const handleApplyNow = (serviceTitle) => {
    alert(
      `Thank you for your interest in "${serviceTitle}". Application process will start soon.`
    );
  };

  return (
    <>
      <section className="relative bg-amber-50 py-12 px-6 sm:px-12 lg:px-20 font-[Poppins,Roboto,sans-serif] overflow-hidden min-h-[60vh]">
        {/* Background floating elements */}
        <div className="absolute -bottom-20 -left-32 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0"></div>
        <div className="absolute top-10 right-20 w-[200px] h-[200px] bg-blue-200 opacity-20 rounded-full blur-2xl animate-bounce-slow z-0"></div>
        <div className="absolute bottom-32 right-10 w-[150px] h-[150px] bg-yellow-200 opacity-25 rounded-full blur-xl animate-pulse z-0"></div>
        <div className="absolute top-1/2 left-10 w-[100px] h-[100px] bg-pink-200 opacity-20 rounded-full blur-lg animate-ping-slow z-0"></div>
        <div className="absolute top-5 left-1/2 w-[180px] h-[180px] bg-green-200 opacity-15 rounded-full blur-2xl animate-pulse z-0"></div>
        <div className="absolute bottom-10 left-1/4 w-[120px] h-[120px] bg-orange-200 opacity-20 rounded-full blur-xl animate-bounce z-0"></div>
        <div className="absolute top-1/4 right-5 w-[90px] h-[90px] bg-indigo-200 opacity-25 rounded-full blur-lg animate-ping z-0"></div>
        <div className="absolute bottom-1/3 right-1/2 w-[160px] h-[160px] bg-teal-200 opacity-18 rounded-full blur-2xl animate-pulse-slow z-0"></div>
        <div className="absolute top-3/4 left-1/3 w-[140px] h-[140px] bg-rose-200 opacity-22 rounded-full blur-xl animate-bounce-slow z-0"></div>
        <div className="absolute bottom-1/5 right-1/4 w-[130px] h-[130px] bg-violet-200 opacity-20 rounded-full blur-xl animate-ping-slow z-0"></div>
        <div className="absolute top-2/5 left-1/4 w-[110px] h-[110px] bg-amber-200 opacity-25 rounded-full blur-lg animate-bounce z-0"></div>

        {/* Medium floating elements */}
        <div className="absolute top-16 left-3/4 w-[80px] h-[80px] bg-cyan-200 opacity-20 rounded-full blur-lg animate-pulse z-0"></div>
        <div className="absolute bottom-20 left-2/3 w-[70px] h-[70px] bg-violet-200 opacity-25 rounded-full blur-md animate-ping z-0"></div>
        <div className="absolute top-2/3 right-1/4 w-[60px] h-[60px] bg-amber-200 opacity-20 rounded-full blur-md animate-bounce z-0"></div>
        <div className="absolute bottom-1/4 left-1/6 w-[85px] h-[85px] bg-emerald-200 opacity-18 rounded-full blur-lg animate-pulse-slow z-0"></div>
        <div className="absolute top-1/6 right-2/3 w-[75px] h-[75px] bg-sky-200 opacity-22 rounded-full blur-md animate-ping-slow z-0"></div>
        <div className="absolute bottom-3/5 left-1/2 w-[65px] h-[65px] bg-mint-200 opacity-20 rounded-full blur-md animate-bounce-slow z-0"></div>
        <div className="absolute top-3/5 right-1/6 w-[70px] h-[70px] bg-lime-200 opacity-25 rounded-full blur-md animate-ping z-0"></div>
        <div className="absolute bottom-2/5 left-3/4 w-[75px] h-[75px] bg-coral-200 opacity-20 rounded-full blur-lg animate-pulse z-0"></div>

        {/* Small floating elements */}
        <div className="absolute top-1/3 left-1/5 w-[50px] h-[50px] bg-fuchsia-200 opacity-25 rounded-full blur-sm animate-bounce z-0"></div>
        <div className="absolute bottom-1/2 right-1/6 w-[45px] h-[45px] bg-lime-200 opacity-20 rounded-full blur-sm animate-pulse z-0"></div>
        <div className="absolute top-5/6 right-3/5 w-[40px] h-[40px] bg-red-200 opacity-18 rounded-full blur-sm animate-ping z-0"></div>
        <div className="absolute bottom-1/6 right-3/4 w-[55px] h-[55px] bg-blue-300 opacity-22 rounded-full blur-sm animate-bounce-slow z-0"></div>
        <div className="absolute top-1/2 left-2/3 w-[35px] h-[35px] bg-purple-200 opacity-20 rounded-full blur-sm animate-pulse-slow z-0"></div>
        <div className="absolute bottom-3/4 left-1/4 w-[30px] h-[30px] bg-rose-300 opacity-25 rounded-full blur-sm animate-bounce z-0"></div>
        <div className="absolute top-1/4 right-1/3 w-[45px] h-[45px] bg-teal-300 opacity-20 rounded-full blur-sm animate-ping-slow z-0"></div>
        <div className="absolute bottom-1/3 left-1/2 w-[40px] h-[40px] bg-orange-300 opacity-22 rounded-full blur-sm animate-pulse z-0"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 left-1/3 w-8 h-8 bg-purple-400 opacity-30 rotate-45 animate-spin-slow z-0"></div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-blue-400 opacity-25 rounded-full animate-bounce z-0"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-16 bg-gradient-to-b from-purple-300 to-transparent opacity-40 animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 right-1/5 w-10 h-10 bg-green-400 opacity-20 rotate-12 animate-spin z-0"></div>
        <div className="absolute top-1/6 left-1/2 w-3 h-12 bg-gradient-to-t from-blue-300 to-transparent opacity-30 animate-pulse-slow z-0"></div>
        <div className="absolute bottom-1/3 left-3/4 w-7 h-7 bg-yellow-400 opacity-25 rounded-full animate-ping z-0"></div>
        <div className="absolute top-2/3 right-1/6 w-5 h-20 bg-gradient-to-b from-pink-300 to-transparent opacity-35 animate-bounce-slow z-0"></div>
        <div className="absolute bottom-1/5 right-2/5 w-12 h-12 bg-orange-400 opacity-20 rotate-45 animate-spin-slow z-0"></div>
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-indigo-400 opacity-30 animate-pulse z-0"></div>
        <div className="absolute bottom-2/3 right-1/3 w-8 h-8 bg-teal-400 opacity-25 rounded-full animate-bounce z-0"></div>
        <div className="absolute top-3/5 left-2/5 w-6 h-6 bg-violet-400 opacity-25 rotate-45 animate-ping-slow z-0"></div>
        <div className="absolute bottom-1/2 left-1/8 w-5 h-5 bg-amber-400 opacity-20 animate-spin z-0"></div>

        {/* Extra tiny elements */}
        <div className="absolute top-1/5 right-1/2 w-2 h-2 bg-rose-400 opacity-40 rounded-full animate-ping z-0"></div>
        <div className="absolute bottom-1/6 left-2/5 w-3 h-3 bg-cyan-400 opacity-35 animate-bounce z-0"></div>
        <div className="absolute top-3/4 right-1/8 w-2 h-8 bg-gradient-to-t from-violet-400 to-transparent opacity-30 animate-pulse z-0"></div>
        <div className="absolute bottom-1/2 left-1/8 w-4 h-4 bg-amber-400 opacity-25 rotate-90 animate-spin-slow z-0"></div>
        <div className="absolute top-1/8 right-3/5 w-3 h-3 bg-emerald-400 opacity-30 rounded-full animate-ping-slow z-0"></div>
        <div className="absolute bottom-3/8 left-3/8 w-2 h-2 bg-pink-400 opacity-35 animate-bounce-slow z-0"></div>
        <div className="absolute top-2/8 right-1/8 w-3 h-3 bg-blue-400 opacity-30 rounded-full animate-pulse z-0"></div>
        <div className="absolute bottom-2/8 left-1/8 w-4 h-4 bg-orange-400 opacity-25 rotate-45 animate-bounce z-0"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

        {/* Main content container */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text content */}
          <div className="lg:w-1/2 relative">
            <h2
              className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 font-[Montserrat,Open_Sans,sans-serif]"
              data-aos="fade-up"
            >
              Business Support Services
            </h2>

            <div
              className="space-y-6 text-gray-600 text-justify text-sm sm:text-base font-[Poppins,Roboto,sans-serif]"
            >
              {paragraphData.map((text, index) => (
                <div
                  key={index}
                  className="relative group bg-white/70 p-5 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-200 cursor-context-menu"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-3">
                    <TiTickOutline className="text-yellow-500 mt-1 animate-pulse" />
                    <p className="flex-1 leading-relaxed group-hover:text-gray-800 transition duration-200">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image content */}
          <div
            className="lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[450px] mt-8"  // mt-8 margin top add කරලා
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <video autoPlay muted loop

              src={images.vuideo_video2}
              alt="Business Support"
              className="w-full h-full object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 "
            />
          </div>
        </div>

        {/* Zoom Modal */}
        {zoomActive && zoomIndex !== null && (
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${modalVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            onClick={closeZoom}
          >
            <img
              src={images.image_SuportService02}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover filter blur-xs brightness-75"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div
              className={`relative max-w-2xl max-h-[80vh] w-full overflow-auto p-6 sm:p-8 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl transition-transform duration-300 ease-in-out ${modalVisible
                ? "scale-100 opacity-100 pointer-events-auto"
                : "scale-90 opacity-0 pointer-events-none"
                }`}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={closeZoom}
            >
              <h3 className="text-3xl font-semibold mb-6 text-black flex items-center gap-3 font-[Montserrat,Open_Sans,sans-serif]">
                <FaStar className="text-yellow-500" />
                Business Support Services
              </h3>
              <p className="leading-8 text-black max-w-lg mb-4 text-lg font-[Poppins,Roboto,sans-serif] font-medium">
                {paragraphData[zoomIndex]}
              </p>
            </div>
          </div>
        )}
      </section>
      {/* Services */}
      <section className="bg-amber-50 py-12 px-4 sm:px-6 lg:px-20 font-[Poppins,Roboto,sans-serif]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {services.map((service, index) => (
      <div
        key={index}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        className="relative h-[520px] bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 group cursor-pointer"
        data-aos="zoom-in"
        data-aos-delay={index * 100}
      >
        {/* Default Image + Overlay */}
        <div
          className={`absolute inset-0 z-20 p-6 transition-all duration-700 ease-in-out bg-cover bg-top flex flex-col justify-center items-center rounded-3xl shadow-xl 
            ${hoveredCard === index ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-0" />

          {/* Content */}
          <div className="relative z-10 text-white text-center px-4 sm:px-6">
  <h3 className="text-2xl sm:text-3xl font-bold tracking-wider text-green-300 drop-shadow-lg animate-fade-in mb-4 font-[Montserrat,Open_Sans,sans-serif]">
    {service.title}
  </h3>
  <div className="text-sm sm:text-base mt-4 p-4 bg-black/40 rounded-xl backdrop-blur-md shadow-md space-y-2 font-[Poppins,Roboto,sans-serif]">
    {service.paragraph.map((para, idx) => (
      <p
        key={idx}
        className="leading-relaxed text-white/90 tracking-wide"
      >
        {para}
      </p>
    ))}
  </div>
</div>
</div>

        {/* Hover GIF + Button */}
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover transition-all duration-500 ease-in-out 
            ${hoveredCard === index ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          style={{ backgroundImage: `url(${service.gif})` }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <button
            onClick={() => openServiceModal(index)}
            className="relative z-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg font-[Poppins,Roboto,sans-serif]"
          >
            Read More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>




      {/* Service Modal */}
      {serviceModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={closeServiceModal}
        >
          <div
            className="absolute inset-0 bg-cover bg-center filter  brightness-50"
            style={{
              backgroundImage: `url(${services[serviceModalIndex].image})`,
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-0" aria-hidden="true">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.image_SuportService02})`,
              }}
            />


            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div
            className="relative bg-transparent rounded-xl p-4 sm:p-6 max-w-full sm:max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div
              className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <img
                src={services[serviceModalIndex].modalImage}
                alt={services[serviceModalIndex].title}
                className="w-full md:w-48 rounded-lg shadow-lg object-cover"
                data-aos="zoom-in"
                data-aos-duration="800"
              />
              <div
                className="flex-1"
                data-aos="fade-left"
                data-aos-duration="700"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  {services[serviceModalIndex].title}
                </h2>
                {services[serviceModalIndex].paragraph.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-white mb-3 text-[16px] leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <ul
              className="space-y-3 text-white text-[15px] leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {services[serviceModalIndex].points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                >
                  <span className="mt-1 w-4 h-4 bg-red-600 rounded-full flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <button
                onClick={() =>
                  handleApplyNow(services[serviceModalIndex].title)
                }
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2"
              >
                Apply Now
                <FaHandPointRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>

            <button
              onClick={closeServiceModal}
              className="absolute top-3 right-4 text-white hover:text-red-500 font-bold text-3xl"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {/* Self */}
      <section
        className="relative w-full min-h-[80vh] overflow-hidden mb-4"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-700"
          style={{
            backgroundImage: `url(${images.image_five})`,
          }}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="absolute inset-0 bg-black/60  z-0" />

        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full px-6 md:px-20 text-white">
          <div
            className="md:w-2/3 mb-10 md:mb-0 mt-16 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <h1
              className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-md text-left font-[Montserrat,Open_Sans,sans-serif]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              Self-Employment Assistance Program
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed text-left md:text-justify max-w-2xl font-[Poppins,Roboto,sans-serif]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              We offer a range of practical workshops across{" "}
              <strong>Perth, Australia</strong>. They are{" "}
              <strong>delivered</strong> by selected presenters who are specialists
              in their subject matters and have a background in small business.
              Self-Employment Assistance Program is{" "}
              <strong>funded</strong> by the Australian Federal Government to assist
              unemployed, under-employed and owners of existing micro-businesses
              (with up to 4 employees) to explore opportunities for self-employment.
            </p>
          </div>

          <div
            className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="600"
          >
            <button
              className="bg-white text-black px-6 py-4 rounded-full font-semibold flex items-center hover:scale-105 hover:bg-gray-200 transition duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2),0_0_10px_rgba(255,165,0,0.7)] font-[Poppins,Roboto,sans-serif]"
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              Read More …
              <FaHandPointRight className="ml-2 text-xl" />
            </button>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 text-center   text-white  "
        data-aos="fade-up"
      >
        <h2
          className="text-3xl sm:text-4xl text-black font-extrabold mb-12 tracking-wider drop-shadow-lg font-[Montserrat,Open_Sans,sans-serif]"
        >
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 group">
          {testimonials.map((t, index) => (
            <div
              key={t.id || index}
              onClick={() => setSelectedTestimonial(t)}
              className={`
          bg-white text-gray-700 p-6 sm:p-8 rounded-3xl shadow-2xl relative cursor-pointer
          transform transition-all duration-500 ease-in-out
          hover:scale-105 hover:shadow-3xl hover:rotate-1 hover:z-10
          group-hover:blur-sm group-hover:brightness-75 hover:!blur-none hover:!brightness-100
        `}
              style={{ perspective: "1000px" }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="text-6xl sm:text-7xl text-gray-300 absolute -top-5 left-5 sm:-top-6 sm:left-6 select-none pointer-events-none"
                aria-hidden="true"
              >
                “
              </div>

              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-4 border-green-400 mb-6 shadow-md">
                <img
                  src={t.image}
                  alt={t.alt || `Testimonial ${index + 1}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              <p className="text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 line-clamp-4 font-[Poppins,Roboto,sans-serif]">
                {t.text}
              </p>

              <p className="font-semibold text-base sm:text-lg font-[Poppins,Roboto,sans-serif]">{t.company}</p>
              <p className="text-xs sm:text-sm text-gray-500 font-[Poppins,Roboto,sans-serif]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Testimonial Popup */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          style={{ backgroundImage: `url(${images.image_three})` }}
          onClick={() => setSelectedTestimonial(null)}
          data-aos="fade-in"
          data-aos-duration="600"
        >
          <div className="absolute inset-0 bg-black/60" />

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md sm:max-w-3xl w-full shadow-2xl relative mx-4 sm:mx-auto font-[Poppins,Roboto,sans-serif]"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-green-400 mb-6 shadow-lg">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.alt}
                className="object-cover w-full h-full"
              />
            </div>

            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8 whitespace-pre-line">
              {selectedTestimonial.text}
            </p>

            <p className="font-semibold text-xl">
              {selectedTestimonial.company}
            </p>
            <p className="text-gray-600 text-sm">{selectedTestimonial.name}</p>
          </div>
        </div>
      )}


      {/* Contact */}
      <section
        className="w-full py-12 bg-amber-50 flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="relative bg-black/80 rounded-3xl shadow-xl px-4 sm:px-8 py-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">

          {/* Background Overlay */}
          <div className="absolute inset-0 rounded-3xl z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images.image_three})` }}
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Header */}
          <div className="absolute top-4 w-full text-center z-10">
            <h2 className="text-xl md:text-3xl font-bold text-white drop-shadow px-4">
              Have any Question?
            </h2>
          </div>

          {/* Left Column - Inputs */}
          <div className="z-10 flex flex-col justify-center space-y-4 mt-10 md:mt-12 px-2 md:px-4" data-aos="fade-right" data-aos-delay="200">
            {[
              "First Name",
              "Last Name",
              "E-Mail",
              "Age",
              "Contact Number",
            ].map((placeholder, i) => (
              <input
                key={i}
                type={placeholder === "E-Mail" ? "email" : placeholder === "Age" ? "number" : "text"}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-green-400 placeholder-white text-white bg-transparent"
              />
            ))}
          </div>

          {/* Right Column - Textarea + Button */}
          <div className="z-10 flex flex-col justify-center gap-4 mt-10 md:mt-12 px-2 md:px-4" data-aos="fade-left" data-aos-delay="400">
            <textarea
              placeholder="Type your message..."
              className="w-full h-32 md:h-36 px-4 py-3 rounded-xl border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-green-400 placeholder-white text-white bg-transparent"
            />
            <button className="bg-gradient-to-r from-green-400 to-green-300 text-black font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition duration-300 w-full md:w-auto">
              Submit
            </button>
          </div>
        </div>
      </section>



      {/* Footer Section */}
      <footer className="text-white text-sm">
        <div className="bg-gray-900 px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-t-3xl -mt-6">
          {/* Logo + Contact Info */}
          <div>
            <img
              src={images.image_logo}
              alt="Businessplex"
              className="w-28 mb-4 mx-auto md:mx-0"
            />
            <div className="space-y-2 text-center md:text-left">
              <a
                href="https://www.google.com/maps?q=1/3+Marchant+Way,+Morley+WA+6062"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-amber-400 transition"
              >
                1/3 Marchant Way, Morley 6062
              </a>
              <a
                href="tel:1300894480"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition"
              >
                <FaPhoneAlt /> Free call: 1300 894 480
              </a>
              <a
                href="tel:0861565820"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition"
              >
                <FaPhoneAlt /> 08 6156 5820
              </a>
              <a
                href="mailto:admin@businessplex.com.au"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition break-words"
              >
                <MdEmail /> admin@businessplex.com.au
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {[
                { href: "/", label: "Home" },
                { href: "#", label: "About Us" },
                { href: "#", label: "Our Team" },
                { href: "#", label: "Contact Us" },
                { href: "#", label: "Privacy Policy" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="block hover:text-amber-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Services
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {[
                { href: "#", label: "Small Business Training" },
                { href: "#", label: "Exploring Self-Employment Workshops" },
                { href: "#", label: "Business Health Checks" },
                { href: "#", label: "Business Advice" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="block hover:text-amber-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Newsletter
            </h3>
            <form
              className="flex flex-col space-y-3 max-w-xs mx-auto md:mx-0"
              onSubmit={(e) => e.preventDefault()}
            >
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

        {/* Footer Bottom Bar */}
        <div className="bg-gray-800 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
          {/* Logos */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <img
              src={images.image_Footer1}
              alt="Australian Qualification"
              className="h-16"
            />
            <img
              src={images.image_Footer2}
              alt="Workforce Australia"
              className="h-16"
            />
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-sm">
            Copyright 2025 © Businessplex. All Rights Reserved. Development by
            A4Technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://web.facebook.com/BusinessplexTrainingCentre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/businessplex/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
