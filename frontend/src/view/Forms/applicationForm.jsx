import React, { useState } from 'react';
import { Building2, Send } from 'lucide-react';

const ApplicationForm = () => {
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Application submitted!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-8 px-4">
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
                  <option value="Small Business Training - Certificate III">Small Business Training - Certificate III</option>
                  <option value="Small Business Training - Certificate IV">Small Business Training - Certificate IV</option>
                  <option value="Exploring Self-Employment Workshop">Exploring Self-Employment Workshop</option>
                  <option value="Business Advice Session">Business Advice Session</option>
                  <option value="Business Health Check">Business Health Check</option>
                </select>
                {errors.programType && <span className="text-red-500 text-sm mt-1 block">{errors.programType}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  name="preferredStartDate"
                  value={formData.preferredStartDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                />
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
              className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center text-lg"
            >
              <Send className="w-6 h-6 mr-3" />
              Submit Application
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 rounded-b-2xl p-6 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            Need assistance with your application?
          </p>
          <div className="text-sm text-gray-800">
            <p>Email: <a href="mailto:info@businessplex.com.au" className="text-blue-600 hover:text-blue-800">info@businessplex.com.au</a></p>
            {/* <p>Phone: <a href="tel:0890000000" className="text-blue-600 hover:text-blue-800">(08) 9000 0000</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;