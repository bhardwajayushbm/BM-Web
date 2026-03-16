"use client";

export default function BangmetricThinking() {
  return (
    <section
      className="w-full bg-[#F3F3F5] py-24 flex justify-center"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1000px] w-full text-center relative">

        {/* Heading */}
        <h2 className="text-[42px] text-black mb-20">
          How BANGMETRIC Thinks Differently
        </h2>

        {/* GRAPH AREA */}
        <div className="relative w-[900px] mx-auto h-[260px]">

          {/* ZIGZAG LINE */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 900 260"
            fill="none"
          >
            <polyline
              points="100,140 250,200 400,120 550,200 700,120"
              stroke="#8B6EF3"
              strokeWidth="2"
              fill="none"
            />

            {/* DOTS */}
            <circle cx="100" cy="140" r="8" fill="#CFC4FF" />
            <circle cx="250" cy="200" r="8" fill="#CFC4FF" />
            <circle cx="400" cy="120" r="8" fill="#CFC4FF" />
            <circle cx="550" cy="200" r="8" fill="#CFC4FF" />
            <circle cx="700" cy="120" r="8" fill="#CFC4FF" />
          </svg>

          {/* TEXT BLOCKS */}

          {/* 1 */}
          <div className="absolute left-[2px] top-[40px] w-[180px] text-left">
            <p className="font-semibold text-[16px]">
              Value streams
              <br />
              over ticket queues
            </p>
          </div>

          {/* 2 */}
          <div className="absolute left-[210px] top-[210px] w-[200px] text-left">
            <p className="font-semibold text-[16px]">
              Rightsized, right now
            </p>
            <p className="text-[14px] text-gray-700">
              (what you need today,
              expandable tomorrow)
            </p>
          </div>

          {/* 3 */}
          <div className="absolute left-[360px] top-[20px] w-[230px] text-left">
            <p className="font-semibold text-[16px]">
              Flow metrics over vanity
            </p>
            <p className="text-[14px] text-gray-700">
              metrics (MTTD/MTTR, FCR,
              change failure rate,
              employee effort)
            </p>
          </div>

          {/* 4 */}
          <div className="absolute left-[510px] top-[210px] w-[200px] text-left">
            <p className="font-semibold text-[16px]">
              AI with intent
            </p>
            <p className="text-[14px] text-gray-700">
              (triage insight,
              knowledge, change risk)
            </p>
          </div>

          {/* 5 */}
          <div className="absolute left-[760px] top-[40px] w-[180px] text-left">
            <p className="font-semibold text-[16px]">
              Resolution over
              <br />
              SLA theatre
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}