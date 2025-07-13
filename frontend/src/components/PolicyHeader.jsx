import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const PolicyHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Hamburger Icon (hidden when sidebar is open) */}
            {!sidebarOpen && (
                <div className="md:hidden fixed top-[96px] left-4 z-40">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="bg-white border-black border-2 rounded-full p-2 shadow"
                    >

                        <svg
                            className="h-6 w-6 text-gray-800"
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
                </div>
            )}

            {/* Background overlay */}
            <div
                className={`fixed inset-0 bg-opacity-30 z-30 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar Nav */}
            <nav
                className={`fixed top-[96px] left-0 h-[calc(100vh-96px)] w-64 bg-white shadow-md p-6 z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } pt-14 md:pt-0 md:translate-x-0 md:relative md:block md:border-r md:border-gray-200 md:bg-gray-50 md:top-0 md:h-full`}
            >
                {/* Close button (only visible on mobile) */}
                <div className="flex justify-between items-center mb-6 md:hidden absolute top-4 left-4 right-4">
                    <h2 className="text-xl font-bold text-black">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)}>
                        <svg
                            className="h-6 w-6 text-gray-800"
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

                <h2 className="hidden md:block text-xl font-bold mb-6 text-black">
                    Policies & Procedures
                </h2>

                <ul className="space-y-3 text-gray-700 mt-10 md:mt-0">
                    <li>
                        <NavLink
                            to="/policies"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'block p-2 rounded bg-blue-100 text-blue-700 font-semibold'
                                    : 'block p-2 rounded hover:bg-blue-100 hover:text-blue-700'
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/policies/support-policy"
                            className={({ isActive }) =>
                                isActive
                                    ? 'block p-2 rounded bg-blue-100 text-blue-700 font-semibold'
                                    : 'block p-2 rounded hover:bg-blue-100 hover:text-blue-700'
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            Learner Support Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/policies/access-equity"
                            className={({ isActive }) =>
                                isActive
                                    ? 'block p-2 rounded bg-blue-100 text-blue-700 font-semibold'
                                    : 'block p-2 rounded hover:bg-blue-100 hover:text-blue-700'
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            Access & Equity Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/policies/student-handbook"
                            className={({ isActive }) =>
                                isActive
                                    ? 'block p-2 rounded bg-blue-100 text-blue-700 font-semibold'
                                    : 'block p-2 rounded hover:bg-blue-100 hover:text-blue-700'
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            Student Information Handbook
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/policies/appeals-complaints"
                            className={({ isActive }) =>
                                isActive
                                    ? 'block p-2 rounded bg-blue-100 text-blue-700 font-semibold'
                                    : 'block p-2 rounded hover:bg-blue-100 hover:text-blue-700'
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            Appeals & Complaints Policy
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default PolicyHeader;
