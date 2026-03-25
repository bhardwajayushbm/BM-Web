"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
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
    title: "Strategic Portfolio Management",
    desc: "Aligning investments and strategies to maximize business outcomes.",
  },
  {
    title: "Customer Service Management",
    desc: "Connected customer experiences that elevate service interactions.",
  },
  {
    title: "Field Service Management",
    desc: "Optimized field operations enabling faster and smarter service.",
  },
  {
    title: "Third Party Risk Management",
    desc: "Stronger third-party risk monitoring with proactive visibility.",
  },
  {
    title: "Enterprise Risk Management",
    desc: "Proactive risk visibility and governance across the entire organization.",
  },
];

export default function AreYouLookingForCard() {
  return (
    <section className="w-full bg-[#F2F2F4] py-16 px-4">

      <div className="max-w-[1100px] mx-auto">

        <h2 className="text-center font-[Helvetica] font-normal text-[32px] sm:text-[40px] md:text-[48px] text-black">
          ServiceNow Offerings Built for
          <br />
          Enterprise Success
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {cards.map((item, i) => (
            <div
              key={i}
              className="
                relative
                rounded-[10px]
                border border-[#D1D1D1]
                px-5 py-4
                h-[120px]
                flex items-center justify-between
                bg-white
                hover:bg-[#D8CDFF]
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3">

                <Image
                  src="/SS.png"
                  alt="icon"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] object-contain shrink-0"
                />

                <div className="flex flex-col justify-center">
                  <h3 className="ml-2 font-[Helvetica] text-[18px] leading-[22px] text-black">
                    {item.title}
                  </h3>

                  <p className="ml-2 text-[13px] text-black leading-[16px] max-w-[240px] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              <Image
                src="/arrow.png"
                alt="arrow"
                width={18}
                height={18}
                className="absolute top-3 right-4 object-contain"
              />
            </div>
          ))}

          <Link
            href="/services"
            className="
              relative
              rounded-[10px]
              px-5 py-4
              h-[120px]
              flex items-center justify-between
              bg-gradient-to-r from-[#9562EB] to-[#7A4ED9]
              text-white
            "
          >
            <h3 className="text-[20px] font-[Helvetica]">
              Explore More
            </h3>
            <Image
              src="/arrow.png"
              alt="arrow"
              width={18}
              height={18}
              className="absolute top-3 right-4 object-contain invert brightness-0"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}