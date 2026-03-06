"use client";

export default function LearnGrow() {
  return (
    <section className="w-full bg-white px-[82px] py-24">
      <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-20">
        <div>
          <h1 className="font-[Helvetica] font-normal text-[60px] leading-[1] text-black w-[505px] h-[92px]">
            Learn & Grow
          </h1>
          <p className="font-[Helvetica] font-normal text-[30px] leading-[1] text-black w-[505px] h-[160px]">
            Your growth is part of our roadmap. We invest deeply in learning
            because we believe skilled people build powerful outcomes.
          </p>
          <h2 className="font-[Helvetica] font-bold text-[40px] leading-[1] text-black w-[512px] h-[46px] mb-4">
            What you get:
          </h2>
          <div className="relative">
            <div className="absolute left-[17px] top-[18px] h-[180px] w-[1px] bg-black z-0" />

            <div className="flex flex-col gap-[28px] relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-[35px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
                <p className="font-[Helvetica] font-normal text-[25px] leading-[1.2] text-black w-[508px]">
                  Structured L&amp;D programs tailored to each role
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[35px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
                <p className="font-[Helvetica] font-normal text-[25px] leading-[1.2] text-black w-[508px]">
                  Sponsored certifications and skill pathways
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[35px] h-[35px] rounded-full bg-[#D8CDFF] shadow-[inset_3px_2px_3.5px_#AB9AE8] z-10" />
                <p className="font-[Helvetica] font-normal text-[25px] leading-[1.2] text-black w-[508px]">
                  Mentorship, coaching, and expert-led knowledge sessions
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="relative mt-10 w-[520px] h-[540px]">
          <div className="absolute -top-10 -right-8 w-full h-full bg-[#E9E4F4]" />

          <div className="relative w-[480px] h-[500px] bg-[#F3F2F8] overflow-hidden">
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
