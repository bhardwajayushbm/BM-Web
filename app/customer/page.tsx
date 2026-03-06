"use client";

import Image from "next/image";

export default function CustomerServiceManagementPage() {
  return (
    <div className="w-full bg-white">
      <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mt-8 md:mt-20 lg:mt-28 pb-0">
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
            className="object-cover object-center"
          />
          <div className="relative z-10 w-full flex items-center justify-center text-center px-4">
            <h1
              className="
                font-helvetica font-bold text-white
                text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[70px]
                leading-tight
              "
            >
              Customer
              <br />
              Service Management
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-12 pt-0">
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Text */}
          <div className="max-w-[635px] font-helvetica text-black mb-10">
            <h1 className="mt-20 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[110%] font-normal mb-6">
              Designed From the <br />
              Customer Back <br />
              Built on{" "}
              <span className="text-[#66E000]">ServiceNow</span>
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[110%] font-normal text-black max-w-[540px]">
              Most organizations don’t lack technology, they lack thoughtful
              service design. Automating broken processes only makes poor
              experiences faster.
              <br />
              <br />
              At BANGMETRIC, we design customer service from the customer back,
              then power it with ServiceNow CSM. We focus on reducing effort,
              removing friction, and resolving issues, not just closing cases.
              ServiceNow is the platform we use. Experience-led design is the
              value we bring.
            </p>
          </div>
        </div>
         <div className="relative w-full max-w-[900px] lg:max-w-[1000px] h-[300px] sm:h-[360px] md:h-[400px] lg:h-[440px]">
            <Image
              src="/cms1.jpg"
              alt="Designed From the Customer Back Built on ServiceNow"
              fill
              className="object-cover"
              priority
            />
          </div>
      </section>
    </div>
  );
}