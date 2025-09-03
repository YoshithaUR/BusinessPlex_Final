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
    
    // Scroll down a little bit when component mounts
    window.scrollTo(0, 100); // Scroll down 100px from top
    
    // Initialize custom AOS-like animations
    const initScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '-50px'
      });

      // Observe all elements with scroll-animate class
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const team = [
    { name: " Thinu Jayasinghe", role: "Operations Manager" },
    { name: "Moni Nair", role: "RTO Manager" },
    { name: "Joel Legaspi", role: "Trainer & Assessor" },
    { name: "Rachma Abader", role: "Trainer & Assessor & Mentor" },
    { name: "Lyndon Jansen", role: "Trainer & Assessor & Mentor" },
    { name: "Belle Illegami", role: "Trainer & Mentor" },
    { name: "Erika Legaspi", role: "Administrator & Student Support" },
    { name: "Aliyah Cohen", role: "Administrator & Student Support" },
    { name: "Amila Rathnayake", role: "IT Consultant" },  
    { name: "Sharmin Sultana", role: "RTO Compliance Consultant" },  
  ];

  return (
    <>
      <style>{`
        /* Custom Scroll Animations */
        .scroll-animate {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate.animate-in {
          opacity: 1;
        }

        /* Fade Up Animation */
        .fade-up {
          transform: translateY(50px);
        }
        .fade-up.animate-in {
          transform: translateY(0);
        }

        /* Fade Down Animation */
        .fade-down {
          transform: translateY(-50px);
        }
        .fade-down.animate-in {
          transform: translateY(0);
        }

        /* Fade Left Animation */
        .fade-left {
          transform: translateX(-50px);
        }
        .fade-left.animate-in {
          transform: translateX(0);
        }

        /* Fade Right Animation */
        .fade-right {
          transform: translateX(50px);
        }
        .fade-right.animate-in {
          transform: translateX(0);
        }

        /* Zoom In Animation */
        .zoom-in {
          transform: scale(0.8);
        }
        .zoom-in.animate-in {
          transform: scale(1);
        }

        /* Zoom Out Animation */
        .zoom-out {
          transform: scale(1.2);
        }
        .zoom-out.animate-in {
          transform: scale(1);
        }

        /* Flip Left Animation */
        .flip-left {
          transform: perspective(2500px) rotateY(-100deg);
        }
        .flip-left.animate-in {
          transform: perspective(2500px) rotateY(0deg);
        }

        /* Flip Right Animation */
        .flip-right {
          transform: perspective(2500px) rotateY(100deg);
        }
        .flip-right.animate-in {
          transform: perspective(2500px) rotateY(0deg);
        }

        /* Slide Up Animation */
        .slide-up {
          transform: translateY(100px);
        }
        .slide-up.animate-in {
          transform: translateY(0);
        }

        /* Slide Down Animation */
        .slide-down {
          transform: translateY(-100px);
        }
        .slide-down.animate-in {
          transform: translateY(0);
        }

        /* Slide Left Animation */
        .slide-left {
          transform: translateX(-100px);
        }
        .slide-left.animate-in {
          transform: translateX(0);
        }

        /* Slide Right Animation */
        .slide-right {
          transform: translateX(100px);
        }
        .slide-right.animate-in {
          transform: translateX(0);
        }

        /* Bounce In Animation */
        .bounce-in {
          transform: scale(0.3);
          opacity: 0;
        }
        .bounce-in.animate-in {
          transform: scale(1);
          opacity: 1;
          animation: bounceInKeyframes 0.8s ease-out;
        }

        @keyframes bounceInKeyframes {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Rotate In Animation */
        .rotate-in {
          transform: rotate(-180deg) scale(0.8);
        }
        .rotate-in.animate-in {
          transform: rotate(0deg) scale(1);
        }

        /* Animation Delays */
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-500 { transition-delay: 0.5s; }
        .delay-600 { transition-delay: 0.6s; }
        .delay-700 { transition-delay: 0.7s; }
        .delay-800 { transition-delay: 0.8s; }
        .delay-900 { transition-delay: 0.9s; }
        .delay-1000 { transition-delay: 1s; }

        /* Duration Variations */
        .duration-600 { transition-duration: 0.6s; }
        .duration-800 { transition-duration: 0.8s; }
        .duration-1000 { transition-duration: 1s; }
        .duration-1200 { transition-duration: 1.2s; }
        .duration-1500 { transition-duration: 1.5s; }

        /* Special Effects */
        .glow-effect.animate-in {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .pulse-grow.animate-in {
          animation: pulseGrow 2s infinite;
        }

        @keyframes pulseGrow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Text reveal animation */
        .text-reveal {
          overflow: hidden;
          position: relative;
        }
        .text-reveal::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          transform: translateX(-100%);
          transition: transform 0.8s ease;
        }
        .text-reveal.animate-in::after {
          transform: translateX(100%);
        }
      `}</style>

      <div className="bg-gradient-to-br from-white via-green-50 to-yellow-50 text-gray-800 font-sans select-none">
        <br/><br/>

        {/* About Section */}
        <section className="relative py-30 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-white via-green-50 to-yellow-50">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r " />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br " />
          </div>

          {/* Main content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-16">
            {/* About Us Card */}
            <div className="bg-gradient-to-br from-white via-green-50 to-yellow-50 backdrop-blur-sm rounded-3xl p-8 shadow-xl scroll-animate fade-up duration-1000">
              <div className="flex items-center justify-center gap-4 mb-6 scroll-animate zoom-in delay-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center animate-pulse">
                  <Megaphone className="text-white w-8 h-8" />
                </div>
                <h3 className="text-4xl font-extrabold text-dark">
                  About Us
                </h3>
              </div>
              
              <div className="mb-4 scroll-animate fade-down delay-300">
                <p className="text-lg font-semibold text-blue-700 italic text-reveal">
                  Supporting small business dreams since 2022!
                </p>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-6 text-center scroll-animate fade-up delay-400 duration-800">
                Businessplex established in 2022, is a proudly{" "}
                <span className="font-semibold bg-yellow-100 px-1 rounded">
                  Australian-owned
                </span>{" "}
                Registered Training Organisation
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold ml-2">
                  (RTO ID: 45725)
                </span>
                , accredited by ASQA (Australian Skills Quality Authority) to
deliver nationally recognised qualifications across all states of Australia. We offer a range of
qualifications, including:
              </p>

              {/* Single Qualifications Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 mt-8 scroll-animate slide-up delay-500 duration-1000 glow-effect">
                <div className="flex items-center justify-center gap-3 mb-6 scroll-animate bounce-in delay-600">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-700">Our Qualifications</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 scroll-animate fade-right delay-700">
                      <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left">
                        <strong>BSB30120</strong> – Certificate III in Business (Customer Engagement)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 scroll-animate fade-right delay-800">
                      <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left">
                        <strong>BSB30220</strong> – Certificate III in Entrepreneurship and New Business
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 scroll-animate fade-left delay-700">
                      <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left">
                        <strong>BSB40320</strong> – Certificate IV in Entrepreneurship and New Business
                      </span>
                    </li>
                    <li className="flex items-start gap-3 scroll-animate fade-left delay-800">
                      <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left">
                        <strong>BSB50920</strong> – Diploma of Quality Auditing
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center scroll-animate fade-up delay-900 duration-1000">
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                  Training is available through classroom, online, and hybrid options, providing flexibility to
meet the needs of participants.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                 We also deliver the Self-Employment Assistance Program under Workforce Australia in the
Perth North region, supporting individuals to start or grow their businesses. We’ve been
committed to helping individuals since turn their business ideas into reality with necessary
business training &amp; coaching.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                At Businessplex, we pride ourselves on employing highly skilled trainers to deliver quality
education and practical business support. We also create opportunities for participants to
connect with mentors and networks, ensuring a meaningful and outcome-driven training
experience.
                </p>
              </div>

              <div className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold w-fit mx-auto scroll-animate zoom-in delay-1000 pulse-grow">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="relative py-20 px-6 md:px-20 mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl scroll-animate slide-right duration-1000 glow-effect">
              <div className="flex items-center justify-center gap-4 mb-6 scroll-animate flip-left delay-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center animate-pulse">
                  <Lightbulb className="text-white w-8 h-8" />
                </div>
                <h3 className="text-4xl font-extrabold text-black">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto scroll-animate fade-up delay-400 text-reveal">
                To provide top quality support and services to enable clients to
                grow their business dreams and achieve sustainable success in
                today's competitive marketplace.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl scroll-animate slide-left duration-1000 glow-effect">
              <div className="flex items-center justify-center gap-4 mb-6 scroll-animate flip-right delay-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center animate-pulse">
                  <Users className="text-white w-8 h-8" />
                </div>
                <h3 className="text-4xl font-extrabold text-black">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto scroll-animate fade-up delay-400 text-reveal">
                To be the preferred Self-Employment Assistance Program provider,
                delivering exceptional training, mentoring, and support services
                that empower individuals to build thriving businesses.
              </p>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="relative py-20 px-6 md:px-20 mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-white via-green-50 to-yellow-50 opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="relative group scroll-animate zoom-in duration-1200">
              <div className="w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 scroll-animate bounce-in delay-300">
                      <Award className="text-white w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 scroll-animate fade-up delay-400">
                      CEO
                    </h3>
                    <p className="text-gray-600 scroll-animate fade-up delay-500">
                      Gish Liyanage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="flex items-center gap-4 justify-center md:justify-start scroll-animate slide-left duration-800">
                <Award className="text-blue-800 w-12 h-12" />
                <h2 className="text-3xl font-bold text-black">
                  We help you to start or grow your business
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed text-justify scroll-animate fade-right delay-200 duration-1000 text-reveal">
                Gish is a seasoned business leader with over 14 years of experience in the Self-Employment Assistance
                (SEA) Program, Formally known as NEIS. Throughout his career, he has played a pivotal role in supporting
                individuals from diverse backgrounds in turning their business ideas into reality. His deep expertise in
                business development, combined with a strong foundation in training and mentoring, has made him a trusted
                advisor to hundreds of aspiring entrepreneurs.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed text-justify scroll-animate fade-right delay-400 duration-1000 text-reveal">
                Driven by a genuine passion for empowering others, Gish has dedicated his career to helping individuals
                navigate the complexities of starting and growing a business. With a clear vision for the future and a strong
                dedication to community impact, Gish continues to lead the team with purpose, driving initiatives that not
                only empower individuals but also contribute to the broader goal of building stronger, more resilient
                communities through entrepreneurship.
              </p>
            </div> 
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-20 px-6 md:px-20 mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12 scroll-animate fade-down duration-1000">
              <div className="flex items-center justify-center gap-4 mb-6 scroll-animate zoom-in delay-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center animate-pulse">
                  <Users className="text-white w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-darck">
                  Meet Our Team
                </h2>
              </div>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto scroll-animate fade-up delay-300 text-reveal">
                Our team is made up of experienced professionals dedicated to
                helping individuals turn business ideas into reality. With a focus
                on practical support, personalised mentoring, and nationally
                recognised training, we're here to guide you every step of the way
                toward business success
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <article
                  key={idx}
                  className={`group bg-gradient-to-br from-white via-green-50 to-yellow-50 rounded-tl-[50px] rounded-br-[50px] rounded-tr-lg rounded-bl-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 scroll-animate ${
                    idx % 4 === 0 ? 'fade-up' : 
                    idx % 4 === 1 ? 'fade-down' : 
                    idx % 4 === 2 ? 'fade-left' : 
                    'fade-right'
                  } duration-800 delay-${(idx % 8) * 100 + 400} glow-effect`}
                >
                  <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className={`w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 scroll-animate bounce-in delay-${(idx % 8) * 100 + 600}`}>
                        <Users className="w-10 h-10" />
                      </div>
                      <h3 className={`text-xl font-bold scroll-animate fade-up delay-${(idx % 8) * 100 + 700}`}>
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <span className={`inline-block bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium scroll-animate zoom-in delay-${(idx % 8) * 100 + 800}`}>
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600 to-green-600" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto scroll-animate fade-up duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate slide-down delay-200 duration-1200 text-reveal">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed scroll-animate fade-up delay-400 duration-1000">
              Join the Businessplex community and take your skills to the next
              level. Let us help you turn your business dreams into reality.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl scroll-animate bounce-in delay-600 duration-800 pulse-grow">
              <a href="tel:+08 6156 5820">Contact Us Today</a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;