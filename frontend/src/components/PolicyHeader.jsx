import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PolicyHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Mobile Hamburger Button */}
            <div className="md:hidden fixed top-26 left-4 z-50">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="bg-white border border-gray-300 rounded-full p-2 shadow"
                >
                    {/* Hamburger Icon */}
                    <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Sidebar Overlay for Mobile */}
            <div
                className={`
          fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300
          ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          md:hidden
        `}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar Drawer */}
            <nav
                className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 z-50 transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:block md:border-r md:border-gray-200 md:bg-gray-50
        `}
            >
                {/* Close button (mobile only) */}
                <div className="flex justify-between items-center mb-6 md:hidden">
                    <h2 className="text-xl font-bold text-black">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)}>
                        <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Sidebar Title (desktop) */}
                <h2 className="hidden md:block text-xl font-bold mb-6 text-black">Policies & Procedures</h2>

                <ul className="space-y-3 text-gray-700">
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

            {/* Content area */}
            <main className="flex-1 p-6 pt-24 md:pt-8 md:ml-64 overflow-auto">
                <Outlet />
            </main>

        </>
    );
};

export default PolicyHeader;
