"use client";

import Image from "next/image";

export default function CoreValues() {
  const cards = [
    {
      title: "Customer Success-\nDriven Outcomes",
      desc: "Every engagement begins with understanding your goals and ends with measurable business impact.",
    },
    {
      title: "Upskilling & Future-\nReadiness",
      desc: "We believe in continuous learning, certifications, hands-on training, and growth roadmaps that keep our teams future-ready.",
    },
    {
      title: "Integrity & Transparency",
      desc: "Honest pricing, clear communication, and commitments you can trust.",
    },
    {
      title: "Innovation with Purpose",
      desc: "We innovate to solve real problems, optimize processes, and unlock platform potential.",
    },
    {
      title: "Collaboration & Respect",
      desc: "A culture built on appreciation and mutual respect empowers our people to deliver their best work for your organization.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 font-[Helvetica]">

      {/* ===== FULL WIDTH BACKGROUND ===== */}
      <Image
        src="/Cloud.jpg"
        alt="cloud"
        fill
        className="object-cover"
      />

      {/* ===== CONTENT (MAX WIDTH 1100) ===== */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[36px] sm:text-[36px] md:text-[40px] font-normal text-black">
              Core Values
            </h2>

            <p className="mt-4 text-[14px] sm:text-[16px] text-black leading-[1.2] max-w-[280px]">
              Our values shape how we work with our clients, with our teams,
              and with the world of technology.
            </p>
          </div>

          {/* RIGHT TOP CARDS */}
          {cards.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-[10px] p-5
                flex gap-3 items-start shadow-sm
              "
            >
              <Image
                src="/SS.png"
                alt="star"
                width={26}
                height={26}
                className="mt-1 shrink-0"
              />

              <div>
                <h3 className="text-[16px] font-semibold text-black leading-[20px] whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-[13px] text-black mt-2 leading-[18px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== BOTTOM CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">

          {cards.slice(2).map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-[10px] p-5
                flex gap-3 items-start shadow-sm
              "
            >
              <Image
                src="/SS.png"
                alt="star"
                width={26}
                height={26}
                className="mt-1 shrink-0"
              />

              <div>
                <h3 className="text-[16px] font-semibold text-black leading-[20px] whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-[13px] text-black mt-2 leading-[18px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}