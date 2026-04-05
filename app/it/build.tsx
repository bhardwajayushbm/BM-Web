"use client";

import Image from "next/image";

export default function WhatWeBuild() {
  return (
    <section className="relative w-full min-h-screen font-helvetica text-white overflow-hidden">

      {/* 🔷 BACKGROUND */}
      <Image
        src="/B11.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-28">

        {/* 🔷 HEADING */}
        <div className="w-full flex justify-center mb-10 md:mb-20">
          <h2 className="text-white text-[26px] sm:text-[32px] md:text-[42px] lg:text-[56px] leading-tight text-center">
            What We Build With ServiceNow ITSM
          </h2>
        </div>

        {/* 🔷 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-20 md:gap-y-20 justify-items-center">

          <BuildCard
            image="/IT1.png"
            mobileImage="/itsm1.jpg"
            title="Core ITSM, done deliberately:"
            bullets={[
              "Incident, Request, Problem, Change",
              "Service Catalog & Employee-friendly Portal",
              "Major Incident, OnCall, clean comms & roles",
              "Knowledge that's actually used (not shelfware)",
              "Service Operations Workspace for cross-team visibility",
              "CMDB/CSDM, rightsized to support change and impact analysis (no bloat)",
            ]}
          />

          <BuildCard
            image="/IT2.png"
            mobileImage="/itsm2.jpg"
            title="Intelligence & Automation, applied where it helps:"
            bullets={[
              "Predictive assignment & classification",
              "GenAI for summaries, KB drafts, and guided resolution notes",
              "Change risk scoring and better approvals",
              "Signals into incident and noise reduction (where ITOM/AIOps is in scope)",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function BuildCard({
  image,
  mobileImage,
  title,
  bullets,
}: {
  image: string;
  mobileImage: string;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="w-full max-w-[560px]">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        {/* IMAGE */}
        <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
          <Image
            src={mobileImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* 🔷 CONTENT BELOW IMAGE */}
        <div className="bg-black/60 p-4 rounded-b-lg">

          <h3 className="text-[16px] font-semibold mb-2">
            {title}
          </h3>

          <ul className="space-y-1 text-[13px] leading-[1.3] text-[#E5E5E5]">
            {bullets.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* ================= DESKTOP / TABLET (UNCHANGED) ================= */}
      <div className="hidden md:block relative h-[420px]">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute right-8 bottom-10 w-[320px]">

          <h3 className="text-[20px] font-semibold mb-2">
            {title}
          </h3>

          <ul className="space-y-2 text-[14px] leading-[1.3] text-[#E5E5E5]">
            {bullets.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  );
}