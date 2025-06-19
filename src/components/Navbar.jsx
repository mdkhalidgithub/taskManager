import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 bg-white shadow-sm">
      <div className="flex items-center space-x-8">
      <a href="#" className="text-sm font-semibold text-blue-700 border-b-4 border-pink-400 pb-1">HOME</a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600">ABOUT</a>
        <a href="/login" className="text-sm font-semibold text-gray-700 hover:text-blue-600">LOGIN</a>
        <a href="/register" className="text-sm font-semibold text-gray-700 hover:text-blue-600">SIGN-IN</a>
      </div>
      <div className="block md:hidden">
        <button className="focus:outline-none">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> 
      </div>
    </nav>
  );
};

export default Navbar; 