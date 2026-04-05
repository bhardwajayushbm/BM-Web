"use client";

export default function LearnGrow() {
  return (
    <section className="w-full bg-white px-4 md:px-[82px] py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="font-[Helvetica] font-normal text-[36px] md:text-[40px] leading-[1] text-black w-full md:w-[505px]">
            Learn & Grow
          </h1>

          <p className="font-[Helvetica] font-normal text-[14px] md:text-[22px] leading-[1.2] text-black w-full md:w-[505px] mt-4">
            Your growth is part of our roadmap. We invest deeply in learning
            because we believe skilled people build powerful outcomes.
          </p>

          <h2 className="font-[Helvetica] font-bold text-[14px] md:text-[30px] leading-[1] text-black w-full md:w-[512px] mt-6 mb-4">
            What you get:
          </h2>

          <div className="relative">
            <div className="flex flex-col gap-[20px] md:gap-[28px] relative z-10">
              
              <div className="flex items-start gap-4">
                <p className="font-[Helvetica] text-[14px] md:text-[25px] leading-[1.1] text-black">
                  Structured L&amp;D programs tailored to each role
                </p>
              </div>

              <div className="flex items-start gap-4">
                <p className="font-[Helvetica] text-[14px] md:text-[25px] leading-[1.1] text-black">
                  Sponsored certifications and skill pathways
                </p>
              </div>

              <div className="flex items-start gap-4">
                <p className="font-[Helvetica] text-[14px] md:text-[25px] leading-[1.1] text-black">
                  Mentorship, coaching, and expert-led knowledge sessions
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative w-full mt-10 md:w-[520px]">
          
          {/* ✅ Purple background FIXED (same height as video) */}
          <div className="hidden md:block absolute -top-10 -right-8 w-[400px] h-[400px] bg-[#E9E4F4]" />

          {/* video container */}
          <div className="relative w-full h-[260px] md:w-[400px] md:h-[400px] bg-[#F3F2F8] overflow-hidden">
            <video
              src="/Life.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}