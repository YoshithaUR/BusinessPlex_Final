import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaMoneyCheckAlt,
  FaLightbulb,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import images from "../assets/Images/images";

const SelfEmployment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-green-50 to-yellow-50 py-24 px-6 sm:px-10 lg:px-32 font-[Poppins,sans-serif] text-gray-800 overflow-hidden">
      {/* Background Patterns */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="absolute -top-10 left-0 w-80 h-80 bg-yellow-200 opacity-30 rounded-full blur-[130px] z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-[120px] z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-green-700 font-extrabold text-4xl sm:text-5xl mb-4">
            Self-Employment Assistance Program
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Celebrating <strong>40 Years</strong> of empowering small businesses in Australia.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Hero Image */}
        <div
          className="relative w-full h-72 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-xl"
          data-aos="zoom-in"
        >
          <img
            src={images.image_ServicePopup01}
            alt="Self Employment Program"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Overview */}
        <div className="space-y-10 text-[17px] sm:text-lg leading-relaxed px-2">
          <p data-aos="fade-up">
            The <strong>Self-Employment Assistance Program (SEA)</strong> is a fully government-funded
            initiative that supports aspiring entrepreneurs or those with micro-businesses by offering
            structured training, expert mentoring, and ongoing support.
          </p>

          <p data-aos="fade-up" data-aos-delay="100">
            Whether you’re launching your first business or growing an existing one,
            <strong> Businessplex </strong> will support your journey with guidance through the SEA program.
          </p>

          {/* Benefits */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl font-bold text-green-700 flex items-center gap-3 mb-6">
              <FaLightbulb className="text-yellow-500" />
              Program Benefits
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaChalkboardTeacher className="text-green-600 text-2xl" />,
                  text: "Accredited Small Business Training",
                },
                {
                  icon: <MdOutlineBusinessCenter className="text-green-700 text-2xl" />,
                  text: "12-month Business Coaching",
                },
                {
                  icon: <FaMoneyCheckAlt className="text-green-500 text-2xl" />,
                  text: "SEA Allowance (similar to JobSeeker)**",
                },
                {
                  icon: <FaCheckCircle className="text-green-500 text-2xl" />,
                  text: "$300 Business Reimbursement (insurance, etc.)",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md hover:shadow-lg transition p-5 rounded-2xl flex items-start gap-4 border-l-4 border-green-500"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payments That May Affect */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="pt-10 bg-white/60 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-lg transition hover:shadow-2xl"
          >
            <h3
              className="text-3xl font-bold text-green-700 flex items-center gap-3 mb-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <FaCheckCircle className="text-green-600 animate-bounce" />
              Payments That May Affect SEA Allowance
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 pl-2">
              {[
                "Disability Support Pension",
                "Parenting Payment (Single/Partnered)",
                "Age Pension",
                "Carer Payment",
                "Partner Service Pension",
                "War Widow(er)’s Pension",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-base text-gray-700 hover:translate-x-2 transition-transform duration-300"
                  data-aos="fade-left"
                  data-aos-delay={150 + index * 100}
                >
                  <FaCheckCircle className="text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfEmployment;
