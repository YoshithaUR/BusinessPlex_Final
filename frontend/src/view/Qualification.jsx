import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaCheckCircle, FaGraduationCap, FaCertificate, FaBusinessTime } from "react-icons/fa";
import images from "../assets/Images/images";
import pdf from "../assets/Images/pdf";
const qualificationsData = [
  {
    title: "Certificate III in Entrepreneurship and New Business",
    code: "BSB30220",
    // subtitle: "Self-Employment Assistance Program",
    skills: [
      "Reflects the role of individuals establishing or carrying on business as a sole trader or contractor, as well as those supporting the establishment of a new venture as part of a larger organisation. ",
      "Fully Government Funded",
    ],
    image: images.images_qualifications01,
    link: "./ApplicationForm",
    icon: FaBusinessTime,
    gradient: "from-blue-500 to-blue-800",
    accentColor: "blue"
  },
   {
    title: "Certificate IV in Entrepreneurship and New Business",
    code: "BSB40320",
    // subtitle: "Advanced Business Development",
    skills: [
      "Reflects the role of individuals establishing or operating a business providing self employment as well as those establishing a new venture as part of a larger organisation.",
      "Fully Government Funded",
    ],
    image: images.images_qualifications02,
    link: "./ApplicationForm",
    icon: FaBusinessTime,
    gradient: "from-blue-500 to-blue-800",
     accentColor: "blue"
  },
   {
    title: "Certificate III in Business (Customer Engagement)",
    code: "BSB30120",
    // subtitle: "Core Business Operations",
    skills: [
      "Reflects the role of individuals in a variety of Business Services job roles. It is likely that these individuals are establishing their own work performance.",
    ],
    image: images.images_qualifications03,
    link: "./ApplicationForm",
    icon: FaGraduationCap,
    gradient: "from-blue-500 to-blue-800",
     accentColor: "blue"
  },
  {
    title: "Diploma of Quality Auditing",
    code: "BSB50920",
    // subtitle: "Work with Audit Professionals",
    skills: [
      "Reflects the role of individuals who possess a sound theoretical knowledge base in quality auditing and use a range of specialised, technical or managerial competencies to plan, carry out and evaluate their own work or the work of an audit team.",
    ],
    image: images.images_qualifications04,
    link: "./ApplicationForm",
    icon: FaCertificate,
    gradient: "from-blue-500 to-blue-800",
    accentColor: "blue"
  },
 
 
];

const Qualifications = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleApplyNow = () => {
    // Navigate to ApplicationForm page
    navigate("/ApplicationForm");
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-green-50 to-yellow-50 py-24 px-6 sm:px-10 lg:px-20 font-[Poppins,Roboto,sans-serif] overflow-hidden">
   <br/><br/>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-down">
          {/* <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-white/20">
            <FaGraduationCap className="text-2xl text-indigo-8  00" />
            <span className="text-indigo-700 font-semibold text-sm uppercase tracking-wider">Professional Development</span>
          </div> */}
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Explore Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Step forward with skill-enhancing certifications designed to elevate your professional journey and unlock new opportunities
          </p>
        </div>

        {/* Cards  */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-8xl mx-auto">
          {qualificationsData.map((qual, index) => {
            const IconComponent = qual.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-3xl hover:scale-[1.03] hover:-translate-y-3 flex flex-col h-full border border-white/30"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
          
                <div className={`absolute inset-0 bg-gradient-to-r ${qual.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm -z-10`}></div>
                
                
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={qual.image}
                    alt={qual.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 filter brightness-105 contrast-110"
                  />
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${qual.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-40`}></div> */}
                  
                 
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent className="text-2xl text-gray-700" />
                  </div>
                  
                 
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                    <span className="text-sm font-bold text-gray-800 tracking-wide">{qual.code}</span>
                  </div>

                  
                  <div className="absolute top-6 left-6 w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full"></div>
                  

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-white/95 backdrop-blur-sm">
                  <div className="space-y-5">
                    {/* Title Section */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-gray-900 transition-colors">
                        {qual.title}
                      </h3>
                      {/* <div className={`inline-block px-4 py-2 bg-${qual.accentColor}-50 text-${qual.accentColor}-700 rounded-full text-sm font-medium border border-${qual.accentColor}-100`}>
                        {qual.subtitle}
                      </div> */}
                    </div>
                    
                    
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                       
                      </h4>
                      <ul className="space-y-3">
                        {qual.skills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-black leading-relaxed">
                            <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <span className="group-hover:text-gray-700 transition-colors font-medium">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                 
                  <div className="mt-6">
                    <button
                      onClick={handleApplyNow}
                      className={`relative inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${qual.gradient} text-white rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-500 hover:shadow-2xl hover:shadow-${qual.accentColor}-500/30 group/btn overflow-hidden transform hover:scale-105`}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        
                        Apply Now 
                        <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </span>
                      
                      
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                      
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
        <div className="mt-24" data-aos="fade-up" data-aos-delay="800">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
           
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/30 overflow-hidden">
              
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50"></div>
              
              <div className="relative z-10">
                
                <div className="mb-8 flex justify-center lg:justify-start">
                  <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-white/50 transform transition-all duration-500 hover:scale-110 hover:rotate-3">
                    <FaGraduationCap className="text-blue-600 text-6xl drop-shadow-lg" />
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-3 bg-indigo-100 px-6 py-3 rounded-full mb-6">
                  <FaGraduationCap className="text-indigo-600" />
                  <span className="text-indigo-700 font-semibold text-sm uppercase tracking-wide">Ready to Begin?</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">Ready to Start Your Journey?</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed text-center lg:text-left">
                 If you meet these eligibility criteria, take the next step towards building your successful business
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 transform">
                    <a href="tel:+08 6156 5820">
                    Contact Now
                  </a>
                  </button>
                  <button 
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 hover:scale-105 transform bg-white/50">
                  <a href={pdf.pdf_StudentInformation}> Student Handbook</a>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative" data-aos="fade-left" data-aos-delay="1000">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={images.image_Footer1} 
                  alt="Professional Development"
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-105"
                />
                
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-indigo-600/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
               
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <FaGraduationCap className="text-2xl text-indigo-600" />
                </div>
                
               
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <h4 className="text-white text-xl font-bold mb-2">Excellence in Education</h4>
                  <p className="text-white/90 text-sm">Empowering careers through quality training and certification</p>
                </div>
              </div>
              
           
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;