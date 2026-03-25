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
      <div className="max-w-[1100px] mx-auto px-16 py-24">

        <div className="text-center mb-16">
          <h2 className="text-[52px] font-normal text-black">
            The Results Our Clients See
          </h2>

          <p className="text-[18px] text-black mt-3">
            When customer service is designed properly, the results follow:
          </p>
        </div>

        <div className="flex justify-between gap-6">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.96 }}   
              whileHover={{ scale: 1.03 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="
                w-[240px]
                h-[200px]
                bg-white
                border border-[#BEBEBE]
                rounded-[5px]
                flex flex-col
                px-6
                pt-2
                cursor-pointer
                hover:shadow-md
              "
            >
              <Image
                src={card.icon}
                alt="icon"
                width={80}
                height={80}
                className="mb-6"
              />
              <p className="text-[14px] text-black leading-[1.2]">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      <div className="relative w-full h-[200px]">

        <Image
          src="/I11.png"
          alt="Team Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center px-10">
          <h3 className="text-white text-[36px] font-semibold leading-[1.3] max-w-[900px]">
            Not because we added more features,
            <br />
            but because we removed friction.
          </h3>
        </div>

      </div>

    </section>
  );
}