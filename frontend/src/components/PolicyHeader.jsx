import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const PolicyHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                !event.target.closest('.mobile-hamburger-btn')) {
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

    // Close sidebar on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && sidebarOpen) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [sidebarOpen]);

    const navigationItems = [
        {
            to: "/policies",
            label: "Privacy Policy",
            end: true
        },
        {
            to: "/policies/support-policy",
            label: "Learner Support Policy"
        },
        {
            to: "/policies/access-equity",
            label: "Access & Equity Policy"
        },
        {
            to: "/policies/student-handbook",
            label: "Student Information Handbook"
        },
        {
            to: "/policies/appeals-complaints",
            label: "Appeals & Complaints Policy"
        }
    ];

    const handleLinkClick = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            {/* Mobile Hamburger Button - Fixed positioning below main navbar */}
            {!sidebarOpen && (
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="mobile-hamburger-btn fixed top-28 left-4 z-30 md:hidden bg-white border-2 border-gray-300 rounded-lg p-3 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    aria-label="Open navigation menu"
                >
                    <svg
                        className="h-5 w-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            )}

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar Navigation */}
            <nav
                ref={sidebarRef}
                className={`
                    fixed md:relative
                    top-25 left-0 md:top-0 md:left-0
                    h-full md:h-auto
                    w-80 md:w-64
                    max-w-[85vw] md:max-w-none
                    bg-white md:bg-gray-50
                    shadow-2xl md:shadow-none
                    border-r-0 md:border-r md:border-gray-200
                    z-20 md:z-auto
                    transform transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    overflow-y-auto
                    pt-6 md:pt-8
                    pb-6 md:pb-8
                    px-6 md:px-6
                `}
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent'
                }}
                aria-label="Policy navigation"
            >
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8 md:hidden">
                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        aria-label="Close navigation menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:block mb-8">
                    <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-3">
                        Policies & Procedures
                    </h2>
                </div>

                {/* Navigation Items */}
                <ul className="space-y-2" role="list">
                    {navigationItems.map((item, index) => (
                        <li key={item.to} role="listitem">
                            <NavLink
                                to={item.to}
                                end={item.end}
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `
                                        block w-full text-left px-4 py-3 rounded-lg
                                        font-medium text-sm
                                        transition-all duration-200
                                        border border-transparent
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                                        ${isActive
                                        ? 'bg-blue-600 text-white shadow-md border-blue-600'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 hover:shadow-sm'
                                    }
                                    `
                                }
                            >
                                <span className="flex items-center">
                                    <span className="truncate">{item.label}</span>
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 md:hidden">
                    <p className="text-xs text-gray-500 text-center">
                        BusinessPlex Policies
                    </p>
                </div>
            </nav>

            {/* Custom Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    /* Mobile hamburger active state */
                    @media (max-width: 767px) {
                        .mobile-hamburger-btn:active {
                            transform: scale(0.95);
                        }
                    }
                    
                    /* Custom scrollbar for sidebar */
                    nav::-webkit-scrollbar {
                        width: 6px;
                    }
                    
                    nav::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    
                    nav::-webkit-scrollbar-thumb {
                        background-color: rgba(156, 163, 175, 0.5);
                        border-radius: 3px;
                    }
                    
                    nav::-webkit-scrollbar-thumb:hover {
                        background-color: rgba(156, 163, 175, 0.8);
                    }
                `
            }} />
        </>
    );
};

export default PolicyHeader;