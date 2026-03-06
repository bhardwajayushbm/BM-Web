"use client";

import Image from "next/image";

export default function JoinUs() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src="/office.png"
        alt="Office"
        fill
        priority
        className="object-cover"
      />
      <div
        className="
          absolute
          left-[120px]
          w-[381px]
          h-[300px]
          bg-white
          rounded-b-[20px]
          rounded-t-[8px]
          shadow-lg
          px-8
          pt-10
          pb-8
          flex
          flex-col
        "
      >
        <h1 className="font-[Helvetica] font-bold italic text-[60px] leading-[1] text-black mb-6">
          Join Us!
        </h1>
        <p className="font-[Helvetica] font-normal text-[20px] leading-[1] text-black mb-8">
          Be part of a team that builds meaningful change, for clients,
          industries, and your own career.
        </p>
        <button className="font-poppins w-[145px] h-[45px] bg-[#9562EB] text-white rounded-[5px] text-[16px] font-medium shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
       Explore Careers
       </button>


      </div>
    </section>
  );
}
