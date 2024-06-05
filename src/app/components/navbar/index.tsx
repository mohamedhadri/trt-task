"use client";
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#005D99] py-4 px-6 flex items-center justify-between">
      <div className="flex items-center md:mr-auto">
      <Image src="/assets/logo.png" alt="Logo" className="" width={132} height={16} />
        
        
      </div>
      <div className="md:hidden flex gap-4">
      <svg
          className="h-6 w-6 text-white hover:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>

        </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-white hover:text-gray-300">
          News
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Features
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Topics
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Video
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Live
        </a>
        <svg
          className="h-6 w-6 text-white hover:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#005D99] py-4 px-6 flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-gray-300">
            News
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Features
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Topics
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Video
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Live
          </a>
        </div>
      )}
    </nav>
  );
}