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
import images from "../assets/Images/images";

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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={images.video_aboutVideo} type="video/mp4" />
          {/* <source src="/path/to/your/video.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 48, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className={`text-4xl md:text-6xl font-extrabold text-white mb-6 transition-all duration-1000 drop-shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Welcome to <span className="text-blue-300">BUSINESSPLEX</span>
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-xl mx-auto transition-all duration-1000 delay-300 drop-shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Empowering growth through knowledge, innovation and quality learning.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative min-h-screen px-4 md:px-16 py-8 flex flex-col justify-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-green-300 opacity-15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-200 opacity-10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center space-y-8">
          {/* About Us card - centered */}
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-2xl shadow-xl w-full max-w-xl">
            <div className="bg-white rounded-2xl p-6 relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
                backgroundSize: "20px 20px"
              }} />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow animate-pulse">
                  <Megaphone className="text-white w-10 h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">About Us</h3>
                <p className="text-sm md:text-base text-gray-600">Supporting Small Business Success Since 2022</p>
                <div className="mt-2 inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-0.5 rounded-full text-xs font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  RTO Accredited
                </div>
              </div>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-sm md:text-base text-gray-700">
            {/* Left column */}
            <div className="space-y-4">
              <p className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
                Businessplex is an <span className="bg-yellow-200 px-1 py-0.5 rounded font-semibold text-gray-800">Australian-owned</span> Registered Training Organisation
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-bold ml-2">(RTO ID: 45725)</span>,
                established to support entrepreneurs and small businesses through accredited training and business support.
              </p>
              <p className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200 shadow-sm">
                We specialise in delivering the <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">Self-Employment Assistance Program</span> from accredited qualifications such as:
              </p>
              <div className="space-y-2 bg-white/80 p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-1 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  Primary Qualifications
                </h4>
                <p><span className="font-semibold">BSB30220</span> Cert III in Entrepreneurship and New Business</p>
                <p><span className="font-semibold">BSB40220</span> Cert IV in Entrepreneurship and New Business</p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-10 bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-md" />
                <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Our Programs
                </h2>
              </div>
              <div className="space-y-2 bg-white/80 p-4 rounded-xl shadow-sm border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-700 mb-1 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                  Additional Qualifications
                </h4>
                <p><span className="font-semibold">BSB30120</span> Cert III in Business</p>
                <p><span className="font-semibold">BSB50920</span> Diploma of Quality Auditing</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white shadow">
                <p className="text-sm font-semibold text-center">
                  ✓ Government Funded Programs Available — Start Your Business Journey Today!
                </p>
              </div>
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
              Our team is made up of experienced professionals dedicated to helping individuals turn business
              ideas into reality. With a focus on practical support, personalised mentoring, and nationally
              recognised training, we’re here to guide you every step of the way toward business success
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