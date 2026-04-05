"use client";

import Image from "next/image";

export default function Organizations() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-[82px] py-16 md:py-24">
      
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">

        {/* 🔷 LEFT CONTENT */}
        <div className="w-full max-w-[520px]">

          {/* TITLE */}
          <h1 className="font-helvetica font-normal text-[26px] sm:text-[30px] md:text-[36px] lg:text-[38px] leading-[1.2] text-black">
            Why Organizations Choose BANGMETRIC
          </h1>

          {/* DESCRIPTION */}
          <p className="font-helvetica font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.5] text-black mt-4">
            They’re not looking for another implementation partner.
            They’re looking for a thinking partner
          </p>

          {/* 🔷 TIMELINE */}
          <div className="relative mt-8">

            {/* LINE */}
            <div className="absolute left-[14px] top-0 bottom-0 w-[1px] bg-black z-0" />

            <div className="flex flex-col gap-6 relative z-10">

              {[
                "End-to-end ownership from strategy to execution",
                "Deep expertise in ServiceNow CSM",
                "Strong capabilities in AI, analytics, and workflow optimization",
                "A relentless focus on outcomes customers actually feel",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">

                  {/* DOT */}
                  <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10 shrink-0" />

                  {/* TEXT */}
                  <p className="font-helvetica font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] text-black">
                    {text}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>

        {/* 🔷 RIGHT IMAGE */}
        <div className="w-full max-w-[500px] lg:max-w-[680px] h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] relative">
          <Image
            src="/Laptop.png"
            alt="laptop"
            fill
            className="object-cover rounded-[12px]"
          />
        </div>

      </div>
    </section>
  );
}