"use client";

import { Bell } from "lucide-react";

export default function ApplyJobPage() {
    return (
        <section className="w-full bg-white pl-[80px]">
            <div className="w-full max-w-[1155px] font-[Helvetica] text-black">
                <div className="w-[1000px] h-[139px] border border-[#D9D9D9] rounded-[10px] bg-white flex items-center px-6 mt-10 box-border">
                    <div className="w-[37px] h-[37px] flex items-center justify-center text-[#9562EB] mr-4 flex-shrink-0">
                        <Bell size={37} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[30px] font-bold text-black">
                            Create a Job Alert
                        </p>
                        <p className="text-[14px] text-black mt-1">
                            Interested in building your career at NewRocket? Get future opportunities sent straight to your email.
                        </p>
                        <a
                            href="#"
                            className="text-[16px] text-[#9562EB] mt-1 hover:underline w-fit"
                        >
                            Create alert
                        </a>
                    </div>
                </div>
                <div className="w-full mt-16">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h2 className="text-[40px] font-medium text-[#9562EB]">
                                Apply for this job
                            </h2>
                            <p className="text-[16px] text-black mt-1">
                                 Indicates a required field
                            </p>
                        </div>

                        <button
                            className="w-[370px] border border-[#9562EB] text-[#9562EB] text-[16px] px-3 py-1 rounded-[4px] hover:bg-[#9562EB] hover:text-white transition"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Autofill with MyGreenhouse
                        </button>
                    </div>
                    <form className="space-y-5 w-[620px]">
                        <div>
                            <label className="block text-[16px] mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full h-[34px] border border-[#E5E5E5] rounded-[4px] px-3 text-[13px] outline-none focus:border-[#9562EB]"
                            />
                        </div>
                        <div>
                            <label className="block text-[16px] mb-1">Last Name</label>
                            <input
                                type="text"
                                className="w-full h-[34px] border border-[#E5E5E5] rounded-[4px] px-3 text-[13px] outline-none focus:border-[#9562EB]"
                            />
                        </div>
                        <div>
                            <label className="block text-[16px] mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full h-[34px] border border-[#E5E5E5] rounded-[4px] px-3 text-[13px] outline-none focus:border-[#9562EB]"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[40%]">
                                <label className="block text-[16px] mb-1">Country</label>
                                <select className="w-full h-[34px] border border-[#E5E5E5] rounded-[4px] px-3 text-[13px] text-gray-500 outline-none focus:border-[#9562EB]">
                                    <option>Select...</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                </select>
                            </div>

                            <div className="w-[60%]">
                                <label className="block text-[16px] mb-1">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full h-[34px] border border-[#E5E5E5] rounded-[4px] px-3 text-[13px] outline-none focus:border-[#9562EB]"
                                />
                            </div>
                        </div>
                        <div className="w-[40%] space-y-4">
                            <div>
                                <label className="block text-[16px] mb-1">Resume/CV</label>
                                <label
                                    className="
                    w-full h-[34px]
                    border border-[#9562EB]
                    rounded-[4px]
                    flex items-center justify-center
                    px-3
                    text-[13px] text-[#9562EB] text-center
                    cursor-pointer
                    transition-all duration-200
                    hover:border-[#7B5CFF]
                    hover:text-white
                    hover:bg-[#9562EB]
                  "
                                >
                                    Attach
                                    <input type="file" className="hidden" />
                                </label>
                            </div>
                            <div>
                                <label
                                    className="
                    w-full h-[34px]
                    border border-[#9562EB]
                    rounded-[4px]
                    flex items-center justify-center
                    px-3
                    text-[13px] text-[#9562EB] text-center
                    cursor-pointer
                    transition-all duration-200
                    hover:border-[#7B5CFF]
                    hover:text-white
                    hover:bg-[#9562EB]
                  "
                                >
                                    Portfolio
                                    <input type="file" className="hidden" />
                                </label>

                                <p className="font-helvetica text-[11px] text-black mt-1">
                                    Accepted file types: pdf, doc, docx
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}