"use client";

import Image from "next/image";

export default function WhatWeBuild() {
  return (
    <section className="relative w-full min-h-screen font-helvetica text-white overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <Image
        src="/B11.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="max-w-[1100px] mx-auto px-16 py-28">

        {/* ===== TOP SECTION ===== */}
        <div className="flex justify-between items-start mb-24">

          <h2 className="text-[36px] leading-[1.15] font-normal max-w-[600px]">
            What We Build Using <br /> ServiceNow CSM
          </h2>

          <p className="text-[18px] leading-[1.6] max-w-[520px] text-[#E5E5E5]">
            ServiceNow Customer Service Management becomes the execution layer
            for a deliberately designed service experience.
          </p>

        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-2 gap-x-28 gap-y-16">

          <BuildCard
            image="/b1.png"
            title="Customer Experience"
            bullets={[
              "Seamless, omnichannel service across digital and assisted channels",
              "Personalised self-service that reduces contact",
              "Clear, guided resolution paths",
            ]}
          />

          <BuildCard
            image="/b2.png"
            title="Service Operations"
            bullets={[
              "Intelligent case intake, triage, and routing",
              "End-to-end orchestration across IT, Operations, and Field Service",
              "Fewer handoffs. Faster outcomes.",
            ]}
          />

          <BuildCard
            image="/b3.png"
            title="Intelligence & Automation"
            bullets={[
              "Predictive classification and routing",
              "Generative AI for summaries, responses, and recommendations",
              "24/7 Virtual Agent support",
            ]}
          />

          <BuildCard
            image="/b4.png"
            title="Scalable Efficiency"
            bullets={[
              "Higher self-service deflection without frustrating customers",
              "Reduced manual effort for service teams",
              "Faster time-to-value and sustainable cost reduction",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= IMAGE TEXT OVERLAY ================= */

function BuildCard({
  image,
  title,
  bullets,
}: {
  image: string;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="relative w-full max-w-[660px] h-[300px] overflow-hidden">

      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover scale-[1.03]"
      />

      {/* TEXT OVERLAY (ALIGNED TITLES) */}
      <div className="absolute right-2 top-[120px] w-[320px]">

        <h3 className="text-[20px] font-semibold mb-4 ml-2">
          {title}
        </h3>

        <ul className="space-y-2 text-[14px] leading-[1.4] text-[#E5E5E5]">
          {bullets.map((item, i) => (
            <li key={i} className="flex gap-2 ml-4">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}