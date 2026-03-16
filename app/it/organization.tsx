"use client";

import Image from "next/image";

export default function Organizations() {
  return (
    <section
      className="w-full bg-[#F3F3F5] py-28"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-16 flex justify-between items-start relative">

        {/* LEFT SECTION */}
        <div className="max-w-[520px] relative z-10">

          <h1 className="text-[46px] leading-[1.1] text-black">
            Why Organizations
            <br />
            Choose BANGMETRIC
          </h1>

          <p className="text-[20px] text-black mt-4">
            You’re not looking for another implementer.
          </p>

        </div>


        {/* RIGHT SECTION */}
        <div className="max-w-[520px] relative">

          <p className="text-[20px] font-semibold mb-8">
            You’re looking for a thinking partner.
          </p>

          {/* BLACK TIMELINE LINE */}
          <div className="absolute left-[17px] top-[70px] h-[260px] w-[1px] bg-black z-0" />

          <div className="flex flex-col gap-[28px] relative z-10">

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <div className="w-[46px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
              <p className="text-[18px] leading-[1.6] text-black">
                <span className="font-semibold">Privately owned</span> — real
                accountability, no investor pressure, no bloated teams
              </p>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
              <p className="text-[18px] leading-[1.6] text-black">
                <span className="font-semibold">Midmarket specialists</span> —
                world class capability without enterprise bloat
              </p>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <div className="w-[60px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
              <p className="text-[18px] leading-[1.6] text-black">
                <span className="font-semibold">Outcome obsessed</span> — we move
                MTTR, FCR, and change quality, not just sliders on a dashboard
              </p>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
             <div className="w-[50px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
              <p className="text-[18px] leading-[1.6] text-black">
                <span className="font-semibold">End to end</span> — strategy,
                design, build, AI, optimisation. We own outcomes—not hours.
              </p>
            </div>

          </div>
        </div>


        {/* GLASS IMAGE (NO OVERLAP NOW) */}
        <div className="absolute left-0 bottom-[-100px] w-[420px] h-[300px] pointer-events-none">
          <Image
            src="/Og1.png"
            alt="glass"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}