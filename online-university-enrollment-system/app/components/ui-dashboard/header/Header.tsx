// components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* Logo */}
                <img src="/favicon.ico" alt="" className="h-10" />
                <span className="text-white text-xl font-bold ml-2">University of Makeni</span>
            </div>
            <div className="space-x-4">
                <a href="/signin" className="text-white hover:text-gray-200 transition">Sign In</a>
                <a href="/signup" className="text-white hover:text-gray-200 transition">Sign Up</a>
            </div>
        </header>
    );
};

export default Header;