"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Getintouch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="
        relative w-full h-screen overflow-hidden   
        max-w-[1800px] mx-auto

        mt-[60px]             
        px-[0px] md:px-[80px]

        flex flex-col lg:flex-row
        items-center lg:items-center
        justify-between
        gap-[40px] lg:gap-[140px]   
      "
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-[520px] shrink-0"
      >
        <h2
          className="
            font-[Helvetica] font-bold
            text-[34px] md:text-[50px] lg:text-[64px]
            leading-[42px] md:leading-[60px] lg:leading-[72px]
            text-black mb-[18px]
          "
        >
          Get in <br /> Touch Today!
        </h2>

        <p
          className="
            text-black font-[Helvetica]
            text-[15px] md:text-[16px] lg:text-[17px]
            leading-[22px] md:leading-[24px] lg:leading-[26px]
            max-w-[520px]
            mb-[25px]
          "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            bg-[#9562EB] hover:bg-[#8449E6]
            text-white font-[Helvetica]
            text-[16px] md:text-[18px]
            px-6 py-3 rounded-md shadow-md
          "
        >
          Book a Free Consultation Session
        </motion.button>
      </motion.div>

      <div
        className="
          relative
          w-full max-w-[650px]

          mt-[40px] lg:mt-[80px]    
          
          h-[480px] md:h-[560px] lg:h-[700px] 
          shrink-0
        "
      >
      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="
            absolute right-0 top-[20px]   
            scale-[0.75] md:scale-[0.85] lg:scale-[1]
            origin-top-right
            z-10
          "
        >
          <Image
            src="/boy.png"
            alt="Person"
            width={620}
            height={620}
            className="object-contain"
          />
        </motion.div>

      

 
        <div
          className="
            absolute
            top-[200px] md:top-[230px] lg:top-[260px]
            left-[0px] md:left-[-40px] lg:left-[-90px]
            
            w-[210px] md:w-[240px] lg:w-[270px]
            h-[45px] md:h-[50px] lg:h-[53px]
            
            bg-white rounded-[12px]
            border border-[#CFCFCF]
            shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            flex items-center gap-3 px-4
            z-20
          "
        >
          <Image src="/icon.png" width={22} height={22} alt="icon" />
          <p className="text-[13px] md:text-[15px] lg:text-[16px] text-black">
            Lorem Ipsum is simply
          </p>
        </div>

        <div
          className="
            absolute
            top-[290px] md:top-[340px] lg:top-[380px]
            left-[40px] md:left-[0px] lg:left-[-20px]
            
            w-[210px] md:w-[240px] lg:w-[270px]
            h-[45px] md:h-[50px] lg:h-[53px]
            
            bg-white rounded-[12px]
            border border-[#CFCFCF]
            shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            flex items-center gap-3 px-4
            z-20
          "
        >
          <Image src="/icon.png" width={22} height={22} alt="icon" />
          <p className="text-[13px] md:text-[15px] lg:text-[16px] text-black">
            Lorem Ipsum is simply
          </p>
        </div>
        <div
          className="
            absolute
            top-[380px] md:top-[450px] lg:top-[520px]
            left-[80px] md:left-[40px] lg:left-[40px]
            
            w-[210px] md:w-[240px] lg:w-[270px]
            h-[45px] md:h-[50px] lg:h-[53px]
            
            bg-white rounded-[12px]
            border border-[#CFCFCF]
            shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            flex items-center gap-3 px-4
            z-20
          "
        >
          <Image src="/icon.png" width={22} height={22} alt="icon" />
          <p className="text-[13px] md:text-[15px] lg:text-[16px] text-black">
            Lorem Ipsum is simply
          </p>
        </div>
      </div>
    </section>
  );
}
