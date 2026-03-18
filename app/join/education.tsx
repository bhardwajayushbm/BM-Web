"use client";

import { useState } from "react";

type EducationItem = {
  school: string;
  degree: string;
  discipline: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
};

export default function EducationSection() {
  const [educations, setEducations] = useState<EducationItem[]>([
    {
      school: "",
      degree: "",
      discipline: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    },
  ]);

  const addEducation = () => {
    setEducations((prev) => [
      ...prev,
      {
        school: "",
        degree: "",
        discipline: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      },
    ]);
  };

  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-[80px] flex justify-center">
      <div className="w-full max-w-[955px] font-[Helvetica] text-black">

        <div className="w-full h-px bg-[#8A8A8A] my-10"></div>

        {/* EDUCATION FORM */}
        <div className="w-full max-w-[620px]">

          <h2 className="text-[22px] font-semibold mb-6">Education</h2>

          <div className="space-y-10">

            {educations.map((edu, index) => (
              <div key={index} className="space-y-5">

                <div>
                  <label className="block text-[16px] mb-1">School</label>
                  <input
                    type="text"
                    placeholder="Select.."
                    className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                  />
                </div>

                <div>
                  <label className="block text-[16px] mb-1">Degree</label>
                  <input
                    type="text"
                    placeholder="Select.."
                    className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                  />
                </div>

                <div>
                  <label className="block text-[16px] mb-1">Discipline</label>
                  <input
                    type="text"
                    placeholder="Select.."
                    className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                  />
                </div>

                {/* START DATE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-[16px] mb-1">
                      Start date month
                    </label>
                    <input
                      type="month"
                      className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] mb-1">
                      Start date year
                    </label>
                    <input
                      type="month"
                      className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                    />
                  </div>

                </div>

                {/* END DATE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-[16px] mb-1">
                      End date month
                    </label>
                    <input
                      type="month"
                      className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] mb-1">
                      End date year
                    </label>
                    <input
                      type="month"
                      className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                    />
                  </div>

                </div>

              </div>
            ))}

            <button
              type="button"
              onClick={addEducation}
              className="text-[18px] text-[#9562EB] hover:underline mt-2"
            >
              Add Another
            </button>

          </div>
        </div>

        <div className="w-full h-px bg-[#8A8A8A] my-10"></div>

        {/* LINKS */}
        <div className="w-full max-w-[620px] space-y-5">

          <div>
            <label className="block text-[16px] mb-1">
              Linkedin Profile
            </label>

            <input
              type="url"
              className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
            />
          </div>

          <div>
            <label className="block text-[16px] mb-1">
              Website
            </label>

            <input
              type="url"
              className="w-full h-[38px] border border-black rounded-[6px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
            />
          </div>

        </div>

        {/* SUBMIT BUTTON */}
        <div className="w-full flex justify-center sm:justify-end mt-8">

          <button
            type="submit"
            className="
              w-full sm:w-[370px]
              h-[44px]
              rounded-[6px]
              bg-[#9562EB]
              text-white
              text-[16px]
              font-medium
              shadow-md
              hover:opacity-90
              transition
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Submit Application
          </button>

        </div>

        <div className="w-full h-px bg-[#8A8A8A] my-10"></div>

      </div>
    </section>
  );
}