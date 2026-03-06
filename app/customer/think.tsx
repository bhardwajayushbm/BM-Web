"use client";

export default function HowBangmetricThinks() {
  return (
    <section className="w-full bg-[#F5F5F7] py-28 font-helvetica">
      <div className="max-w-[1150px] mx-auto px-10">

        {/* HEADING */}
        <h2 className="text-[48px] font-normal leading-[1.15] mb-20">
          How BANGMETRIC <br /> Thinks Differently
        </h2>

        <div className="relative">

          {/* ================= FLOW SVG ================= */}
          <svg
            className="absolute top-[25px] left-0 w-full"
            height="240"
            viewBox="0 0 1150 240"
            fill="none"
          >
            <defs>
              <marker
                id="arrowRight"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6" fill="#8B5CF6" />
              </marker>

              <marker
                id="arrowLeft"
                markerWidth="8"
                markerHeight="8"
                refX="0"
                refY="3"
                orient="auto"
              >
                <path d="M6,0 L0,3 L6,6" fill="#8B5CF6" />
              </marker>
            </defs>

            {/* Top Line */}
            <line
              x1="70"
              y1="30"
              x2="650"
              y2="30"
              stroke="#8B5CF6"
              strokeWidth="2"
              markerEnd="url(#arrowRight)"
            />

            {/* PERFECTLY MATCHED CURVE */}
            <path
              d="M650 30 
                 Q1080 30 1080 120 
                 Q1080 210 650 210"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
            />

            {/* Bottom Line */}
            <line
              x1="650"
              y1="210"
              x2="70"
              y2="210"
              stroke="#8B5CF6"
              strokeWidth="2"
              markerEnd="url(#arrowLeft)"
            />

            {/* Dots aligned to content */}
            <circle cx="45" cy="30" r="10" fill="#C4B5FD" />
            <circle cx="680" cy="30" r="10" fill="#C4B5FD" />
            <circle cx="680" cy="210" r="10" fill="#C4B5FD" />
            <circle cx="45" cy="210" r="10" fill="#C4B5FD" />
          </svg>

          {/* ================= CONTENT ================= */}
          <div className="relative grid grid-cols-2 gap-x-16 gap-y-24 pt-16">

            {/* Row 1 Left */}
            <div className="max-w-[420px]">
              <h3 className="text-[22px] font-bold leading-[1.3]">
                We start with journeys,<br /> not queues
              </h3>
              <p className="text-[15px] mt-1 leading-[1.5] text-black">
                Customers don’t experience “cases” they experience journeys.
                We design around that reality.
              </p>
            </div>

            {/* Row 1 Right */}
            <div className="max-w-[420px]">
              <h3 className="text-[22px] font-bold leading-[1.3]">
                We design for resolution,<br /> not compliance
              </h3>
              <p className="text-[15px] mt-1 leading-[1.5] text-black">
                SLAs matter, but resolution matters more.
                Every workflow exists to get customers unstuck faster.
              </p>
            </div>

            {/* Row 2 Left */}
            <div className="max-w-[420px]">
              <h3 className="text-[22px] font-bold leading-[1.3]">
                We apply AI with intent
              </h3>
              <p className="text-[15px] mt-1 leading-[1.5] text-black">
                AI is not something you switch on. It’s applied deliberately
                to remove friction, guide decisions, and create clarity.
              </p>
            </div>

            {/* Row 2 Right */}
            <div className="max-w-[420px]">
              <h3 className="text-[22px] font-bold leading-[1.3]">
                We measure what customers feel
              </h3>
              <p className="text-[15px] mt-1 leading-[1.5] text-black">
                Speed, consistency, transparency, and confidence.
                If customers don’t feel improvement, the system hasn’t improved.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}