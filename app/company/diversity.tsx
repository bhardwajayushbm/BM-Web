"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Diversity() {
    return (
        <section className="w-full bg-[#F6F5FA] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20">
            <h1 className="text-center text-[55px] md:text-[56px] mb-8">
          Diversity , Inclusions & Belonging
        </h1>

            {/* <motion.h1
                animate={{ scale: [1, 1.03, 1], opacity: [1, 0.85, 1] }}
                transition={{
                    duration: 3.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="
                     text-center font-[Helvetica] font-bold
                     text-[32px] sm:text-[40px] md:text-[48px]
                     text-black pt-4 leading-tight mb-20"
            >
                Diversity , Inclusions & Belonging
            </motion.h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

                <div>
                    <h2
                        className="
      font-helvetica font-normal
      !text-[36px]
      leading-[110%]
      text-black
      max-w-[648px]
      mt-4
    "
                    >
                        We’re building a
                        <br />
                        workplace where leaders
                        <br />
                        work of every voice matters
                        <br />
                        Diversity strengthens our
                        <br />
                        ideas, drives innovation,
                        <br />
                        and helps us create
                        <br />
                        solutions that serve global
                        <br />
                        enterprises.
                    </h2>
                </div>


                <div className="relative max-w-[503px]">
                    <div className="absolute left-[17px] top-[16px] w-[2px] h-[calc(100%-60px)] bg-[black]" />

                    <div className="flex flex-col gap-6 md:gap-[38px] relative">
                        {[
                            "A culture built on transparency, trust, and mutual respect",
                            "Open communication and collaborative decision-making",
                            "Recognition programs that celebrate real contributions",
                            "Monthly rewards, cultural festivals, and team celebrations that bring everyone together",
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-5 md:gap-6">
                                <div className="relative z-10">
                                    <div className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8]" />
                                </div>

                                <p className="font-helvetica !text-[20px] leading-[130%] text-[black]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 max-w-[1400px] mx-auto justify-items-center">
                <ImageCard title="Event" image="/event1.png" />
                <ImageCard title="Outing" image="/Outing.png" />
                <ImageCard title="Reward and Recognition" image="/Award.png" />
            </div>

        </section>
    );
}

function ImageCard({ title, image }: { title: string; image: string }) {
    return (
        <div
            className="
        bg-white
        rounded-[10px]
        shadow-[0_4px_4px_rgba(0,0,0,0.25)]
        w-full
        max-w-[439px]
        h-[380px]
        p-4
        flex flex-col
      "
        >
            <h3 className="font-helvetica text-[26px] text-black mb-3">
                {title}
            </h3>
            <div className="relative w-full flex-1 rounded-[8px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
