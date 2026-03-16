'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Getintouch } from '@/components/Getintouch';

export function Navigation() {
  return (
    <div
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white shadow-sm
      "
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/BM Logo.svg"
              alt="BANGMETRIC Logo"
              width={200}
              height={50}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center justify-center gap-10 flex-1"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <div className="relative group">
              <Link
                href="/aboutUs"
                className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
              >
                About
              </Link>

              {/* Dropdown */}
              <div
                className="
                  absolute top-full left-0 mt-3 w-48
                  rounded-lg bg-white shadow-lg border border-gray-100
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                "
              >
                <Link
                  href="/aboutUs"
                  className="block px-5 py-3 text-[15px] text-gray-900 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  Company
                </Link>

                <Link
                  href="/company"
                  className="block px-5 py-3 text-[15px] text-gray-900 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  Life at Bangmetric
                </Link>
              </div>
            </div>

            <Link
              href="/services"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Services
            </Link>

            <a
              href="#industries"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Industries
            </a>

            <Link
              href="/resources"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Resources
            </Link>

            <Link
              href="/careers"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Careers
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
             <Link
              href="/Getintouch"
              className="text-[16px] font-normal text-gray-900 hover:text-purple-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden">
            <Menu className="text-gray-900 w-6 h-6" />
          </button>

        </div>
      </div>
    </div>
  );
}