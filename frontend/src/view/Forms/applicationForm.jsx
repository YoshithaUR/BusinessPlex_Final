import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, FileText, Building2, DollarSign, Users, Clock, CheckCircle, Send, AlertCircle } from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    postcode: '',
    state: '',
    dateOfBirth: '',
    
    // Program Selection
    programType: '',
    preferredStartDate: '',
    deliveryMode: '',
    
    // Employment Status
    employmentStatus: '',
    centrelinkCustomer: '',
    centrelinkNumber: '',
    
    // Business Information
    businessIdea: '',
    businessExperience: '',
    industryType: '',
    businessStage: '',
    
    // Additional Information
    previousTraining: '',
    specialRequirements: '',
    hearAboutUs: '',
    
    // Declarations
    eligibilityDeclaration: false,
    accuracyDeclaration: false,
    privacyConsent: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    if (step === 2) {
      if (!formData.programType) newErrors.programType = 'Program selection is required';
      if (!formData.deliveryMode) newErrors.deliveryMode = 'Delivery mode is required';
    }
    
    if (step === 3) {
      if (!formData.employmentStatus) newErrors.employmentStatus = 'Employment status is required';
      if (!formData.centrelinkCustomer) newErrors.centrelinkCustomer = 'Centrelink status is required';
    }
    
    if (step === 4) {
      if (!formData.businessIdea) newErrors.businessIdea = 'Business idea is required';
      if (!formData.industryType) newErrors.industryType = 'Industry type is required';
    }
    
    if (step === 5) {
      if (!formData.eligibilityDeclaration) newErrors.eligibilityDeclaration = 'Eligibility declaration is required';
      if (!formData.accuracyDeclaration) newErrors.accuracyDeclaration = 'Accuracy declaration is required';
      if (!formData.privacyConsent) newErrors.privacyConsent = 'Privacy consent is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(5)) {
      console.log('Form submitted:', formData);
      alert('Application submitted successfully!');
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
            step === currentStep 
              ? 'bg-blue-700 text-black shadow-lg scale-110' 
              : step < currentStep 
                ? 'bg-green-500 text-black' 
                : 'bg-gray-300 text-black'
          }`}>
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 5 && (
            <div className={`w-12 h-1 mx-2 transition-all duration-300 ${
              step < currentStep ? 'bg-green-500' : 'bg-gray-300'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <User className="w-12 h-12 text-blue-700 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-black mb-2">Personal Information</h3>
        <p className="text-gray-600">Please provide your basic personal details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black ${
              errors.firstName ? 'border-red-500' : 'border-amber-400'
            }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200  text-black ${
              errors.lastName ? 'border-red-500' : 'border-amber-400'
            }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-black" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black ${
                errors.email ? 'border-red-500' : 'border-amber-400'
              }`}
              placeholder="your.email@example.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Phone Number *
          </label>
          <div className="relative text-black">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-black" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200  text-black${
                errors.phone ? 'border-red-500' : 'border-amber-400'
              }`}
              placeholder="0400 000 000"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-black mb-2">
            Street Address *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-black" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black ${
                errors.address ? 'border-red-500' : 'border-amber-400'
              }`}
              placeholder="123 Main Street"
            />
          </div>
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Suburb
          </label>
          <input
            type="text"
            name="suburb"
            value={formData.suburb}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
            placeholder="Enter suburb"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Postcode
          </label>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
            placeholder="6000"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
          >
            <option value="">Select State</option>
            <option value="WA">Western Australia</option>
            <option value="NSW">New South Wales</option>
            <option value="VIC">Victoria</option>
            <option value="QLD">Queensland</option>
            <option value="SA">South Australia</option>
            <option value="TAS">Tasmania</option>
            <option value="NT">Northern Territory</option>
            <option value="ACT">Australian Capital Territory</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Date of Birth *
          </label>
          <div className="relative text-black">
            <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-black" />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                errors.dateOfBirth ? 'border-red-500' : 'border-amber-400'
              }`}
            />
          </div>
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <FileText className="w-12 h-12 text-blue-700 mx-auto mb-4 " />
        <h3 className="text-2xl font-bold text-black mb-2">Program Selection</h3>
        <p className="text-gray-600">Choose your preferred program and delivery options</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Program Type *
          </label>
          <div className="space-y-3">
            {[
              'Small Business Training - Certificate III in Entrepreneurship and New Business (BSB30220)',
              'Small Business Training - Certificate IV in Entrepreneurship and New Business (BSB40320)',
              'Exploring Self-Employment Workshop',
              'Business Advice Session',
              'Business Health Check'
            ].map((program) => (
              <label key={program} className="flex items-start space-x-3 p-4 border-2 border-amber-400 rounded-lg hover:bg-amber-50 cursor-pointer transition-all duration-200">
                <input
                  type="radio"
                  name="programType"
                  value={program}
                  checked={formData.programType === program}
                  onChange={handleInputChange}
                  className="mt-1 text-blue-700 focus:ring-blue-500"
                />
                <span className="text-gray-900 font-medium">{program}</span>
              </label>
            ))}
          </div>
          {errors.programType && <p className="text-red-500 text-sm mt-1">{errors.programType}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Preferred Start Date
          </label>
          <input
            type="date"
            name="preferredStartDate"
            value={formData.preferredStartDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Delivery Mode *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'face-to-face', label: 'Face-to-Face', icon: Users },
              { value: 'online', label: 'Online', icon: Building2 },
              { value: 'blended', label: 'Blended', icon: Clock }
            ].map(({ value, label, icon: Icon }) => (
              <label key={value} className="flex flex-col items-center p-4 border-2 border-amber-400 rounded-lg hover:bg-amber-50 cursor-pointer transition-all duration-200 text-black">
                <input
                  type="radio"
                  name="deliveryMode"
                  value={value}
                  checked={formData.deliveryMode === value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <Icon className={`w-8 h-8 mb-2 ${formData.deliveryMode === value ? 'text-blue-700' : 'text-black'}`} />
                <span className={`font-medium ${formData.deliveryMode === value ? 'text-blue-700' : 'text-black'}`}>
                  {label}
                </span>
              </label>
            ))}
          </div>
          {errors.deliveryMode && <p className="text-red-500 text-sm mt-1">{errors.deliveryMode}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Building2 className="w-12 h-12 text-blue-700 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-black mb-2">Employment Status</h3>
        <p className="text-black">Tell us about your current employment situation</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Current Employment Status *
          </label>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black ${
              errors.employmentStatus ? 'border-red-500' : 'border-amber-400'
            }`}
          >
            <option value="">Select Employment Status</option>
            <option value="unemployed">Unemployed</option>
            <option value="underemployed">Underemployed</option>
            <option value="employed">Employed</option>
            <option value="self-employed">Self-Employed</option>
            <option value="student">Student</option>
            <option value="retired">Retired</option>
          </select>
          {errors.employmentStatus && <p className="text-black text-sm mt-1 ">{errors.employmentStatus}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Are you currently a Centrelink customer? *
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="centrelinkCustomer"
                value="yes"
                checked={formData.centrelinkCustomer === 'yes'}
                onChange={handleInputChange}
                className="text-black focus:ring-blue-500"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="centrelinkCustomer"
                value="no"
                checked={formData.centrelinkCustomer === 'no'}
                onChange={handleInputChange}
                className="text-blue-700 focus:ring-blue-500"
              />
              <span>No</span>
            </label>
          </div>
          {errors.centrelinkCustomer && <p className="text-red-500 text-sm mt-1">{errors.centrelinkCustomer}</p>}
        </div>

        {formData.centrelinkCustomer === 'yes' && (
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Centrelink Customer Reference Number
            </label>
            <input
              type="text"
              name="centrelinkNumber"
              value={formData.centrelinkNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
              placeholder="Enter your CRN"
            />
          </div>
        )}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <DollarSign className="w-12 h-12 text-blue-700 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Information</h3>
        <p className="text-gray-600">Share details about your business idea and experience</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Describe your business idea *
          </label>
          <textarea
            name="businessIdea"
            value={formData.businessIdea}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-black ${
              errors.businessIdea ? 'border-red-500' : 'border-amber-400'
            }`}
            placeholder="Please describe your business idea, products or services you plan to offer..."
          />
          {errors.businessIdea && <p className="text-red-500 text-sm mt-1">{errors.businessIdea}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Industry Type *
          </label>
          <select
            name="industryType"
            value={formData.industryType}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black ${
              errors.industryType ? 'border-red-500' : 'border-amber-400 text-black'
            }`}
          >
            <option value="">Select Industry</option>
            <option value="retail">Retail</option>
            <option value="hospitality">Hospitality</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="construction">Construction</option>
            <option value="professional-services">Professional Services</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="agriculture">Agriculture</option>
            <option value="other">Other</option>
          </select>
          {errors.industryType && <p className="text-red-500 text-sm mt-1">{errors.industryType}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Business Stage
          </label>
          <select
            name="businessStage"
            value={formData.businessStage}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
          >
            <option value="">Select Stage</option>
            <option value="idea">Just an idea</option>
            <option value="planning">Planning stage</option>
            <option value="startup">Starting up</option>
            <option value="existing">Existing business</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Previous Business Experience
          </label>
          <textarea
            name="businessExperience"
            value={formData.businessExperience}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-black"
            placeholder="Describe any previous business or relevant experience..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Previous Training
          </label>
          <textarea
            name="previousTraining"
            value={formData.previousTraining}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-black"
            placeholder="List any previous business training or qualifications..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Special Requirements
          </label>
          <textarea
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-black"
            placeholder="Any special requirements or accessibility needs..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How did you hear about us?
          </label>
          <select
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
          >
            <option value="">Select Option</option>
            <option value="google">Google Search</option>
            <option value="social-media">Social Media</option>
            <option value="referral">Referral</option>
            <option value="centrelink">Centrelink</option>
            <option value="advertisement">Advertisement</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <CheckCircle className="w-12 h-12 text-blue-700 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Declarations & Consent</h3>
        <p className="text-gray-600">Please read and agree to the following declarations</p>
      </div>

      <div className="space-y-6">
        <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="eligibilityDeclaration"
              checked={formData.eligibilityDeclaration}
              onChange={handleInputChange}
              className="mt-1 text-blue-700 focus:ring-blue-500"
            />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Eligibility Declaration *</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                I declare that I meet the eligibility criteria for the Self-Employment Assistance Program. 
                I am at least 18 years of age (or 15+ for Exploring Self-Employment Workshop), 
                I am not prohibited by law from working in Australia, I am not an overseas visitor on a working holiday visa, 
                and I am not an undischarged bankrupt.
              </p>
            </div>
          </div>
          {errors.eligibilityDeclaration && <p className="text-red-500 text-sm mt-2">{errors.eligibilityDeclaration}</p>}
        </div>

        <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="accuracyDeclaration"
              checked={formData.accuracyDeclaration}
              onChange={handleInputChange}
              className="mt-1 text-blue-700 focus:ring-blue-500"
            />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Accuracy Declaration *</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                I declare that the information provided in this application is true and accurate to the best of my knowledge. 
                I understand that providing false or misleading information may result in the cancellation of my application 
                or participation in the program.
              </p>
            </div>
          </div>
          {errors.accuracyDeclaration && <p className="text-red-500 text-sm mt-2">{errors.accuracyDeclaration}</p>}
        </div>

        <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleInputChange}
              className="mt-1 text-blue-700 focus:ring-blue-500"
            />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Privacy Consent *</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                I consent to Businessplex collecting, using, and disclosing my personal information for the purposes of 
                program administration, training delivery, and reporting to funding bodies. I understand my rights under 
                the Privacy Act and that I can access our Privacy Policy for more information.
              </p>
            </div>
          </div>
          {errors.privacyConsent && <p className="text-red-500 text-sm mt-2">{errors.privacyConsent}</p>}
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <h4 className="font-semibold text-gray-900">Important Information</h4>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Applications are subject to eligibility assessment and program availability</li>
            <li>• You will be contacted within 5 business days to confirm your application status</li>
            <li>• Additional documentation may be required to verify your eligibility</li>
            <li>• Program places are limited and allocated on a first-come, first-served basis</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 relative overflow-hidden">
      {/* Watermark Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200')`
        }}
      />
      
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-amber-400">
            <Building2 className="w-16 h-16 text-blue-700 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-[Montserrat,Open_Sans,sans-serif]">
              Application Form
            </h1>
            <p className="text-lg text-gray-600 font-[Poppins,Roboto,sans-serif]">
              "Begin Your Journey to Success Today!"
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        {renderStepIndicator()}

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-amber-400 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            {/* Step Content */}
            <div className="min-h-[600px]">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
              {currentStep === 5 && renderStep5()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t-2 border-amber-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  currentStep === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700 shadow-lg hover:shadow-xl'
                }`}
              >
                <span>Previous</span>
              </button>

              <div className="text-sm text-gray-600 font-medium">
                Step {currentStep} of 5
              </div>

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Next</span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-amber-400">
            <p className="text-sm text-gray-600 font-[Poppins,Roboto,sans-serif]">
              Need help? Contact us at <span className="text-blue-700 font-semibold">info@businessplex.com.au</span> or call <span className="text-blue-700 font-semibold">(08) 9000 0000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;