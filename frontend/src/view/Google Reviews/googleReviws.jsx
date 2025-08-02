import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, X, User } from 'lucide-react';

const mockReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "2 days ago",
    text: "Absolutely amazing experience! The service was exceptional and exceeded all my expectations. The attention to detail was remarkable.",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "1 week ago",
    text: "Outstanding quality and professional service. I've been a customer for years and they never disappoint. Highly recommended!",
    images: [
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 3,
    name: "Emma Williams",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 4,
    date: "2 weeks ago",
    text: "Great experience overall. The team was very helpful and the results were exactly what I was looking for. Will definitely return!",
    images: [
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "3 weeks ago",
    text: "Incredible attention to detail and customer service. They went above and beyond to make sure everything was perfect.",
    images: [
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 5,
    name: "Lisa Thompson",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "1 month ago",
    text: "Fantastic service from start to finish. The team was professional, friendly, and delivered exceptional results. Five stars!",
    images: [
      "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 4,
    date: "1 month ago",
    text: "Very satisfied with the service. Professional team and great results. Would recommend to friends and family.",
    images: [
      "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1267337/pexels-photo-1267337.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  }
];

const ReviewCard = ({ review, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-6 min-w-[320px] max-w-[320px] flex-shrink-0"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-gray-100">
          <img 
            src={review.avatar} 
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="#E5E7EB"/>
                  <circle cx="24" cy="20" r="8" fill="#9CA3AF"/>
                  <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#9CA3AF"/>
                </svg>
              `)}`;
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm">{review.name}</h3>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < review.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{review.date}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
        {review.text}
      </p>
      
      {review.images.length > 0 && (
        <div className="flex gap-2 overflow-hidden">
          {review.images.slice(0, 3).map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Review ${index + 1}`}
                className="w-16 h-16 object-cover rounded-lg"
              />
              {index === 2 && review.images.length > 3 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    +{review.images.length - 3}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ReviewModal = ({ review, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-gray-100">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{review.name}</h3>
              <div className="flex items-center mt-1">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            {review.text}
          </p>
          
          {review.images.length > 0 && (
            <div className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={review.images[selectedImageIndex]}
                  alt={`Review image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {review.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {review.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedImageIndex
                          ? 'border-blue-500 ring-2 ring-blue-200'
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
          )}
        </div>
      </div>
    </div>
  );
};

const GoogleReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const visibleReviews = showAll ? mockReviews : mockReviews.slice(0, 4);
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < visibleReviews.length - 1;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length;

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center mb-2">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={`${
                    i < Math.floor(averageRating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-2">
              ({mockReviews.length} reviews)
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (320 + 24)}px)`,
                width: `${visibleReviews.length * (320 + 24)}px`
              }}
            >
              {visibleReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onClick={() => setSelectedReview(review)}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {visibleReviews.length > 1 && (
            <>
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all ${
                  canScrollLeft 
                    ? 'hover:bg-gray-50 hover:shadow-xl text-gray-700' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all ${
                  canScrollRight 
                    ? 'hover:bg-gray-50 hover:shadow-xl text-gray-700' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* View More Button */}
        {mockReviews.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Show Less' : `View All ${mockReviews.length} Reviews`}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedReview && (
        <ReviewModal
          review={selectedReview}
          isOpen={!!selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </div>
  );
};

export default GoogleReviewSection;