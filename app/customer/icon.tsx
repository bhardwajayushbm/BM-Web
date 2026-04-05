"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResultsClientsSee() {
  const cards = [
    {
      icon: "/IC1.png",
      text: "Lower cost-to-serve through intelligent automation",
    },
    {
      icon: "/I3.png",
      text: "Higher CSAT and NPS",
    },
    {
      icon: "/I4.png",
      text: "30-40% faster resolution times",
    },
    {
      icon: "/I1.png",
      text: "25%+ improvement in agent productivity",
    },
    {
      icon: "/I2.png",
      text: "Up to 40% self-service deflection",
    },
  ];

  return (
    <section className="w-full bg-white font-helvetica">

      {/* 🔷 CONTENT */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-24">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal text-black">
            The Results Our Clients See
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black mt-3">
            When customer service is designed properly, the results follow:
          </p>
        </div>

        {/* 🔷 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                w-full
                h-[180px] sm:h-[200px]
                bg-white
                border border-[#BEBEBE]
                rounded-[6px]
                flex flex-col
                px-4 sm:px-5 md:px-6
                pt-3
                cursor-pointer
                hover:shadow-md
              "
            >
              <Image
                src={card.icon}
                alt="icon"
                width={60}
                height={60}
                className="mb-4 sm:mb-5"
              />

              <p className="text-[13px] sm:text-[14px] text-black leading-[1.4]">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🔷 BOTTOM BANNER */}
      <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px]">

        <Image
          src="/I11.png"
          alt="Team Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-8 md:px-10">
          <h3 className="text-white text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold leading-[1.4] max-w-[900px]">
            Not because we added more features,
            <br className="hidden sm:block" />
            but because we removed friction.
          </h3>
        </div>

      </div>

    </section>
  );
}