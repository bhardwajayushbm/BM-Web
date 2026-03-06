"use client";

import React from "react";

export default function AboutUsPage() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-20 py-20 bg-[#EDEDED]">
            <div className="max-w-[1400px] mx-auto">

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <h1
                        className="
              font-helvetica
              font-normal
              text-[76px]
              leading-[100%]
              text-black
            "
                    >
                        Who We Are
                    </h1>

                    <div
                        className="rounded-[10px] overflow-hidden leading-none bg-[#EDEDED]"
                        style={{
                            width: "483px",
                            aspectRatio: "483 / 87",
                        }}
                    >
                        <video
                            src="/Video1.mp4"
                            className="w-full h-full object-cover block"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>

                <div className="mt-6 w-full flex">
                    <p className="font-helvetica font-normal text-[30px] leading-[120%] text-black"
                        style={{ maxWidth: "1109px" }}
                    >
                        BANGMETRIC is a global SaaS and ServiceNow partner built by experts
                        who genuinely care about your organization and the success of your
                        ServiceNow platform.
                    </p>
                </div>


                <div className="mt-6 space-y-2">
                    <p className="font-helvetica font-normal text-[30px] leading-[110%] text-black">
                        We blend business consulting, platform problem-solving, and value
                        maximization to help enterprises streamline operations and drive meaningful
                        outcomes. Our consultants work as an extension of your team, guiding,
                        improving, and elevating your ServiceNow ecosystem with clarity, empathy,
                        and real expertise.
                    </p>

                    <p className="font-helvetica font-normal text-[30px] leading-[110%] text-black mt-4">
                        At our core, we’re people who want your business to run better, smarter,
                        and with long-term confidence.
                    </p>
                </div>

            </div>
        </section>
    );
}
