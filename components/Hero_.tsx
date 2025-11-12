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
    <section className="relative flex items-center justify-center w-full h-screen text-center overflow-hidden bg-black">
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-out"
        style={{
          opacity: videoOpacity,
        }}
      >
        <source src="/BGVIDEO1.mp4" type="video/mp4" />
      </video>

      {/* Purple Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
        style={{ backgroundColor: "#ae9ecaff", opacity: 0.45 }}
      />

      {/* White Fade Layer */}
      <div
        className="absolute inset-0 bg-white transition-opacity duration-700 ease-out"
        style={{ opacity: 1 - videoOpacity }}
      />

      {/* Animated Gradient Circle */}
      <div
        className="absolute bottom-[-250px] w-[750px] h-[750px] bg-gradient-to-r from-[#d6c8fe] via-[#d8cdff] to-[#ffffff] rounded-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(-${translateY}px) scale(${scale})`,
          opacity: circleOpacity,
        }}
      ></div>

      {/* Foreground Text Content */}
      <div
        className="relative z-10 px-6 md:px-12 text-white transition-all duration-700 ease-out"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`,
        }}
      >
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 leading-tight text-black">
          Jumpstart Your{" "}
          <span className="text-black">
            servicen<span className="text-green-500">o</span>w
          </span>{" "}
          <br />
          Journey with <span className="text-black">BANGMETRIC</span>
        </h1>

        <h2 className="text-2xl md:text-2xl font-semibold mb-3 text-black">
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
