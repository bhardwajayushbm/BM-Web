"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GetInTouch from './getintouch';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Image
            src="/BM Logo.svg"
            alt="BANGMETRIC Logo"
            width={200}
            height={50}
            className="h-10 w-auto"
          />
          <div
            className="hidden lg:flex items-center justify-center gap-10 flex-1"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <div className="relative group">
              <Link
                href="/aboutUs"
                className="text-[16px] text-gray-900 hover:text-purple-600"
              >
                About
              </Link>

              <div className="absolute top-full left-0 mt-3 w-48 rounded-lg bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/aboutUs"
                  className="block px-5 py-3 hover:bg-purple-50"
                >
                  Company
                </Link>
                <Link
                  href="/company"
                  className="block px-5 py-3 hover:bg-purple-50"
                >
                  Life at Bangmetric
                </Link>
              </div>
            </div>

            <Link href="/services"
            className="text-[16px] text-gray-900 hover:text-purple-600"
            >Services</Link>

            <a href="#industries"
            className="text-[16px] text-gray-900 hover:text-purple-600"
            >Industries</a>

            <Link href="/resources"
            className="text-[16px] text-gray-900 hover:text-purple-600"
            >Resources</Link>

            <Link href="/careers"
            className="text-[16px] text-gray-900 hover:text-purple-600"
            >Careers</Link>
            
          </div>
          <div className="hidden lg:flex">
            <Link
              href="/Getintouch"
              className="text-[16px] text-gray-900 hover:text-purple-600"
            >
              Get in Touch
            </Link>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col gap-4 px-6 py-6">
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full text-left text-[16px]"
              >
                About
                <ChevronDown
                  className={`transition ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <Link href="/aboutUs" onClick={() => setOpen(false)}>
                    Company
                  </Link>
                  <Link href="/company" onClick={() => setOpen(false)}>
                    Life at Bangmetric
                  </Link>
                </div>
              )}
            </div>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <a href="#industries" onClick={() => setOpen(false)}>
              Industries
            </a>

            <Link href="/resources" onClick={() => setOpen(false)}>
              Resources
            </Link>

            <Link href="/careers" onClick={() => setOpen(false)}>
              Careers
            </Link>

            <Link
              href="/GetInTouch"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#9562EB] text-white text-center py-2 rounded-md"
            >
              Get in Touch
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}