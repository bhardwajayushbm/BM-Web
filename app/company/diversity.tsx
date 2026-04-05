"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Diversity() {
    return (
        <section className="w-full bg-[#F6F5FA] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 flex justify-center">
            
            {/* ✅ max-width added */}
            <div className="w-full max-w-[1100px]">

                <h1 className="text-center text-[45px] md:text-[50px] mb-8">
                    Diversity , Inclusions & Belonging
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

                    {/* LEFT */}
                    <div>
                        <h2
                            className="
                            font-helvetica font-normal
                            !text-[30px]
                            leading-[100%]
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

                    {/* RIGHT */}
                    <div className="relative max-w-[503px]">

                        {/* ✅ gap reduced here */}
                        <div className="flex flex-col gap-3 md:gap-4 relative">
                            {[
                                "A culture built on transparency, trust, and mutual respect",
                                "Open communication and collaborative decision-making",
                                "Recognition programs that celebrate real contributions",
                                "Monthly rewards, cultural festivals, and team celebrations that bring everyone together",
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">

                                    <p className="font-helvetica !text-[20px] leading-[1.2] text-black">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 justify-items-center">
                    <ImageCard title="Event" image="/event1.png" />
                    <ImageCard title="Outing" image="/Outing.png" />
                    <ImageCard title="Reward and Recognition" image="/Award.png" />
                </div>

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