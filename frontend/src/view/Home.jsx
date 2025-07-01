import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaSearch } from "react-icons/fa";
import images from "../assets/Images/images";
import { FaHandPointRight } from "react-icons/fa";import { FaArrowRight } from "react-icons/fa"; 

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
        "Let us help build your business plan The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
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
        "Let us help build your business plan The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
        "You can develop your Business Plan in various ways.",
      ],
      points: [
        "Participants can have individual business plan mentoring with us through a single 3 hour business planning session or over a number of smaller sessions in total of 3 hours.",
        "Participants can enrol in Small Business Training(Cert III in New Business and Entrepreneurship or Skills Set) to start developing their Business Plan during their training",
        "Participants may develop a Business Plan on their own and seek assistance from us to ensure it is a viable plan.",
      ],
      modalImage: images.image_Card02,
    },
    {
      title: "Business Health Check",
      image: images.image_Card03,
      gif: images.image_GIF01,
      paragraph: [
        "Let us help build your business plan The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
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
        "Let us help build your business plan The development and implementation of a viable business plan is an important element of the Self‑Employment Assistance program.",
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

  const openZoom = (index) => {
    setZoomIndex(index);
    setZoomActive(true);
    setTimeout(() => setModalVisible(true), 20);
  };

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
    alert(`Thank you for your interest in "${serviceTitle}". Application process will start soon.`);
    
  };

  return (
    <>
      {/* Top Section */}
      <section className="relative bg-white py-12 px-6 sm:px-12 lg:px-20 font-[Inter] overflow-hidden min-h-screen">
        <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <h2 className="text-[40px] leading-[26px] font-semibold text-gray-800 mb-6" data-aos="fade-up">
              Business Support Services
            </h2>

            <div className="space-y-6 text-gray-600 text-justify">
              {paragraphData.map((text, index) => (
                <div key={index} className="relative flex items-start gap-2 group" data-aos="fade-up" data-aos-delay={index * 100}>
                  <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="flex-1">{text}</p>
                  <button
                    type="button"
                    onClick={() => openZoom(index)}
                    className="absolute -top-8 right-0 flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow-md text-gray-700 hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaSearch size={14} />
                    <span className="text-sm font-medium">Zoom</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 h-[400px]" data-aos="fade-left" data-aos-delay="300">
            <img
              src={images.image_SuportService01}
              alt="Business Support"
              className="w-full h-full object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Zoom Modal */}
        {zoomActive && zoomIndex !== null && (
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${
              modalVisible ? "opacity-100" : "opacity-0 pointer-events-none"
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
              className={`relative max-w-2xl max-h-[80vh] w-full overflow-auto p-8 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl transition-transform duration-300 ease-in-out ${
                modalVisible ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"
              }`}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={closeZoom}
            >
              <h3 className="text-3xl font-semibold mb-6 text-black flex items-center gap-3">
                <FaStar className="text-yellow-500" />
                Business Support Services
              </h3>
              <p className="leading-8 text-black max-w-lg mb-4 text-lg font-medium">{paragraphData[zoomIndex]}</p>
            </div>
          </div>
        )}
      </section>

      {/* Services Cards Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 font-timmana">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)} p
              onMouseLeave={() => setHoveredCard(null)}
              className="relative h-[420px] bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Left Side */}
              <div
                className={`absolute inset-0 z-20 px-6 py-8 transition-transform duration-500 bg-cover bg-top flex flex-col justify-center ${
                  hoveredCard === index ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                }`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              >
               
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

                
                <div className="relative z-10 text-center text-white space-y-6 text-shadow">
                  <h3 className="text-2xl font-extrabold underline decoration-white decoration-2 mb-4">
                    {service.title}
                  </h3>

                  {/* Paragraphs */}
                  <div className="text-[15px] leading-relaxed space-y-3 px-2">
                    {service.paragraph.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  {/* Points */}
                  <ul className="text-sm space-y-3 mt-3 px-4 py-2 rounded-md bg-black/40 shadow font-medium text-left mx-auto w-fit">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="relative pl-6"
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                      >
                        <span className="absolute left-0 top-2 w-3 h-3 bg-red-600 rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side GIF */}
              <div
                className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover bg-center transition-all duration-500 ${
                  hoveredCard === index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${service.gif})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-0" />

                <button
                  onClick={() => openServiceModal(index)}
                  className="relative z-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                >
                  Read More
                </button>
              </div>

          
              <div className="absolute inset-0 bg-white/50 z-0" />
            </div>
          ))}
        </div>
      </section>

      {/* popup */}
     {serviceModalIndex !== null && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center px-4"
    onClick={closeServiceModal}
  >
    {/* Background image with blur and dark overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
      style={{ backgroundImage: `url(${images.image_SuportService01})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0  bg-opacity-70" aria-hidden="true" />

    {/* Modal content with zoom-in effect */}
    <div
      className="relative bg-transparent rounded-xl p-6 max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[80vh]"
      onClick={(e) => e.stopPropagation()}
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      {/* Image and Header Section */}
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
        <div className="flex-1" data-aos="fade-left" data-aos-duration="700">
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

      {/* Points List */}
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

      {/* Apply Now Button */}
      <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="600">
        <button
          onClick={() => handleApplyNow(services[serviceModalIndex].title)}
          className="group bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2"
        >
          Apply Now
          <FaHandPointRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>

      {/* Close Button */}
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



   
    </>
  );
};

export default Home;
