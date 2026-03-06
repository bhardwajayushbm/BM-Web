"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { key: "blogs", label: "Blogs" },
  { key: "newsletter", label: "Newsletter" },
  { key: "case-study", label: "Case Study" },
  { key: "white-paper", label: "White Paper" },
  { key: "webinar", label: "Webinar" },
  { key: "press-release", label: "Press Release" },
];

const allCards = [
  { img: "/Re1.png", title: "The Future of Work with ServiceNow & AI", desc: "How AI is reshaping workflows and enterprise productivity." },
  { img: "/Re7.png", title: "Maximizing Value Across Enterprise Portfolios", desc: "Practical strategies for driving outcomes with ServiceNow SPM." },
  { img: "/Re6.png", title: "Empowering Field Teams Through Smart Automation", desc: "ServiceNow FSM insights that boost field efficiency and impact." },
  { img: "/Re2.png", title: "The Future of Work with ServiceNow & AI", desc: "How AI is reshaping workflows and enterprise productivity." },
  { img: "/Re5.png", title: "The Future of Work with ServiceNow & AI", desc: "How AI is reshaping workflows and enterprise productivity." },
  { img: "/Re3.png", title: "Maximizing Value Across Enterprise Portfolios", desc: "Practical strategies for driving outcomes with ServiceNow SPM." },
  { img: "/Re4.png", title: "Empowering Field Teams Through Smart Automation", desc: "ServiceNow FSM insights that boost field efficiency and impact." },
  { img: "/Re2.png", title: "The Future of Work with ServiceNow & AI", desc: "How AI is reshaping workflows and enterprise productivity." },
];

export default function ResourcesTabsPage() {
  const [activeTab, setActiveTab] = useState("blogs");

  const getVisibleCards = () => {
    switch (activeTab) {
      case "newsletter":
        return allCards.slice(0, 3);
      case "case-study":
        return allCards.slice(0, 2);
      case "white-paper":
        return allCards.slice(0, 3);
      case "webinar":
        return allCards.slice(0, 4);
      case "press-release":
        return allCards.slice(0, 3);
      case "blogs":
      default:
        return allCards;
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-10 py-12">
      <div className="w-full max-w-[1400px] font-helvetica text-black">
        <h2 className="font-helvetica font-normal text-black text-center text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-none mb-12">
          Resources
        </h2>
        <div className="w-full flex flex-col items-center mb-10">
          <div className="flex flex-wrap justify-center gap-20 px-6 py-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`font-helvetica text-[20px] font-normal transition-colors ${isActive ? "text-[#9562EB]" : "text-black"
                    } hover:text-[#9562EB]`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="w-full flex justify-center mt-4">
            <div className="w-[100%] border-b border-[#8A8A8A]" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[10px] shadow-[0_-1px_5.2px_-2px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col"
            >
              <Link
                href="/zurich"
                className="absolute top-3 right-3 w-[43px] h-[43px] z-10 cursor-pointer"
              >
                <Image src="/arrow.png" alt="Arrow" width={43} height={43} />
              </Link>
              <div className="p-4">
                <h3 className="mt-4 font-helvetica font-bold text-[16px] leading-[100%] text-black">
                  {card.title}
                </h3>
                <p className="mt-6 font-helvetica font-normal text-[14px] leading-[100%] text-black">
                  {card.desc}
                </p>
              </div>
              <div className="p-3 pt-0">
                <div className="relative w-full h-[200px] rounded-[8px] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end items-center gap-4 mt-10 text-[14px]">
          <span className="text-black">1</span>
          <button className="text-[#9562EB]">2</button>
          <button className="text-[#9562EB]">3</button>
          <button className="text-[#9562EB]">Next &gt;</button>
        </div>

        <div className="w-full flex justify-center mt-4">
          <div className="w-full border-b border-[#8A8A8A]" />
        </div>

      </div>
    </section>
  );
}