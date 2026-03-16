"use client";

export default function BangmetricThinkingFlow() {
  return (
    <section
      className="w-full bg-[#F3F3F5] py-24 flex justify-center"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="w-full max-w-[1100px] relative">

        {/* Heading */}
        <h2 className="text-[44px] leading-[1.2] text-black mb-16">
          How BANGMETRIC
          <br />
          Thinks Differently
        </h2>

        {/* FLOW AREA */}
        <div className="relative h-[300px]">

          {/* FLOW LINES */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1100 300"
            fill="none"
          >

            {/* TOP LINE */}
            <line
              x1="40"
              y1="55"
              x2="520"
              y2="55"
              stroke="#8B6EF3"
              strokeWidth="2"
            />

            {/* TOP ARROW */}
            <polygon
              points="520,55 505,48 505,62"
              fill="#8B6EF3"
            />

            {/* CURVE */}
            <path
              d="M520 55 H820 Q900 55 900 120 Q900 210 820 210 H520"
              stroke="#8B6EF3"
              strokeWidth="2"
              fill="none"
            />

            {/* BOTTOM LINE */}
            <line
              x1="520"
              y1="210"
              x2="40"
              y2="210"
              stroke="#8B6EF3"
              strokeWidth="2"
            />

            {/* BOTTOM ARROW */}
            <polygon
              points="40,210 55,203 55,217"
              fill="#8B6EF3"
            />

            {/* DOTS */}
            <circle cx="40" cy="55" r="7" fill="#CFC4FF" />
            <circle cx="520" cy="55" r="7" fill="#CFC4FF" />
            <circle cx="520" cy="210" r="7" fill="#CFC4FF" />
            <circle cx="40" cy="210" r="7" fill="#CFC4FF" />

          </svg>

          {/* TEXT BLOCKS */}

          {/* Top Left */}
          <div className="absolute left-[60px] top-[75px] w-[320px]">
            <h3 className="font-semibold text-[18px]">
              We start with journeys,
              <br />
              not queues
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Customers don’t experience “cases” they experience journeys.
              We design around that reality.
            </p>
          </div>

          {/* Top Right */}
          <div className="absolute left-[560px] top-[75px] w-[320px]">
            <h3 className="font-semibold text-[18px]">
              We design for resolution,
              <br />
              not compliance
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              SLAs matter, but resolution matters more.
              Every workflow exists to get customers unstuck faster.
            </p>
          </div>

          {/* Bottom Left */}
          <div className="absolute left-[60px] top-[235px] w-[320px]">
            <h3 className="font-semibold text-[18px]">
              We apply AI with intent
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              AI is not something you switch on. It’s applied deliberately
              to remove friction, guide decisions, and create clarity.
            </p>
          </div>

          {/* Bottom Right */}
          <div className="absolute left-[560px] top-[235px] w-[320px]">
            <h3 className="font-semibold text-[18px]">
              We measure what customers feel
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Speed, consistency, transparency, and confidence.
              If customers don’t feel improvement, the system hasn’t improved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}