"use client";

import Image from "next/image";
import Link from "next/link";

export default function ZurichReleasePage() {
    return (
        <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-10 py-16">
            <div className="w-full max-w-[955px] font-helvetica text-black">
                <h1 className="text-[26px] font-normal leading-[100%] mb-4">
                    Introduction
                </h1>

                <p className="text-[16px] font-normal leading-[1.4] mb-4">
                    ServiceNow’s Zurich release has introduced a powerful new feature
                    “Saved Scheduled Triggers” in Flow Designer. This comprehensive guide
                    will walk you through everything you need to know about creating,
                    configuring, and leveraging these new triggers for maximum efficiency.
                </p>

                <p className="text-[16px] font-normal leading-[1.4] mb-4">
                    The ability to create reusable scheduled triggers represents a
                    significant advancement in ServiceNow’s workflow automation
                    capabilities, addressing the long-standing need for standardized
                    scheduling components that can be shared across multiple flows and
                    applications.
                </p>

                <p className="text-[16px] font-normal leading-[1.4] mb-8">
                    What Are Saved Scheduled Triggers? Saved Scheduled Triggers are reusable
                    trigger components in ServiceNow Flow Designer that allow you to create
                    standardized scheduling patterns that can be used across multiple flows.
                    Instead of recreating the same scheduling logic repeatedly, you can now
                    build once and reuse wherever needed.
                </p>
                <h2 className="text-[18px] font-normal leading-[100%] mb-4">
                    Key Benefits:
                </h2>

                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-10 space-y-2">
                    <li>Reusability: Create once, use in multiple flows</li>
                    <li>Consistency: Standardized scheduling across all workflows</li>
                    <li>Maintenance Efficiency: Update scheduling logic in one place</li>
                    <li>Time Savings: Reduce development time significantly</li>
                    <li>
                        Cross-Application Support: Share triggers across different application
                        scopes
                    </li>
                </ul>
                <h2 className="text-[18px] font-normal leading-[100%] mb-6">
                    Getting Started: Creating Your First Saved Scheduled Trigger
                </h2>

                <h3 className="text-[18px] font-normal leading-[100%] mb-4">
                    Step 1: Accessing the Trigger Creation Interface
                </h3>

                <div className="w-full flex mb-10">
                    <div className="w-[746px] max-w-full">
                        <Image
                            src="/z1.png"
                            alt="Step 1 Screenshot"
                            width={746}
                            height={296}
                            className="w-full h-auto rounded-[6px] border border-gray-200"
                        />
                    </div>
                </div>

                <h3 className="text-[18px] font-normal leading-[100%] mb-4">
                    Step 2: Select the Trigger Type – Recurrence
                </h3>

                <div className="w-full flex mb-10">
                    <div className="w-[746px] max-w-full">
                        <Image
                            src="/z2.png"
                            alt="Step 2 Screenshot"
                            width={746}
                            height={296}
                            className="w-full h-auto rounded-[6px] border border-gray-200"
                        />
                    </div>
                </div>

                <p className="text-[16px] font-normal leading-[1.4] mb-10">
                    The new recurrence trigger type offers unprecedented flexibility in
                    scheduling. Key configuration options include:
                </p>
                <h2 className="text-[18px] font-normal leading-[100%] mb-4">
                    Trigger Definition:
                </h2>

                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-10 space-y-2">
                    <li>Specify trigger name and description</li>
                    <li>Select “Recurrence” as the trigger type</li>
                    <li>Scheduling Details:</li>
                    <li>Time Zone Support: Configure triggers for any time zone</li>
                    <li>Start Date and Time: Set when the trigger should begin</li>
                    <li>
                        Repeat Patterns: Choose from various repetition options
                    </li>
                    <li>
                        End Date Options: “Set automatic expiration dates” or “No end date”
                    </li>
                </ul>
                <h2 className="text-[18px] font-normal leading-[100%] mb-4">
                    Scheduling Pattern:
                </h2>

                <p className="text-[18px] font-normal leading-[1.4] mb-4">
                    Use the Repeat and Every fields to define the schedule for the trigger.
                </p>

                <h3 className="text-[18px] font-normal leading-[100%] mb-2">
                    Daily
                </h3>
                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>
                        Runs every day or at your chosen interval of days. For example,
                        everyday, every 2 days, every 3 days and so on.
                    </li>
                </ul>

                <h3 className="text-[18px] font-normal leading-[100%] mb-2">
                    Weekly
                </h3>
                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>
                        Runs every week or at your chosen interval of weeks. For example,
                        every 2, 3, or 5 weeks.
                    </li>
                    <li>
                        Select on which days of the week you want the trigger to run. For
                        example, every Monday and Friday.
                    </li>
                </ul>

                <h3 className="text-[18px] font-normal leading-[100%] mb-2">
                    Monthly
                </h3>
                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>
                        Runs every month or at your chosen interval of months, for example,
                        every 2, 3, or 24 months.
                    </li>
                </ul>

                <p className="text-[18px] font-normal leading-[110%] mb-2">
                    Select on which day of the month you want the trigger to run:
                </p>

                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>Fixed day, for example, on the first day of the month.</li>
                    <li>
                        Relative weekday, for example, every first Monday of the month.
                    </li>
                </ul>

                <h3 className="text-[18px] font-normal leading-[100%] mb-2">
                    Yearly
                </h3>
                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>Runs every year in the selected month.</li>
                </ul>

                <p className="text-[18px] font-normal leading-[110%] mb-2">
                    Select on which day of the month you want the trigger to run:
                </p>

                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>Fixed day, for example, on the first day of the month.</li>
                    <li>
                        Relative weekday, for example, every fourth Friday of the month.
                    </li>
                </ul>
                <h3 className="text-[18px] font-normal leading-[100%] mb-2">
                    Time interval
                </h3>
                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>Runs at a specific time interval. Specify the interval in hh:mm:ss format. For example, you can create a trigger that runs every 36 hours and 30 minutes (36:30:00).</li>
                </ul>
                <div className="w-full flex mb-10">
                    <div className="w-[746px] max-w-full">
                        <Image
                            src="/z3.png"
                            alt="Step 2 Screenshot"
                            width={746}
                            height={296}
                            className="w-full h-auto rounded-[6px] border border-gray-200"
                        />
                    </div>
                </div>
                <h3 className="text-[18px] font-normal leading-[100%] mb-2">
                    Does not repeat
                </h3>
                <ul className="list-disc pl-6 text-[16px] leading-[1.4] mb-6 space-y-2">
                    <li>Runs only once at the specified date and time.</li>
                </ul>
                <div className="w-full flex mb-10">
                    <div className="flex items-end justify-between w-full max-w-[1290px]">
                        <div className="w-[746px] max-w-full">
                            <Image
                                src="/z4.png"
                                alt="Does Not Repeat Screenshot"
                                width={746}
                                height={296}
                                className="w-full h-auto rounded-[6px] border border-gray-200"
                            />
                        </div>
                        <Link href="/resources">
                            <button
                                className=" w-[161px] h-[36px] rounded-[6px] bg-[#9562EB] text-white text-[16px] font-medium
                                  flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition "
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                Read More
                                 <Image src="/arrow.png" alt="Arrow" width={22} height={22}
                                    className="object-contain invert brightness-0" />
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}