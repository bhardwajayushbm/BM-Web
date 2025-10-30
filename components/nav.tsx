"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image';

export default function Nav() {
  const [open] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
         <Link href="#hero" className="flex items-center gap-2" aria-label="BangMetric home">
         <Image src="/BM Logo.svg" alt="BM Logo" layout="responsive" width={100} height={50} />
               </Link>

        <nav aria-label="Main">
          <ul className="hidden gap-6 md:flex">
            <li>
              <a href="#metrics" className={`font-medium hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Impact
              </a>
            </li>
            <li>
              <a href="#customers" className={`font-medium hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Case Studies
              </a>
            </li>
            <li>
              <a href="#looking-for" className={`font-medium hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
              </a>
            </li>
            <li>
              <a href="#testimonials" className={`font-medium hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
              </a>
            </li>
            <li>
              <a href="#contact" className={`font-medium hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button
            className="bg-(--brand) text-(--on-brand) hover:bg-(--brand-strong) hover:text-(--on-brand) transition-colors"
          >
            Get Started
          </Button>
        </div>
      </div>
     </header>
  )
}
