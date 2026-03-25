"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const pages = [
  {
    big: [
      {
        img: "/R1.png",
        title: "Join us at ServiceNow\nKnowledge 2026",
        desc:
          "as we connect with industry leaders, explore platform innovations, and share insights shaping the future of digital transformation.",
      },
      {
        img: "/R2.png",
        title: "BANGMETRIC is Now a ServiceNow Specialist Partner",
        desc:
          "We’re proud to be recognized as a ServiceNow Specialist Partner, reinforcing our expertise, proven delivery, and commitment to customer success.",
      },
    ],
    small: ["/r11.png", "/r12.png", "/r13.png", "/r14.png", "/r11.png", "/r12.png"],
  },
];

export default function ResourcesCardsPage() {
  const [activePage] = useState(0);
  const current = pages[activePage];

  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = current.small.length;

  // AUTO SLIDE (SMOOTH LOOP)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // RESET FOR INFINITE LOOP (NO JUMP VISIBLE)
  useEffect(() => {
    if (slideIndex >= totalSlides) {
      setTimeout(() => {
        setSlideIndex(0);
      }, 1000); // matches transition duration
    }
  }, [slideIndex, totalSlides]);

  const nextSlide = () => {
    setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mb-20 overflow-hidden bg-[#F5F5F7] py-12">
      <div className="w-full max-w-[1200px] space-y-10">

        {/* ===== BIG CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-8 md:px-14">
          {current.big.map((card, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative w-full aspect-[16/8] rounded-[10px] overflow-hidden">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>

              <h3 className="mt-4 text-[24px] md:text-[26px] leading-tight whitespace-pre-line">
                {card.title}
              </h3>

              <p className="mt-2 text-[13px] leading-relaxed">
                {card.desc}
              </p>

              <button className="mt-3 w-fit px-5 py-2 rounded-[6px] bg-[#9562EB] text-white text-[14px]">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* ===== SMALL CAROUSEL ===== */}
        <div className="relative px-8 md:px-14">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
          >
            ›
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${(slideIndex % totalSlides) * 25}%)`,
              }}
            >
              {[...current.small, ...current.small].map((img, index) => (
                <div key={index} className="w-1/4 px-2 shrink-0">
                  <div className="relative w-full aspect-[280/168] rounded-[5px] overflow-hidden">
                    <Image src={img} alt="Small card" fill className="object-cover" />
                  </div>

                  <h3 className="mt-3 text-[16px] leading-tight">
                    Join us at ServiceNow <br />
                    Knowledge 2026.
                  </h3>

                  <button className="mt-2 px-4 py-1.5 rounded-[6px] bg-[#9562EB] text-white text-[13px]">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== DOT INDICATOR ===== */}
        <div className="w-full flex justify-center pt-2">
          <div className="flex items-center gap-3">
            {current.small.map((_, i) => (
              <div
                key={i}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  slideIndex % totalSlides === i
                    ? "w-[28px] bg-black"
                    : "w-[24px] bg-[#CBB8F5]"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}