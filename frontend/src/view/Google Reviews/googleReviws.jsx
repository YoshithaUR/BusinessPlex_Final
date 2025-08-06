import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, X, User, Quote, Calendar, Award } from 'lucide-react';
import images from "../../assets/Images/images";
const successStories = [
  {
    id: 1,
    name: "Alex Martinez",
    company: "AGRA FARMING TECHNOLOGIES",
    avatar: images.images_alex01,
    role: "CEO & Founder",
    rating: 5,
    date: "2 days ago",
    testimonial: "Working with this team transformed our entire business approach. Their strategic insights and execution excellence delivered results beyond our expectations. The lead generation system they built increased our qualified prospects by 300% while improving our conversion rates significantly.",
    metrics: [
      { label: "Lead Increase", value: "300%" },
      { label: "Conversion Boost", value: "150%" },
      { label: "ROI", value: "250%" }
    ],
    images: [
      images.images_alex01,
      images.images_alex02,
      images.images_alex03,
    ],
    duration: "6 months",
    industry: "Technology"
  },
  {
    id: 2,
    name: "Cyndy Moody",
    company: "Wellness Boutique",
    avatar: images.images_CyndyMoody01,
    role: "Business Owner",
    rating: 5,
    date: "1 week ago",
    testimonial: "The digital transformation of my wellness boutique exceeded all expectations. Their comprehensive approach to online marketing and customer engagement strategies resulted in unprecedented growth across all metrics.",
    metrics: [
      { label: "Online Sales", value: "400%" },
      { label: "Store Visits", value: "80%" },
      { label: "Brand Awareness", value: "200%" }
    ],
    images: [
      images.images_CyndyMoody01,
      images.images_CyndyMoody02,
    ],
    duration: "4 months",
    industry: "Retail & Wellness"
  },
  {
    id: 3,
    name: "Eric Lee",
    company: "Digital Solutions Pro",
    avatar: images.images_EricLee01,
    role: "Marketing Director",
    rating: 4,
    date: "2 weeks ago",
    testimonial: "Their data-driven approach to marketing optimization delivered exceptional results. The efficiency gains we achieved through their systems and processes have completely transformed our operations.",
    metrics: [
      { label: "CPA Reduction", value: "45%" },
      { label: "Efficiency Gain", value: "200%" },
      { label: "Budget Optimization", value: "65%" }
    ],
    images: [
      images.images_EricLee01,
      images.images_EricLee03,
      images.images_EricLee04
    ],
    duration: "8 months",
    industry: "Digital Services"
  },
  {
    id: 4,
    name: "Paul Nieman",
    company: "Green Energy Solutions",
    avatar: images.images_PaulNieman01,
    role: "VP of Sales",
    rating: 5,
    date: "3 weeks ago",
    testimonial: "Incredible attention to detail and results! They simplified our complex message and created a system that educates prospects while they move through our sales funnel. The impact on our sales cycle and close rates has been remarkable.",
    metrics: [
      { label: "Sales Cycle", value: "-60%" },
      { label: "Demo Requests", value: "180%" },
      { label: "Close Rate", value: "120%" }
    ],
    images: [
      images.images_PaulNieman01,
      images.images_PaulNieman02,
      images.images_PaulNieman03
    ],
    duration: "10 months",
    industry: "Clean Energy"
  },
  {
    id: 5,
    name: "Brae Kunzli",
    company: "Creative Studio",
    avatar: images.images_BraeKunzli01,
    role: "Creative Director",
    rating: 5,
    date: "1 month ago",
    testimonial: "The creative marketing strategies they developed for our studio brought in more high-quality inquiries than we could have imagined. Their understanding of the creative industry and ability to translate that into effective campaigns is outstanding.",
    metrics: [
      { label: "Inquiries", value: "500%" },
      { label: "Project Value", value: "90%" },
      { label: "Conversion Rate", value: "240%" }
    ],
    images: [
      images.images_BraeKunzli01,
      images.images_BraeKunzli02,
    ],
    duration: "5 months",
    industry: "Creative Services"
  }
];

const StoryCard = ({ story, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 p-4 md:p-6 lg:p-8 w-full max-w-sm mx-auto flex-shrink-0 border border-gray-100"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-center mb-4 md:mb-6">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mr-3 md:mr-4 ring-2 md:ring-3 ring-blue-100">
          <img 
            src={story.avatar} 
            alt={story.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(`
               
              `)}`;
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base md:text-lg truncate">{story.name}</h3>
          <p className="text-blue-600 font-semibold text-xs md:text-sm truncate">{story.role}</p>
          <p className="text-gray-600 text-xs md:text-sm truncate">{story.company}</p>
          <div className="flex items-center mt-1 md:mt-2">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`md:w-4 md:h-4 ${
                    i < story.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 flex items-center">
              <Calendar size={10} className="mr-1 md:w-3 md:h-3" />
              {story.date}
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial Preview */}
      <div className="relative mb-4 md:mb-6">
        <Quote size={16} className="md:w-5 md:h-5 text-blue-200 absolute -top-1 -left-1 md:-top-2 md:-left-2" />
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed italic pl-3 md:pl-4 line-clamp-3">
          {story.testimonial}
        </p>
      </div>

      {/* Images Preview */}
      {story.images.length > 0 && (
        <div className="mb-4 md:mb-6">
          <div className="flex gap-1 md:gap-2 overflow-hidden">
            {story.images.slice(0, 3).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg border border-gray-200"
                />
                {index === 2 && story.images.length > 3 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      +{story.images.length - 3}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Click Here Button */}
      <div className="mb-4 md:mb-6">
        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm md:text-base">
          <span className="mr-2">View Full Story</span>
          <ChevronRight size={14} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500">
          <Award size={10} className="mr-1 md:w-3 md:h-3" />
          <span className="truncate">{story.industry}</span>
        </div>
        <div className="text-xs text-gray-500 flex-shrink-0 ml-2">
          {story.duration}
        </div>
      </div>
    </div>
  );
};

const StoryModal = ({ story, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4">
      <div className="bg-white rounded-2xl md:rounded-3xl max-w-6xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Close Button - Fixed Position */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:absolute md:top-6 md:right-6 z-20 p-2 md:p-3 hover:bg-gray-100 rounded-full transition-colors bg-white shadow-lg"
        >
          <X size={20} className="md:w-6 md:h-6 text-gray-500" />
        </button>

        {/* Header Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-4 md:p-6 lg:p-8 rounded-t-2xl md:rounded-t-3xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 bg-white rounded-full -translate-x-10 -translate-y-10 md:-translate-x-20 md:-translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-32 md:h-32 bg-white rounded-full translate-x-8 translate-y-8 md:translate-x-16 md:translate-y-16"></div>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-4 md:mr-6 ring-3 md:ring-4 ring-white ring-opacity-30 flex-shrink-0">
                <img 
                  src={story.avatar} 
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">{story.name}</h2>
                <p className="text-blue-100 text-sm md:text-base lg:text-lg font-semibold">{story.role}</p>
                <p className="text-blue-200 text-sm md:text-base">{story.company}</p>
                <div className="flex flex-col sm:flex-row sm:items-center mt-2 md:mt-3 gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`md:w-5 md:h-5 ${
                          i < story.rating
                            ? 'text-yellow-300 fill-current'
                            : 'text-blue-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-blue-200 flex items-center text-sm md:text-base">
                    <Calendar size={14} className="mr-1 md:mr-2 md:w-4 md:h-4" />
                    {story.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 lg:p-8">
          {/* Two Column Layout for Content */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
            
            {/* Left Column - Testimonial */}
            <div className="order-2 xl:order-1">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                <Quote size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7 text-blue-500 mr-2 md:mr-3 flex-shrink-0" />
                Client Testimonial
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border-l-4 border-blue-500 relative">
                <p className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed italic">
                  "{story.testimonial}"
                </p>
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-blue-200">
                  <p className="font-semibold text-gray-900 text-sm md:text-base">— {story.name}</p>
                  <p className="text-blue-600 text-xs md:text-sm">{story.role}, {story.company}</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Images */}
            {story.images.length > 0 && (
              <div className="order-1 xl:order-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Project Gallery
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {/* Main Image with Fixed Aspect Ratio */}
                  <div 
                    className="rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-lg relative"
                    style={{
                      width: '100%',
                      maxWidth: '604px',
                      aspectRatio: '604 / 335',
                      margin: '0 auto'
                    }}
                  >
                    <img
                      src={story.images[selectedImageIndex]}
                      alt={`Project image ${selectedImageIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  
                  {story.images.length > 1 && (
                    <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
                      <div className="flex gap-2 md:gap-3 mx-auto">
                        {story.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border-2 md:border-3 transition-all hover:scale-105 ${
                              index === selectedImageIndex
                                ? 'border-blue-500 ring-1 md:ring-2 ring-blue-200 shadow-lg'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            style={{
                              width: '64px',
                              height: '64px',
                              aspectRatio: '604 / 335'
                            }}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center">
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">Ready to Achieve Similar Results?</h4>
              <p className="text-blue-100 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Let's discuss how we can help transform your business with proven strategies and dedicated support.
              </p>
              <button className="bg-white text-blue-600 px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base">
                Start Your Success Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalCards = successStories.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);
  
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    }
  };

  const averageRating = successStories.reduce((sum, story) => sum + story.rating, 0) / successStories.length;

  return (
    <div className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
            <Award size={14} className="mr-1 md:mr-2 md:w-4 md:h-4" />
            Client Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Real Results, Real Impact
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-3 md:mb-4 gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`md:w-6 md:h-6 lg:w-7 lg:h-7 ${
                    i < Math.floor(averageRating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-gray-600 text-sm md:text-base lg:text-lg">
                Average Client Satisfaction
              </span>
            </div>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed px-4">
            Discover how we've helped businesses like yours overcome challenges, achieve growth, 
            and exceed their goals through our proven strategies and dedicated partnership.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 md:gap-6 lg:gap-8 transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {successStories.map((story) => (
                <div 
                  key={story.id}
                  className={`flex-shrink-0 ${
                    cardsPerView === 1 ? 'w-full' :
                    cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <StoryCard
                    story={story}
                    onClick={() => setSelectedStory(story)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {successStories.length > cardsPerView && (
            <>
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center transition-all z-10 ${
                  canScrollLeft 
                    ? 'hover:bg-blue-50 hover:shadow-2xl text-gray-700 hover:border-blue-200' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center transition-all z-10 ${
                  canScrollRight 
                    ? 'hover:bg-blue-50 hover:shadow-2xl text-gray-700 hover:border-blue-200' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {successStories.length > cardsPerView && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          isOpen={!!selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

export default GoogleReviews;