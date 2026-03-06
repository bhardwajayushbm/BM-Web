"use client";

import Image from "next/image";

export default function BangmetricWay() {
    const steps = [
        {
            title: "Discover & Design",
            desc: "We map real customer journeys, align on outcomes, and define what “good” actually looks like.",
        },
        {
            title: "Build for Speed",
            desc: "We configure ServiceNow CSM with intent: cases, workflows, SLAs, and portals that support the design.",
        },
        {
            title: "Automate What Matters",
            desc: "We enable AI, Virtual Agent, and intelligent workflows where they genuinely add value.",
        },
        {
            title: "Improve Continuously",
            desc: "We measure, learn, and optimise, because customer expectations don’t stand still.",
        },
    ];

    return (
        <section
            className="w-full bg-white py-28"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
            <div className="max-w-[1400px] mx-auto flex justify-between items-center px-10">

                {/* LEFT SECTION */}
                <div className="max-w-[520px]">

                    <h2 className="text-[40px] font-semibold text-black mt-16">
                        The BANGMETRIC Way
                    </h2>

                    <p className="text-[30px] text-black">
                        Our Customer Service Blueprint
                    </p>
                    <div className="relative w-[450px] h-[369px] mt-6 left-[-140px]">
                        <Image
                            src="/glass.png"
                            alt="glass"
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className="ml-20 relative w-[740px] flex flex-col gap-8">

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex items-center group">

                            {/* Circle */}
                            <div
                                className="
                  absolute
                  -left-[22px]
                  top-1/2
                  -translate-y-1/2
                  w-[44px]
                  h-[44px]
                  rounded-full
                  bg-[#D8CDFF]
                  shadow-md
                  z-10
                "
                            />

                            {/* Card */}
                            <div
                                className="
                w-[600px]
                h-[120px]
                rounded-[10px]
                flex
                items-center
                px-8
                gap-6
                border
                border-[#D8D8D8]
                bg-[#F1F1F4]
                transition-all
                duration-300
                group-hover:bg-[#9383DC]
                group-hover:text-white
                "
                            >

                                {/* Title */}
                                <div className="w-[220px] text-[20px] font-semibold leading-tight">
                                    {step.title}
                                </div>

                                {/* Divider */}
                                <div
                                    className="
                  w-[1.5px]
                  h-[70px]
                  bg-black
                  transition-all
                  duration-300
                  group-hover:bg-white/50
                  "
                                />

                                {/* Description */}
                                <p className="text-[16px] leading-[1.5]">
                                    {step.desc}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}