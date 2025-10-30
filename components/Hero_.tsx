"use client";
import { useEffect, useState } from "react";
 
export default function Hero_() {
  const [scrollY, setScrollY] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const scale = Math.min(2, 1 + scrollY / 300);
  const circleOpacity = Math.max(0, 1 - scrollY / 300);
  const translateY = Math.max(0, scrollY * 0.25);
  const contentOpacity = Math.min(1, scrollY / 250);
  const contentTranslateY = Math.max(0, 100 - scrollY * 0.3);
  const videoOpacity = Math.min(1, scrollY / 300);
 
  return (
    <section className="relative flex items-center justify-center h-screen text-center overflow-hidden bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
        style={{ opacity: videoOpacity }}
      >
        <source src="/BGVIDEO1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
           style={{ backgroundColor: "#9562EB", opacity: 0.45 }} />
 
      <div className="absolute inset-0 bg-white transition-opacity duration-700 ease-out"
           style={{ opacity: 1 - videoOpacity }} />
 
      <div
        className="absolute bottom-[-250px] w-[750px] h-[750px] bg-gradient-to-r from-purple-500 to-purple-200 rounded-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(-${translateY}px) scale(${scale})`,
          opacity: circleOpacity,
        }}
      ></div>
 
      <div
        className="relative z-10 px-6 md:px-12 text-white transition-all duration-700 ease-out"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`,
        }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-black">
          Jumpstart Your{" "}
          <span className="text-black">ServiceNow</span> <br />
          Journey with <span className="text-black">BANGMETRIC</span>
        </h1>
 
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-black">
          ServiceNow Jumpstart Offerings
        </h2>
 
        <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90 text-black">
          We build tomorrow&apos;s digital landscape and transform the future <br />
          with our exceptional Web and Mobile App Development Services.
        </p>
      </div>
    </section>
  );
}
