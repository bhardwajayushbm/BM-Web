"use client";
import React from "react";
 
export default function Jumpstart_() {
  return (
    <div className="relative w-full flex flex-col items-center justify-start bg-white overflow-hidden py-16">
      <div className="relative w-[90%] max-w-7xl mx-auto">
        <div className="absolute top-[-40px] left-[-40px] w-full h-[65vh] bg-[#e6e1ff] z-0 rounded-sm"></div>
        <div className="absolute top-[-20px] right-[-40px] w-full h-[65vh] bg-[#41e33a] z-10 rounded-sm"></div>

        <div className="relative z-20 w-full h-[65vh] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/BGVIDEO2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="relative z-30 bg-white w-full flex justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-20 py-10 mt-4 border-t border-gray-200">
        {[
          { number: "0+", label: "Integrations Completed" },
          { number: "100+", label: "Integrations Completed" },
          { number: "150+", label: "Integrations Completed" },
          { number: "8+", label: "Integrations Completed" },
          { number: "200+", label: "Integrations Completed" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border-r border-gray-300 last:border-none px-4"
          >
            <h2 className="text-3xl font-bold text-black">{item.number}</h2>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
