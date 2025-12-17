"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leaderVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ceoVariants = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function LeadershipPage() {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-20">
      <h1
        className="font-helvetica font-normal text-[40px] md:text-[48px] lg:text-[56px]
        leading-tight lg:leading-[90px] text-black text-center mx-auto"
        style={{ maxWidth: "643px" }}
      >
        Our Leadership Team
      </h1>
      <p
        className="font-helvetica font-normal text-[18px] md:text-[22px] lg:text-[26px]
        leading-[26px] md:leading-[28px] lg:leading-[30px]
        text-black text-center mx-auto mt-10 lg:mt-14"
        style={{ maxWidth: "783px" }}
      >
        Our leadership team comprises seasoned technologists, strategists, and industry experts who guide our vision and uphold our commitment to excellence.
      </p>

      <p
        className="font-helvetica font-normal text-[18px] md:text-[22px] lg:text-[26px]
        leading-[26px] md:leading-[28px] lg:leading-[30px]
        text-black text-center mx-auto mt-4 lg:mt-6"
        style={{ maxWidth: "783px" }}
      >
        They champion innovation, customer success, and a people-first culture—driving BANGMETRIC’s growth across markets and industries.
      </p>
      <motion.div
        className="hidden lg:block w-[1065px] relative mt-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative h-[470px]">
          <LeaderAbs top={0} left={0} name="Sharad Mishra" title="Director, Business Development, APAC" img="/Sharad.jpg" textTop />
          <LeaderAbs top={0} right={0} name="Theuns Rossouw" title="Advisory Head, AMS" img="/Theuns.png" textTop />

          {/* CENTER ROW */}
          <LeaderAbs top={160} left={160} name="Jitender Sharma" title="Head, Delivery" img="/Jeet.png" />
          <LeaderAbs top={100} left={310} name="Aloka Sen Awasthi" title="HR Head" img="/Aloka.png" />
          <LeaderAbs
            top={150}
            left={460}
            name="Anuj Bhardwaj"
            title="Chief Executive Officer"
            img="/Anuj.png"
            isCEO
          />

          <LeaderAbs top={100} left={610} name="Art Yeames, Ed.D." title="Senior Vice President of Sales – North America" img="/Art.png" />
          <LeaderAbs top={150} left={760} name="Rohan Bathla" title="Practice Head, ServiceNow" img="/Rohan.png" />
          <LeaderAbs top={260} left={0} name="Lorelle Jacob" title="Advisory Head, South Africa" img="/Lorelle.png" />
          <LeaderAbs top={260} right={0} name="CY Comer" title="Business Head, AMS" img="/CY.png" />
        </div>
      </motion.div>
      <motion.div
        className="block lg:hidden w-full max-w-[900px] mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 justify-items-center">
          {[
            ["Sharad Mishra", "Director, Business Development, APAC", "/Sharad.jpg"],
            ["Theuns Rossouw", "Advisory Head, AMS", "/Theuns.png"],
            ["Jitender Sharma", "Head, Delivery", "/Jeet.png"],
            ["Aloka Sen Awasthi", "HR Head", "/Aloka.png"],
            ["Anuj Bhardwaj", "Chief Executive Officer", "/Anuj.png"],
            ["Art Yeames, Ed.D.", "Senior Vice President of Sales – North America", "/Art.png"],
            ["Rohan Bathla", "Practice Head, ServiceNow", "/Rohan.png"],
            ["Lorelle Jacob", "Advisory Head, South Africa", "/Lorelle.png"],
            ["CY Comer", "Business Head, AMS", "/CY.png"],
          ].map(([name, title, img]) => (
            <Leader key={name} name={name} title={title} img={img} />
          ))}
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-2 bg-[#9562EB] hover:bg-[#8449E6]
        text-white font-helvetica font-normal text-[20px] md:text-[22px]
        w-[80px] md:w-[200px] h-[42px]
        rounded-[5px] transition-all duration-300 shadow-md
        flex items-center justify-center"
      >
        Testimonials
      </motion.button>
    </section>
  );
}

function LeaderAbs({
  name,
  title,
  img,
  top,
  left,
  right,
  textTop = false,
  isCEO = false,
}: any) {
  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{ top, left, right }}
      variants={isCEO ? ceoVariants : leaderVariants}
    >
      {textTop && (
        <div className="mb-2 text-center">
          <p className="text-[14px] font-semibold">{name}</p>
          <p className="text-[12px] text-black/80 max-w-[150px]">{title}</p>
        </div>
      )}

      <div className="relative w-[139px] h-[172px]">
        <Image src={img} alt={name} fill className="object-cover rounded-[5px]" />
      </div>

      {!textTop && (
        <div className="mt-2 h-[42px] text-center">
          <p className="text-[14px] font-semibold">{name}</p>
          <p className="text-[12px] text-black/80 max-w-[150px]">{title}</p>
        </div>
      )}
    </motion.div>
  );
}

function Leader({ name, title, img }: any) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={leaderVariants}
    >
      <div className="relative w-[139px] h-[172px]">
        <Image src={img} alt={name} fill className="object-cover rounded-[5px]" />
      </div>
      <div className="mt-3">
        <p className="text-[14px] font-semibold">{name}</p>
        <p className="text-[12px] text-black/80 max-w-[150px]">{title}</p>
      </div>
    </motion.div>
  );
}
