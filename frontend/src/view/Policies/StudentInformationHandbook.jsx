import React, { useState } from 'react';

const topics = [
    {
        title: 'Admission Process',
        content: (
            <div>
                <p>To apply for admission, follow these steps:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Fill out the online application form</li>
                    <li>Submit the required documents</li>
                    <li>Pay the application fee</li>
                    <li>Attend the interview (if required)</li>
                </ul>
                <p className="mt-3">
                    Once selected, students will receive a formal admission letter along with fee payment instructions.
                </p>
            </div>
        ),
    },
    {
        title: 'Code of Conduct',
        content: (
            <div>
                <p>Students are expected to:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Respect faculty, staff, and peers</li>
                    <li>Attend classes on time</li>
                    <li>Avoid cheating and plagiarism</li>
                    <li>Maintain academic integrity</li>
                </ol>
                <p className="mt-3">
                    Violations may result in warnings, suspension, or expulsion based on severity.
                </p>
            </div>
        ),
    },

];


const StudentInformationHandbook = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleTopic = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-yellow-50">
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent">
                        Student Information Handbook
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Essential information and guidelines for all students to ensure a successful learning experience at Businessplex.
                    </p>
                    <div className="mt-4 inline-flex items-center space-x-2 text-sm text-gray-500">
                        <span>📅</span>
                        <span>Last updated: January 15, 2025</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {topics.map((topic, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                id={`card-${index}`}
                                className={`border-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                                    isOpen
                                        ? 'border-blue-500 bg-gradient-to-br from-blue-50 via-blue-50 to-purple-50 relative z-10 shadow-2xl'
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                }`}
                            >
                                <button
                                    onClick={() => toggleTopic(index)}
                                    className={`w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer transition-all duration-200 ${
                                        isOpen 
                                            ? 'bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-xl border-b border-blue-200' 
                                            : 'hover:bg-gray-50 rounded-xl'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                            isOpen ? 'bg-blue-800' : 'bg-blue-400'
                                        }`}>
                                            {index + 1}
                                        </div>
                                        <span className={`text-lg font-semibold ${
                                            isOpen ? 'text-blue-900' : 'text-gray-800'
                                        }`}>{topic.title}</span>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-6 pb-6">
                                        <div className={`rounded-b-xl p-6 ${
                                            isOpen 
                                                ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-t-0' 
                                                : 'bg-white'
                                        }`}>
                                            <div className="leading-relaxed text-gray-700">
                                                {topic.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-15 mb-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Questions about our Student Information Handbook?</h3>
                        <p className="text-gray-600 mb-4">We're here to help you understand the policies and procedures for students.</p>
                        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"> */}
                            Contact Our Student Services Team
                        {/* </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentInformationHandbook;
