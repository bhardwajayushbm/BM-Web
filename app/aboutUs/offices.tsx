"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurOfficesPage() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background map */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[120px] pb-[380px]">
        <h1
          className="text-white text-[64px] leading-[72px] font-normal"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
        >
          Our Offices
        </h1>

        <p
          className="text-white text-[20px] text-center mt-4 max-w-[720px]"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
        >
          BANGMETRIC delivers ServiceNow solutions to clients
          <br />
          across the globe through our regional hubs:
        </p>

        <div className="flex gap-[40px] mt-[80px]">

          {/* India Office */}
          <OfficeCard
            image="/India.png"
            title="India – Global Headquarters (Noida)"
            location="7th Floor, Tower A"
            address={`Noida One, B-Block,
Sector 62, Noida,
Uttar Pradesh 201301`}
            phone="+91 882 6431 333"
            email="connect@bangmetric.com"
          />

          {/* USA Office */}
          <OfficeCard
            image="/US.png"
            title="United States – Regional Consulting & Client Services"
            location="BANGMETRIC LLC"
            address={`619 Little School Road,
Suite 204, Kennedale
TX 76060`}
            phone="+1 (817) 953-3330"
            email="connect@bangmetric.com"
          />

          {/* South Africa Office */}
          <OfficeCard
            image="/SA.png"
            title="South Africa – Delivery & Operations Support"
            location="16 Troy Close"
            address={`Sandton,
Johannesburg,
SA 2021`}
            phone="+27 72 235 9351"
            email="connect@bangmetric.com"
          />
        </div>
      </div>

      {/* Globe */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] z-10 pointer-events-none">
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
            transform: "translateY(-10px)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, black 40%)",
            maskImage:
              "linear-gradient(to top, transparent 0%, black 40%)",
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

      {/* Bottom text */}
      <div className="absolute bottom-[70px] w-full z-20 text-center px-6">
        <p
          className="text-white text-[20px] leading-[30px] max-w-[760px] mx-auto"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
        >
          Our global presence ensures responsive
          <br />
          support, scalable delivery, and continuity
          <br />
          across time zones.
        </p>
      </div>
    </section>
  );
}

function OfficeCard({ image, title, location, address, phone, email }) {
  return (
    <div
      className="bg-white flex flex-col p-[16px]"
      style={{
        width: "353px",
        height: "437px",
        borderRadius: "10px",
      }}
    >
      <div className="relative w-full h-[200px] rounded-[8px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      <h3 className="mt-4 text-[22px] leading-[24px] font-semibold text-black">
        {title}
      </h3>

      <p className="mt-4 text-[16px] leading-[22px] text-black">
        <span className="font-bold">Located in:</span> {location}
        <br />
        <span className="font-bold">Address:</span> {address}
        <br />
        <span className="font-bold">Tel:</span> {phone}
        <br />
        <span className="font-bold">Email:</span> {email}
      </p>
    </div>
  );
}