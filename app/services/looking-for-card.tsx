"use client";

import Image from "next/image";

export default function LookingForCard() {
  const items = [
    {
      title: "Enterprise Asset Management",
      desc: "Visibility and control of your software, hardware, and app portfolios.",
    },
    {
      title: "Enterprise Operations Management",
      desc: "Unified operations to reduce downtime and enhance service performance.",
    },
    {
      title: "Enterprise Service Management",
      desc: "Standardizing and scaling service delivery across all business functions.",
    },
    {
      title: "Third Party Risk Management",
      desc: "Stronger third-party risk monitoring with proactive visibility.",
    },
    {
      title: "Enterprise Risk Management",
      desc: "Proactive risk visibility and governance across the entire organization.",
    },
    {
      title: "CMDB & CSDM Adoption",
      desc: "Building a reliable, standard-aligned CMDB foundation for platform stability.",
    },
    {
      title: "CRM",
      desc: "Enhanced customer engagement with integrated CRM workflows in ServiceNow.",
    },
    {
      title: "Telecom Solutions",
      desc: "AI-driven telecom ops for network inventory & service health.",
    },
    {
      title: "Legal Service Delivery",
      desc: "Modernize legal operations to make faster decisions and increase productivity.",
    },
    {
      title: "FinOps",
      desc: "Driving cost optimization and financial accountability across cloud & IT spend.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-4">
      <div className="max-w-[1100px] mx-auto">

        {/* ===== TITLE ===== */}
        <h2 className="
          text-center font-[Helvetica] text-black
          text-[24px] sm:text-[32px] md:text-[40px]
        ">
          Adopt ServiceNow in 60 Days
        </h2>

        {/* ===== GRID ===== */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-4 sm:gap-5 mt-8 sm:mt-10
        ">

          {items.map((item, i) => (
            <div
              key={i}
              className="
                relative
                rounded-[10px]
                border border-[#D1D1D1]
                px-4 sm:px-5 py-4
                min-h-[110px] md:h-[120px]
                flex items-center gap-3
                bg-[#EDEDED]
                hover:bg-[#D8CDFF]
                transition-all duration-300
                cursor-pointer
              "
            >
              {/* ICON */}
              <Image
                src="/SS.png"
                alt="icon"
                width={24}
                height={24}
                className="object-contain shrink-0 sm:w-[26px] sm:h-[26px]"
              />

              {/* TEXT */}
              <div className="flex flex-col justify-center">
                <h3 className="
                  ml-1 sm:ml-2 font-[Helvetica] text-black
                  text-[15px] sm:text-[17px] md:text-[18px]
                  leading-[20px]
                ">
                  {item.title}
                </h3>

                <p className="
                  ml-1 sm:ml-2 text-black
                  text-[12px] sm:text-[13px]
                  leading-[15px] sm:leading-[16px]
                  max-w-[220px] sm:max-w-[240px]
                  mt-1
                ">
                  {item.desc}
                </p>
              </div>

              {/* ARROW */}
              <Image
                src="/arrow.png"
                alt="arrow"
                width={14}
                height={14}
                className="absolute top-3 right-3 sm:right-4 opacity-70"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}