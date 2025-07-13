import React from 'react';
import { Outlet } from 'react-router-dom';
import PolicyHeader from '../policyHeader';

const PoliciesLayout = () => {
    return (
        <div className="flex min-h-screen pt-20 relative">
            {/* Wrapper for PolicyHeader with higher z-index */}
            <div className="relative z-50">
                <PolicyHeader />
            </div>

            <main className="flex-1 overflow-x-hidden overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default PoliciesLayout;
