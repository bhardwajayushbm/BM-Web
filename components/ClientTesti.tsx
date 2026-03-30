"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "With BANGMETRIC’s expertise in digital workflow solutions, we’ve been able to successfully transform our IT operations and strengthen our cybersecurity posture. Their support has been instrumental in modernizing the way we run our business.",
    client: "A Leading US-based Insurance Company",
    logo: "/ct.jpg",
  },
  {
    text: "Thanks to BANGMETRIC's seamless service-now implementation, our productivity has soared. The platform's capabilities are now central to our operational efficiency.",
    client: "A Prominent Tech Innovations Firm",
    logo: "/ct.jpg",
  },
  {
    text: "Their strategic approach to digital transformation helped us streamline complex processes and achieve measurable ROI within the first six months.",
    client: "Global Logistics Solutions",
    logo: "/ct.jpg",
  }
];

export function ClientTesti() {
  return (
    <section className="py-16 md:py-20 bg-white font-[Helvetica]">

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="font-[Helvetica] font-normal text-[32px] sm:text-[40px] md:text-[48px] text-black leading-tight mb-4 md:mb-6">
              Client <br className="hidden lg:block" /> Testimonials
            </h2>
            

            <p className="text-black text-[16px] leading-[1.4] max-w-[380px] ml-2">
              Discover how leading organizations across 
              <br />
              industries are transforming with our 
               <br />
              <span className="text-[#44CE1B] font-semibold">
                ServiceNow
              </span>{" "}
              expertise.
            </p>
          </div>
          <div className="lg:w-2/3 flex flex-col items-center w-full gap-3">

            <div className="flex items-center justify-center gap-3 w-full">

              <button className="hidden md:flex prev-btn w-10 h-10 border border-gray-300 rounded-full items-center justify-center hover:bg-gray-50 transition-all">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
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
                        <div className="bg-white border border-gray-100 rounded-xl pt-7 pb-6 px-5 md:px-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-visible">

                          <div className="flex gap-1 mb-4 pt-1 justify-center lg:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="#FFC107"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>

                          <p className="text-gray-800 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] mb-5 md:mb-6 text-center lg:text-left">
                            {item.text}
                          </p>
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

              <button className="hidden md:flex next-btn w-10 h-10 border border-gray-300 rounded-full items-center justify-center hover:bg-gray-50 transition-all">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

            </div>
            <div className="custom-pagination flex justify-center gap-2 mt-2"></div>

          </div>
        </div>

      </div>
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
    </section>
  );
}