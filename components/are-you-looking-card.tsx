"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Enterprise Asset Management",
    desc: "Visibility and control of your software, hardware, and app portfolios.",
  },
  {
    title: "Enterprise Operations Management",
    desc: "Unified operations to reduce downtime and enhance service performance.",
  },
  {
    title: "Enterprise Service Management",
    desc: "Standardizing and scaling service delivery across all business functions.",
    link: "/it",
  },
  {
    title: "Strategic Portfolio Management",
    desc: "Aligning investments and strategies to maximize business outcomes.",
  },
  {
    title: "Customer Service Management",
    desc: "Connected customer experiences that elevate service interactions.",
    link: "/customer",
  },
  {
    title: "Field Service Management",
    desc: "Optimized field operations enabling faster and smarter service.",
  },
  {
    title: "Third Party Risk Management",
    desc: "Stronger third-party risk monitoring with proactive visibility.",
  },
  {
    title: "Enterprise Risk Management",
    desc: "Proactive risk visibility and governance across the entire organization.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AreYouLookingForCard() {
  const router = useRouter();

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full bg-[#F2F2F4] py-16 px-4 relative z-10"
    >
      <div className="max-w-[1100px] mx-auto">

        <motion.h2
          variants={headingVariants}
          className="text-center font-[Helvetica] font-normal text-[22px] sm:text-[28px] md:text-[38px] text-black max-w-[420px] md:max-w-[520px] mx-auto mb-6"
        >
          ServiceNow Offerings Built for
          <br />
          Enterprise Success
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (item.link) router.push(item.link);
              }}
              className={`
                relative
                rounded-[10px]
                border border-[#D1D1D1]
                px-5 py-4
                h-[120px]
                flex items-center justify-between
                bg-white
                hover:bg-[#D8CDFF]
                transition-all duration-300
                cursor-pointer
                z-50
              `}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/SS.png"
                  alt="icon"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] object-contain shrink-0"
                />

                <div className="flex flex-col justify-center">
                  <h3 className="ml-2 font-[Helvetica] text-[18px] leading-[22px] text-black">
                    {item.title}
                  </h3>

                  <p className="ml-2 text-[13px] text-black leading-[16px] max-w-[240px] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              <Image
                src="/arrow.png"
                alt="arrow"
                width={18}
                height={18}
                className="absolute top-3 right-4 object-contain"
              />
            </motion.div>
          ))}

          {/* Explore More Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/services")}
            className="
              relative
              rounded-[10px]
              px-5 py-4
              h-[120px]
              flex items-center justify-between
              bg-gradient-to-r from-[#9562EB] to-[#7A4ED9]
              text-white
              cursor-pointer
            "
          >
            <h3 className="text-[20px] font-[Helvetica]">
              Explore More
            </h3>

            <Image
              src="/arrow.png"
              alt="arrow"
              width={18}
              height={18}
              className="absolute top-3 right-4 object-contain invert brightness-0"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}