import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, X, User, Quote, Calendar, Award } from 'lucide-react';
import images from "../../assets/Images/images";

const successStories = [
  {
    id: 1,
    name: "Alex Martinez",
    company: "Tech Innovations Inc.",
    avatar: images.images_alex01,
    role: "CEO & Founder",
    rating: 5,
    date: "2 days ago",
    challenge: "Struggling to scale their digital presence and convert leads effectively",
    solution: "Implemented a comprehensive digital marketing strategy with automated lead nurturing",
    result: "300% increase in qualified leads and 150% boost in conversion rates within 6 months",
    testimonial: "The transformation has been incredible! Our business has grown beyond what we thought possible. The team's expertise and dedication made all the difference in scaling our operations.",
    metrics: [
      { label: "Lead Increase", value: "300%" },
      { label: "Conversion Boost", value: "150%" },
      { label: "ROI", value: "250%" }
    ],
    images: [
      images.images_alex01,
      images. images_alex02,
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
    challenge: "Limited online visibility and declining foot traffic to physical store",
    solution: "Developed omnichannel marketing approach with strong local SEO and social media presence",
    result: "400% increase in online sales and 80% growth in store visits through digital campaigns",
    testimonial: "Outstanding results! They completely transformed how customers find and engage with my business. The blend of online and offline strategies brought customers back to my store.",
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
    challenge: "Inefficient marketing spend with poor attribution and tracking",
    solution: "Implemented advanced analytics and attribution modeling for better ROI tracking",
    result: "45% reduction in cost per acquisition and 200% improvement in marketing efficiency",
    testimonial: "Great experience working with this team. They helped us understand exactly where our marketing dollars were working and optimized our entire funnel for better performance.",
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
    challenge: "Long sales cycles and difficulty educating prospects about complex solutions",
    solution: "Created educational content marketing strategy with automated nurture sequences",
    result: "60% shorter sales cycles and 180% increase in qualified demo requests",
    testimonial: "Incredible attention to detail and results! They simplified our complex message and created a system that educates prospects while they move through our sales funnel.",
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
    challenge: "Inconsistent project pipeline and difficulty showcasing portfolio effectively",
    solution: "Built stunning portfolio website with integrated lead generation and project showcase",
    result: "500% increase in inbound inquiries and 90% higher project values",
    testimonial: "Fantastic service from start to finish! They understood our creative vision and built something that not only looks amazing but actually brings in high-quality leads consistently.",
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
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 p-8 min-w-[400px] max-w-[400px] flex-shrink-0 border border-gray-100"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-3 ring-blue-100">
          <img 
            src={story.avatar} 
            alt={story.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#3B82F6"/>
                  <circle cx="32" cy="26" r="10" fill="white"/>
                  <path d="M12 54c0-11.046 8.954-20 20-20s20 8.954 20 20" fill="white"/>
                </svg>
              `)}`;
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg">{story.name}</h3>
          <p className="text-blue-600 font-semibold text-sm">{story.role}</p>
          <p className="text-gray-600 text-sm">{story.company}</p>
          <div className="flex items-center mt-2">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < story.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 flex items-center">
              <Calendar size={12} className="mr-1" />
              {story.date}
            </span>
          </div>
        </div>
      </div>
      
      {/* Challenge & Result Preview */}
      <div className="mb-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 rounded-r-lg">
          <h4 className="font-semibold text-red-800 text-sm mb-1">Challenge</h4>
          <p className="text-red-700 text-xs leading-relaxed">{story.challenge}</p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
          <h4 className="font-semibold text-green-800 text-sm mb-1">Result</h4>
          <p className="text-green-700 text-xs leading-relaxed">{story.result}</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {story.metrics.map((metric, index) => (
          <div key={index} className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div className="font-bold text-blue-600 text-lg">{metric.value}</div>
            <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonial Preview */}
      <div className="relative">
        <Quote size={20} className="text-blue-200 absolute -top-2 -left-2" />
        <p className="text-gray-700 text-sm leading-relaxed italic pl-4 line-clamp-3">
          {story.testimonial}
        </p>
      </div>

      {/* Images Preview */}
      {story.images.length > 0 && (
        <div className="mb-6">
          <div className="flex gap-2 overflow-hidden">
            {story.images.slice(0, 3).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg border border-gray-200"
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
      <div className="mb-6">
        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
          <span className="mr-2">View Full Story</span>
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500">
          <Award size={12} className="mr-1" />
          {story.industry}
        </div>
        <div className="text-xs text-gray-500">
          Duration: {story.duration}
        </div>
      </div>
    </div>
  );
};

const StoryModal = ({ story, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-8 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-3 ring-blue-100">
              <img 
                src={story.avatar} 
                alt={story.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl">{story.name}</h3>
              <p className="text-blue-600 font-semibold">{story.role}</p>
              <p className="text-gray-600">{story.company}</p>
              <div className="flex items-center mt-2">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < story.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{story.date}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        
        <div className="p-8">
          {/* Success Story Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                The Challenge
              </h4>
              <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                <p className="text-red-800 leading-relaxed">{story.challenge}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Our Solution
              </h4>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl">
                <p className="text-blue-800 leading-relaxed">{story.solution}</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              The Results
            </h4>
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl mb-6">
              <p className="text-green-800 leading-relaxed text-lg font-medium">{story.result}</p>
            </div>
            
            {/* Metrics */}
            <div className="grid md:grid-cols-3 gap-4">
              {story.metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-blue-200">
                  <div className="font-bold text-blue-600 text-3xl mb-2">{metric.value}</div>
                  <div className="text-gray-700 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-900 text-lg mb-4">Client Testimonial</h4>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 relative">
              <Quote size={32} className="text-blue-300 absolute top-4 left-6" />
              <p className="text-gray-800 text-lg leading-relaxed italic pl-8 pr-4">
                {story.testimonial}
              </p>
            </div>
          </div>
          
          {/* Images */}
          {story.images.length > 0 && (
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-4">Project Gallery</h4>
              <div className="space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src={story.images[selectedImageIndex]}
                    alt={`Project image ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {story.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {story.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-3 transition-all ${
                          index === selectedImageIndex
                            ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const googleReviws = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);

  
  const cardsPerView = 3;
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
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Award size={16} className="mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Impact
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={`${
                    i < Math.floor(averageRating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-3 text-lg">
              Average Client Satisfaction
            </span>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover how we've helped businesses like yours overcome challenges, achieve growth, 
            and exceed their goals through our proven strategies and dedicated partnership.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (400 + 32)}px)`,
                width: `${successStories.length * (400 + 32)}px`
              }}
            >
              {successStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onClick={() => setSelectedStory(story)}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {successStories.length > cardsPerView && (
            <>
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center transition-all ${
                  canScrollLeft 
                    ? 'hover:bg-blue-50 hover:shadow-2xl text-gray-700 hover:border-blue-200' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center transition-all ${
                  canScrollRight 
                    ? 'hover:bg-blue-50 hover:shadow-2xl text-gray-700 hover:border-blue-200' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {successStories.length > cardsPerView && (
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

export default googleReviws;