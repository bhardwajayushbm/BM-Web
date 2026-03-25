"use client";

import Image from "next/image";

export default function CustomerServiceBanner() {
  return (
    <section className="relative w-full h-[260px]">
      <Image
        src="/Cust.jpg"
        alt="Customer Service Management"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center px-[82px]">

        <div>
          <p
            className="text-white text-[16px] mb-2"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Read Customer Success Stories & News on
          </p>

          <h2
            className="text-white text-[40px] leading-[1.2] mb-5"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Customer Service Management
          </h2>

          <button
            className="px-6 py-2 rounded-[6px] text-white text-[14px]"
            style={{
              backgroundColor: "#9562EB",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Know More
          </button>
        </div>

      </div>

    </section>
  );
}