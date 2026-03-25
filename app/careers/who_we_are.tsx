"use client";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white min-h-screen flex items-center">
      <div className="max-w-[1100px] mx-auto flex items-start justify-between gap-20 w-full">
        <div>
          <h1 className="font-[Helvetica] font-normal text-[36px] leading-[1.2] text-black w-[505px] mt-32 ml-8">
            Who We're <br />
            Looking For
          </h1>

          <p className="font-[Helvetica] font-normal text-[20px] leading-[1.2] text-black w-[600px] mt-6 ml-8">
            Problem solvers. Learners.
            <br />
            Team players. People who take
            <br />
            ownership, think beyond tasks,
            <br />
            and deliver outcomes.
          </p>
        </div>

        <div className="relative mt-20 w-[400px] h-[360px]">
          <div className="absolute -top-10 -right-4 w-full h-full bg-[#E9E4F4]" />

          <div className="relative w-[360px] h-[340px] bg-[#F3F2F8] overflow-hidden">
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