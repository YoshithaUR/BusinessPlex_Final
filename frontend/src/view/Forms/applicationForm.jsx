import React, { useState, useEffect, useRef } from 'react';
import { Building2, Send, Calendar, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../api/api';

const ApplicationForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    postcode: '',
    state: '',
    dateOfBirth: '',
    programType: '',
    preferredStartDate: '',
    deliveryMode: '',
    employmentStatus: '',
    centrelinkCustomer: '',
    centrelinkNumber: '',
    businessIdea: '',
    businessExperience: '',
    industryType: '',
    businessStage: '',
    previousTraining: '',
    specialRequirements: '',
    hearAboutUs: '',
    eligibilityDeclaration: false,
    accuracyDeclaration: false,
    privacyConsent: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isScrolling, setIsScrolling] = useState(false);
  const calendarRef = useRef(null);
  const inputRef = useRef(null);

  // Close calendar when clicking outside and handle keyboard navigation
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCalendar && 
          calendarRef.current && 
          !calendarRef.current.contains(event.target) &&
          inputRef.current && 
          !inputRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    const handleKeyDown = (event) => {
      if (showCalendar) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            prevMonth();
            break;
          case 'ArrowRight':
            event.preventDefault();
            nextMonth();
            break;
          case 'Escape':
            event.preventDefault();
            setShowCalendar(false);
            break;
        }
      }
    };

    const handleWheel = (event) => {
      if (showCalendar && calendarRef.current && calendarRef.current.contains(event.target)) {
        event.preventDefault();
        setIsScrolling(true);
        
        if (event.deltaY > 0) {
          // Scroll down/right = next month
          nextMonth();
        } else {
          // Scroll up/left = previous month
          prevMonth();
        }
        
        // Reset scrolling indicator after a short delay
        setTimeout(() => setIsScrolling(false), 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [showCalendar]);

  // Scroll to end of slideshow section when component mounts
  useEffect(() => {
    // Wait for the page to fully load and render
    const timer = setTimeout(() => {
      // Calculate slideshow height based on viewport
      const slideshowHeight = window.innerHeight - 88; // Full viewport height minus header height
      
      // Scroll to the end of the slideshow section
      window.scrollTo({
        top: slideshowHeight + 100, // Add extra 100px to ensure we're past the slideshow
        behavior: 'smooth'
      });
    }, 500); // Wait 500ms for page to fully render
    
    return () => clearTimeout(timer);
  }, []);

  // Handle navigation from service cards or other components
  useEffect(() => {
    // Check if we came from a service card or other navigation
    if (location.state?.selectedService || location.state?.scrollToForm) {
      // Wait for the page to fully load and render
      const timer = setTimeout(() => {
        // Calculate slideshow height based on viewport
        const slideshowHeight = window.innerHeight - 88; // Full viewport height minus header height
        
        // Scroll to the end of the slideshow section
        window.scrollTo({
          top: slideshowHeight + 100, // Add extra 100px to ensure we're past the slideshow
          behavior: 'smooth'
        });
        
        // Clear the state to prevent re-scrolling on refresh
        window.history.replaceState(null, null, window.location.pathname);
      }, 500); // Wait 500ms for page to fully render
      
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };







  const nextMonth = () => {
    setCurrentMonth(prevMonth => {
      const newDate = new Date(prevMonth);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const prevMonth = () => {
    setCurrentMonth(prevMonth => {
      const newDate = new Date(prevMonth);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleDateSelect = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setFormData(prev => ({
      ...prev,
      preferredStartDate: formattedDate
    }));
    setShowCalendar(false);
    if (errors.preferredStartDate) setErrors(prev => ({ ...prev, preferredStartDate: '' }));
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isPastDate = date < today;
      const isSelected = formData.preferredStartDate === date.toISOString().split('T')[0];
      
      days.push({
        date,
        isCurrentMonth,
        isPastDate,
        isSelected
      });
    }
    
    return days;
  };

  const validate = () => {
    const newErrors = {};
    
    // Basic required field validation
    if (!formData.firstName) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.address) newErrors.address = 'Required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Required';
    if (!formData.programType) newErrors.programType = 'Required';
    if (!formData.deliveryMode) newErrors.deliveryMode = 'Required';
    if (!formData.employmentStatus) newErrors.employmentStatus = 'Required';
    if (!formData.centrelinkCustomer) newErrors.centrelinkCustomer = 'Required';
    if (!formData.businessIdea) newErrors.businessIdea = 'Required';
    if (!formData.industryType) newErrors.industryType = 'Required';
    if (!formData.eligibilityDeclaration) newErrors.eligibilityDeclaration = 'Required';
    if (!formData.accuracyDeclaration) newErrors.accuracyDeclaration = 'Required';
    if (!formData.privacyConsent) newErrors.privacyConsent = 'Required';
    
    // Postcode validation (if provided)
    if (formData.postcode && formData.postcode.trim() !== '') {
      if (!/^[0-9]{4}$/.test(formData.postcode.trim())) {
        newErrors.postcode = 'Postcode must be exactly 4 digits';
      }
    }
    
    // Date validation
    if (formData.dateOfBirth) {
      const birthDate = new Date(formData.dateOfBirth);
      if (isNaN(birthDate.getTime())) {
        newErrors.dateOfBirth = 'Please enter a valid date';
      } else {
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 15 || age > 100) {
          newErrors.dateOfBirth = 'Age must be between 15 and 100 years';
        }
      }
    }
    
    // Preferred start date validation (if provided)
    if (formData.preferredStartDate && formData.preferredStartDate.trim() !== '') {
      const startDate = new Date(formData.preferredStartDate);
      if (isNaN(startDate.getTime())) {
        newErrors.preferredStartDate = 'Please enter a valid date';
      } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
        if (startDate < today) {
          newErrors.preferredStartDate = 'Start date cannot be in the past';
        }
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        
        // Send application to backend
       await axiosInstance.post('/application', formData);
        
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          suburb: '',
          postcode: '',
          state: '',
          dateOfBirth: '',
          programType: '',
          preferredStartDate: '',
          deliveryMode: '',
          employmentStatus: '',
          centrelinkCustomer: '',
          centrelinkNumber: '',
          businessIdea: '',
          businessExperience: '',
          industryType: '',
          businessStage: '',
          previousTraining: '',
          specialRequirements: '',
          hearAboutUs: '',
          eligibilityDeclaration: false,
          accuracyDeclaration: false,
          privacyConsent: false,
        });
        setErrors({});
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          // Handle validation errors from backend
          const backendErrors = {};
          error.response.data.errors.forEach(err => {
            backendErrors[err.field] = err.message;
          });
          setErrors(backendErrors);
          alert('Please correct the errors in the form and try again.');
        } else {
          alert('An error occurred while submitting your application. Please try again later.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-30 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-t-2xl p-8 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Business Training Application</h1>
          <p className="text-blue-100">Complete all required fields marked with *</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Personal Information Section */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName}</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                {errors.lastName && <span className="text-red-500 text-sm mt-1 block">{errors.lastName}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="0400 000 000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                {errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                {errors.address && <span className="text-red-500 text-sm mt-1 block">{errors.address}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Suburb
                </label>
                <input
                  type="text"
                  name="suburb"
                  placeholder="Suburb"
                  value={formData.suburb}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postcode
                </label>
                <input
                  type="text"
                  name="postcode"
                  placeholder="0000"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                {errors.postcode && <span className="text-red-500 text-sm mt-1 block">{errors.postcode}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="" className="text-gray-500">Select State</option>
                  <option value="WA">Western Australia (WA)</option>
                  <option value="NSW">New South Wales (NSW)</option>
                  <option value="VIC">Victoria (VIC)</option>
                  <option value="QLD">Queensland (QLD)</option>
                  <option value="SA">South Australia (SA)</option>
                  <option value="TAS">Tasmania (TAS)</option>
                  <option value="NT">Northern Territory (NT)</option>
                  <option value="ACT">Australian Capital Territory (ACT)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
                {errors.dateOfBirth && <span className="text-red-500 text-sm mt-1 block">{errors.dateOfBirth}</span>}
              </div>
            </div>
          </div>

          {/* Program Selection Section */}
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-yellow-300 pb-2">
              Program Selection
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program Type *
                </label>
                <select
                  name="programType"
                  value={formData.programType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                >
                  <option value="" className="text-gray-500">Select Program Type</option>
                  <option value="Small Business Training - Certificate III in Entrepreneurship and New Business">Small Business Training - Certificate III in Entrepreneurship and New Business</option>
                  <option value="Small Business Training - Certificate IV in Entrepreneurship and New Business(must have completed Cert III)">Small Business Training - Certificate IV in Entrepreneurship and New Business(must have completed Cert III)</option>
                  <option value="Exploring Self-Employment Workshop">Exploring Self-Employment Workshop</option>
                  <option value="Business Advice Session">Business Advice Session</option>
                  <option value="Business Health Check">Business Health Check</option>
                </select>
                {errors.programType && <span className="text-red-500 text-sm mt-1 block">{errors.programType}</span>}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Start Date
                </label>
                <div className="relative" ref={inputRef}>
                  <input
                    type="date"
                    name="preferredStartDate"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredStartDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 bg-white border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                
                                                   {/* Calendar Popup */}
                  {showCalendar && (
                    <div ref={calendarRef} className="absolute z-50 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
                      {/* Scroll indicator */}
                      <div className="text-center mb-2">
                        <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                          Scroll to navigate months
                        </div>
                      </div>
                      
                                             {/* Quick navigation buttons */}
                       <div className="flex justify-center mb-3 space-x-2">
                         <button
                           onClick={() => {
                             const august = new Date(new Date().getFullYear(), 7, 1); // August is month 7 (0-indexed)
                             setCurrentMonth(august);
                           }}
                           className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                         >
                           August
                         </button>
                         <button
                           onClick={() => {
                             const september = new Date(new Date().getFullYear(), 8, 1); // September is month 8
                             setCurrentMonth(september);
                           }}
                           className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                         >
                           September
                         </button>
                       </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <button
                          onClick={prevMonth}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                          title="Previous month"
                        >
                          <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <div className="text-center">
                          <h3 className={`text-lg font-semibold text-gray-800 transition-all duration-200 ${isScrolling ? 'scale-110 text-blue-600' : ''}`}>
                            {currentMonth.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
                          </h3>
                          <div className="text-xs text-gray-500 mt-1">
                            Current: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
                          </div>
                        </div>
                        <button
                          onClick={nextMonth}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                          title="Next month"
                        >
                          <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                     
                     <div className="grid grid-cols-7 gap-1 mb-2">
                       {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                         <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                           {day}
                         </div>
                       ))}
                     </div>
                     
                     <div className="grid grid-cols-7 gap-1">
                       {generateCalendarDays().map((day, index) => (
                         <button
                           key={index}
                           onClick={() => !day.isPastDate && handleDateSelect(day.date)}
                           disabled={day.isPastDate}
                           className={`
                             p-2 text-sm rounded-lg transition-colors
                             ${day.isSelected 
                               ? 'bg-blue-600 text-white' 
                               : day.isPastDate
                                 ? 'text-gray-300 cursor-not-allowed'
                                 : !day.isCurrentMonth
                                   ? 'text-gray-400 hover:bg-gray-50'
                                   : 'hover:bg-gray-100 text-gray-700'
                             }
                           `}
                         >
                           {day.date.getDate()}
                         </button>
                       ))}
                     </div>
                     
                     <div className="flex justify-center mt-4 pt-4 border-t border-gray-200">
                       <button
                         onClick={() => setShowCalendar(false)}
                         className="px-4 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                       >
                         Close
                       </button>
                     </div>
                   </div>
                 )}
                
                {errors.preferredStartDate && <span className="text-red-500 text-sm mt-1 block">{errors.preferredStartDate}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Mode *
                </label>
                <select
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                >
                  <option value="" className="text-gray-500">Select Delivery Mode</option>
                  <option value="face-to-face">Face-to-Face</option>
                  <option value="online">Online</option>
                  <option value="blended">Blended (Online + Face-to-Face)</option>
                </select>
                {errors.deliveryMode && <span className="text-red-500 text-sm mt-1 block">{errors.deliveryMode}</span>}
              </div>
            </div>
          </div>

          {/* Employment Status Section */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-blue-300 pb-2">
              Employment Status
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Employment Status *
                </label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="" className="text-gray-500">Select Employment Status</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="underemployed">Underemployed</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="student">Student</option>
                  <option value="retired">Retired</option>
                </select>
                {errors.employmentStatus && <span className="text-red-500 text-sm mt-1 block">{errors.employmentStatus}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Are you a Centrelink customer? *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="centrelinkCustomer" 
                      value="yes" 
                      checked={formData.centrelinkCustomer === 'yes'} 
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="centrelinkCustomer" 
                      value="no" 
                      checked={formData.centrelinkCustomer === 'no'} 
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
                {errors.centrelinkCustomer && <span className="text-red-500 text-sm mt-1 block">{errors.centrelinkCustomer}</span>}
              </div>

              {formData.centrelinkCustomer === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Centrelink Reference Number
                  </label>
                  <input
                    type="text"
                    name="centrelinkNumber"
                    placeholder="Enter your Centrelink reference number"
                    value={formData.centrelinkNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Business Information Section */}
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-purple-300 pb-2">
              Business Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your business idea *
                </label>
                <textarea
                  name="businessIdea"
                  placeholder="Tell us about your business idea, what products or services you plan to offer..."
                  value={formData.businessIdea}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-vertical"
                />
                {errors.businessIdea && <span className="text-red-500 text-sm mt-1 block">{errors.businessIdea}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry Type *
                </label>
                <select
                  name="industryType"
                  value={formData.industryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                >
                  <option value="" className="text-gray-500">Select Industry Type</option>
                  <option value="retail">Retail</option>
                  <option value="hospitality">Hospitality & Tourism</option>
                  <option value="technology">Technology & IT</option>
                  <option value="healthcare">Healthcare & Wellness</option>
                  <option value="education">Education & Training</option>
                  <option value="construction">Construction & Trades</option>
                  <option value="professional-services">Professional Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="agriculture">Agriculture & Farming</option>
                  <option value="other">Other</option>
                </select>
                {errors.industryType && <span className="text-red-500 text-sm mt-1 block">{errors.industryType}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Stage
                </label>
                <select
                  name="businessStage"
                  value={formData.businessStage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                >
                  <option value="" className="text-gray-500">Select Business Stage</option>
                  <option value="idea">Just an idea</option>
                  <option value="planning">Planning stage</option>
                  <option value="startup">Starting up (0-12 months)</option>
                  <option value="existing">Existing business (12+ months)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Business Experience
                </label>
                <textarea
                  name="businessExperience"
                  placeholder="Describe any previous business experience you have..."
                  value={formData.businessExperience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-vertical"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Training
                </label>
                <textarea
                  name="previousTraining"
                  placeholder="List any relevant training or qualifications you have..."
                  value={formData.previousTraining}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-vertical"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  name="specialRequirements"
                  placeholder="Any special requirements or accommodations needed..."
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-vertical"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                >
                  <option value="" className="text-gray-500">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Word of Mouth/Referral</option>
                  <option value="centrelink">Centrelink</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Declarations Section */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-green-300 pb-2">
              Declarations & Consent
            </h2>
            <div className="space-y-4">
              <label className="flex items-start">
                <input 
                  type="checkbox" 
                  name="eligibilityDeclaration" 
                  checked={formData.eligibilityDeclaration} 
                  onChange={handleInputChange}
                  className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 mt-0.5 mr-3"
                />
                <span className="text-sm text-gray-700">
                  I confirm that I meet the eligibility criteria for this program and understand the requirements. *
                </span>
              </label>
              {errors.eligibilityDeclaration && <span className="text-red-500 text-sm block">{errors.eligibilityDeclaration}</span>}

              <label className="flex items-start">
                <input 
                  type="checkbox" 
                  name="accuracyDeclaration" 
                  checked={formData.accuracyDeclaration} 
                  onChange={handleInputChange}
                  className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 mt-0.5 mr-3"
                />
                <span className="text-sm text-gray-700">
                  I confirm that all information provided in this application is true and accurate to the best of my knowledge. *
                </span>
              </label>
              {errors.accuracyDeclaration && <span className="text-red-500 text-sm block">{errors.accuracyDeclaration}</span>}

              <label className="flex items-start">
                <input 
                  type="checkbox" 
                  name="privacyConsent" 
                  checked={formData.privacyConsent} 
                  onChange={handleInputChange}
                  className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 mt-0.5 mr-3"
                />
                <span className="text-sm text-gray-700">
                  I consent to the collection, use and disclosure of my personal information in accordance with the privacy policy. *
                </span>
              </label>
              {errors.privacyConsent && <span className="text-red-500 text-sm block">{errors.privacyConsent}</span>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 rounded-b-2xl p-6 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            Need assistance with your application?
          </p>
          <div className="text-sm text-gray-800">
            <p>Email: <a href="mailto:admin@businessplex.com.au" className="text-blue-600 hover:text-blue-800">admin@businessplex.com.au</a></p>
            {/* <p>Phone: <a href="tel:0890000000" className="text-blue-600 hover:text-blue-800">(08) 9000 0000</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;