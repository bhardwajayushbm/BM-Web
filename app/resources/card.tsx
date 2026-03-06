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

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisibleSmallCards = () => {
    const result: string[] = [];
    for (let i = 0; i < 4; i++) {
      result.push(current.small[(slideIndex + i) % totalSlides]);
    }
    return result;
  };

  const visibleSmall = getVisibleSmallCards();

  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mb-20 overflow-x-hidden bg-[#F5F5F7] py-12">
      <div className="w-full max-w-[1200px] space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-8 md:px-14">
          {current.big.map((card, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative w-full aspect-[16/8] rounded-[10px] overflow-hidden">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>

              <h3 className="mt-4 font-helvetica font-normal text-black text-[22px] sm:text-[24px] md:text-[26px] leading-tight whitespace-pre-line">
                {card.title}
              </h3>

              <p className="mt-2 font-helvetica font-normal text-black text-[12px] leading-relaxed">
                {card.desc}
              </p>

              <button
                className="mt-3 w-fit px-5 py-2 rounded-[6px] bg-[#9562EB] text-white text-[15px] shadow-md hover:opacity-90 transition"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-700">
            {visibleSmall.map((img, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="relative w-full aspect-[280/168] rounded-[5px] overflow-hidden">
                  <Image src={img} alt="Small card" fill className="object-cover" />
                </div>

                <h3 className="mt-3 font-helvetica font-normal text-black text-[15px] sm:text-[16px] md:text-[17px] leading-tight">
                  Join us at ServiceNow <br />
                  Knowledge 2026.
                </h3>

                <button
                  className="mt-2 px-4 py-1.5 rounded-[6px] bg-[#9562EB] text-white text-[13px] shadow-md hover:opacity-90 transition"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center pt-2">
            <div className="flex items-center gap-3">
              {current.small.map((_, i) => (
                <div
                  key={i}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    slideIndex === i
                      ? "w-[28px] bg-black"
                      : "w-[24px] bg-[#CBB8F5]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}