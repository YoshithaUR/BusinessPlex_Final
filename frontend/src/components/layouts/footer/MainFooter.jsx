import React, { useState } from 'react';
import images from '../../../assets/Images/images';
import { 
  FaFacebook, 
  FaLinkedin, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaYoutube, 
  FaMapMarkerAlt,
  FaChevronUp,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const MainFooter = () => {
  const [newsletterData, setNewsletterData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setNewsletterData({ name: '', email: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsletterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/qualifications", label: "Qualifications" },
    { href: "/trainingResources", label: "Training Resources" },
    { href: "/policies", label: "Our Policies" },
    { href: "/contact", label: "Contact Us" }
  ];

  const services = [
    { href: "#", label: "Small Business Training" },
    { href: "#", label: "Exploring Self-Employment Workshops" },
    { href: "#", label: "Business Health Checks" },
    { href: "#", label: "Business Advice" },
    { href: "#", label: "Mentoring Programs" },
    { href: "#", label: "Online Learning" }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="flex-shrink-0 mt-1" size={14} />,
      content: (
        <a
          href="https://www.google.com/maps?q=1/3+Marchant+Way,+Morley+WA+6062"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition-colors duration-200"
        >
          1/3 Marchant Way, Morley WA 6062
        </a>
      )
    },
    {
      icon: <FaPhoneAlt className="flex-shrink-0 mt-1" size={14} />,
      content: (
        <a
          href="tel:1300894480"
          className="hover:text-amber-400 transition-colors duration-200"
        >
          Free call: 1300 894 480
        </a>
      )
    },
    {
      icon: <FaPhoneAlt className="flex-shrink-0 mt-1" size={14} />,
      content: (
        <a
          href="tel:0861565820"
          className="hover:text-amber-400 transition-colors duration-200"
        >
          08 6156 5820
        </a>
      )
    },
    {
      icon: <MdEmail className="flex-shrink-0 mt-1" size={16} />,
      content: (
        <a
          href="mailto:admin@businessplex.com.au"
          className="hover:text-amber-400 transition-colors duration-200 break-words"
        >
          admin@businessplex.com.au
        </a>
      )
    }
  ];

  const socialLinks = [
    {
      href: "https://wa.me/",
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
      hoverColor: "hover:text-green-500"
    },
    {
      href: "https://www.youtube.com/",
      icon: <FaYoutube size={20} />,
      label: "YouTube",
      hoverColor: "hover:text-red-500"
    },
    {
      href: "https://web.facebook.com/BusinessplexTrainingCentre",
      icon: <FaFacebook size={20} />,
      label: "Facebook",
      hoverColor: "hover:text-blue-500"
    },
    {
      href: "https://www.linkedin.com/company/businessplex/",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="relative z-20 text-white">
      {/* Scroll to Top Button */}
      <div className="relative z-30">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-amber-500 hover:scale-110 transition-all duration-300 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={16} className="group-hover:animate-bounce" />
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 rounded-t-3xl -mt-6 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info & Contact */}
            <div className="lg:col-span-1">
              <div className="text-center md:text-left">
                <img
                  src={images.image_logo}
                  alt="Businessplex"
                  className="w-32 h-auto mb-6 mx-auto md:mx-0 filter brightness-110"
                />
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Empowering businesses through quality training and professional development. 
                  Your success is our mission.
                </p>
                
                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 justify-center md:justify-start">
                      <div className="text-amber-400 mt-0.5">
                        {item.icon}
                      </div>
                      <div className="text-sm text-gray-300">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-16 h-0.5 bg-amber-400 mx-auto md:mx-0"></div>
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                    >
                      <FaArrowRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-white relative">
                Services
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-16 h-0.5 bg-amber-400 mx-auto md:mx-0"></div>
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <a
                      href={service.href}
                      className="group flex items-center justify-center md:justify-start text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                    >
                      <FaArrowRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-white relative">
                Newsletter
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-16 h-0.5 bg-amber-400 mx-auto md:mx-0"></div>
              </h3>
              <p className="text-gray-300 text-sm mb-6 text-center md:text-left">
                Stay updated with our latest courses, workshops, and business insights.
              </p>
              
              {submitSuccess ? (
                <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                  <FaCheck className="mx-auto mb-2" size={20} />
                  <p className="text-sm font-semibold">Successfully subscribed!</p>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="space-y-4 max-w-sm mx-auto md:mx-0"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={newsletterData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={newsletterData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                        Subscribing...
                      </span>
                    ) : (
                      'Subscribe Now'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Certification Logos */}
            <div className="flex items-center space-x-6">
              <img
                src={images.image_Footer1}
                alt="Australian Qualification Framework"
                className="h-12 sm:h-16 w-auto filter brightness-110 hover:brightness-125 transition-all duration-200"
              />
              <img
                src={images.image_Footer2}
                alt="Workforce Australia"
                className="h-12 sm:h-16 w-auto filter brightness-110 hover:brightness-125 transition-all duration-200"
              />
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Copyright 2025 © <span className="text-amber-400 font-semibold">Businessplex</span>. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Development by <span className="text-amber-400">A4Technologies</span>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.hoverColor} transition-colors duration-200 transform hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default MainFooter;