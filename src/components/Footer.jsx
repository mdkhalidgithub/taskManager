import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-100 text-gray-600 py-4 px-6 mt-auto border-t">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="mb-2 md:mb-0 text-sm">&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</div>
      <div className="flex space-x-4 text-sm">
        <a href="#" className="hover:text-pink-500 transition">About</a>
        <a href="#" className="hover:text-pink-500 transition">Contact</a>
        <a href="#" className="hover:text-pink-500 transition">Privacy</a>
      </div>
    </div>
  </footer>
);

export default Footer; 