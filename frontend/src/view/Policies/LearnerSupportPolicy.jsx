import React from 'react'

const topics = [
    {
        title: 'Learner Support Policy',
        content: (
            <div>
                <p>
                    Businessplex Management and staff are committed to the provision of support services for enrolled students, with staff in place who are appointed for contact and referral for student support and general welfare matters. All enrolling students are provided with an orientation event which includes guidance concerning student support services.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">

                </ul>
                <p className="mt-3">

                </p>
            </div>
        ),
    },
    {
        title: 'Student Support Procedure',
        content: (
            <div>
                <p>
                    The Administration Manager is the designated member of staff at Businessplex and is the contact point for all students. The Administration Manager will ensure that where staff have identified, or enrolled students have indicated their need of support or welfare, that further advice will be sought from the student.
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">

                </ol>
                <p className="mt-3">

                </p>
            </div>
        ),
    }, {
        title: 'Equipped with advice from the student the Administration Manager will:',
        content: (
            <div>
                <p>
                    Respond to questions concerning course progress or other course issues and refer the student to the CEO if required.
                    Where an accommodation or general welfare issue arises the Administration Manager will provide advice and/or referral on accommodation, Western Australian Public services, counselling assistance with personal, emotional or cultural issues.
                    The student will be advised that the support services of Businessplex are at no extra cost.
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">

                </ol>
                <p className="mt-3">

                </p>
            </div>
        ),
    },

];

const LearnerSupportPolicy = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleTopic = (index) => {
        setOpenIndex(openIndex === index ? null : index);

        if (openIndex !== index) {
            setTimeout(() => {
                const expandedCard = document.getElementById(`card-${index}`);
                if (expandedCard) {
                    expandedCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Learner Support Policy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our services.
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
                                className={`border-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${isOpen
                                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleTopic(index)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer transition-all duration-200 hover:bg-gray-50 rounded-t-xl"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${isOpen ? 'bg-blue-500' : 'bg-gray-400'
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">{topic.title}</span>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-gray-200 text-gray-600'
                                        }`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6">
                                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                            <div
                                                className="leading-relaxed overflow-y-auto max-h-[700px] pr-2 content-scroll"
                                                style={{
                                                    scrollbarWidth: 'none',
                                                    msOverflowStyle: 'none',
                                                }}
                                            >
                                                <style>
                                                    {`
                                                            .content-scroll::-webkit-scrollbar {
                                                                display: none;
                                                            }
                                                            .content-scroll {
                                                                -ms-overflow-style: none;
                                                                scrollbar-width: none;
                                                            }
                                                        `}
                                                </style>
                                                <div className="content-scroll text-gray-700">
                                                    {topic.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

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
}

export default LearnerSupportPolicy
