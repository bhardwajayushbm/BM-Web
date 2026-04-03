"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Job = {
  id: number;
  title: string;
  meta: string;
};

export default function JobsPage() {
  const router = useRouter();

  const allJobs: Job[] = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: "Practice Lead",
    meta: "Experienced  |  Full Time  |  Hybrid",
  }));

  const pageSize = 5;
  const totalPages = Math.ceil(allJobs.length / pageSize);

  const [page, setPage] = useState(1);

  const start = (page - 1) * pageSize;
  const jobs = allJobs.slice(start, start + pageSize);

  const handleApply = (jobId: number) => {
    router.push("/join");
  };

  // 🔥 Section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  // 🔥 Each job animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full bg-[#F7F7FB] py-16 flex justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="w-full max-w-[1100px]">

        <motion.p
          className="font-helvetica text-gray-600 mb-6 text-[16px]"
          variants={itemVariants}
        >
          Find a job opening suited for you
        </motion.p>

        <motion.div
          className="bg-white rounded-[4px] shadow-sm border border-gray-200"
          variants={sectionVariants}
        >
          {jobs.map((job, idx) => (
            <motion.div key={job.id} variants={itemVariants}>
              <div className="flex items-center justify-between px-8 py-6">
                <div>
                  <h3 className="text-[15px] font-medium text-black">
                    {job.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 mt-1">{job.meta}</p>
                </div>

                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleApply(job.id)}
                    className="px-4 py-1.5 text-[13px] border border-[#9562EB] text-[#9562EB] rounded-[4px] hover:bg-[#7B5CFF] hover:text-white transition"
                  >
                    Apply Now
                  </button>

                  <button
                    className="text-black hover:text-[#7B5CFF] transition"
                    title="Share"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.02-4.11A2.99 2.99 0 0 0 18 7.91a3 3 0 1 0-3-3c0 .24.04.47.09.7L8.07 9.72A3 3 0 0 0 6 9a3 3 0 1 0 0 6c.96 0 1.82-.45 2.38-1.15l7.02 4.11c-.05.21-.08.43-.08.65a3 3 0 1 0 3-3z" />
                    </svg>
                  </button>
                </div>
              </div>

              {idx !== jobs.length - 1 && (
                <div className="h-px bg-black mx-8" />
              )}
            </motion.div>
          ))}

          {/* Pagination */}
          <motion.div
            className="flex justify-end items-center gap-4 px-8 py-6 text-[13px] text-gray-600"
            variants={itemVariants}
          >
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={
                    page === p
                      ? "text-[#9562EB] font-medium"
                      : "hover:text-[#AB9AE8]"
                  }
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              className="hover:text-[#AB9AE8]"
            >
              Next &gt;
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}