import React, { useEffect, useState, useRef } from "react";
import {
  Mail,
  Phone,
  Award,
  CheckCircle,
  Megaphone,
  Users,
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import images from "../assets/Images/images";

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

  // Team data with images - Replace with your actual images from the images object
  const team = [
    { 
      name: "Gish Liyanage", 
      role: "CEO", 
      image: images.images_Gish
    },
    { 
      name: "Thinu Jayasinghe", 
      role: "Operations Manager", 
      image: images.images_Thinu || images.image_ServicePopup03
    },
    { 
      name: "Moni Nair", 
      role: "RTO Manager", 
      image: images.images_Moni 
    },
    { 
      name: "Joel Legaspi", 
      role: "Trainer & Assessor", 
      image: images.images_JoelEdited 
    },
    { 
      name: "Rachma Abader", 
      role: "Trainer & Assessor & Mentor", 
      image: images.images_Rachma 
    },
    { 
      name: "Lyndon Jansen", 
      role: "Trainer & Assessor & Mentor", 
      image: images.images_LyndonEdited 
    },
    { 
      name: "Belle Illegami", 
      role: "Trainer & Mentor", 
      image: images.images_Belle 
    },
    { 
      name: "Erika Legaspi", 
      role: "Administrator & Student Support", 
      image: images.images_Erika 
    },
    { 
      name: "Aliyah Cohen", 
      role: "Administrator & Student Support", 
      image: images.images_Aliyah 
    },
    { 
      name: "Amila Rathnayake", 
      role: "IT Consultant", 
      image: images.images_Amila 
    },  
    { 
      name: "Sharmin Sultana", 
      role: "RTO Compliance Consultant", 
      image: images.images_Sharmin 
    },  
  ];

  // State for mobile carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamRef = useRef(null);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Dynamic CEO frame background: sample image corner colors to match background
  const [ceoBgColor, setCeoBgColor] = useState('#ffffff');
  const handleCeoImageLoad = (e) => {
    try {
      const img = e.currentTarget;
      const CANVAS_SIZE = 12; // small for performance, large enough to avoid heavy blur
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
      ctx.drawImage(img, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
      const getPixel = (x, y) => {
        const data = ctx.getImageData(x, y, 1, 1).data;
        return { r: data[0], g: data[1], b: data[2], a: data[3] };
      };
      const corners = [
        getPixel(0, 0),
        getPixel(CANVAS_SIZE - 1, 0),
        getPixel(0, CANVAS_SIZE - 1),
        getPixel(CANVAS_SIZE - 1, CANVAS_SIZE - 1)
      ];
      // Pick the most similar pair among corners to reduce artifact risk
      const distance = (c1, c2) => Math.abs(c1.r - c2.r) + Math.abs(c1.g - c2.g) + Math.abs(c1.b - c2.b);
      let bestPair = [corners[0], corners[1]];
      let bestDist = Infinity;
      for (let i = 0; i < corners.length; i++) {
        for (let j = i + 1; j < corners.length; j++) {
          const d = distance(corners[i], corners[j]);
          if (d < bestDist) { bestDist = d; bestPair = [corners[i], corners[j]]; }
        }
      }
      const r = Math.round((bestPair[0].r + bestPair[1].r) / 2);
      const g = Math.round((bestPair[0].g + bestPair[1].g) / 2);
      const b = Math.round((bestPair[0].b + bestPair[1].b) / 2);
      setCeoBgColor(`rgb(${r}, ${g}, ${b})`);
    } catch (_) {
      setCeoBgColor('#ffffff');
    }
  };

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

        /* Image styles */
        .team-image {
          transition: transform 0.3s ease;
          object-fit: contain !important;
          object-position: center;
        }
        .team-image:hover {
          transform: scale(1.05);
        }

        .ceo-image {
          transition: all 0.3s ease;
          object-fit: contain !important;
          object-position: center;
        }
        .ceo-image:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .text-reveal {
            font-size: 0.9rem;
          }
          
          .team-image {
            transition: none;
          }
          
          .ceo-image {
            transition: none;
          }
          
          .team-image:hover {
            transform: none;
          }
          
          .ceo-image:hover {
            transform: none;
            filter: none;
          }
          
          .pulse-grow.animate-in {
            animation: none;
          }
          
          .scroll-animate {
            opacity: 1;
            transform: none !important;
          }
          
          .scroll-animate.animate-in {
            opacity: 1;
            transform: none !important;
          }
        }

        @media (max-width: 480px) {
          .text-reveal {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="bg-gradient-to-br from-white via-green-50 to-yellow-50 text-gray-800 font-sans select-none">
        <br/><br/>

        {/* About Section */}
        <section className="relative py-16 px-4 md:px-6 lg:px-20 overflow-hidden bg-gradient-to-br from-white via-green-50 to-yellow-50">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r " />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br " />
          </div>

          {/* Main content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
            {/* About Us Card */}
            <div className="bg-gradient-to-br from-white via-green-50 to-yellow-50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl scroll-animate fade-up duration-1000">
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 scroll-animate zoom-in delay-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center animate-pulse">
                  <Megaphone className="text-white w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-dark">
                  About Us
                </h3>
              </div>
              
              <div className="mb-3 md:mb-4 scroll-animate fade-down delay-300">
                <p className="text-base md:text-lg font-semibold text-blue-700 italic text-reveal">
                  Supporting small business dreams since 2022!
                </p>
              </div>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4 md:mb-6 text-center scroll-animate fade-up delay-400 duration-800">
                Businessplex established in 2022, is a proudly{" "}
                <span className="font-semibold bg-yellow-100 px-1 rounded">
                  Australian-owned
                </span>{" "}
                Registered Training Organisation
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs md:text-sm font-semibold ml-2">
                  (RTO ID: 45725)
                </span>
                , accredited by ASQA (Australian Skills Quality Authority) to
deliver nationally recognised qualifications across all states of Australia. We offer a range of
qualifications, including:
              </p>

              {/* Single Qualifications Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200 mt-6 md:mt-8 scroll-animate slide-up delay-500 duration-1000 glow-effect">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6 scroll-animate bounce-in delay-600">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Award className="text-white w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-blue-700">Our Qualifications</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-2 md:gap-3 scroll-animate fade-right delay-700">
                      <CheckCircle className="text-green-500 w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left text-sm md:text-base">
                        <strong>BSB30120</strong> – Certificate III in Business (Customer Engagement)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 scroll-animate fade-right delay-800">
                      <CheckCircle className="text-green-500 w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left text-sm md:text-base">
                        <strong>BSB30220</strong> – Certificate III in Entrepreneurship and New Business
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-2 md:gap-3 scroll-animate fade-left delay-700">
                      <CheckCircle className="text-blue-500 w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left text-sm md:text-base">
                        <strong>BSB40320</strong> – Certificate IV in Entrepreneurship and New Business
                      </span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 scroll-animate fade-left delay-800">
                      <CheckCircle className="text-blue-500 w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-left text-sm md:text-base">
                        <strong>BSB50920</strong> – Diploma of Quality Auditing
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 md:mt-8 text-center scroll-animate fade-up delay-900 duration-1000">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center mb-3 md:mb-4 text-reveal">
                 We  deliver the Self-Employment Assistance Program under Workforce Australia in the
Perth North region, supporting individuals to start or grow their businesses. We've been
committed to helping individuals since turn their business ideas into reality with necessary
business training &amp; coaching.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center text-reveal">
                At Businessplex, we pride ourselves on employing highly skilled trainers to deliver quality
education and practical business support. We also create opportunities for participants to
connect with mentors and networks, ensuring a meaningful and outcome-driven training
experience.
                </p>
              </div>

              <div className="mt-4 md:mt-6 inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold w-fit mx-auto scroll-animate zoom-in delay-1000 pulse-grow">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </section>

        {/* Combined Vision & Mission Section */}
        <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-20 mb-12 md:mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12 scroll-animate fade-down duration-1000">
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 scroll-animate zoom-in delay-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center animate-pulse">
                  <Target className="text-white w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-black">
                  Our Vision & Mission
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-green-50 to-yellow-50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl scroll-animate fade-up duration-1000 max-w-5xl mx-auto">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4 md:mb-6 text-center scroll-animate fade-up delay-400 duration-800 text-reveal">
               To be the preferred Self-Employment Assistance Program provider,
                  delivering exceptional training, mentoring, and support services
                  that empower individuals to build thriving businesses.
            </p>
          </div>
        </section>

        {/* CEO Section */}
        <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-20 mb-12 md:mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          <div className="absolute top-10 md:top-20 right-5 md:right-10 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-br from-white via-green-50 to-yellow-50 opacity-20 rounded-full blur-2xl md:blur-3xl" />
          <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 w-36 md:w-72 h-36 md:h-72 bg-blue-200 opacity-20 rounded-full blur-2xl md:blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="relative group scroll-animate zoom-in duration-1200 w-60 h-60 md:w-72 md:h-72 mx-auto">
              <div className="w-full h-full rounded-full p-1.5 md:p-2 shadow-2xl" style={{ backgroundColor: ceoBgColor }}>
                <div className="w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <img 
                    src={images.images_Gish }
                    alt="Gish Liyanage - CEO"
                    className="w-full h-full object-contain ceo-image"
                    onLoad={handleCeoImageLoad}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-base md:text-xl font-bold mb-0.5 md:mb-1">CEO</h3>
                  <p className="text-xs md:text-sm">Gish Liyanage</p>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6 w-full md:w-auto">
              <div className="flex items-center gap-3 md:gap-4 justify-center md:justify-start scroll-animate slide-left duration-800">
                <Award className="text-blue-800 w-8 h-8 md:w-12 md:h-12" />
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  We help you to start or grow your business
                </h2>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify scroll-animate fade-right delay-200 duration-1000 text-reveal">
                Gish is a seasoned business leader with over 14 years of experience in the Self-Employment Assistance
                (SEA) Program, Formally known as NEIS. Throughout his career, he has played a pivotal role in supporting
                individuals from diverse backgrounds in turning their business ideas into reality. His deep expertise in
                business development, combined with a strong foundation in training and mentoring, has made him a trusted
                advisor to hundreds of aspiring entrepreneurs.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify scroll-animate fade-right delay-400 duration-1000 text-reveal">
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
        <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-20 mb-12 md:mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-yellow-50" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12 scroll-animate fade-down duration-1000">
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 scroll-animate zoom-in delay-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center animate-pulse">
                  <Users className="text-white w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-darck">
                  Meet Our Team
                </h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto scroll-animate fade-up delay-300 text-reveal">
                Our team is made up of experienced professionals dedicated to
                helping individuals turn business ideas into reality. With a focus
                on practical support, personalised mentoring, and nationally
                recognised training, we're here to guide you every step of the way
                toward business success
              </p>
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {team.map((member, idx) => (
                <article
                  key={idx}
                  className={`group bg-gradient-to-br from-white via-green-50 to-yellow-50 rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] rounded-tr-lg rounded-bl-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 scroll-animate ${
                    idx % 4 === 0 ? 'fade-up' : 
                    idx % 4 === 1 ? 'fade-down' : 
                    idx % 4 === 2 ? 'fade-left' : 
                    'fade-right'
                  } duration-800 delay-${(idx % 8) * 100 + 400} glow-effect`}
                >
                  <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-400 to-blue-800 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain team-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 text-center text-white p-3 md:p-4 bg-gradient-to-t from-blue-900/80 to-transparent">
                      <h3 className={`text-base md:text-xl font-bold scroll-animate fade-up delay-${(idx % 8) * 100 + 700} leading-tight mb-1 md:mb-2`}>
                        {member.name}
                      </h3>
                      <span className={`inline-block bg-blue-800/80 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium scroll-animate zoom-in delay-${(idx % 8) * 100 + 800} leading-tight`}>
                        {member.role}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="sm:hidden">
              {/* Carousel Container */}
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {team.map((member, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      <article className="group bg-gradient-to-br from-white via-green-50 to-yellow-50 rounded-tl-[30px] rounded-br-[30px] rounded-tr-lg rounded-bl-lg shadow-xl transition-all duration-300 overflow-hidden glow-effect">
                        <div className="relative h-80 bg-gradient-to-br from-blue-400 to-blue-800 overflow-hidden">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-contain team-image"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 text-center text-white p-3 bg-gradient-to-t from-blue-900/80 to-transparent">
                            <h3 className="text-lg font-bold leading-tight mb-1">
                              {member.name}
                            </h3>
                            <span className="inline-block bg-blue-800/80 text-white px-2 py-1 rounded-full text-xs font-medium leading-tight">
                              {member.role}
                            </span>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center mt-5 px-2 space-x-6">
                <button 
                  onClick={prevSlide}
                  className="bg-blue-800 text-white p-2 rounded-full shadow-lg hover:bg-blue-900 transition-colors duration-300"
                  aria-label="Previous team member"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="text-center text-gray-600 text-sm">
                  {currentSlide + 1} / {team.length}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="bg-blue-800 text-white p-2 rounded-full shadow-lg hover:bg-blue-900 transition-colors duration-300"
                  aria-label="Next team member"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center mt-3 space-x-1.5">
                {team.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentSlide === idx ? 'bg-blue-800' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to team member ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-20 mb-12 md:mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600 to-green-600" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto scroll-animate fade-up duration-1000">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 scroll-animate slide-down delay-200 duration-1200 text-reveal">
              Ready to Transform Your Future?
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed scroll-animate fade-up delay-400 duration-1000">
              Join Businessplex and take your skills to the next
              level. Let us help you turn your business dreams into reality.
            </p>
            <button className="bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl scroll-animate bounce-in delay-600 duration-800 pulse-grow">
              <a href="tel:+08 6156 5820">Contact Us Today</a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;