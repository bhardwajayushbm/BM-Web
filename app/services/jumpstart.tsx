"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JumpstartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-20">

      {/* HEADING */}
      <motion.h1
        ref={ref}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center font-helvetica font-bold text-[70px] leading-[100%] text-[#60D94F]"
      >
        US based project oversight <br /> provided with every Jumpstart.
      </motion.h1>

      {/* CONTENT SECTION */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-20 w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        {/* LEFT TEXT */}
        <div>
          <h2 className="font-helvetica font-normal text-[40px] leading-[62px] text-black">
            Lorem Ipsum is simply<br />
            dummy text of the printing<br />
            and Lorem Ipsum has<br />
            been
          </h2>

          <p className=" font-helvetica mt-6 text-[16px] md:text-[18px] text-gray-600">
            Lorem Ipsum is simply dummy text of the<br />
            printing and Lorem Ipsum has been
          </p>
        </div>

        {/* VIDEO BOX */}
        <div className="w-full h-[260px] md:h-[320px] bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-[5px]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
