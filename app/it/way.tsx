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
      className="w-full bg-[#F4F4F6] py-8"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">

        <div className="text-center mb-20">
          <h2 className="text-[44px] font-semibold text-black">
            The BANGMETRIC Way
          </h2>

          <p className="text-[18px] text-black mt-2">
            When ITSM is designed properly, the numbers move
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10">

          {steps.map((step, index) => (
            <div key={index} className="relative group">

              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -top-[18px]
                  w-[36px]
                  h-[36px]
                  rounded-full
                  bg-[#CFC4FF]
                  shadow-md
                  z-10
                "
              />

              <div
                className="
                  flex
                  items-center
                  gap-6
                  px-6
                  py-6
                  rounded-[8px]
                  border
                  border-[#D6D6D6]
                  bg-[#EDEDF1]
                  transition-all
                  duration-300
                  group-hover:bg-[#9383DC]
                  group-hover:text-white
                "
              >
                <div className="w-[180px] font-semibold text-[18px] leading-tight">
                  {step.title}
                </div>
                <div className="w-[1px] h-[60px] bg-black" />
                <p className="text-[15px] leading-[1.5]">
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