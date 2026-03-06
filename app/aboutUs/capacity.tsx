"use client";

import React from "react";

export default function CapabilityPage() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white">

      <div className="max-w-[554px]">
        <h1
          className="font-helvetica font-normal text-[76px] leading-[90px] text-black"
        >
          Capability & Capacity
        </h1>

        <p className="mt-10 font-helvetica font-normal text-[30px] leading-[32px] text-black">
          We combine deep
          <br />
          ServiceNow expertise with scalable
          <br />
          delivery strength to support organizations
          <br />
          at every stage of their digital
          <br />
          transformation.
        </p>
      </div>

      <div className="mt-16 md:mt-0 flex justify-center items-center">
        <div
          className="rounded-[16px] overflow-hidden bg-white"
          style={{ width: "420px", height: "360px" }}
        >
          <video
            src="/video2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
