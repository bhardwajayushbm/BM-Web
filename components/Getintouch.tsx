"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Getintouch() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section className="relative w-full min-h-[1200px] overflow-hidden">

      {/* Background */}
      <Image
        src="/Get.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-20 flex items-start pt-20 px-20">

        <div className="text-white max-w-lg">

          <h1 className="text-6xl font-bold leading-tight">
            Get in <br /> Touch Today!
          </h1>

          <p className="text-sm mt-4 opacity-80 max-w-xs">
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>

          {/* FORM */}
          <div className="mt-6 bg-white rounded-md shadow-lg p-5 w-[380px]">

            <form className="space-y-3 text-gray-700 text-sm">

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Value"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Value"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Value"
                  className="w-full border rounded px-3 py-2 outline-none"
                />
              </div>

              <button
                className="w-full text-white py-2 rounded"
                style={{ backgroundColor: "#9562EB" }}
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* CURVE SECTION */}
      <div className="absolute bottom-0 left-0 w-full z-10">

        {/* White Curve */}
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-[500px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="
              M0,220
              A1000,500 0 0,1 1050,380
              L1300,600
              L0,600
              Z
            "
          />
        </svg>

        {/* Sponsors Content */}
        <div
          ref={ref}
          className="absolute top-28 left-24 flex items-start gap-24"
        >

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-sm"
          >
            <h2 className="font-bold text-[28px] text-black mb-2 pt-40">
              BANGMETRIC Sponsors
              <br />
              ServiceNow
            </h2>

            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </p>
          </motion.div>


          {/* LOGOS */}
          <div className="grid grid-cols-2 gap-4 mt-36">

            {["/ISO.png", "/QC.png", "/SP.png", "/MSM.png"].map((src, i) => (
              <motion.div
                key={src}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={imageVariants}
              >
                <Image
                  src={src}
                  alt={`Sponsor ${i + 1}`}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}