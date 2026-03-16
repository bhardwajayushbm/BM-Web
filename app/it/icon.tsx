"use client";

import Image from "next/image";

export default function ResultsClientsSee() {
  const cards = [
    {
      icon: "/Icon11.png",
      text: "20-40% faster MTTR",
    },
    {
      icon: "/Icon15.png",
      text: "15-30% higher first contact resolution",
    },
    {
      icon: "/Icon14.png",
      text: "25%+ analyst productivity improvement",
    },
    {
      icon: "/Icon13.png",
      text: "Fewer emergency changes & lower change failure rate",
    },
    {
      icon: "/Icon11.png",
      text: "Reduced cost per-ticket through clarity and automation",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] font-[Helvetica]">

      {/* RESULTS SECTION */}
      <div className="max-w-[1400px] mx-auto px-16 py-24">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[52px] font-normal text-black">
            The Results Our Clients See
          </h2>

          <p className="text-[18px] text-black mt-3">
            When ITSM is designed properly, the numbers move
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-between gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                w-[252px]
                h-[200px]
                bg-white
                border
                border-[#BEBEBE]
                rounded-[5px]
                flex
                flex-col
                items-center
                text-center
                px-6
                pt-10
              "
            >
              <Image
                src={card.icon}
                alt="icon"
                width={64}
                height={60}
                className="mb-3"
              />

              <p className="text-[16px] text-black leading-[1.5]">
                {card.text}
              </p>
            </div>
          ))}

        </div>

        {/* Green Bottom Heading */}
        <div className="text-center mt-20">
          <h3
            className="text-[34px] font-semibold leading-[1.3]"
            style={{ color: "#4FCA07" }}
          >
            Not because we added more features <br />
            but because we removed friction.
          </h3>
        </div>

      </div>
    </section>
  );
}