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
  const videoOpacity = Math.min(1, scrollY / 300);
  
  // Hero section ko fade out karo jab content fully visible ho
  const heroOpacity = Math.max(0, 1 - (scrollY - 400) / 200);
  
  // Text ko tab dikhao jab video opacity 0.8+ ho (almost fully visible)
  const textOpacity = videoOpacity >= 0.8 ? 1 : 0;

  return (
    <section className="relative w-full min-h-[160vh] text-center overflow-hidden bg-white">
      {/* Fixed Hero Container - ye fade out hoga */}
      <div
        className="fixed inset-0 z-20 pointer-events-none transition-opacity duration-500"
        style={{ opacity: heroOpacity }}
      >
        {/* Fullscreen Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-screen object-cover object-bottom transition-opacity duration-700 ease-out"
          style={{ opacity: videoOpacity }}
        >
          <source src="/BGVIDEO1.mp4" type="video/mp4" />
        </video>

        {/* Purple Overlay ye h */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
          style={{ backgroundColor: "#ae9ecaff", opacity: videoOpacity * 0.45 }}
        />

        {/* White Fade Layer ye h */}
        <div
          className="absolute inset-0 bg-white transition-opacity duration-700 ease-out"
          style={{ opacity: 1 - videoOpacity }}
        />

        {/* Animated Gradient Circle yaha par h */}
        <div
          className="absolute left-1/2 bottom-[-350px] -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-r from-[#d6c8fe] via-[#d8cdff] to-[#ffffff] rounded-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate(-50%, -${translateY}px) scale(${scale})`,
            opacity: circleOpacity,
          }}
        ></div>

        {/* Foreground Text Content yaha h */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10 px-6 md:px-12 transition-opacity duration-300 ease-out"
          style={{ opacity: textOpacity }}
        >
          <div>
          
            <h1
              className="font-bold mb-6 text-black"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "80px",
                lineHeight: "105px",
                letterSpacing: "0px",
              }}
            >
              Jumpstart Your{" "}
              <span className="text-black">
                servicen<span className="text-green-500">o</span>w
              </span>{" "}
              <br />
              Journey with <span className="text-black">BANGMETRIC</span>
            </h1>

          
            <h2
              className="font-normal mb-5 text-black"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "50px",
                lineHeight: "100%",
              }}
            >
              ServiceNow Jumpstart Offerings
            </h2>

          
            <p
              className="max-w-2xl mx-auto text-black opacity-90"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              We build tomorrow&apos;s digital landscape and transform the future <br />
              with our exceptional Web and Mobile App Development Services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}