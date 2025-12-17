"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Customer Success-Driven Outcomes",
    desc: "Every engagement begins with understanding your goals and ends with measurable business impact.",
    bg: "#A3AEEF",
    img: "/1.jpg",
  },
  {
    title: "Upskilling & Future-Readiness",
    desc: "We believe in continuous learning, certifications, hands-on training, and growth roadmaps that keep our teams future-ready.",
    bg: "#9F9EF2",
    img: "/2.png",
  },
  {
    title: "Integrity & Transparency",
    desc: "Honest pricing, clear communication, and commitments you can trust.",
    bg: "#9383DC",
    img: "/3.jpg",
  },
  {
    title: "Innovation with Purpose",
    desc: "We innovate to solve real problems, optimize processes, and unlock platform potential.",
    bg: "#9174C8",
    img: "/4.jpg",
  },
  {
    title: "Collaboration & Respect",
    desc: "A culture built on appreciation and mutual respect empowers our people to deliver their best work for your organization.",
    bg: "#7851AB",
    img: "/5.jpg",
  },
];

export default function CoreValuesPage() {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-20">
      {/* Heading */}
      <h1 className="font-helvetica font-normal text-[96px] leading-[90px] text-black text-center">
        Core Values
      </h1>

      <p className="font-helvetica text-[30px] leading-[30px] text-black text-center mt-14 max-w-[783px]">
        Our values shape how we work with our clients, with our teams, and with the world of technology.
      </p>

      {/* Card Stack */}
      <div className="relative mt-32 w-full max-w-[900px] flex flex-col gap-[120px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="sticky top-[120px]"
          >
            <div
              className="flex flex-col md:flex-row items-center gap-8 mx-auto"
              style={{
                width: "900px",
                height: "470px",
                backgroundColor: card.bg,
                borderRadius: "20px",
                border: "1px solid #BEBEBE",
                padding: "32px",
              }}
            >
              <div className="text-white w-[391px]">
                <h2 className="font-helvetica font-bold text-[36px] leading-[36px]">
                  {card.title}
                </h2>
                <p className="font-helvetica text-[30px] leading-[36px] mt-8">
                  {card.desc}
                </p>
              </div>

              <Image
                src={card.img}
                alt={card.title}
                width={350}
                height={350}
                className="rounded-[12px] object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
