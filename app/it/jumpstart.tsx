"use client";

import Image from "next/image";

export default function ITSMJumpstartSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1300px] font-[Helvetica] text-white">
        <div className="flex justify-between items-start mb-10">

          <div className="max-w-[650px]">

            <h2 className="text-[56px] leading-[1.1] font-normal text-black">
              Our ITSM Jumpstarts
            </h2>

            <h3 className="text-[36px] leading-[1.2] mt-1 text-black">
              (Fast, Without the Compromise)
            </h3>

            <p className="text-[22px] text-black mt-8 max-w-[520px] leading-[1.5]">
              They’re structured, designed pathways that
              keep momentum high and quality intact.
            </p>

          </div>
          <div className="relative w-[280px] h-[300px]">
            <Image
              src="/IT.png"
              alt="Jump Graphic"
              fill
              className="object-contain"
            />
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">


          <div
            className="
              w-full md:w-[659px]
              h-[180px]
              rounded-[10px]
              border border-black
              bg-white
              text-left
              p-8
              transition-all duration-300
              hover:bg-[#E3DCFF]
            "
          >
            <h3 className="text-[30px] font-semibold mb-4 text-black">
              45-Day ITSM 
            </h3>
            <p className="text-[12px] leading-[1.5] text-black">
              A clean, effective baseline that actually improves flow: 
              Incident, Request, core Catalog, Knowledge, practical SLAs,
              Major Incident basics, and a portal that reduces effort.
              Fast to value. Built right the first time.
            </p>
          </div>

          <div
            className="
              w-full md:w-[659px]
              h-[180px]
              rounded-[10px]
              border border-black
              bg-white
              text-left
              p-8
              transition-all duration-300
              hover:bg-[#E3DCFF]
            "
          >
            <h3 className="text-[30px] font-semibold mb-4 text-black">
              60-Day ITSM 
            </h3>
            <p className="text-[12px] leading-[1.5] text-black">
              For teams ready to go beyond the basics:
              Problem & Change, Service Operations Workspace, Virtual Agent,
               and a rightsized CMDB/CSDM
            </p>
          </div>

        </div>
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