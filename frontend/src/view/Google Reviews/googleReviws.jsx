import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar, Heart } from 'lucide-react';

export default function CreativeGoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reviews = [
    {
      name: "Sarah Johnson",
      avatar: "SJ",
      avatarImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "2 weeks ago",
      location: "Local Guide",
      text: "Absolutely amazing experience! The attention to detail and customer service exceeded all expectations.",
      verified: true,
      bgGradient: "from-pink-400 to-red-400"
    },
    {
      name: "Mike Chen",
      avatar: "MC",
      avatarImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "1 month ago",
      location: "Verified Customer",
      text: "Outstanding quality and lightning-fast delivery. The team went above and beyond to ensure everything was perfect.",
      verified: true,
      bgGradient: "from-blue-400 to-purple-400"
    },
    {
      name: "Emily Rodriguez",
      avatar: "ER",
      avatarImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      date: "3 weeks ago",
      location: "Regular Visitor",
      text: "Great service and friendly staff. The atmosphere is welcoming and professional. Minor wait time but totally worth it.",
      verified: true,
      bgGradient: "from-green-400 to-teal-400"
    },
    {
      name: "David Thompson",
      avatar: "DT",
      avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "1 week ago",
      location: "First-time Customer",
      text: "Exceeded my expectations in every way! Professional, efficient, and genuinely caring. This is how business should be done.",
      verified: true,
      bgGradient: "from-orange-400 to-pink-400"
    },
    {
      name: "Lisa Wang",
      avatar: "LW",
      avatarImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "5 days ago",
      location: "Premium Member",
      text: "Simply incredible! I've never experienced such dedication to customer satisfaction. Every detail was perfect.",
      verified: true,
      bgGradient: "from-purple-400 to-indigo-400"
    },
    {
      name: "James Miller",
      avatar: "JM",
      avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      date: "1 week ago",
      location: "Business Owner",
      text: "Fantastic service with a personal touch. They truly understand what customers need and deliver beyond expectations.",
      verified: true,
      bgGradient: "from-cyan-400 to-blue-400"
    }
  ];

  // AOS Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 3 >= reviews.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, reviews.length - 3) : prev - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'fill-blue-400 text-blue-400 drop-shadow-sm' 
            : 'text-gray-300'
        } transition-all duration-300`}
      />
    ));
  };

  const getVisibleReviews = () => {
    return reviews.slice(currentIndex, currentIndex + 3);
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-white via-green-50 to-yellow-50 py-20 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-to-r from-blue-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-full px-8 py-5 shadow-2xl mb-8 border border-white/50">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-gray-800 font-bold text-xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text ">
              Google Reviews
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
              ))}
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            What Our Customers
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Love About Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from real customers who experienced our exceptional service
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative px-4 lg:px-16">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`group transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="relative">
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${review.bgGradient} rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6 pt-4">
                      <div className="relative">
                        <img 
                          src={review.avatarImage} 
                          alt={review.name}
                          className="w-16 h-16 rounded-2xl object-cover shadow-xl transform group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className={`w-16 h-16 bg-gradient-to-br ${review.bgGradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl transform group-hover:scale-110 transition-transform duration-300 hidden`}>
                          {review.avatar}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                          {review.verified && (
                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              ✓
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {review.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {review.date}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Review Text */}
                    <div className="flex-grow">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        "{review.text}"
                      </p>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Heart className="w-4 h-4 fill-red-400 text-red-400" />
                        <span>Helpful</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Google Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-white/50 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex + 3 >= reviews.length}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-white/50 ${
                currentIndex + 3 >= reviews.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="lg:hidden flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-white/50 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex + 3 >= reviews.length}
              className={`w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-white/50 ${
                currentIndex + 3 >= reviews.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div 
          className={`flex justify-center gap-3 mt-12 transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}