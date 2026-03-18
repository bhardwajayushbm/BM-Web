"use client";

import { Bell } from "lucide-react";

export default function ApplyJobPage() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-[80px] py-10 flex justify-center">
      <div className="w-full max-w-[955px] font-[Helvetica] text-black">

        {/* Job Alert Card */}
        <div className="w-full border border-[#D9D9D9] rounded-[10px] bg-white flex items-start sm:items-center gap-4 p-6">
          
          <div className="w-[37px] h-[37px] flex items-center justify-center text-[#9562EB] flex-shrink-0">
            <Bell size={37} strokeWidth={2.5} />
          </div>

          <div>
            <p className="text-[22px] sm:text-[26px] md:text-[30px] font-bold">
              Create a Job Alert
            </p>

            <p className="text-[14px] mt-1">
              Interested in building your career at NewRocket? Get future
              opportunities sent straight to your email.
            </p>

            <a
              href="#"
              className="text-[16px] text-[#9562EB] mt-1 hover:underline inline-block"
            >
              Create alert
            </a>
          </div>

        </div>

        {/* Apply Section */}
        <div className="w-full mt-16">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

            <div>
              <h2 className="text-[20px] sm:text-[20px] md:text-[20px] font-medium text-[#9562EB]">
                Apply for this job
              </h2>

              <p className="text-[16px] mt-1">
                Indicates a required field
              </p>
            </div>

            <button
              className="w-full md:w-[370px] border border-[#9562EB] text-[#9562EB] text-[16px] px-3 py-2 rounded-[4px] hover:bg-[#9562EB] hover:text-white transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Autofill with MyGreenhouse
            </button>

          </div>

          {/* Form */}
          <form className="space-y-6 w-full max-w-[620px]">

            <div>
              <label className="block text-[16px] mb-1">Name</label>
              <input
                type="text"
                className="w-full h-[40px] border border-black rounded-[4px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
              />
            </div>

            <div>
              <label className="block text-[16px] mb-1">Last Name</label>
              <input
                type="text"
                className="w-full h-[40px] border border-black rounded-[4px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
              />
            </div>

            <div>
              <label className="block text-[16px] mb-1">Email</label>
              <input
                type="email"
                className="w-full h-[40px] border border-black rounded-[4px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
              />
            </div>

            {/* Country + Phone */}
            <div className="flex flex-col sm:flex-row gap-4">

              <div className="w-full sm:w-[40%]">
                <label className="block text-[16px] mb-1">Country</label>
                <select className="w-full h-[40px] border border-black rounded-[4px] px-3 text-[14px] outline-none focus:border-[#9562EB]">
                  <option>Select...</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>

              <div className="w-full sm:w-[60%]">
                <label className="block text-[16px] mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full h-[40px] border border-black rounded-[4px] px-3 text-[14px] outline-none focus:border-[#9562EB]"
                />
              </div>

            </div>

            {/* Resume Upload Section */}
            <div className="w-full max-w-[400px] space-y-3">

              <div>
                <label className="block text-[16px] mb-2">Resume/CV</label>

                <label
                  className="
                    w-[300px] h-[40px]
                    border border-[#9562EB]
                    rounded-[6px]
                    flex items-center justify-center
                    text-[14px] text-[#9562EB]
                    cursor-pointer
                    hover:bg-[#9562EB]
                    hover:text-white
                    transition
                  "
                >
                  Attach
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div>
                <label
                  className="
                    w-[300px] h-[40px]
                    border border-[#9562EB]
                    rounded-[6px]
                    flex items-center justify-center
                    text-[14px] text-[#9562EB]
                    cursor-pointer
                    hover:bg-[#9562EB]
                    hover:text-white
                    transition
                  "
                >
                  Portfolio
                  <input type="file" className="hidden" />
                </label>
              </div>

              <p className="text-[12px] text-gray-600">
                Accepted file types: pdf, doc, docx
              </p>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}