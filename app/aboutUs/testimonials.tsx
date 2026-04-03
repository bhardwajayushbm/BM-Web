"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LeadershipPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const fadeUpCard = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 bg-white flex justify-center font-[Helvetica]">
      <div className="w-full max-w-[1100px]">

        {/* TITLE */}
        <h1 className="text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-normal text-black">
          Our Leadership Team
        </h1>

        {/* SUBTEXT */}
        <p className="text-center mt-4 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] max-w-[680px] mx-auto text-black">
          Our leadership team comprises seasoned technologists, strategists, and industry experts who guide our vision and uphold our commitment to excellence.
        </p>

        <motion.div
          ref={ref}
          className="flex justify-center mt-12 md:mt-16"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          {/* MOBILE */}
          <div className="grid grid-cols-3 gap-4 md:hidden">
            {leaders.map((item, i) => (
              <MobileCard key={i} {...item} fadeUpCard={fadeUpCard} />
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-6 lg:flex-nowrap lg:gap-x-3">

            <Column>
              <Card {...leaders[0]} fadeUpCard={fadeUpCard} />
              <Card {...leaders[1]} fadeUpCard={fadeUpCard} />
            </Column>

            <Column className="mt-4">
              <Card {...leaders[2]} fadeUpCard={fadeUpCard} />
              <Card {...leaders[3]} fadeUpCard={fadeUpCard} />
            </Column>

            <Column>
              <Card {...leaders[4]} fadeUpCard={fadeUpCard} />
            </Column>

            <Column className="mt-10 lg:mt-14">
              <Card {...leaders[5]} fadeUpCard={fadeUpCard} />
            </Column>

            <Column>
              <Card {...leaders[6]} fadeUpCard={fadeUpCard} />
            </Column>

            <Column className="mt-8 lg:mt-10">
              <Card {...leaders[7]} fadeUpCard={fadeUpCard} />
            </Column>

            <Column className="mt-4">
              <Card {...leaders[8]} fadeUpCard={fadeUpCard} />
              <Card {...leaders[9]} fadeUpCard={fadeUpCard} />
            </Column>

            <Column>
              <Card {...leaders[10]} fadeUpCard={fadeUpCard} />
              <Card {...leaders[11]} fadeUpCard={fadeUpCard} />
            </Column>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* DATA */
const leaders = [
  { img: "/Shasank.jpg", name: "Shashank Vashist", role: "Country Head- Digital Transformation" },
  { img: "/Lorelle.png", name: "Lorelle Jacob", role: "Advisory Head, South Africa" },
  { img: "/Jeet.png", name: "Jitender Sharma", role: "Head, Delivery" },
  { img: "/Sharad.jpg", name: "Sharad Mishra", role: "Director, Business Development, APAC" },
  { img: "/Aloka.jpg", name: "Alokananda Sen Awasthi", role: "HR Head" },
  { img: "/Anuj.png", name: "Anuj Bhardwaj", role: "Chief Executive Officer", isCenter: true },
  { img: "/Art.png", name: "Art Yeames, Ed.D.", role: "Senior Vice President of Sales-North America" },
  { img: "/Rohan.png", name: "Rohan Bathla", role: "Practice Head, ServiceNow" },
  { img: "/Theuns.png", name: "Theuns Rossouw", role: "Advisory Head, AMS" },
  { img: "/CY.png", name: "CY Comer", role: "Business Head, AMS" },
  { img: "/Afiya.jpg", name: "Afiya Shahrukh", role: "Marketing Manager" },
  { img: "/Ilze.png", name: "Ilze Rossouw", role: "Global Head-ServiceNow Practice" },
];

/* COLUMN */
function Column({ children, className = "" }) {
  return (
    <div className={`flex flex-col gap-5 items-center ${className}`}>
      {children}
    </div>
  );
}

/* DESKTOP CARD (LEFT ALIGNED FIX) */
function Card({ img, name, role, isCenter, fadeUpCard }) {
  return (
    <motion.div
      variants={fadeUpCard}
      className="flex flex-col items-start text-left"
    >
      <div
        className={`
          relative rounded-[8px] overflow-hidden bg-white
          ${isCenter ? "w-[90px] h-[120px]" : "w-[80px] h-[100px]"}
          md:w-[88px] md:h-[118px]
        `}
      >
        <Image src={img} alt={name} fill className="object-cover" />
      </div>

      <div className="mt-2 max-w-[110px]">
        <p className="text-[11px] sm:text-[12px] font-semibold text-black leading-tight text-left">
          {name}
        </p>
        <p className="text-[9px] sm:text-[10px] text-black/70 leading-[12px] text-left">
          {role}
        </p>
      </div>
    </motion.div>
  );
}

/* MOBILE CARD (LEFT ALIGNED FIX) */
function MobileCard({ img, name, role, fadeUpCard }) {
  return (
    <motion.div
      variants={fadeUpCard}
      whileTap={{ scale: 0.96 }}
      className="flex justify-center"
    >
      <div className="w-[95px] bg-white border border-gray-200 rounded-[10px] p-[6px] shadow-[0_2px_6px_rgba(0,0,0,0.04)]">

        <div className="bg-[#F3F3F3] rounded-[8px] p-[6px]">
          <div className="relative w-full h-[95px] rounded-[6px] overflow-hidden">
            <Image src={img} alt={name} fill className="object-cover" />
          </div>
        </div>

        <div className="mt-[6px] text-left px-[2px]">
          <p className="text-[11px] font-semibold text-black leading-[13px]">
            {name}
          </p>

          <p className="text-[9px] text-gray-400 leading-[11px] mt-[2px]">
            {role}
          </p>
        </div>

      </div>
    </motion.div>
  );
}