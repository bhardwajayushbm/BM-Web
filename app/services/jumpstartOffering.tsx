"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Counter({ value, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function DecimalCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = value / (duration / 30);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count.toFixed(1)}</>;
}

export default function JumpstartOfferings() {
  return (
    <section className="w-full bg-[#F6F5FA] px-4 sm:px-6 md:px-12 lg:px-20 pt-12 sm:pt-14 md:pt-20 pb-0">
      
      <div className="max-w-[1100px] mx-auto">

        {/* ===== TOP CONTENT (FORCED SAME LAYOUT) ===== */}
        <div className="grid grid-cols-2 gap-4 md:gap-16">
          
          {/* LEFT TEXT */}
          <div>
            <h2 className="
              font-helvetica text-black max-w-[648px]
              text-[14px] sm:text-[16px] md:text-[20px]
              leading-[130%] md:leading-[110%]
            ">
              BANGMETRIC Jumpstart Offerings are focused, fast-track onboarding
              packages designed to accelerate ServiceNow adoption. Specifically
              designed mid-market and commercial organizations, they provide:
            </h2>
          </div>

          {/* RIGHT BULLETS */}
          <div className="relative">

            <div className="flex flex-col gap-3 md:gap-7">
              {[
                "Core functionality quickly to enable rapid time-to-value",
                "A structured, clear approach for rapid onboarding and successful deployment of ServiceNow modules",
                "An approach to minimize complexity while laying a scalable foundation for future growth.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-4">

                  {/* ⭐ STAR */}
                  <div className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] flex justify-center mt-1">
                    <Image
                      src="/Star.png"
                      alt="star"
                      width={20}
                      height={20}
                      className="object-contain sm:w-[24px] sm:h-[24px]"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="
                    font-helvetica text-[#474545]
                    text-[13px] sm:text-[15px] md:text-[20px]
                    leading-[140%]
                  ">
                    {text}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== IMAGE + STATS (SAME LAYOUT) ===== */}
        <div className="grid grid-cols-2 gap-4 md:gap-16 mt-10 md:mt-16 items-center">
          
          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/Lab.png"
              alt="Lab"
              width={800}
              height={533}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 md:gap-12">
            
            {[
              { comp: <DecimalCounter value={4.8} />, label: "CSAT Score" },
              { comp: <Counter value={250} suffix="+" />, label: "Certified Resources" },
              { comp: <Counter value={300} suffix="+" />, label: "Project<br/>Implementation" },
              { comp: <Counter value={350} suffix="+" />, label: "Integration<br/>Completed" },
              { comp: <Counter value={3} suffix="+" />, label: "Global Delivery<br/>Centers" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="
                  font-helvetica text-black leading-none
                  text-[20px] sm:text-[28px] md:text-[44px]
                ">
                  {item.comp}
                </span>
                <p
                  className="
                    mt-1 md:mt-2 font-helvetica text-black
                    text-[11px] sm:text-[13px] md:text-[16px]
                  "
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}