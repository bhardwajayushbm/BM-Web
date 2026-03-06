"use client";

import Image from "next/image";

export default function Organizations() {
    return (
        <section className="w-full bg-white px-[82px] py-24">
            <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-20">
                <div>
                    <h1 className="font-[Helvetica] font-normal text-[46px] leading-[1] text-black w-[505px] h-[92px]">
                        Why Organizations Choose BANGMETRIC
                    </h1>
                    <p className="font-[Helvetica] font-normal text-[26px] leading-[1.5] text-black w-[505px] h-[160px] mt-8">

                        They’re not looking for another implementation partner.
                        They’re looking for a thinking partner
                    </p>
                    <div className="relative">
                        <div className="absolute left-[17px] top-[18px] h-[260px] w-[1px] bg-black z-0" />

                        <div className="flex flex-col gap-[28px] relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-[35px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
                                <p className="font-[Helvetica] font-normal text-[25px] leading-[1.2] text-black w-[508px]">
                                    End-to-end ownership from strategy to execution
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-[35px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
                                <p className="font-[Helvetica] font-normal text-[25px] leading-[1.2] text-black w-[508px]">
                                    Deep expertise in ServiceNow CSM
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-[35px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
                                <p className="font-[Helvetica] font-normal text-[25px] leading-[1.2] text-black w-[508px]">
                                    Strong capabilities in AI, analytics, and workflow optimization
                                </p>
                            </div>
                             <div className="flex items-center gap-4">
                                <div className="w-[35px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
                                <p className="font-[Helvetica] font-normal text-[25px] leading-[1.2] text-black w-[508px]">
                                   A relentless focus on outcomes customers actually feel 
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                    <div className="relative w-[680px] h-[500px] overflow-hidden">
                        <Image
                            src="/Laptop.png"
                            alt="laptop"
                            fill
                            className="object-cover"
                        />
                    </div>
                

            </div>          
        </section>
    );
}
