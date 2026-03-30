"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export function Event() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "BANGMETRIC at\nServiceNow Knowledge 2025",
      desc: "Our ServiceNow Jumpstart offerings were met with great enthusiasm and buzz at ServiceNow Knowledge 2025",
      img: "/News.png",
    },
    {
      title:"BANGMETRIC\nTurned 8!",
      desc: "Celebrating 8 Years of Journey. Our foundation day was a celebration of milestone, teamwork and shared success.",
      img: "/News1.jpg",
    },
  ];

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={ref}
      className="w-full flex justify-center py-14 sm:py-16 md:py-20 bg-[#f5f5f5]"
    >
      <div className="w-full max-w-[1100px] px-4 sm:px-6 lg:px-8 relative">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-[26px] sm:text-[38px] md:text-[50px] lg:text-[58px] text-black">
            Events & News
          </h1>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative flex items-center">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="
              absolute left-0 sm:-left-2 md:-left-6 lg:-left-10
              hidden md:flex
              w-10 h-10
              border border-gray-300
              rounded-full
              items-center justify-center
              hover:bg-gray-50
              transition-all
              z-10
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="
              absolute right-0 sm:-right-2 md:-right-6 lg:-right-10
              hidden md:flex
              w-10 h-10
              border border-gray-300
              rounded-full
              items-center justify-center
              hover:bg-gray-50
              transition-all
              z-10
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* ✅ REAL CAROUSEL ANIMATION */}
          <div className="overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full px-6 sm:px-8 md:px-10"
              >

                {/* LEFT TEXT */}
                <div className="text-center lg:text-left">
                  <h2 className="whitespace-pre-line leading-[1.3] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-black mb-4">
                    {slides[current].title}
                  </h2>

                  <p className="text-[15px] sm:text-[16px] md:text-[18px] text-black mb-6 max-w-[500px] mx-auto lg:mx-0">
                    {slides[current].desc}
                  </p>

                  <button className="bg-[#9562EB] hover:bg-[#8449E6] text-white w-[130px] sm:w-[140px] h-[36px] sm:h-[38px] rounded-[6px] text-[14px] shadow-md mx-auto lg:mx-0">
                    Read More
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-[500px]">
                    <Image
                      src={slides[current].img}
                      alt="Event"
                      width={600}
                      height={500}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* STEPPER */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[3px] w-[24px] sm:w-[30px] rounded-full cursor-pointer transition-all ${
                current === i ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}