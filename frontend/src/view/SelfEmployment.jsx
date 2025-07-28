import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaMoneyCheckAlt,
  FaLightbulb,
  FaChalkboardTeacher,
  FaFileAlt,
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import {
  FileText,
  Users,
  AlertCircle,
  Award,
  Building2,
  Shield,
  Globe,
} from "lucide-react";

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

          {/* Small Business Coaching Section */}
          <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-amber-50">
            <div className="max-w-6xl mx-auto">
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="text-center mb-8 sm:mb-12 md:mb-16"
              >
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-700 mx-auto mb-2 sm:mb-3 md:mb-4" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
                  Small Business Coaching
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-black">
                  Additional criteria for accessing coaching services
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-700 mr-2 md:mr-3 flex-shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-black text-xs sm:text-sm md:text-base">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Controlling Interest */}
              <div
                data-aos="zoom-in"
                data-aos-delay="700"
                className="mt-6 sm:mt-8 md:mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 text-center"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-700 mr-0 sm:mr-4 mb-2 sm:mb-0" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">
                    Ownership Control
                  </h3>
                </div>
                <p className="text-blue-700 text-xs sm:text-sm md:text-base">
                  Allow you to maintain controlling interest in the business while accessing the program
                </p>
              </div>
            </div>
          </section>

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
