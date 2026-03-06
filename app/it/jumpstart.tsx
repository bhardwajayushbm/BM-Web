"use client";

import Image from "next/image";

export default function ITSMJumpstartSection() {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1300px] font-[Helvetica] text-white">

        {/* ===== TOP SECTION ===== */}
        <div className="flex justify-between items-start mb-10">

          {/* LEFT TEXT */}
          <div className="max-w-[650px]">

            <h2 className="text-[56px] leading-[1.1] font-normal">
              Our ITSM Jumpstarts
            </h2>

            <h3 className="text-[36px] leading-[1.2] mt-1">
              (Fast, Without the Compromise)
            </h3>

            <p className="text-[22px] text-gray-300 mt-8 max-w-[520px] leading-[1.5]">
              They’re structured, designed pathways that
              keep momentum high and quality intact.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-[280px] h-[300px]">
            <Image
              src="/Jump.png"
              alt="Jump Graphic"
              fill
              className="object-contain"
            />
          </div>

        </div>


        {/* ===== CARDS ===== */}
        <div className="flex gap-10 justify-between">

          {/* CARD 1 */}
          <div
            className="
              w-[560px]
              h-[200px]
              rounded-[20px]
              bg-[#9F9EF2]
              p-8
              flex flex-col justify-center
              shadow-md
            "
          >
            <h3 className="text-[30px] font-semibold mb-4 text-white">
              45-Day ITSM Foundation
            </h3>

            <p className="text-[16px] leading-[1.6] text-white max-w-[480px]">
              A clean, effective baseline that actually improves flow:
              Incident, Request, core Catalog, Knowledge, practical SLAs,
              Major Incident basics, and a portal that reduces effort.
              Fast to value. Built right the first time.
            </p>
          </div>


          {/* CARD 2 */}
          <div
            className="
              w-[560px]
              h-[200px]
              rounded-[20px]
              border
              border-[#9562EB]
              p-8
              flex flex-col justify-center
            "
          >
            <h3 className="text-[30px] font-semibold mb-4 text-white">
              60-Day ITSM Pro Jumpstart
            </h3>

            <p className="text-[16px] leading-[1.6] text-gray-300 max-w-[480px]">
              For teams ready to go beyond the basics:
              Problem & Change, Service Operations Workspace,
              Virtual Agent, and a rightsized CMDB/CSDM.
            </p>
          </div>

        </div>


        {/* ===== BUTTON ===== */}
        <div className="flex justify-center mt-16">
          <button
            className="
              w-[180px]
              h-[42px]
              rounded-[6px]
              bg-[#9562EB]
              text-white
              text-[15px]
              flex items-center justify-center
              hover:opacity-90
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download Now
          </button>
        </div>

      </div>
    </section>
  );
}