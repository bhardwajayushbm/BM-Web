"use client";

import Image from "next/image";

export default function CustomerServiceManagementPage() {
  return (
    <div className="w-full bg-white font-helvetica">

      <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mt-8 md:mt-20 lg:mt-28">
        <div
          className="
            relative
            w-full
            max-w-[1376px]
            h-[220px] sm:h-[280px] md:h-[340px] lg:h-[404px]
            rounded-[20px]
            overflow-hidden
            flex items-center justify-center
          "
        >
          <Image
            src="/cms.png"
            alt="Customer Service Management"
            fill
            priority
            className="object-cover"
          />

          <div className="relative z-10 text-center">
            <h1
              className="
                text-white
                font-bold
                text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[70px]
                leading-tight
              "
            >
              IT Service Management
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center px-4 md:px-8 lg:px-12 mt-16 mb-6">
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div>
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-black">
              Designed from <br />
              the employee and <br />
              business back. <br />
              Built on{" "}
              <span className="text-[#4AC000]">ServiceNow</span>
            </h2>
          </div>

          <div className="text-[16px] md:text-[18px] leading-[1.5] text-black max-w-[560px]">

            <p className="mb-6">
              Most organizations don’t have an ITSM tool problem; they
              have a flow problem. Ticket-centric thinking, siloed
              processes, and surface-level metrics create noise
              instead of results. At BANGMETRIC, we design IT services
              from the employee and business back, then bring that
              design to life on ServiceNow ITSM.
            </p>

            <p>
              We focus on improving flow, reducing friction, and
              resolving issues, not just routing them. ServiceNow is
              the platform we build on. Experience-led, outcome-driven
              design is what makes it work in the real world.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}