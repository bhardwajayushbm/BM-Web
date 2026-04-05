"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Image
            src="/BM Logo.svg"
            alt="BANGMETRIC Logo"
            width={200}
            height={50}
            className="h-10 w-auto"
          />

          {/* DESKTOP MENU */}
          <div
            className="hidden lg:flex items-center justify-center gap-10 flex-1"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <Link href="/aboutUs" className="text-[16px] text-gray-900 hover:text-purple-600">
              About
            </Link>

            <Link href="/services" className="text-[16px] text-gray-900 hover:text-purple-600">
              Services
            </Link>

            <Link href="/company" className="text-[16px] text-gray-900 hover:text-purple-600">
              Life at Bangmetric
            </Link>

            <Link href="/resources" className="text-[16px] text-gray-900 hover:text-purple-600">
              Resources
            </Link>

            <Link href="/careers" className="text-[16px] text-gray-900 hover:text-purple-600">
              Careers
            </Link>
          </div>

          {/* GET IN TOUCH (DESKTOP) */}
          <div className="hidden lg:flex">
            <Link
              href="/GetInTouch"
              className="text-[16px] text-gray-900 hover:text-purple-600"
            >
              Get in Touch
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col gap-4 px-6 py-6">

            <Link href="/aboutUs" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/company" onClick={() => setOpen(false)}>
              Life at Bangmetric
            </Link>

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