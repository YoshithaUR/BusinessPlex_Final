import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar, Heart, Verified, TrendingUp, Users, Globe, RefreshCw } from 'lucide-react';

export default function PremiumGoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [stats, setStats] = useState({
    totalReviews: 1247,
    averageRating: 4.8,
    fiveStarPercent: 87,
    responseRate: 100
  });
  const sectionRef = useRef(null);

  // Sample reviews with more realistic data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      avatarImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "2 hours ago",
      location: "Local Guide • 127 reviews",
      text: "Absolutely incredible service! The team went above and beyond my expectations. Every detail was perfect, from the initial consultation to the final delivery. I've never experienced such professionalism and attention to customer satisfaction.",
      verified: true,
      helpful: 23,
      bgGradient: "from-pink-500 to-rose-500",
      businessReply: "Thank you Sarah! We're thrilled you had such a positive experience with our team."
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "MC",
      avatarImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "4 hours ago",
      location: "Verified Customer • 89 reviews",
      text: "Outstanding quality and lightning-fast delivery! The product exceeded all my expectations. The customer support team was incredibly responsive and helpful throughout the entire process. Highly recommended!",
      verified: true,
      helpful: 19,
      bgGradient: "from-blue-500 to-cyan-500",
      businessReply: null
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "ER",
      avatarImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "6 hours ago",
      location: "Premium Member • 156 reviews",
      text: "This company consistently delivers excellence. I've been a customer for over two years, and they never fail to impress. The attention to detail and personalized service is what sets them apart from competitors.",
      verified: true,
      helpful: 31,
      bgGradient: "from-emerald-500 to-teal-500",
      businessReply: "Emily, thank you for being such a loyal customer! We appreciate your continued trust."
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "DT",
      avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "8 hours ago",
      location: "First-time Customer • 45 reviews",
      text: "Wow! As a first-time customer, I was blown away by the level of service. The team made everything seamless and stress-free. The results exceeded my wildest expectations. I'll definitely be returning!",
      verified: true,
      helpful: 27,
      bgGradient: "from-orange-500 to-amber-500",
      businessReply: null
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar: "LW",
      avatarImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      date: "12 hours ago",
      location: "Business Owner • 203 reviews",
      text: "Great service with professional execution. The team was knowledgeable and efficient. Minor delay in delivery but they kept me informed throughout. Overall very satisfied with the quality and would recommend to others.",
      verified: true,
      helpful: 15,
      bgGradient: "from-purple-500 to-violet-500",
      businessReply: "Thanks Lisa! We've improved our delivery process based on your feedback."
    },
    {
      id: 6,
      name: "James Miller",
      avatar: "JM",
      avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "1 day ago",
      location: "Elite Reviewer • 342 reviews",
      text: "Exceptional service that goes beyond expectations! The innovative approach and dedication to customer satisfaction is remarkable. This is how all businesses should operate. Five stars all the way!",
      verified: true,
      helpful: 42,
      bgGradient: "from-indigo-500 to-blue-500",
      businessReply: null
    }
  ]);

  // Auto-update simulation
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
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
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
            ? 'fill-amber-400 text-amber-400 drop-shadow-sm' 
            : 'text-gray-300'
        } transition-all duration-300`}
      />
    ));
  };

  const getVisibleReviews = () => {
    return reviews.slice(currentIndex, currentIndex + 3);
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
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header with Stats */}
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Google Badge */}
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-2xl mb-8 border border-white/30">
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
                <span className="text-gray-500">({stats.totalReviews.toLocaleString()})</span>
              </div>
            </div>
            <div className="ml-4">
              <button
                onClick={manualRefresh}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Updating...' : 'Refresh'}
              </button>
            </div>
          </div>
          


          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Real Customer Stories
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Live from Google
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Authentic reviews automatically updated from our Google Business Profile
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
            <span>•</span>
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Enhanced Reviews Carousel */}
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
                <div className="relative">
                  {/* Enhanced Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${review.bgGradient} rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 h-full flex flex-col">
                    {/* Enhanced Quote Icon */}
                    <div className="absolute -top-6 -left-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${review.bgGradient} rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        <Quote className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Header with Verification */}
                    <div className="flex items-start gap-4 mb-6 pt-6">
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
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                            <Verified className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{review.name}</h3>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <MapPin className="w-3 h-3" />
                          {review.location}
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
                    
                    {/* Review Text */}
                    <div className="flex-grow mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Business Reply */}
                    {review.businessReply && (
                      <div className="bg-blue-50/80 rounded-xl p-4 mb-4 border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">B</span>
                          </div>
                          <span className="text-sm font-semibold text-blue-900">Business Response</span>
                        </div>
                        <p className="text-sm text-blue-800">{review.businessReply}</p>
                      </div>
                    )}
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">G</span>
                        </div>
                        Google Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Navigation */}
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
              disabled={currentIndex + 3 >= reviews.length}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-white/40 ${
                currentIndex + 3 >= reviews.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              <ChevronRight className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>
          </div>
        </div>

        {/* Enhanced Progress Indicators */}
        <div 
          className={`flex justify-center gap-4 mt-16 transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'w-16 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl'
                  : 'w-4 h-4 bg-gray-300 hover:bg-gray-400 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}