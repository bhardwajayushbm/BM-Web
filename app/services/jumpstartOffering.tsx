"use client";

import Image from "next/image";

export default function JumpstartOfferings() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-20">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT TEXT — Figma-ish */}
        <div>
          <h2 className="font-helvetica font-normal text-[30px] leading-[100%] text-black w-[648px]">
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

        {/* RIGHT TIMELINE WITH BULLETS */}
        <div className="w-[503px]">
          {/* container of rows; each row contains a bullet (with a connector) + text */}
          <div className="flex flex-col">
            {/* ROW 1 */}
            <div className="flex items-start gap-6 min-h-[86px]">
              {/* bullet + connector (connector fills remaining row height) */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#D8C6FF]"></div>
                {/* connector fills the row height minus the bullet; will visually connect to next bullet */}
                <div className="w-[2px] bg-[#D8C6FF] flex-1 mt-2" />
              </div>

              <p className="font-helvetica text-[20px] leading-[130%] text-[#474545]">
                Core functionality quickly to enable rapid time-to-value
              </p>
            </div>

            {/* ROW 2 */}
            <div className="flex items-start gap-6 min-h-[86px]">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#D8C6FF]"></div>
                <div className="w-[2px] bg-[#D8C6FF] flex-1 mt-2" />
              </div>

              <p className="font-helvetica text-[20px] leading-[130%] text-[#474545]">
                A structured, clear approach for rapid onboarding and successful
                deployment of ServiceNow modules
              </p>
            </div>

            {/* ROW 3 (last row: no connector under the bullet) */}
            <div className="flex items-start gap-6 min-h-[86px]">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#D8C6FF]"></div>
                {/* no connector here since it's the last bullet */}
              </div>

              <p className="font-helvetica text-[20px] leading-[130%] text-[#474545]">
                An approach to minimize complexity while laying a scalable
                foundation for future growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/Lab.png"
            alt="Lab"
            width={800}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-14 text-center md:text-left">
          <div>
            <h3 className="text-[48px] font-bold text-black">4.8</h3>
            <p className="text-[18px] font-light text-black">CSAT Score</p>
          </div>

          <div>
            <h3 className="text-[48px] font-bold text-black">250+</h3>
            <p className="text-[18px] font-light text-black">Certified Resources</p>
          </div>

          <div>
            <h3 className="text-[48px] font-bold text-black">300+</h3>
            <p className="text-[18px] font-light text-black">Project<br />Implementation</p>
          </div>

          <div>
            <h3 className="text-[48px] font-bold text-black">350+</h3>
            <p className="text-[18px] font-light text-black">Integration<br />Completed</p>
          </div>

          <div>
            <h3 className="text-[48px] font-bold text-black">3+</h3>
            <p className="text-[18px] font-light text-black">Global Delivery<br />Centers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
