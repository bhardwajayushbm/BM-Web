"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Sales() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="w-full flex justify-center px-4 md:px-8 lg:px-10 mt-10 pt-28">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[1386px] h-[360px] rounded-[10px]"
            >
                <div className="absolute inset-0 rounded-[10px] overflow-hidden bg-white">
                    <Image
                        src="/BG3.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover opacity-90"
                    />
                </div>


                <div className="absolute left-0 top-[-120px] w-[535px] h-[480px] z-30">
                    <Image
                        src="/Sales.png"
                        alt="Arthur Yeames"
                        fill
                        className="object-contain drop-shadow-xl"
                    />
                </div>

                <div className="relative z-40 h-full flex flex-col justify-center pl-[580px] pr-12 text-white font-helvetica">

                    <h2 className="text-[46px] font-normal leading-[62px]">
                        Arthur Yeames
                    </h2>

                    <p className="text-[46px] font-normal leading-[62px] mt-[2px] whitespace-nowrap">
                        SVP, Sales, North America
                    </p>

                    <p className="mt-2 text-[24px] font-normal leading-[62px] opacity-90">
                        Email: artyeames@bangmetric.com
                    </p>
                </div>



            </motion.div>
        </section>
    );
}
