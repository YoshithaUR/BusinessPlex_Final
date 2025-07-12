import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Award,
  CheckCircle,
  Megaphone,
  Users,
  Lightbulb,
} from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const rplSteps = [
    "Skills Audit",
    "Assessment", 
    "Portfolio Submission",
    "Validation",
    "Certification",
  ];

  const team = [
    { name: "Thinu Jayasinghe", role: "Operation Manager" },
    { name: "Joel Legaspi", role: "Business Trainer/Assessor/Mentor" },
    { name: "Jeeva Padayachee", role: "Business Trainer/Assessor/Mentor" },
    { name: "Rachmat Abader", role: "Business Trainer/Assessor/Mentor" },
    { name: "Moni Nair", role: "Administrator & Student Support" },
    { name: "Erika Legaspi", role: "Administrator & Student Support" },
    { name: "Sharmin Sultana", role: "RTO Compliance Consultant" },
    { name: "Amila Rathnayake", role: "IT Consultant" },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans select-none">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden flex items-center justify-center mb-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 opacity-90"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 119, 48, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className={`text-4xl md:text-6xl font-extrabold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Welcome to <span className="text-blue-300">BUSINESSPLEX</span>
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Empowering growth through knowledge, innovation and quality learning.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-6 md:px-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Megaphone className="text-white w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">About Us</h3>
                  <p className="text-gray-600">Building futures through education</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-16 bg-green-500 rounded-full" />
              <div className="flex items-center gap-3">
                <Megaphone className="text-green-600 w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-green-600">Who We Are</h2>
              </div>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Businessplex is a Registered Training Organisation (RTO ID 45725) accredited by ASQA, 
                specializing in providing comprehensive business training and support services.
              </p>
              <p>
                We are committed to empowering individuals and organizations through quality education, 
                practical skills development, and innovative learning solutions that drive real business results.
              </p>
              <p>
                Our expert team brings decades of combined experience in business training, assessment, 
                and mentoring to help you achieve your professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-20 px-6 md:px-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400 via-blue-400 to-purple-400" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Lightbulb className="text-white w-8 h-8" />
              </div>
              <h3 className="text-4xl font-extrabold text-green-600">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              To provide top quality support and services to enable clients to grow their business dreams 
              and achieve sustainable success in today's competitive marketplace.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-4xl font-extrabold text-green-600">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              To be the preferred Self-Employment Assistance Program provider, delivering exceptional 
              training, mentoring, and support services that empower individuals to build thriving businesses.
            </p>
          </div>
        </div>
      </section>

      {/* RPL Section */}
      <section className="relative py-20 px-6 md:px-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-green-600" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="text-white w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-white">
                RPL (Recognition of Prior Learning)
              </h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our streamlined 5-step process to recognize and validate your existing skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {rplSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step}</h4>
                <p className="text-gray-300 text-sm">Step {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative py-20 px-6 md:px-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-green-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-2 shadow-2xl">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">CEO</h3>
                  <p className="text-gray-600">Gish Wickramasinghe</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Award className="text-green-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-green-700">
                We will help you to start or grow your business
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Gish has worked in the NEIS and SEA programs for 9 years, bringing extensive experience 
              in business development, training, and mentoring. With a passion for empowering entrepreneurs 
              and a track record of successful business launches, Gish leads our team with vision and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <Mail className="text-green-600 w-5 h-5" />
                <span className="text-gray-700 font-medium">gish@businessplex.com.au</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <Phone className="text-green-600 w-5 h-5" />
                <span className="text-gray-700 font-medium">08 6156 5319</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6 md:px-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Users className="text-white w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-green-600">Meet Our Team</h2>
            </div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our team is a dynamic blend of professionals bringing together diverse expertise, 
              passion, and commitment to excellence in business training and support.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-tl-[50px] rounded-br-[50px] rounded-tr-lg rounded-bl-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <span className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {member.role}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 md:px-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the Businessplex community and take your skills to the next level. 
            Let us help you turn your business dreams into reality.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;