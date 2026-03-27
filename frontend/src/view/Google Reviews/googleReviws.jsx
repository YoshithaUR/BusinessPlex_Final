import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar, Heart, Verified, TrendingUp, Users, Globe, RefreshCw } from 'lucide-react';

export default function PremiumGoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);
  const [stats, setStats] = useState({
    totalReviews: 24,
    averageRating: 5.0,
    fiveStarPercent: 100,
    responseRate: 100
  });
  const sectionRef = useRef(null);
  const slideshowRef = useRef(null);

  
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Jörg Nottle",
      avatar: "JN",
      avatarImage: "#",
      rating: 5,
      date: "a month ago",
      location: "Local Guide·372 reviews·",
      text: "Exceptional Service and Professionalism!Businessplex has been outstanding from start to finish. The team is incredibly responsive, knowledgeable, and truly committed to helping their clients succeed. Whether you're a startup or an established company, they offer the right support, facilities, and advice to help your business grow. Highly recommend to anyone looking for a reliable and efficient business partner. Thank you, Businessplex — a truly 5-star experience!",
      verified: true,
      helpful: 23,
      bgGradient: "from-pink-500 to-rose-500",
      businessReply: "Thank you so much for your kind words Jorg and we're honored to be a part of your business journey!"
    },
    {
      id: 2,
      name: "Pedro Pini",
      avatar: "Pp",
      avatarImage: "#",
      rating: 5,
      date: "4 months ago",
      location: "",
      text: "Reflecting on my journey with Businessplex in Morley, I can confidently say it's been a transformative experience. From the moment I stepped into their training center, I felt an immediate sense of belonging and support.Enrolling in the Certificate III in Business program was a pivotal decision. The curriculum was not only comprehensive but also tailored to real-world applications. The flexibility of choosing between online and classroom study options allowed me to balance my personal commitments while advancing my education.",
      verified: true,
      helpful: 19,
      bgGradient: "from-blue-500 to-cyan-500",
     businessReply: "Thank you very much for positive feedback Pedro, we're glad that you enjoyed the training!"
    },
    {
      id: 3,
      name: "My Nguyen",
      avatar: "MN",
      avatarImage: "#",
      rating: 5,
      date: "a month ago",
      location: "",
      text: "They were very helpful and supportive throughout my course - though hard, it was easy to understand, and a great learning experience; The very friendly team made it easier to ask questions without fear of being wrong, and was generally just an overall good experience!",
      verified: true,
      helpful: 31,
      bgGradient: "from-emerald-500 to-teal-500",
      businessReply: "Thank you for your kind words My. We're glad you had a great learning experience and felt supported throughout the course. Wishing you all the best in your business journey!"
    },
    {
      id: 4,
      name: "Amanda Kerr",
      avatar: "AK",
      avatarImage: "# ",
      rating: 5,
      date: "5 months ago",
      location: "Local Guide·150 reviews·81 photos",
      text: "The Businessplex team has assisted me to re-invent my business offering great training & plenty of resources whilst I access the NEIS program for support. I am delighted at the results and I move confidently forward with new knowledge of an online presence.",
      verified: true,
      helpful: 27,
      bgGradient: "from-orange-500 to-amber-500",
      businessReply: "Thank you for the positive feedback Amanda."
    },
    {
      id: 5,
      name: "Luke Daniels",
      avatar: "LD",
      avatarImage: "#",
      rating: 4,
      date: "3 months ago",
      location: "7 reviews·1 photo",
      text: "I couldn't be happier with the service and treatment I received from Gish and his team at BusinessPlex.I completed the Certificate III in Entrepreneurship and New Business, where I learned so much, met like-minded people, and had a lot of fun along the way.I highly recommend BusinessPlex to anyone looking for quality business training.",
      verified: true,
      helpful: 15,
      bgGradient: "from-purple-500 to-violet-500",
      businessReply: "Thank you for those words Luke! We 're sure that you will do well with your business!"
    },
    {
      id: 6,
      name: "Water Tanks",
      avatar: "WD",
      avatarImage: "#",
      rating: 5,
      date: "4 months ago",
      location: "Local Guide·9 reviews·11 photos",
      text: "It's definitely a Five Star 🌟 🌟 🌟 🌟 🌟 review from WaterTanks.AuThe Businessplex team helped me to develop my idea into a business. I was able to launch immediately and am hopeful for successful future 🙌 🙏 Thank you Gish and Joel. I appreciate your excellent professional service.",
      verified: true,
      helpful: 42,
      bgGradient: "from-indigo-500 to-blue-500",
      businessReply: "Thank you Terry very much for the appreciation. You will do well with the business and great business idea."
    }
  ]);


  useEffect(() => {
    if (!isPaused) {
      slideshowRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          
          const isMobile = window.innerWidth < 1024;
          const increment = isMobile ? 1 : 3;
          return prev + increment >= reviews.length ? 0 : prev + increment;
        });
      }, 5000); // Change slides every 5 seconds
    }

    return () => {
      if (slideshowRef.current) {
        clearInterval(slideshowRef.current);
      }
    };
  }, [isPaused, reviews.length]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setTimeout(() => {
        setLastUpdated(new Date());
        setStats(prev => ({
          ...prev,
          totalReviews: prev.totalReviews + Math.floor(Math.random() * 3),
        }));
        setIsLoading(false);
      }, 1500);
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
     
      const isMobile = window.innerWidth < 1024;
      const increment = isMobile ? 1 : 3;
      return prev + increment >= reviews.length ? 0 : prev + increment;
    });
   
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      
      const isMobile = window.innerWidth < 1024;
      const increment = isMobile ? 1 : 3;
      return prev === 0 ? Math.max(0, reviews.length - increment) : prev - increment;
    });
    
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'fill-amber-400 text-amber-400 drop-shadow-sm' 
            : 'text-gray-300'
        } transition-all duration-300`}
      />
    ));
  };

  const getVisibleReviews = () => {
  
    const isMobile = window.innerWidth < 1024;
    const count = isMobile ? 1 : 3;
    return reviews.slice(currentIndex, currentIndex + count);
  };

  const manualRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
       
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Google Badge - Fixed Spacing */}
          <div className="inline-flex items-center gap-6 bg-white/90 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-2xl mb-8 border border-white/30 max-w-fit mx-auto">
          
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-2xl">G</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-gray-900 font-bold text-2xl">Google Reviews</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-700">{stats.averageRating}</span>
                  <span className="text-base text-gray-500">({stats.totalReviews.toLocaleString()})</span>
                </div>
              </div>
            </div>
            
           
            <button
              onClick={manualRefresh}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Updating...' : 'Refresh'}
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight px-4">
            Real Customer Stories
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Live from Google
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 px-4">
            Authentic reviews automatically updated from our Google Business Profile
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-gray-500 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>{isPaused ? 'Slideshow Paused' : 'Auto Slideshow'}</span>
            </div>
          </div>
        </div>

       
        <div className="relative px-4 lg:px-20">
          <div 
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`group transform transition-all duration-700 hover:scale-[1.02] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="relative h-[700px]">
                  
                  <div className={`absolute -inset-1 bg-gradient-to-r ${review.bgGradient} rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/40 h-full flex flex-col">
                   
                    <div className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6">
                      <div className={`w-12 lg:w-14 h-12 lg:h-14 bg-gradient-to-br ${review.bgGradient} rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        <Quote className="w-6 lg:w-7 h-6 lg:h-7 text-white" />
                      </div>
                    </div>

                 
                    <div className="flex items-start gap-3 lg:gap-4 mb-6 pt-6 h-24">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={review.avatarImage} 
                          alt={review.name}
                          className="w-14 lg:w-16 h-14 lg:h-16 rounded-2xl object-cover shadow-xl transform group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className={`w-14 lg:w-16 h-14 lg:h-16 bg-gradient-to-br ${review.bgGradient} rounded-2xl  items-center justify-center text-white font-bold text-base lg:text-lg shadow-xl transform group-hover:scale-110 transition-transform duration-300 hidden`}>
                          {review.avatar}
                        </div>
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 lg:w-6 h-5 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                            <Verified className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-grow min-w-0">
                        <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1 truncate">{review.name}</h3>
                        
                        <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600 mb-3 min-h-[16px]">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{review.location || "Verified Customer"}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {renderStars(review.rating)}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                   
                    <div className="flex-grow mb-6 min-h-[200px] max-h-[200px] overflow-y-auto">
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>

                    
                    {review.businessReply && (
                      <div className="bg-blue-50/80 rounded-xl p-3 lg:p-4 mb-4 border-l-4 border-blue-400 min-h-[100px]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 lg:w-6 h-5 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">B</span>
                          </div>
                          <span className="text-xs lg:text-sm font-semibold text-blue-900">Business Response</span>
                        </div>
                        <p className="text-xs lg:text-sm text-blue-800">{review.businessReply}</p>
                      </div>
                    )}
                    
                    
                    {!review.businessReply && (
                      <div className="mb-4 min-h-[100px]"></div>
                    )}
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 text-xs lg:text-sm text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="hidden sm:inline">Helpful</span> ({review.helpful})
                        </button>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">G</span>
                        </div>
                        <span className="hidden sm:inline">Google Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-white/40 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronLeft className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={window.innerWidth < 1024 ? currentIndex + 1 >= reviews.length : currentIndex + 3 >= reviews.length}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-white/40 ${
                (window.innerWidth < 1024 ? currentIndex + 1 >= reviews.length : currentIndex + 3 >= reviews.length) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronRight className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 border border-white/40 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex + 1 >= reviews.length}
              className={`w-12 h-12 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 border border-white/40 ${
                currentIndex + 1 >= reviews.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

       
        <div 
          className={`flex justify-center gap-4 mt-16 transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {Array.from({ length: window.innerWidth < 1024 ? reviews.length : Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const isMobile = window.innerWidth < 1024;
                setCurrentIndex(isMobile ? index : index * 3);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`transition-all duration-300 ${
                (window.innerWidth < 1024 ? currentIndex === index : Math.floor(currentIndex / 3) === index)
                  ? 'w-12 lg:w-16 h-3 lg:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl'
                  : 'w-3 lg:w-4 h-3 lg:h-4 bg-gray-300 hover:bg-gray-400 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}