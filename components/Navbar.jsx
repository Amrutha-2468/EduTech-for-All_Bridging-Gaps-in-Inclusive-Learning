"use client";
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Main navigation links */}
          <div className="flex">
            <Link href="/" className="text-white text-xl font-bold py-4 px-3">Home</Link>
            <Link href="/books" className="text-white py-4 px-3">Books</Link>
            <Link href="/videos" className="text-white py-4 px-3">Videos</Link>
            <Link href="/store" className="text-white py-4 px-3">Store</Link>
          </div>

          {/* Dropdown for "Deaf" and "Dumb" */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white py-4 px-3 focus:outline-none"
            >
              Accessibility
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link href="/accessbility/speech-to-text" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Deaf (Speech to Text)
                </Link>
                <Link href="/accessbility/text-to-speech" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Dumb (Text to Speech)
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
