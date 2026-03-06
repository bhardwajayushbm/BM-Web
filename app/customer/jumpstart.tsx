"use client";

export default function CSMJumpstartSection() {
  return (
    <section className="w-full bg-black py-24 px-4 md:px-8 lg:px-12 flex justify-center">
      <div className="w-full max-w-[1200px] text-center font-helvetica">

        {/* Heading */}
        <h2 className="text-white text-[30px] md:text-[48px]  mb-2">
          Our CSM Jumpstart Offerings
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-[24px] mb-14">
          BANGMETRIC delivers value fast, without compromising design.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

          {/* Card 1 */}
          <div
            className="
              w-full md:w-[679px]
              h-[250px]
              rounded-[20px]
              border border-[#9562EB]
              bg-black
              text-left
              p-8
              transition-all duration-300
              hover:bg-[#9F9EF2]
            "
            style={{
              boxShadow: "inset 0px 0px 4.3px 3px rgba(0,0,0,0.28)"
            }}
          >
            <h3 className="text-[30px] font-semibold mb-4 text-white">
              45-Day CSM Standard
            </h3>
            <p className="text-[16px] leading-[1.5] text-white">
              A clean, expertly designed CSM foundation delivered with
              speed and clarity. Ideal for organisations wanting a strong
              core built right the first time, without unnecessary complexity.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              w-full md:w-[679px]
              h-[250px]
              rounded-[20px]
              border border-[#9562EB]
              bg-black
              text-left
              p-8
              transition-all duration-300
              hover:bg-[#9F9EF2]
            "
            style={{
              boxShadow: "inset 0px 0px 4.3px 3px rgba(0,0,0,0.28)"
            }}
          >
            <h3 className="text-[30px] font-semibold mb-4 text-white">
              60-Day CSM Pro
            </h3>
            <p className="text-[16px] leading-[1.5] text-white">
              For teams ready to unlock CSM Pro capabilities. Intelligent
              workflows, AI supported service, and scalable design,
              delivered deliberately, not rushed.
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <button
            className="
              w-[180px]
              h-[40px]
              rounded-[6px]
              bg-[#9562EB]
              text-white
              text-[16px]
              font-medium
              transition hover:opacity-90
              flex items-center justify-center
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download Now
          </button>
        </div>

      </div>
    </section>
  );
}