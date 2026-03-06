"use client";

import Image from "next/image";
import React from "react";

export default function CapabilitiesPage() {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-20 py-20">
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-16">
        <div>
          <Image
            src="/Team.png"
            alt="Team"
            width={503}
            height={600}
            className="object-cover rounded-[10px]"
            style={{ width: "503px", height: "600px" }}
          />
        </div>
        <div
          className="flex flex-col relative"
          style={{ width: "554px", height: "600px" }}
        >
          <h2 className="
  font-helvetica font-normal
  text-[50px]
  leading-[54px]
  text-black
  mb-12
  whitespace-nowrap
">
  Our capabilities include
</h2>

          <div className="relative flex">
            <div className="absolute left-[17px] top-[18px] bottom-[102px] w-[2px] bg-black z-0" />
            <div className="flex flex-col gap-4 z-10">
              
              {[
                "End-to-end ServiceNow consulting and advisory",
                "Fast-track onboarding and implementation packages",
                "Expertise across ITSM, ITAM, HRSD, CSM, SPM, and platform extensions",
                "Certified consultants trained through structured L&D programs",
                "Proven delivery frameworks focused on quality, governance, and consistency",
                "The capacity to support multi-region rollouts, ongoing enhancements, and full platform ownership",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-6 relative">
                  <span
                    className="flex-shrink-0 rounded-full flex items-center justify-center bg-white"
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                  >
                    <div className="relative z-10">
                                    <div className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8]" />
                                </div>
                  </span>
                  <p className="font-helvetica text-[22px] leading-[34px] text-black">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="font-helvetica text-[32px] leading-[36px] text-black mt-20 text-center max-w-[1200px]">
        With the right blend of strategy, technology, and people, BANGMETRIC helps organizations
        realize the full value of their ServiceNow investment.
      </p>
    </section>
  );
}
