"use client";

import Image from "next/image";

const cards = [
  {
    img: "/Re5.png",
    title: "The Future of Work with ServiceNow & AI",
    desc: "How AI is reshaping workflows and enterprise productivity.",
  },
  {
    img: "/Re3.png",
    title: "Maximizing Value Across Enterprise Portfolios",
    desc: "Practical strategies for driving outcomes with ServiceNow SPM.",
  },
  {
    img: "/Re4.png",
    title: "Empowering Field Teams Through Smart Automation",
    desc: "ServiceNow FSM insights that boost field efficiency and impact.",
  },
  {
    img: "/Re2.png",
    title: "The Future of Work with ServiceNow & AI",
    desc: "How AI is reshaping workflows and enterprise productivity.",
  },
];

export default function CardPage() {
  return (
    <section className="w-full bg-white flex justify-center px-6 py-16">
      <div className="w-full max-w-[1400px]">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[10px]
                border border-[#EDEDED]
                shadow-[0_2px_8px_rgba(0,0,0,0.08)]
                overflow-hidden
                flex flex-col
              "
            >
              {/* Top Content */}
              <div className="relative p-4">
                {/* Arrow */}
                <div className="absolute top-3 right-3 w-[24px] h-[24px]">
                  <Image
                    src="/arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                </div>

                <h3 className="font-helvetica font-bold text-[16px] leading-tight text-black pr-8">
                  {card.title}
                </h3>

                <p className="mt-2 font-helvetica text-[14px] leading-snug text-black">
                  {card.desc}
                </p>
              </div>

              {/* Image */}
              <div className="p-3 pt-0">
                <div className="relative w-full h-[220px] rounded-[8px] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}