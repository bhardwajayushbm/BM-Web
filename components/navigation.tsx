'use client';

import { Menu, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image 
              src="/BM Logo.svg" 
              alt="BANGMETRIC Logo" 
              width={200} 
              height={50}
              className="h-10 w-auto"
            />
          </div>

          {/* Center: Desktop Menu */}
          <div
            className="hidden lg:flex items-center justify-center gap-10 flex-1"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <a 
              href="#about"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#services"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Services
            </a>
            <a 
              href="#industries"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Industries
            </a>
            <a 
              href="#resources"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Resources
            </a>
            <a 
              href="#careers"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Careers
            </a>

            <button 
              className="flex items-center gap-1 text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Lorem Ipsum
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Get In Touch */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="text-[16px] text-black rounded-full px-6 py-2.5 transition-colors"
              style={{  fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden">
            <Menu className="text-gray-900 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
