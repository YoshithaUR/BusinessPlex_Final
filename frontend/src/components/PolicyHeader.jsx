import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaFileAlt, FaChevronRight } from 'react-icons/fa';

const PolicyHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [sidebarOpen]);

    // Prevent body scroll when sidebar is open on mobile
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [sidebarOpen]);

    // Close sidebar on escape key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && sidebarOpen) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [sidebarOpen]);

    const policyLinks = [
        {
            to: "/policies",
            label: "Privacy Policy",
            icon: <FaFileAlt size={16} />,
            description: "Data protection and privacy guidelines"
        },
        {
            to: "/policies/support-policy",
            label: "Learner Support Policy",
            icon: <FaFileAlt size={16} />,
            description: "Student assistance and support services"
        },
        {
            to: "/policies/access-equity",
            label: "Access & Equity Policy",
            icon: <FaFileAlt size={16} />,
            description: "Equal opportunity and inclusion policies"
        },
        {
            to: "/policies/student-handbook",
            label: "Student Information Handbook",
            icon: <FaFileAlt size={16} />,
            description: "Comprehensive guide for students"
        },
        {
            to: "/policies/appeals-complaints",
            label: "Appeals & Complaints Policy",
            icon: <FaFileAlt size={16} />,
            description: "Grievance and appeals procedures"
        }
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden fixed top-[88px] left-4 z-[15]">
                <button
                    ref={buttonRef}
                    onClick={toggleSidebar}
                    className={`bg-white border-2 border-slate-300 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                    aria-label="Toggle policy menu"
                >
                    <FaBars className="h-5 w-5 text-slate-700" />
                </button>
            </div>

            {/* Background Overlay for Mobile */}
            <div
                className={`fixed inset-0 bg-black transition-all duration-300 z-[35] md:hidden ${sidebarOpen ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0 pointer-events-none'
                    }`}
                onClick={closeSidebar}
                aria-hidden="true"
            />

            {/* Sidebar Navigation */}
            <nav
                ref={sidebarRef}
                className={`fixed md:relative top-0 md:top-0 left-0 h-screen md:h-auto w-80 md:w-72 lg:w-80 bg-white md:bg-gradient-to-br md:from-gray-50 md:to-gray-100 shadow-2xl md:shadow-lg transform transition-all duration-300 z-[40] md:z-auto border-r border-gray-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                    }`}
                style={{ top: '88px' }}
            >
                {/* Mobile Header */}
                <div className="md:hidden bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <FaFileAlt className="text-white" size={16} />
                        </div>
                        <h2 className="text-lg font-bold">Policies & Procedures</h2>
                    </div>
                    <button
                        onClick={closeSidebar}
                        className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <FaTimes className="h-5 w-5" />
                    </button>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:block p-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <FaFileAlt className="text-white" size={20} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Policies & Procedures</h2>
                            <p className="text-slate-200 text-sm">Important documents and guidelines</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="p-4 md:p-6 space-y-2 h-full overflow-y-auto">
                    {policyLinks.map((link, index) => (
                        <div key={link.to} className="group">
                            <NavLink
                                to={link.to}
                                end={link.to === "/policies"}
                                className={({ isActive }) =>
                                    `block p-4 rounded-xl transition-all duration-200 border ${isActive
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border-blue-600 transform scale-105'
                                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md border-gray-200 hover:border-blue-300 hover:transform hover:scale-102'
                                    }`
                                }
                                onClick={closeSidebar}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className={({ isActive }) =>
                                            `w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${isActive ? 'bg-white/20' : 'bg-blue-100 group-hover:bg-blue-200'
                                            }`
                                        }>
                                            {React.cloneElement(link.icon, {
                                                className: ({ isActive }) => isActive ? 'text-white' : 'text-blue-600'
                                            })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-sm leading-tight truncate">
                                                {link.label}
                                            </h3>
                                            <p className={({ isActive }) =>
                                                `text-xs mt-1 leading-tight truncate ${isActive ? 'text-blue-100' : 'text-gray-500 group-hover:text-blue-600'
                                                }`
                                            }>
                                                {link.description}
                                            </p>
                                        </div>
                                    </div>
                                    <FaChevronRight
                                        size={12}
                                        className={({ isActive }) =>
                                            `transition-transform duration-200 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                                            }`
                                        }
                                    />
                                </div>
                            </NavLink>
                        </div>
                    ))}

                    {/* Additional Info Section */}
                    <div className="mt-8 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FaFileAlt className="text-amber-600" size={14} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 text-sm mb-1">
                                    Need Help?
                                </h4>
                                <p className="text-amber-700 text-xs leading-relaxed">
                                    If you need assistance understanding any of our policies, please contact our support team.
                                </p>
                                <a
                                    href="tel:1300894480"
                                    className="inline-flex items-center mt-2 text-xs font-medium text-amber-800 hover:text-amber-900 transition-colors duration-200"
                                >
                                    Call: 1300 894 480
                                    <FaChevronRight size={10} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Footer */}
                <div className="md:hidden p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-xs text-gray-600 text-center">
                        Last updated: January 2025
                    </p>
                </div>
            </nav>

            <style jsx>{`
                @media (max-width: 768px) {
                    nav {
                        height: calc(100vh - 88px);
                    }
                }
            `}</style>
        </>
    );
};

export default PolicyHeader;