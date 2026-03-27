import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Users,
  TrendingUp,
  Award,
  Building,
  X,
  Eye,
} from "lucide-react";
import images from "../../assets/Images/images";
const Story = () => {
  const [selectedStory, setSelectedStory] = useState(0);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileGalleryIndex, setMobileGalleryIndex] = useState(0);

  useEffect(() => {
    const aosCSS = document.createElement("link");
    aosCSS.rel = "stylesheet";
    aosCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
    document.head.appendChild(aosCSS);

    const aosJS = document.createElement("script");
    aosJS.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    aosJS.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false,
        mirror: true,
        offset: 100,
      });
    };
    document.body.appendChild(aosJS);

    return () => {
      if (document.head.contains(aosCSS)) document.head.removeChild(aosCSS);
      if (document.body.contains(aosJS)) document.body.removeChild(aosJS);
    };
  }, []);

  // Refresh AOS
  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.refresh();
      }, 100);
    }
  }, [selectedStory]);

  // Reset mobile gallery
  useEffect(() => {
    setMobileGalleryIndex(0);
  }, [selectedStory]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showImagePopup) return;

      if (e.key === "Escape") {
        setShowImagePopup(false);
      } else if (e.key === "ArrowLeft") {
        navigatePopupImage("prev");
      } else if (e.key === "ArrowRight") {
        navigatePopupImage("next");
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [showImagePopup, currentImageIndex]);

  const successStories = [
    {
      id: 1,
      clientName: "ALEX MONTANARI",
      industry: "AGRA FARMING TECHNOLOGIES",
      logo: images.images_logo01,
      testimonial:
        "The Self-Employment Assistance program delivered by Businessplex has provided me with the financial support to focus on my company full-time, and the mentoring has been invaluable.",
      clientPhoto: images.images_logo01,
      mobileImages: [
        images.images_alex01,
        images.images_alex02,
        images.images_alex03,
      ],
      desktopImages: [
        images.images_alex01,
        images.images_alex02,
        images.images_alex03,
      ],
      Popupimages: [
        images.images_alex01,
        images.images_alex02,
        images.images_alex03,
      ],
      
    },
    {
      id: 2,
      clientName: "CYNDY MOODY",
      industry: "DJOONYART CREATIVES",
      logo: images.images_logo03,
      testimonial:
        "The Self-Employment Assistance Program delivered by Businessplex have been a great support throughout the year and helped me with getting my business website up and running",
      clientPhoto: images.images_logo03,
      mobileImages: [images.images_CyndyMoody01, images.images_CyndyMoody02],
      desktopImages: [images.images_CyndyMoody01, images.images_CyndyMoody02],
      Popupimages: [images.images_CyndyMoody01, images.images_CyndyMoody02],
     
    },
    {
      id: 3,
      clientName: "ERIC LEE",
      industry: "HAND PULLED NOODLE BAR",
      logo: images.images_logo04,
      testimonial:
        "The Self-Employment Assistance Program delivered by Businessplex provided the structure, mentorship, and business knowledge I needed to launch Pulled Noodle Bar.",
      clientPhoto: images.images_logo04,
      mobileImages: [
        images.images_EricLee01,
        images.images_EricLee03,
        images.images_EricLee04,
      ],
      desktopImages: [
        images.images_EricLee01,
        images.images_EricLee03,
        images.images_EricLee04,
      ],
      Popupimages: [
        images.images_EricLee01,
        images.images_EricLee03,
        images.images_EricLee04,
      ],
      
    },
    {
      id: 4,
      clientName: "BRAE KUNZLI RIX",
      industry: "TRUEFIX MAINTENANCE & PROPERTY SOLUTIONS",
      logo: images.images_logo05,
      testimonial:
      "Joining the BusinessPlex mentoring program has been one of the best decisions I've made as a business owner. When I started TrueFix Maintenance in July 2024, I had the skills and passion but not the roadmap. Through the support and guidance of my mentor, Gish, I gained clarity, confidence, and the tools to build something sustainable and successful.",
      clientPhoto: images.images_logo05,
      mobileImages: [
        images.images_BraeKunzli01, 
        images.images_BraeKunzli02,
      ],
      desktopImages: [
        images.images_BraeKunzli01, 
        images.images_BraeKunzli02,
      ],
      Popupimages: [
        images.images_BraeKunzli01, 
        images.images_BraeKunzli02,
      ],
     
    },
    {
      id: 5,
      clientName: "PAUL NIEMAN",
      industry: "SUMMER'S HOME MAINTENANCE",
      logo: images.images_logo02,
      testimonial:
         "The friendliness & approachability of the staff at Businessplex has helped me to ask `silly questions` without feeling silly.",
      clientPhoto: images.images_logo02,
      mobileImages: [
        images.images_PaulNieman01,
        images.images_PaulNieman02,
        images.images_PaulNieman03,
      ],
      desktopImages: [
        images.images_PaulNieman01,
        images.images_PaulNieman02,
        images.images_PaulNieman03,
      ],
      Popupimages: [
        images.images_PaulNieman01,
        images.images_PaulNieman02,
        images.images_PaulNieman03,
      ],
    
    },
  ];

  const currentStory = successStories[selectedStory];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getGalleryImages = () => {
    return isMobile ? currentStory.mobileImages : currentStory.desktopImages;
  };

  const navigateMobileGallery = (direction) => {
    const totalImages = currentStory.mobileImages.length;
    if (direction === "next") {
      setMobileGalleryIndex((prev) => (prev + 1) % totalImages);
    } else {
      setMobileGalleryIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  const openImagePopup = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setShowImagePopup(true);
    document.body.style.overflow = "hidden";
  };

  const openImagePopupFromGallery = (imageIndex) => {
    const actualIndex = isMobile ? mobileGalleryIndex : imageIndex;
    setCurrentImageIndex(actualIndex);
    setShowImagePopup(true);
    document.body.style.overflow = "hidden";
  };

  const closeImagePopup = () => {
    setShowImagePopup(false);
    document.body.style.overflow = "unset";
  };

  const navigatePopupImage = (direction) => {
    const totalPopupImages = currentStory.Popupimages.length;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % totalPopupImages);
    } else {
      setCurrentImageIndex(
        (prev) => (prev - 1 + totalPopupImages) % totalPopupImages
      );
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-green-50 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-7xl mx-auto text-center mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Client Success Stories
        </h2>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Discover how we've helped businesses transform their operations and
          achieve remarkable results
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <div
          className="flex flex-wrap justify-center gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setSelectedStory(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedStory === index
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-100 shadow-md hover:shadow-lg"
              }`}
              data-aos="zoom-in"
              data-aos-delay={500 + index * 100}
            >
              <img
                src={story.logo}
                alt={`${story.clientName} logo`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold text-sm sm:text-base">
                {story.clientName}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 sm:px-8 py-8 sm:py-12 text-white"
            data-aos="slide-down"
            data-aos-delay="400"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div
                className="text-center lg:text-left mb-6 lg:mb-0"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <img
                    src={currentStory.logo}
                    alt={`${currentStory.clientName} logo`}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-4 border-white"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  />
                  <div>
                    <h3
                      className="text-xl sm:text-3xl font-bold"
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      {currentStory.clientName}
                    </h3>
                    <p
                      className="text-blue-100 text-sm sm:text-base"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      {currentStory.industry}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="grid grid-cols-3 gap-3 sm:gap-6 text-center"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                {/* {Object.entries(currentStory.metrics).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-20 rounded-lg p-2 sm:p-4"
                      data-aos="flip-up"
                      data-aos-delay={600 + index * 100}
                    >
                      <div className="text-lg sm:text-2xl font-bold text-black">
                        {value}
                      </div>
                      <div className="text-blue-900 capitalize text-xs sm:text-sm">
                        {key}
                      </div>
                    </div> */}
                  {/* )
                )} */}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-8 lg:p-12">
            <div className="mb-12">
              <h4
                className="text-xl sm:text-2xl font-bold text-black mb-6 text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Story Gallery
              </h4>

              {/* Mobile Gallery - Single Image with Square Aspect Ratio */}
              {isMobile ? (
                <div className="space-y-4">
                  <div
                    className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-black w-full aspect-square"
                    data-aos="zoom-in-up"
                    data-aos-delay="400"
                    onClick={() => openImagePopupFromGallery(0)}
                  >
                    <img
                      src={currentStory.mobileImages[mobileGalleryIndex]}
                      alt={`${currentStory.clientName} project ${
                        mobileGalleryIndex + 1
                      }`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                        <Eye className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-75 text-white text-sm px-3 py-1 rounded-full text-center">
                        Click to view
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  {currentStory.mobileImages.length > 1 && (
                    <div className="flex justify-center items-center space-x-4">
                      <button
                        onClick={() => navigateMobileGallery("prev")}
                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 border border-gray-200"
                        data-aos="slide-right"
                        data-aos-delay="500"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>

                      <div className="flex space-x-2">
                        {currentStory.mobileImages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === mobileGalleryIndex
                                ? "bg-blue-600"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => navigateMobileGallery("next")}
                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 border border-gray-200"
                        data-aos="slide-left"
                        data-aos-delay="500"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Desktop Gallery - Multiple Images with Square Aspect Ratio */
                <div
                  className={`grid gap-4 sm:gap-6 ${
                    getGalleryImages().length === 3
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2"
                  }`}
                >
                  {getGalleryImages().map((image, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-black w-full aspect-square"
                      data-aos="zoom-in-up"
                      data-aos-delay={400 + index * 150}
                      onClick={() => openImagePopupFromGallery(index)}
                    >
                      <img
                        src={image}
                        alt={`${currentStory.clientName} project ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                          <Eye className="w-6 h-6 text-gray-800" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black bg-opacity-75 text-white text-sm px-3 py-1 rounded-full text-center">
                          Click to view
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="bg-gray-50 rounded-2xl p-4 sm:p-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
                  <Quote
                    className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 mb-4 mx-auto lg:mx-0"
                    data-aos="rotate"
                    data-aos-delay="600"
                  />
                  <blockquote
                    className="text-lg sm:text-xl text-gray-700 italic mb-4 text-center lg:text-left"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    "{currentStory.testimonial}"
                  </blockquote>
                </div>
                <div
                  className="text-center lg:text-right"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <img
                    src={currentStory.clientPhoto}
                    alt="Client"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto lg:mx-0 mb-4"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  />
                  <div
                    className="font-semibold text-gray-900"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    {currentStory.clientName}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex justify-center space-x-4 mt-8"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <button
                onClick={() =>
                  setSelectedStory(
                    selectedStory === 0
                      ? successStories.length - 1
                      : selectedStory - 1
                  )
                }
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
                data-aos="slide-right"
                data-aos-delay="900"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={() =>
                  setSelectedStory((selectedStory + 1) % successStories.length)
                }
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
                data-aos="slide-left"
                data-aos-delay="900"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {showImagePopup && (
        <div className="fixed inset-0 z-50  bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <button
            onClick={closeImagePopup}
            className="absolute top-4 right-4 z-60 bg-red-500 hover:bg-red-600 rounded-full p-2 transition-all duration-200 shadow-lg"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-7xl w-full flex-1 flex items-center justify-center">
            {currentStory.Popupimages.length > 1 && !isMobile && (
              <button
                onClick={() => navigatePopupImage("prev")}
                className="absolute left-4 z-60 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 transition-all duration-200 border border-gray-600"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            <div className="relative max-h-full max-w-full">
              <img
                src={currentStory.Popupimages[currentImageIndex]}
                alt={`${currentStory.clientName} popup ${
                  currentImageIndex + 1
                }`}
                className="max-h-[70vh] sm:max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm border border-gray-600">
                {currentImageIndex + 1} / {currentStory.Popupimages.length}
              </div>
            </div>

            {currentStory.Popupimages.length > 1 && !isMobile && (
              <button
                onClick={() => navigatePopupImage("next")}
                className="absolute right-4 z-60 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 transition-all duration-200 border border-gray-600"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </div>

          {isMobile && currentStory.Popupimages.length > 1 && (
            <div className="flex justify-center items-center space-x-6 mt-4 mb-4">
              <button
                onClick={() => navigatePopupImage("prev")}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 transition-all duration-200 border border-gray-600"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigatePopupImage("next")}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 transition-all duration-200 border border-gray-600"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          )}

          {currentStory.Popupimages.length > 1 && (
            <div className="flex space-x-2 bg-black bg-opacity-70 p-2 rounded-lg border border-gray-600 mt-2">
              {currentStory.Popupimages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-12 h-12 rounded overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex
                      ? "ring-2 ring-white"
                      : "opacity-60 hover:opacity-80"
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
  );
};

export default Story;
