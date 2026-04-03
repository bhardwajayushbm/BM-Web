"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ===== ANIMATION ===== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function OurOfficesPage() {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 pt-[80px] md:pt-[120px] pb-[320px] md:pb-[380px] px-4">

        <div className="max-w-[1100px] mx-auto flex flex-col items-center">

          {/* TITLE */}
          <h1 className="text-white text-[32px] sm:text-[44px] md:text-[54px] text-center">
            Our Offices
          </h1>

          {/* SUBTEXT */}
          <p className="text-white text-[14px] sm:text-[16px] md:text-[20px] text-center mt-4 max-w-[720px]">
            BANGMETRIC delivers ServiceNow solutions to clients
            <br className="hidden sm:block" />
            across the globe through our regional hubs:
          </p>

          {/* ✅ CARDS WITH ANIMATION */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-20"
          >

            <OfficeCard
              image="/Noida.jpg"
              title="India–Global Headquarters (Noida)"
              location="KLJ Noida One"
              address={`7th Floor, KLJ, Noida One, B 8,
Block B, Sector 62, Noida, Uttar Pradesh 201309`}
              phone="084475 32355"
              email="connect@bangmetric.com"
              position="object-[center_60%]"
            />

            <OfficeCard
              image="/US.jpg"
              title="United States–Regional Consulting & Client Services"
              location="BANGMETRIC LLC"
              address={`619 Little School Road,
Suite 204, Kennedale TX 76060`}
              phone="+1 (817) 953-3330"
              email="connect@bangmetric.com"
              position="object-[center_75%]"
            />

            <OfficeCard
              image="/SA.jpg"
              title="South Africa–Delivery & Operations Support"
              location="16 Troy Close"
              address={`Sandton,
Johannesburg,
SA 2021`}
              phone="+27 72 235 9351"
              email="connect@bangmetric.com"
              position="object-[center_70%]"
            />

          </motion.div>
        </div>
      </div>

      {/* GLOBE */}
      <div className="
        absolute 
        bottom-[-10px] sm:bottom-0   
        left-1/2 -translate-x-1/2 
        w-[420px] sm:w-[500px] md:w-[900px]  
        h-[260px] sm:h-[300px] md:h-[420px]   
        z-10 pointer-events-none
      ">
        <motion.div
          animate={{
            filter: [
              "drop-shadow(0 0 6px rgba(160,210,255,0.55))",
              "drop-shadow(0 0 16px rgba(160,210,255,0.9))",
              "drop-shadow(0 0 6px rgba(160,210,255,0.55))",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
          style={{
            transform: "translateY(-5px)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 40%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 40%)",
          }}
        >
          <Image
            src="/globe.png"
            alt="Global Presence"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="absolute bottom-[40px] md:bottom-[70px] w-full z-20 text-center px-6">
        <p className="text-white text-[20px] sm:text-[14px] md:text-[20px] max-w-[560px] mx-auto">
          Our global presence ensures responsive support,
          <br className="hidden lg:block" />
          scalable delivery, and continuity across time zones.
        </p>
      </div>

    </section>
  );
}

/* CARD */
function OfficeCard({ image, title, location, address, phone, email, position }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.03 }}
      className="bg-white w-full max-w-[300px] h-[380px] rounded-[12px] p-4 shadow-md flex flex-col cursor-pointer"
    >

      {/* IMAGE */}
      <div className="w-full h-[150px] rounded-[10px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={150}
          className={`w-full h-full object-cover ${position}`}
        />
      </div>

      {/* TITLE */}
      <h3 className="mt-3 text-[16px] md:text-[18px] font-semibold text-black">
        {title}
      </h3>

      {/* CONTENT */}
      <p className="mt-2 text-[13px] md:text-[14px] text-black whitespace-pre-line leading-[18px]">
        <span className="font-bold">Located in:</span> {location}{"\n"}
        <span className="font-bold">Address:</span> {address}{"\n"}
        <span className="font-bold">Phone:</span> {phone}{"\n"}
        <span className="font-bold">Email:</span> {email}
      </p>

    </motion.div>
  );
}