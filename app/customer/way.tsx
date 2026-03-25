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
            <div className="max-w-[1100px] mx-auto flex justify-between items-center px-10">

                <div className="max-w-[520px]">

                    <h2 className="text-[36px] font-normal text-black mt-16">
                        The BANGMETRIC Way
                    </h2>

                    <p className="text-[22px] text-black">
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

                <div className="ml-20 relative w-[740px] flex flex-col gap-8">

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex items-center group">

                            <div
                                className="
                  absolute
                  -left-[20px]
                  top-1/2
                  -translate-y-1/2
                  w-[34px]
                  h-[34px]
                  rounded-full
                  bg-[#D8CDFF]
                  shadow-md
                  z-10
                "
                            />

                            <div className="
                w-[440px]
                h-[90px]
                rounded-[10px]
                flex
                items-center
                px-8
                gap-2
                border
                border-[#D8D8D8]
                bg-[#F1F1F4]
                transition-all
                duration-300
                group-hover:bg-[#9383DC]
                group-hover:text-white
                "
                >
                <div className="w-[220px] text-[18px] font-semibold leading-tight">
                {step.title}
                </div>

                <div  className="
                  w-[1.5px]
                  h-[70px]
                  bg-black
                  transition-all
                  duration-300
                  group-hover:bg-white/50
                  "
                 />

                               
                <p className="text-[14px] leading-[1.2]">
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