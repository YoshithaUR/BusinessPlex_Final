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
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Student Information Handbook</h1>
            <div className="space-y-6">
                {topics.map((topic, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`border rounded-md shadow transition-all duration-300 ${isOpen ? 'border-blue-500' : 'border-gray-200'
                                }`}
                        >
                            <button
                                onClick={() => toggleTopic(index)}
                                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-200 text-lg font-medium flex justify-between items-center cursor-pointer"
                            >
                                <span className="text-gray-800">{topic.title}</span>
                                <span className="text-xl text-gray-800">{isOpen ? '−' : '+'}</span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[700px] py-5 px-6' : 'max-h-0 px-6 py-0'
                                    } bg-gray-200 text-gray-700`}
                            >
                                <div className="leading-relaxed overflow-y-auto max-h-[650px] pr-2">
                                    {topic.content}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="mt-12 mb-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Questions about our Privacy Policy?</h3>
                        <p className="text-gray-600 mb-4">We're here to help you understand how we protect your data.</p>
                        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"> */}
                        Contact Our Privacy Team
                        {/* </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentInformationHandbook;
