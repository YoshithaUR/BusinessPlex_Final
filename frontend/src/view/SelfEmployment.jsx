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
import images from "../assets/Images/images"; // your image path

const SelfEmployment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-tr from-green-50 via-white to-amber-50 py-24 px-6 sm:px-10 lg:px-32 font-[Poppins,sans-serif] overflow-hidden text-gray-800">
      {/* Texture Background */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Blur Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-200 opacity-30 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-200 opacity-20 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 leading-tight">
            Self-Employment Assistance Program
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Celebrating <strong>40 Years</strong> of Self-Employment Support in Australia!
          </p>
        </div>

        {/* Hero Image */}
        <div
          className="relative w-full h-72 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl"
          data-aos="zoom-in"
        >
          <img
            src={images.image_ServicePopup01}
            alt="Self Employment Program"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Overview Paragraphs */}
        <div className="space-y-10 text-gray-800 text-lg leading-relaxed px-2">
          <p data-aos="fade-up">
            The <strong>Self-Employment Assistance Program (SEA)</strong> is a fully government-funded
            initiative supporting individuals with a viable business idea or micro-business. It offers
            essential training and guidance to start, manage, or stabilise your venture.
          </p>

          <p data-aos="fade-up" data-aos-delay="100">
            Whether you’re just starting or looking to grow, <strong>Businessplex</strong> is here to guide you through every stage of the SEA program.
          </p>

          {/* Benefits Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl font-bold text-green-700 flex items-center gap-3 mb-6">
              <FaLightbulb className="text-yellow-500" />
              Benefits of the Program
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaChalkboardTeacher className="text-green-500 text-2xl" />,
                  text: "Accredited Small Business Training",
                },
                {
                  icon: <MdOutlineBusinessCenter className="text-green-600 text-2xl" />,
                  text: "12-month Business Coaching Support",
                },
                {
                  icon: <FaMoneyCheckAlt className="text-green-500 text-2xl" />,
                  text: "SEA Allowance (similar to JobSeeker Payment)**",
                },
                {
                  icon: <FaCheckCircle className="text-green-500 text-2xl" />,
                  text: "$300 Business Cost Reimbursement (e.g., insurance)",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white/60 backdrop-blur-lg p-5 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  {item.icon}
                  <span className="text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payments Info */}
          <div data-aos="fade-up" data-aos-delay="300" className="pt-10">
            <h3 className="text-3xl font-bold text-green-700 flex items-center gap-3 mb-4">
              <FaCheckCircle className="text-green-600" />
              Payments That May Affect SEA Allowance
            </h3>
            <ul className="list-disc ml-6 text-base space-y-2">
              <li>Disability Support Pension</li>
              <li>Parenting Payment (Single/Partnered)</li>
              <li>Age Pension</li>
              <li>Carer Payment</li>
              <li>Partner Service Pension</li>
              <li>War Widow(er)’s Pension</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfEmployment;
