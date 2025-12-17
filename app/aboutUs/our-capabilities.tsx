"use client";

import Image from "next/image";
import React from "react";

export default function CapabilitiesPage() {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-20 py-20">
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-16">
        {/* LEFT IMAGE */}
        <div>
          <Image
            src="/Team.png"
            alt="Team"
            width={503}
            height={699}
            className="object-cover rounded-[10px]"
            style={{
              width: "503px",
              height: "699px",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="flex flex-col"
          style={{
            width: "554px",
            height: "699px",
          }}
        >
          <h2
            className="
              font-helvetica
              font-normal
              text-[48px]
              leading-[50px]
              text-black
              mb-10
            "
          >
            Our capabilities include
          </h2>

          {/* TEXT LIST ONLY */}
          <div className="flex flex-col gap-10">
            <p className="font-helvetica text-[30px] leading-[30px] text-black">
              End-to-end ServiceNow consulting and advisory
            </p>

            <p className="font-helvetica text-[30px] leading-[30px] text-black">
              Fast-track onboarding and implementation packages
            </p>

            <p className="font-helvetica text-[30px] leading-[30px] text-black">
              Expertise across ITSM, ITAM, HRSD, CSM, SPM, and platform extensions
            </p>

            <p className="font-helvetica text-[30px] leading-[30px] text-black">
              Certified consultants trained through structured L&amp;D programs
            </p>

            <p className="font-helvetica text-[30px] leading-[30px] text-black">
              Proven delivery frameworks focused on quality, governance, and consistency
            </p>

            <p className="font-helvetica text-[30px] leading-[30px] text-black">
              The capacity to support multi-region rollouts, ongoing enhancements,
              and full platform ownership
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <p className="font-helvetica text-[32px] leading-[30px] text-black mt-40 text-center">
        With the right blend of strategy, technology, and people, BANGMETRIC helps organizations
        realize the full value of their ServiceNow investment.
      </p>
    </section>
  );
}
