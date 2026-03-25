"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Mindset() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 pt-28 mb-40">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[1386px] h-[430px] rounded-[12px]"
      >
        <div className="absolute inset-0 rounded-[12px] overflow-hidden">
          <Image
            src="/BGAJ.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-20 max-w-[620px] pl-[100px] pt-[30px] text-white">
          <h1 className="font-[Helvetica] font-bold text-[20px] sm:text-[36px] md:text-[44px] leading-[1.1] mb-3">
            The Mindset: Servant Leadership at the Core
          </h1>

          <p className="font-[Helvetica] font-normal text-[16px] sm:text-[18px] md:text-[22px] leading-[1.3] mb-3">
            “Our leadership philosophy is simple: leaders serve first. At
            BANGMETRIC, servant leadership shapes how we collaborate, make
            decisions, and uplift each other. We believe leaders exist to remove
            barriers, empower teams, and help individuals realize their fullest
            potential. This is how we build a culture where everyone
            contributes—and everyone matters.”
          </p>

     <div className="flex items-center gap-3 mt-2">
  <span className="font-[Helvetica] font-bold text-[20px] text-white">
    Hear it from our CEO
  </span>

  <a
    href="https://www.youtube.com/watch?v=vs91PXgvm5U"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Watch on YouTube"
    className="inline-flex items-center"
  >
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-110 transition-transform duration-200"
    >
      <path
        d="M23.498 6.186a3.01 3.01 0 0 0-2.12-2.13C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.556a3.01 3.01 0 0 0-2.12 2.13C0 8.063 0 12 0 12s0 3.937.502 5.814a3.01 3.01 0 0 0 2.12 2.13C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.556a3.01 3.01 0 0 0 2.12-2.13C24 15.937 24 12 24 12s0-3.937-.502-5.814z"
        fill="#FF0000"
      />
      <path
        d="M9.75 15.568V8.432L15.818 12L9.75 15.568z"
        fill="white"
      />
    </svg>
  </a>
</div>


        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-0 top-[-30px] w-[535px] h-[480px] z-30"
        >
          <Image
            src="/Anuj1.png"
            alt="Anuj CEO"
            fill
            className="object-contain drop-shadow-xl"
          />
        </a>
      </motion.div>
    </section>
  );
}
