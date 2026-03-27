import React from 'react';
import { Award, ThumbsUp, Star, Users, TrendingUp, CheckCircle, Briefcase, BookOpen, Activity, MessageSquare } from 'lucide-react';
import images from "../assets/Images/images";

const CountUp = ({ start, end, duration, suffix = "", delay = 0 }) => {
  const [count, setCount] = React.useState(start);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const countRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setHasAnimated(true);
              let startTime;
              const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                setCount(Math.floor(start + (end - start) * easeOutQuart));
                if (progress < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
            }, delay);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [start, end, duration, delay, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Rating = () => {
  
  const mainSatisfactionRate = 100; 

  const serviceStats = {
    smallBusinessCoaching: {
      value: 327,
      label: "Small Business Coaching",
      icon: Briefcase,
      color: "blue"
    },
    selfEmploymentWorkshop: {
      value: 67 ,
     
      label: "Exploring Self Employment Workshop", 
      icon: BookOpen,
      color: "green"
    },
    businessHealthCheck: {
      value: 42,
      label: "Business Health Check",
      icon: Activity, 
      color: "purple"
    },
    businessAdvice: {
      value: 41,
      label: "Business Advice",
      icon: MessageSquare,
      color: "orange"
    }
  };

  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      gradient: "from-blue-600 via-blue-700 to-blue-800"
    },
    green: {
      bg: "bg-blue-100", 
      text: "text-blue-600",
      gradient: "from-blue-600 via-blue-700 to-blue-800"
    },
    purple: {
      bg: "bg-blue-100",
      text: "text-blue-600", 
      gradient: "from-blue-600 via-blue-700 to-blue-800"
    },
    orange: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      gradient: "from-blue-600 via-blue-700 to-blue-800"
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 transform opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            <Award className="w-5 h-5 text-blue-800" />
            <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">
              Service Excellence
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 mb-6 leading-tight transform opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            Satisfaction Rate
          </h2>

          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed transform opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            We strive for perfection — and our clients agree. Every project is a testament to our commitment to excellence.
          </p>
        </div>

       
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
        
          <div className="relative group transform opacity-0 animate-[fadeInLeft_1s_ease-out_0.8s_both]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 transform transition-all duration-700 group-hover:rotate-2 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              <img
                src={images.image_Criteria01}
                alt="Professional business consultation and coaching session"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              
              <div className="absolute -top-4 -right-4 bg-blue-700 p-3 rounded-full shadow-lg animate-bounce delay-300">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-full shadow-lg animate-bounce delay-700">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

         
          <div className="relative transform opacity-0 animate-[fadeInRight_1s_ease-out_1s_both]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-12 sm:p-16 rounded-3xl shadow-2xl border border-white/20 hover:shadow-blue-200/50 transition-all duration-500 text-center group">
              
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Users className="w-12 h-12 text-blue-600" />
              </div>

              <div className="relative z-10">
                <div className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 mb-4 leading-none drop-shadow-sm">
                  <CountUp start={0} end={mainSatisfactionRate} duration={3} suffix="%" delay={500} />
                </div>

                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6"></div>

                <p className="text-xl font-bold text-slate-700 mb-2">
                   Helping Small  Businesses Since 2022 with 
                </p>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  {/* Based on over 500+ completed projects and client testimonials */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services  */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(serviceStats).map(([key, service], index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            
            return (
              <div 
                key={key}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group transform opacity-0"
                style={{ 
                  animation: `fadeInUp 0.8s ease-out ${1.2 + (index * 0.2)}s both` 
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${colors.bg} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-slate-700 text-sm">{service.label}</h3>
                </div>
                <div className={`text-3xl font-bold ${colors.text} mb-2`}>
                  <CountUp 
                    start={0} 
                    end={service.value} 
                    duration={2.5} 
                    suffix="+" 
                    delay={800 + (index * 200)} 
                  />
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Rating;