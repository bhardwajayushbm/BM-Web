"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Card({ title, description, className, image }: any) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.97 }}
      className={`w-full flex justify-center ${className}`}
    >
      <div className="relative w-full max-w-[320px] h-[220px] sm:h-[240px] md:h-[250px] rounded-[12px] overflow-hidden shadow-lg">
        
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 p-5 flex flex-col justify-start">
          
          <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-[1.4]">
            {title}
          </h3>

          <p className="text-gray-200 text-[12px] sm:text-[13px] leading-[1.5] mt-2 max-w-[260px]">
            {description}
          </p>

          <button className="mt-14 bg-gradient-to-r from-[#9562EB] to-[#7B5CFF] text-white w-[120px] h-[34px] rounded-[6px] text-[12px] sm:text-[13px] font-medium">
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CustomerSuccessSection() {
  const router = useRouter(); // ✅ added

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="py-10 sm:py-12 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        <motion.div
          variants={headerVariants}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <h2 className="font-[Helvetica] font-normal text-[28px] sm:text-[36px] md:text-[48px] text-black">
            Customer Success in Action
          </h2>

          <p className="text-[13px] sm:text-[15px] max-w-[650px] mx-auto leading-[1.5] mt-2">
            Discover how leading organizations across industries are transforming
            with our{" "}
            <span className="text-[#62CE30] font-semibold">ServiceNow</span>{" "}
            expertise.
          </p>

          <p className="text-[13px] sm:text-[15px] max-w-[650px] mx-auto mt-2 leading-[1.5]">
            From optimizing workflows to elevating digital experiences, our client
            stories reflect real-world impact, proven results, and lasting value.
          </p>

          {/* ✅ BUTTON FIXED */}
          <button
            onClick={() => router.push("/resources")}
            className="mt-5 sm:mt-6 bg-[#9562EB] text-white w-[140px] h-[38px] sm:w-[150px] sm:h-[40px] md:w-[160px] md:h-[42px] rounded-[6px] cursor-pointer"
          >
            Case Studies
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="
            flex flex-col items-center gap-5
            md:flex-row md:justify-between md:items-start md:gap-0
          "
        >
          <Card
            title="From Fragmented CMDB to Cyber-Ready Visibility"
            description="Enabled a clean, CSDM-aligned CMDB with Azure discovery and IPAM integration....."
            image="/CMDB.png"
            className="md:order-3 md:mt-0"
          />

          <Card
            title="Custom-Built CRM on ServiceNow for Smarter Sale"
            description="Replaced legacy SugarCRM with a custom-built solution....."
            image="/CRM.png"
            className="md:order-2 md:mt-[40px]"
          />

          <Card
            title="Transforming IT Operations with ServiceNow ITOM"
            description="Delivered unified visibility and proactive event management......"
            image="/ITT.png"
            className="md:order-1 md:mt-[80px]"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}