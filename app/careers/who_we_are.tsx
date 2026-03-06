"use client";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white px-[82px] min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-20 w-full">
        <div>
          <h1 className="font-[Helvetica] font-normal text-[60px] leading-[1] text-black w-[505px] mt-32">
            Who We're Looking For
          </h1>

          <p className="font-[Helvetica] font-normal text-[32px] leading-[1.1] text-black w-[505px] mt-6">
            Problem solvers. Learners.
            <br />
            Team players. People who take
            <br />
            ownership, think beyond tasks,
            <br />
            and deliver outcomes.
          </p>
        </div>

         <div className="relative mt-20 w-[520px] h-[460px]">
          <div className="absolute -top-10 -right-4 w-full h-full bg-[#E9E4F4]" />

          <div className="relative w-[480px] h-[440px] bg-[#F3F2F8] overflow-hidden">
            <video
              src="/careerV1.mp4"
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