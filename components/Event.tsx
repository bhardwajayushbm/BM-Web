"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ added

export function Event() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const router = useRouter(); // ✅ added

  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "BANGMETRIC at\nServiceNow Knowledge 2025",
      desc: "Our ServiceNow Jumpstart offerings were met with great enthusiasm and buzz at ServiceNow Knowledge 2025",
      img: "/News.png",
    },
    {
      title: "BANGMETRIC\nTurned 8!",
      desc: "Celebrating 8 Years of Journey. Our foundation day was a celebration of milestone, teamwork and shared success.",
      img: "/News1.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev + 1);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center py-14 sm:py-16 md:py-20 bg-white"
    >
      <div className="w-full max-w-[1100px] px-4 sm:px-6 lg:px-8 relative">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-[26px] sm:text-[38px] md:text-[50px] lg:text-[58px] text-black">
            Events & News
          </h1>
        </motion.div>

        <div className="relative flex items-center">

          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-2 md:-left-6 lg:-left-10 hidden md:flex w-10 h-10 border border-gray-300 rounded-full items-center justify-center hover:bg-gray-50 transition-all z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-2 md:-right-6 lg:-right-10 hidden md:flex w-10 h-10 border border-gray-300 rounded-full items-center justify-center hover:bg-gray-50 transition-all z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="overflow-hidden w-full">
            <motion.div
              animate={{ x: `-${(current % slides.length) * 100}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex w-full"
            >
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-6 sm:px-8 md:px-10"
                >

                  <motion.div className="text-center lg:text-left">
                    <motion.h2
                      variants={fadeUp}
                      className="whitespace-pre-line text-[18px] sm:text-[22px] md:text-[28px] lg:text-[30px] mb-4"
                    >
                      {slide.title}
                    </motion.h2>

                    <motion.p
                      variants={fadeUp}
                      className="text-[14px] sm:text-[15px] md:text-[16px] mb-6 max-w-[500px] mx-auto lg:mx-0"
                    >
                      {slide.desc}
                    </motion.p>

                    {/* ✅ BUTTON FIXED */}
                    <motion.button
                      variants={fadeUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => router.push("/resources")}
                      className="bg-[#9562EB] text-white w-[130px] h-[36px] rounded-[6px] cursor-pointer"
                    >
                      Read More
                    </motion.button>
                  </motion.div>

                  <motion.div
                    variants={imageAnim}
                    className="flex justify-center lg:justify-end"
                  >
                    <div className="w-full max-w-[500px]">
                      <Image
                        src={slide.img}
                        alt="Event"
                        width={600}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </motion.div>

                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-6 gap-2"
        >
          {slides.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.2 }}
              className={`h-[3px] w-[30px] rounded-full cursor-pointer ${
                current % slides.length === i
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}