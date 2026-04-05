"use client";

export default function BangmetricWay() {
  const steps = [
    {
      title: "Discover & Design",
      desc: "Map value streams, locate friction, align on outcomes and metrics that matter.",
    },
    {
      title: "Automate What Matters",
      desc: "Apply AI, Virtual Agent, and automation where they remove effort and add clarity.",
    },
    {
      title: "Build for Speed",
      desc: "Configure ITSM with intent—every field, workflow, and role supports resolution and flow.",
    },
    {
      title: "Improve Continuously",
      desc: "Operate with real signals (MTTR, FCR, change failure rate). Iterate without chaos.",
    },
  ];

  return (
    <section
      className="w-full bg-[#F4F4F6] py-8 md:py-12"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">

        {/* 🔷 HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-black">
            The BANGMETRIC Way
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black mt-2">
            When ITSM is designed properly, the numbers move
          </p>
        </div>

        {/* 🔷 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-10">

          {steps.map((step, index) => (
            <div key={index} className="relative group">

              {/* DOT */}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -top-[14px] sm:-top-[18px]
                  w-[28px] h-[28px] sm:w-[36px] sm:h-[36px]
                  rounded-full
                  bg-[#CFC4FF]
                  shadow-md
                  z-10
                "
              />

              {/* CARD */}
              <div
                className="
                  flex flex-col sm:flex-row
                  items-start sm:items-center
                  gap-4 sm:gap-6
                  px-4 sm:px-6
                  py-5 sm:py-6
                  rounded-[8px]
                  border border-[#D6D6D6]
                  bg-[#EDEDF1]
                  transition-all duration-300
                  group-hover:bg-[#9383DC]
                  group-hover:text-white
                "
              >
                {/* TITLE */}
                <div className="w-full sm:w-[180px] font-semibold text-[15px] sm:text-[17px] md:text-[18px] leading-tight">
                  {step.title}
                </div>

                {/* DIVIDER */}
                <div className="hidden sm:block w-[1px] h-[60px] bg-black group-hover:bg-white/50" />

                {/* DESC */}
                <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.5]">
                  {step.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}