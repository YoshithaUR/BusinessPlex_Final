import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PolicyHeader = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar Nav */}
            <nav className="w-64 bg-gray-50 border-r border-gray-200 p-6 sticky top-0 h-screen z-0">
                <h2 className="text-xl font-bold mb-6 text-black">Policies & Procedures</h2>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <NavLink to="/policies" end className={({ isActive }) => isActive ? "block p-2 rounded bg-blue-100 text-blue-700 font-semibold" : "block p-2 rounded hover:bg-blue-100 hover:text-blue-700"}>
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/policies/support-policy" className={({ isActive }) => isActive ? "block p-2 rounded bg-blue-100 text-blue-700 font-semibold" : "block p-2 rounded hover:bg-blue-100 hover:text-blue-700"}>
                            Learner Support Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/policies/access-equity" className={({ isActive }) => isActive ? "block p-2 rounded bg-blue-100 text-blue-700 font-semibold" : "block p-2 rounded hover:bg-blue-100 hover:text-blue-700"}>
                            Access & Equity Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/policies/student-handbook" className={({ isActive }) => isActive ? "block p-2 rounded bg-blue-100 text-blue-700 font-semibold" : "block p-2 rounded hover:bg-blue-100 hover:text-blue-700"}>
                            Student Information Handbook
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/policies/appeals-complaints" className={({ isActive }) => isActive ? "block p-2 rounded bg-blue-100 text-blue-700 font-semibold" : "block p-2 rounded hover:bg-blue-100 hover:text-blue-700"}>
                            Appeals & Complaints Policy
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Content area for nested routes */}
            <main className="flex-1 p-8 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default PolicyHeader;
