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
    // Check if we need to scroll to a specific target
    const urlHash = window.location.hash;
    
    if (urlHash === '#after-slideshow') {
      // Scroll to the target element right next to slideshow
      setTimeout(() => {
        const targetElement = document.getElementById('after-slideshow');
        if (targetElement) {
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - 60; // 60px offset to show content right next to slideshow
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 1000); // Wait for page to load and animations to start
    } else {
      // Default scroll behavior - scroll down a little bit when component mounts
      setTimeout(() => {
        window.scrollTo({
          top: 100, // Scroll down 100px from top
          behavior: 'smooth'
        });
      }, 100);
    }

    // Initialize AOS with refresh
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
      delay: 100,
      easing: 'ease-in-out',
    });

    // Force refresh AOS on component mount
    setTimeout(() => {
      AOS.refresh();
    }, 200);

    // Add scroll listener to trigger animations
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
        data-aos="fade-in"
        data-aos-duration="2000"
      ></div>
      <div 
        className="absolute -top-10 left-0 w-80 h-80 bg-gradient-to-br from-white via-green-50 to-yellow-50 opacity-30 rounded-full blur-[130px] z-0" 
        data-aos="fade-right"
        data-aos-duration="2000"
      />
      <div 
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-[120px] z-0" 
        data-aos="fade-left"
        data-aos-duration="2000"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div 
          className="text-center" 
          data-aos="fade-down" 
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <h2 
            className="text-dark font-extrabold text-4xl sm:text-5xl mb-4"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Self-Employment Assistance Program
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Celebrating <strong>40 Years</strong> of empowering small businesses in Australia.
          </p>
          <div 
            className="h-1 w-20 bg-green-600 mx-auto mt-4 rounded-full"
            data-aos="zoom-in-up"
            data-aos-delay="800"
            data-aos-duration="800"
          ></div>
        </div>

        {/* Hero Image */}
        <div
          className="relative w-full h-72 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <img
            src={images.image_Programepm01}
            alt="Self Employment Program"
            className="w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
            data-aos="fade-in"
            data-aos-delay="500"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"
            data-aos="fade-in"
            data-aos-delay="700"
          ></div>
          {/* Scroll target right at the end of slideshow */}
          <div id="after-slideshow" className="absolute bottom-0 left-0 w-full h-0"></div>
        </div>

        {/* Overview */}
        <div className="space-y-10 text-[17px] sm:text-lg leading-relaxed px-2">
          <p 
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            The <strong>Self-Employment Assistance Program (SEA)</strong> is a fully government-funded
            initiative that supports aspiring entrepreneurs or those with micro-businesses by offering
            structured training, mentoring, and ongoing support.
          </p>

          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Whether you're launching your first business or growing an existing one,
            <strong> Businessplex </strong> will support your journey with guidance through the SEA program.
          </p>

          {/* Benefits */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <h3 
              className="text-3xl font-bold text-black flex items-center gap-3 mb-6"
              data-aos="slide-right"
              data-aos-delay="100"
            >
              <FaLightbulb 
                className="text-blue-800" 
                data-aos="rotate-in"
                data-aos-delay="300"
              />
              Program Benefits
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaChalkboardTeacher className="text-blue-800 text-2xl" />,
                  text: "Accredited Small Business Training",
                },
                {
                  icon: <MdOutlineBusinessCenter className="text-blue-800 text-2xl" />,
                  text: "12-month Business Coaching",
                },
                {
                  icon: <FaMoneyCheckAlt className="text-blue-800 text-2xl" />,
                  text: "SEA Allowance (equivalent to JobSeeker Payments)",
                },
                {
                  icon: <FaCheckCircle className="text-blue-800 text-2xl" />,
                  text: "$300 Business Reimbursement (insurance, etc.)",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md hover:shadow-lg transition-all duration-500 p-5 rounded-2xl flex items-start gap-4 border-l-4 border-blue-500 hover:border-green-500 transform hover:-translate-y-1"
                  data-aos="flip-left"
                  data-aos-delay={200 + idx * 150}
                  data-aos-duration="800"
                >
                  <div data-aos="zoom-in" data-aos-delay={400 + idx * 150}>
                    {item.icon}
                  </div>
                  <span 
                    data-aos="fade-left" 
                    data-aos-delay={500 + idx * 150}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Small Business Coaching Section */}
          <section 
            className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-white via-green-50 to-yellow-50 rounded-3xl"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div className="max-w-6xl mx-auto">
              <div
                data-aos="flip-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="text-center mb-8 sm:mb-12 md:mb-16"
              >
                <FileText 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-800 mx-auto mb-2 sm:mb-3 md:mb-4" 
                  data-aos="bounce-in"
                  data-aos-delay="100"
                />
                <h2 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3 md:mb-4"
                  data-aos="slide-down"
                  data-aos-delay="300"
                >
                  Small Business Coaching
                </h2>
                <p 
                  className="text-sm sm:text-base md:text-lg text-black"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
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
                    data-aos-delay={`${100 + i * 150}`}
                    data-aos-duration="1000"
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-800 mr-2 md:mr-3 flex-shrink-0"
                        data-aos="rotate-in"
                        data-aos-delay={`${200 + i * 150}`}
                      >
                        {item.icon}
                      </div>
                      <h3 
                        className="text-sm sm:text-base md:text-lg font-bold text-black"
                        data-aos="slide-right"
                        data-aos-delay={`${300 + i * 150}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p 
                      className="text-black text-xs sm:text-sm md:text-base"
                      data-aos="fade-in"
                      data-aos-delay={`${400 + i * 150}`}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Controlling Interest */}
              <div
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="1200"
                className="mt-6 sm:mt-8 md:mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 text-center transform hover:scale-102 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <Users 
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-800 mr-0 sm:mr-4 mb-2 sm:mb-0" 
                    data-aos="bounce-in"
                    data-aos-delay="100"
                  />
                  <h3 
                    className="text-base sm:text-lg md:text-xl font-bold text-black"
                    data-aos="slide-left"
                    data-aos-delay="300"
                  >
                    Ownership Control
                  </h3>
                </div>
                <p 
                  className="text-blue-800 text-xs sm:text-sm md:text-base"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Allow you to maintain controlling interest in the business while accessing the program
                </p>
              </div>
            </div>
          </section>

          {/* Payments That May Affect */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
            className="pt-10 bg-white/60 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
          >
           <h3
  className="text-3xl text-black flex items-center gap-3 mb-6"
  data-aos="slide-right"
  data-aos-delay="200"
>
  {/* <FaCheckCircle 
    className="text-blue-800" 
    data-aos="bounce-in"
    data-aos-delay="100"
  /> */}
  {/* Payments That May Affect SEA Allowance */}
</h3>
            
            <p 
              className="text-base text-gray-700 mb-6"
              data-aos="fade-in"
              data-aos-delay="400"
            >
              If you are receiving any of the following payments, it will continue and you will not be entitled for the SEA Allowance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pl-2">
              {[
                "Disability Support Pension",
                "Parenting Payment (Single/Partnered)",
                "Age Pension",
                "Carer Payment",
                "Partner Service Pension",
                "War Widow(er)'s Pension",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-base text-gray-700 hover:translate-x-2 transition-all duration-500 transform hover:scale-105"
                  data-aos="slide-right"
                  data-aos-delay={200 + index * 100}
                  data-aos-duration="800"
                >
                  <FaCheckCircle 
                    className="text-blue-500" 
                    data-aos="zoom-in"
                    data-aos-delay={300 + index * 100}
                  />
                  <span
                    data-aos="fade-left"
                    data-aos-delay={400 + index * 100}
                  >
                    {item}
                  </span>
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