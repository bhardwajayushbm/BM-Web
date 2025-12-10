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
    <section className="w-full bg-[#F6F5FA] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        <div>
          <h2 className="font-helvetica font-normal text-[24px] sm:text-[26px] md:text-[30px] leading-[110%] text-black max-w-[648px]">
            BANGMETRIC Jumpstart Offerings
            <br />
            are focused, fast-track onboarding
            <br />
            packages designed to accelerate
            <br />
            ServiceNow adoption. Specifically
            <br />
            designed mid-market and
            <br />
            commercial organizations, they
            <br />
            provide:
          </h2>
        </div>

        <div className="relative max-w-[503px]">
          <div className="absolute left-[17px] top-[18px] w-[2px] h-[calc(100%-60px)] bg-[#D8C6FF]" />

          <div className="flex flex-col gap-10 md:gap-[48px] relative">
            {[
              "Core functionality quickly to enable rapid time-to-value",
              "A structured, clear approach for rapid onboarding and successful deployment of ServiceNow modules",
              "An approach to minimize complexity while laying a scalable foundation for future growth.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-5 md:gap-6">
                <div className="relative z-10">
                  <div className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8]" />
                </div>

                <p className="font-helvetica text-[16px] sm:text-[18px] md:text-[20px] leading-[130%] text-[#474545]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 md:mt-20 items-center">
        
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/Lab.png"
            alt="Lab"
            width={800}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14">
          
          {[
            { comp: <DecimalCounter value={4.8} />, label: "CSAT Score" },
            { comp: <Counter value={250} suffix="+" />, label: "Certified Resources" },
            { comp: <Counter value={300} suffix="+" />, label: "Project<br/>Implementation" },
            { comp: <Counter value={350} suffix="+" />, label: "Integration<br/>Completed" },
            { comp: <Counter value={3} suffix="+" />, label: "Global Delivery<br/>Centers" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-helvetica font-bold text-[36px] sm:text-[40px] md:text-[48px] leading-none text-black">
                {item.comp}
              </span>
              <p
                className="mt-2 font-helvetica text-[16px] sm:text-[18px] leading-[22px] text-black"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
