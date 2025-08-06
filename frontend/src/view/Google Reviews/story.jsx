import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Users, TrendingUp, Award, Building } from 'lucide-react';
import images from "../../assets/Images/images";
const story= () => {
  const [selectedStory, setSelectedStory] = useState(0);

  
  useEffect(() => {
   
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosCSS);

    
    const aosJS = document.createElement('script');
    aosJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    aosJS.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 100,
      });
    };
    document.body.appendChild(aosJS);

    return () => {
      document.head.removeChild(aosCSS);
      document.body.removeChild(aosJS);
    };
  }, []);

  // Refresh AOS when story changes
  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.refresh();
      }, 100);
    }
  }, [selectedStory]);

  const successStories = [
    {
      id: 1,
      clientName: "ALEX MONTANARI",
      industry: "AGRA FARMING TECHNOLOGIES",
      logo: images.images_alex01,
    //   challenge: "Struggling with project delivery timelines and team coordination across multiple locations",
    //   solution: "Implemented agile project management system with real-time collaboration tools",
    //   results: [
    //     "40% faster project delivery",
    //     "95% client satisfaction rate",
    //     "300% increase in team productivity"
    //   ],
      testimonial: "The Self-Employment Assistance program delivered by Businessplex has provided me with the financial support to focus on my company full-time, and the mentoring has been invaluable.",
    //   clientRole: "CEO & Founder",
      clientPhoto: images.images_alex01,
      images: [
        images.images_alex01,
        images.images_alex02,
        images.images_alex03
      ],
      metrics: {
        revenue: "+250%",
        efficiency: "+40%",
        satisfaction: "95%"
      }
    },
    {
      id: 2,
      clientName: "CYNDY MOODY",
      industry: "DJOONYART CREATIVES",
      logo: images.images_CyndyMoody01,
    //   challenge: "Low online presence and declining sales due to lack of digital marketing strategy",
    //   solution: "Comprehensive digital transformation including e-commerce platform and social media marketing",
    //   results: [
    //     "500% increase in online sales",
    //     "200% growth in social media engagement",
    //     "150% expansion in customer base"
    //   ],
      testimonial: "The Self-Employment Assistance Program delivered by Businessplex have been a great support throughout the year and helped me with getting my business website up and running",
    //   clientRole: "Marketing Director",
      clientPhoto: images.images_CyndyMoody01,
      images: [
        images.images_CyndyMoody01,
      images.images_CyndyMoody02,
      ],
      metrics: {
        revenue: "+500%",
        engagement: "+200%",
        customers: "+150%"
      }
    },
    {
      id: 3,
      clientName: "ERIC LEE",
      industry: "HAND PULLED NOODLE BAR",
      logo: images.images_EricLee01,
    //   challenge: "Patient scheduling inefficiencies and poor communication systems",
    //   solution: "Custom patient management system with automated scheduling and communication tools",
    //   results: [
    //     "60% reduction in scheduling conflicts",
    //     "90% patient satisfaction score",
    //     "35% increase in appointment efficiency"
    //   ],
      testimonial: "The Self-Employment Assistance Program delivered by Businessplex provided the structure, mentorship, and business knowledge I needed to launch Pulled Noodle Bar.",
    //   clientRole: "Chief Administrator",
      clientPhoto: images.images_EricLee01,
      images: [
       images.images_EricLee01,
      images.images_EricLee03,
      images.images_EricLee04
      ],
      metrics: {
        efficiency: "+35%",
        satisfaction: "90%",
        conflicts: "-60%"
      }
    },
    {
      id: 4,
      clientName: "BRAE KUNZLI RIX",
      industry: "TRUEFIX MAINTENANCE & PROPERTY SOLUTIONS",
      logo: images.images_BraeKunzli01,
    //   challenge: "Outdated learning management system affecting student engagement and performance",
    //   solution: "Modern LMS with interactive features, analytics, and mobile accessibility",
    //   results: [
    //     "80% improvement in student engagement",
    //     "45% increase in course completion rates",
    //     "99% system uptime achieved"
    //   ],
      testimonial: "The friendliness & approachability of the staff at Businessplex has helped me to ask `silly questions` without feeling silly.",
    //   clientRole: "Academic Director",
      clientPhoto: images.images_BraeKunzli01,
      images: [
       images.images_BraeKunzli01,
      images.images_BraeKunzli02,
      ],
      metrics: {
        engagement: "+80%",
        completion: "+45%",
        uptime: "99%"
      },
    },
    {
      id: 5,
      clientName: "PAUL NIEMAN",
      industry: "SUMMER'S HOME MAINTENANCE",
      logo: images.images_PaulNieman01,
    //   challenge: "Patient scheduling inefficiencies and poor communication systems",
    //   solution: "Custom patient management system with automated scheduling and communication tools",
    //   results: [
    //     "60% reduction in scheduling conflicts",
    //     "90% patient satisfaction score",
    //     "35% increase in appointment efficiency"
    //   ],
      testimonial: "Joining the BusinessPlex mentoring program has been one of the best decisions I've made as a business owner. When I started TrueFix Maintenance in July 2024, I had the skills and passion but not the roadmap. Through the support and guidance of my mentor, Gish, I gained clarity, confidence, and the tools to build something sustainable and successful.",
    //   clientRole: "Chief Administrator",
      clientPhoto: images.images_PaulNieman01,
      images: [
       images.images_PaulNieman01,
      images.images_PaulNieman02,
      images.images_PaulNieman03
      ],
      metrics: {
        efficiency: "+35%",
        satisfaction: "90%",
        conflicts: "-60%"
      }
    },
  ];

  const currentStory = successStories[selectedStory];

  return (
    <div className="relative bg-gradient-to-br from-white via-green-50 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" data-aos="fade-up" data-aos-delay="200">
          Client Success Stories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          Discover how we've helped businesses transform their operations and achieve remarkable results
        </p>
      </div>

     
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="400">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setSelectedStory(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedStory === index
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-100 shadow-md hover:shadow-lg'
              }`}
              data-aos="zoom-in"
              data-aos-delay={500 + index * 100}
            >
              <img
                src={story.logo}
                alt={`${story.clientName} logo`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold">{story.clientName}</span>
            </button>
          ))}
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
         
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-12 text-white" data-aos="slide-down" data-aos-delay="400">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0" data-aos="fade-right" data-aos-delay="500">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <img
                    src={currentStory.logo}
                    alt={`${currentStory.clientName} logo`}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  />
                  <div>
                    <h3 className="text-3xl font-bold" data-aos="fade-up" data-aos-delay="700">{currentStory.clientName}</h3>
                    <p className="text- blue-100" data-aos="fade-up" data-aos-delay="800">{currentStory.industry}</p>
                  </div>
                </div>
              </div>
              
              
              <div className="grid grid-cols-3 gap-6 text-center" data-aos="fade-left" data-aos-delay="500">
                {Object.entries(currentStory.metrics).map(([key, value], index) => (
                  <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4" data-aos="flip-up" data-aos-delay={600 + index * 100}>
                    <div className="text-2xl font-bold text-blue-800">{value}</div>
                    <div className="text-black capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
           
            {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4" data-aos="bounce" data-aos-delay="300">
                  <Building className="w-8 h-8 text-blue-800" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3" data-aos="fade-up" data-aos-delay="400">Challenge</h4>
                <p className="text-gray-600" data-aos="fade-up" data-aos-delay="500">{currentStory.challenge}</p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4" data-aos="bounce" data-aos-delay="500">
                  <TrendingUp className="w-8 h-8 text-blue-800" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3" data-aos="fade-up" data-aos-delay="600">Solution</h4>
                <p className="text-gray-600" data-aos="fade-up" data-aos-delay="700">{currentStory.solution}</p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4" data-aos="bounce" data-aos-delay="700">
                  <Award className="w-8 h-8 text-blue-800" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3" data-aos="fade-up" data-aos-delay="800">Results</h4>
                <ul className="text-gray-600 space-y-1">
                  {currentStory.results.map((result, index) => (
                    <li key={index} className="flex items-center justify-center" data-aos="slide-left" data-aos-delay={900 + index * 100}>
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-black mb-6 text-center" data-aos="fade-up" data-aos-delay="300">Story Gallery</h4>
              <div className={`grid gap-6 ${
                currentStory.images.length === 3 
                  ? 'md:grid-cols-3' 
                  : 'md:grid-cols-2'
              }`}>
                {currentStory.images.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg" data-aos="zoom-in-up" data-aos-delay={400 + index * 150}>
                    <img
                      src={image}
                      alt={`${currentStory.clientName} project ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
 
            {/* Testimonial */}
            <div className="bg-gray-50 rounded-2xl p-8" data-aos="fade-up" data-aos-delay="500">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                  <Quote className="w-12 h-12 text-red-600 mb-4 mx-auto md:mx-0" data-aos="rotate" data-aos-delay="600" />
                  <blockquote className="text-xl text-gray-700 italic mb-4 text-center md:text-left" data-aos="fade-up" data-aos-delay="700">
                    "{currentStory.testimonial}"
                  </blockquote>
                </div>
                <div className="text-center md:text-right" data-aos="fade-left" data-aos-delay="600">
                  <img
                    src={currentStory.clientPhoto}
                    alt="Client"
                    className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0 mb-4"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  />
                  
                  <div className="font-semibold text-gray-900" data-aos="fade-up" data-aos-delay="800">{currentStory.clientRole}</div>
                  <div className="text-gray-600" data-aos="fade-up" data-aos-delay="900">{currentStory.clientName}</div>
                </div>
                
              </div>
            </div>
            <br/>
            <div className="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="800">
          <button
            onClick={() => setSelectedStory(selectedStory === 0 ? successStories.length - 1 : selectedStory - 1)}
            className="p-3 bg-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
            data-aos="slide-right"
            data-aos-delay="900"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => setSelectedStory((selectedStory + 1) % successStories.length)}
            className="p-3 bg-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
            data-aos="slide-left"
            data-aos-delay="900"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default story;