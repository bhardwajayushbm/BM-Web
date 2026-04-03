"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ===== ANIMATIONS ===== */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const testimonials = [
  {
    text: "With BANGMETRIC’s expertise in digital workflow solutions, we’ve been able to successfully transform our IT operations and strengthen our cybersecurity posture. Their support has been instrumental in modernizing the way we run our business.",
    client: "A Leading US-based Insurance Company",
    logo: "/ct.jpg",
  },
  {
    text: "The work delivered so far has been truly outstanding. The visual explanations have helped us clearly understand how the backend flow will function. We genuinely appreciate the team’s clarity, transparency, and dedication.",
    client: "A Leading Healthcare Services Provider",
    logo: "/ct.jpg",
  },
  {
    text: "Thank you, BANGMETRIC Team, for your hard work on this project. It wasn’t always easy, but your dedication and effort made a difference. We truly appreciate everything you’ve done to get us here.",
    client: "Leading Healthcare Services Provider",
    logo: "/ct.jpg",
  },
];

export function ClientTesti() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="py-10 sm:py-12 md:py-20 bg-white font-[Helvetica] overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT */}
          <motion.div
            variants={leftVariants}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <h2 className="font-[Helvetica] font-normal text-[28px] sm:text-[40px] md:text-[48px] text-black leading-tight mb-4 md:mb-6">
              Client <br className="hidden lg:block" /> Testimonials
            </h2>

            <p className="text-black text-[14px] sm:text-[16px] leading-[1.4] max-w-[380px] mx-auto lg:mx-0">
              Discover how leading organizations across 
              <br />
              industries are transforming with our 
              <br />
              <span className="text-[#44CE1B] font-semibold">
                ServiceNow
              </span>{" "}
              expertise.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={rightVariants}
            className="lg:w-2/3 flex flex-col items-center w-full gap-3"
          >
            <div className="flex items-center justify-center gap-3 w-full">

              {/* PREV */}
              <button className="hidden md:flex prev-btn w-10 h-10 border border-gray-300 rounded-full items-center justify-center hover:bg-gray-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {/* SWIPER */}
              <div className="w-full max-w-[500px]">
                <Swiper
                  modules={[Pagination, Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 4000 }}
                  navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                  }}
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="mx-auto max-w-[460px]">
                        <div className="bg-white border border-gray-100 rounded-xl pt-8 sm:pt-9 pb-6 px-5 md:px-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-visible">

                          {/* ⭐ STARS */}
                          <div className="flex gap-1 mb-4 pt-2 justify-center lg:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="#FFC107"
                                className="shrink-0"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>

                          {/* TEXT */}
                          <p className="text-gray-800 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] mb-5 md:mb-6 text-center lg:text-left">
                            {item.text}
                          </p>

                          {/* CLIENT */}
                          <div className="flex items-center gap-3 justify-center lg:justify-start">
                            <div className="w-9 h-9 rounded-full border border-black overflow-hidden">
                              <Image
                                src={item.logo}
                                alt="Client Logo"
                                width={36}
                                height={36}
                                className="object-cover"
                              />
                            </div>

                            <span className="text-gray-700 text-[12px] sm:text-[13px]">
                              {item.client}
                            </span>
                          </div>

                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* NEXT */}
              <button className="hidden md:flex next-btn w-10 h-10 border border-gray-300 rounded-full items-center justify-center hover:bg-gray-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

            </div>

            <div className="custom-pagination flex justify-center gap-2 mt-2"></div>
          </motion.div>

        </div>
      </div>

      {/* PAGINATION STYLE */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 20px;
          height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #111827;
          width: 40px;
        }
      `}</style>
    </motion.section>
  );
}