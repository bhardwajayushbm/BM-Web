"use client";

import Image from "next/image";
import Link from "next/link";

export default function AreYouLookingForCard() {
  const items = [
    "CSM Standard",
    "FSM Standard",
    "TPRM Standard",
    "ITSM Standard",
    "CMDB Optimization & Hardening",
    "HRSD Standard",
    "HAM Standard",
    "SAM Standard",
    "ITOM Standard",
    "CSM Standard",
    "FSM Standard",
    "TPRM Standard",
    "ITSM Standard",
    "CMDB Optimization & Hardening",
    "Explore More",
  ];

  return (
    <section className="w-full flex justify-center bg-[#F2F2F4] py-12 px-4 md:px-10">
      <div className="w-full max-w-[1440px] mx-auto">

        <h2 className="text-center font-[Helvetica] font-bold 
          text-[32px] sm:text-[40px] md:text-[48px] text-black pt-4">
          Are you looking for?
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {items.map((rawTitle, i) => {
            const cleaned = rawTitle.toLowerCase().trim();
            const isExploreMore = cleaned === "explore more";

            if (isExploreMore) {
              return (
                <Link
                  key={i}
                  href="/services"
                  className="
                    h-[135px]
                    rounded-[10px] 
                    border border-[#BEBEBE]
                    bg-[#9562EB]
                    flex flex-col justify-between
                    px-6 py-4
                    w-full
                    cursor-pointer
                    hover:opacity-90
                    transition
                  "
                >
                  <div className="flex justify-between items-start w-full">
                    <h3
                      className="
                        font-[Helvetica] font-normal 
                        text-[22px] sm:text-[24px] md:text-[25px]
                        text-white
                      "
                    >
                      Explore More
                    </h3>

                    <span
                      className="
                        text-white 
                        text-[28px] md:text-[32px] 
                        font-bold leading-none
                      "
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              );
            }

            const title = rawTitle;
            const isLong = title.length > 22;

            return (
              <div
                key={i}
                className={`
                  h-[135px]
                  rounded-[10px] 
                  border border-[#BEBEBE]
                  p-4 flex flex-col justify-between
                  bg-white
                  transition-all duration-300
                  hover:bg-[#D8CDFF]
                  ${
                    title === "FSM Standard"
                      ? "bg-[#A88AEC]/30 hover:bg-[#D8CDFF]"
                      : ""
                  }
                `}
              >
                <div className="flex justify-between">
                  <div>
                    <h3
                      className={`
                        font-[Helvetica] font-normal 
                        text-[20px] sm:text-[22px] md:text-[24px]
                        leading-[24px] text-black
                        ${isLong ? "w-[210px] sm:w-[230px] md:w-[240px]" : ""}
                        mb-[6px]
                      `}
                    >
                      {title}
                    </h3>

                    <p className="font-[Helvetica] font-normal 
                      text-[15px] sm:text-[17px] md:text-[18px] 
                      text-[#474545] leading-[19px]">
                      Improve access to service and increase service efficiency.
                    </p>
                  </div>

                  <span className="text-black 
                    text-[20px] sm:text-[22px] md:text-[24px] 
                    font-bold">
                    ↗
                  </span>
                </div>

                {!isLong && (
                  <div className="flex justify-end">
                    <Image
                      src="/star.png"
                      alt="star"
                      width={40}
                      height={40}
                      className="object-contain md:w-[45px] md:h-[45px]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
