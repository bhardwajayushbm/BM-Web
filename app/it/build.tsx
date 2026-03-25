"use client";

import Image from "next/image";

export default function WhatWeBuild() {
  return (
    <section className="relative w-full min-h-screen font-helvetica text-white overflow-hidden">
      <Image
        src="/B11.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="max-w-[1600px] mx-auto px-8 py-28">

        <div className="w-full flex justify-center mb-20">
          <h2 className="text-white text-[42px] md:text-[56px] leading-tight whitespace-nowrap text-center">
            What We Build With ServiceNow ITSM
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-20 gap-y-20 justify-items-center">

          <BuildCard
            image="/IT1.png"
            title="Core ITSM, done deliberately:"
            bullets={[
              "Incident, Request, Problem, Change",
              "Service Catalog & Employeefriendly Portal",
              "Major Incident, OnCall, clean comms & roles",
              "Knowledge that's actually used (not shelfware)",
              "Service Operations Workspace for cross-team visibility",
              "CMDB/CSDM, rightsized to support change and impact analysis (no bloat)",

            ]}
          />

          <BuildCard
            image="/IT2.png"
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
    <div className="relative w-full max-w-[560px] h-[420px]">

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
  );
}