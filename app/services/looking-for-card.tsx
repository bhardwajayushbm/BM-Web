"use client";

import Image from "next/image";

export default function LookingForCard() {
  const items = [
    "ITSM Professional",
    "HAM Professional",
    "CSM Professional",
    "SAM Professional",
    "IRM",
  ];

  return (
    <section className="w-full flex justify-center bg-white py-12 px-4 md:px-10">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2
          className="
            text-center font-[Helvetica] 
            text-[32px] sm:text-[40px] md:text-[48px]
            text-black pt-4 leading-tight
          "
        >
          60-Day<br />
          BANGMETRIC Jumpstarts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.map((title, i) => {
            const isLong = title.length > 22;

            return (
              <div
                key={i}
                className="
                  relative
                  h-[135px]
                  rounded-[10px] 
                  border border-[#BEBEBE]
                  p-4
                  bg-white
                  transition-all duration-300
                  hover:bg-[#D8CDFF]
                "
              >
                {/* Top content */}
                <div className="flex justify-between">
                  <div>
                    <h3
                      className={`
                        font-[Helvetica] font-normal 
                        text-[20px] sm:text-[22px] md:text-[24px]
                        leading-[24px] text-black
                        ${isLong ? "w-[210px] sm:w-[230px] md:w-[240px]" : ""}
                        mb-4
                      `}
                    >
                      {title}
                    </h3>

                    {/* Description text – EXACT same as above page */}
                    <p
                      className="
                        font-[Helvetica] font-normal 
                        text-[18px] sm:text-[17px] md:text-[18px] 
                        text-[#474545] leading-[19px]
                        whitespace-nowrap
                      "
                    >
                      Improve access to service and increase
                    </p>

                    <p
                      className="
                        font-[Helvetica] font-normal 
                        text-[18px] sm:text-[17px] md:text-[18px] 
                        text-[#474545] leading-[19px]
                        mt-[4px]
                      "
                    >
                      service efficiency.
                    </p>
                  </div>

                  {/* Arrow icon (same as above page) */}
                  <div className="relative w-[49px] h-[49px]">
                    <Image
                      src="/arrow.png"
                      alt="Arrow"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Star – fixed & visible on all cards */}
                <div className="absolute bottom-3 right-4">
                  <Image
                    src="/star.png"
                    alt="star"
                    width={40}
                    height={40}
                    className="object-contain md:w-[45px] md:h-[45px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
