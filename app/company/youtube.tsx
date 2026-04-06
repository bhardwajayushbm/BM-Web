"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    image: "/Jeevan.png",
    title: "BANGMETRIC Through Our People",
    subtitle: "Company Introduction",
    youtubeId: "EF-DUMi8ODw",
    link: "https://www.youtube.com/watch?v=EF-DUMi8ODw",
  },
  {
    image: "/Ritik.png",
    title: "Meet Ritik Singh | ITSM & Service",
    subtitle: "Portal Practice Head",
    youtubeId: "DXCTLSz1qug",
    link: "https://www.youtube.com/watch?v=DXCTLSz1qug",
  },
  {
    image: "/Jeet1.png",
    title: "Meet Jitender Sharma, Delivery",
    subtitle: "Head at BANGMETRIC",
    youtubeId: "AtJXefgQz4o",
    link: "https://www.youtube.com/watch?v=AtJXefgQz4o",
  },
  {
    image: "/Shivani.png",
    title: "Meet Shivani Mehta, Practice Lead,",
    subtitle: "HRSD | HumansofBANGMETRIC",
    youtubeId: "QqmT71Dt6jE",
    link: "https://www.youtube.com/watch?v=QqmT71Dt6jE",
  },
];

export default function HumansOfBangmetric() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-white py-24 px-6 md:px-16"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* 🔷 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-[55px] md:text-[56px] mb-4">
            Humans of BANGMETRIC
          </h1>
          <p className="text-[18px] md:text-[22px] text-gray-700 mb-16">
            Real people. Real stories. Real impact.
          </p>
        </motion.div>

        {/* 🔷 CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-[260px] md:h-[300px] rounded-xl overflow-hidden group"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE / VIDEO */}
              {hovered !== index && (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              )}

              {hovered === index && (
                <iframe
                  src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${card.youtubeId}`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* PLAY ICON */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute top-4 left-4 z-20"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23.498 6.186a3.01 3.01 0 0 0-2.12-2.13C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.556a3.01 3.01 0 0 0-2.12 2.13C0 8.063 0 12 0 12s0 3.937.502 5.814a3.01 3.01 0 0 0 2.12 2.13C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.556a3.01 3.01 0 0 0 2.12-2.13C24 15.937 24 12 24 12s0-3.937-.502-5.814z"
                    fill="#FF0000"
                  />
                  <path
                    d="M9.75 15.568V8.432L15.818 12L9.75 15.568z"
                    fill="white"
                  />
                </svg>
              </motion.div>

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="text-white text-[16px] font-semibold">
                  {card.title}
                </p>
                <p className="text-white text-[14px] opacity-90">
                  {card.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}