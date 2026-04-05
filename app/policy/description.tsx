"use client";

import { motion } from "framer-motion";

export default function PrivacyContent() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full flex justify-center px-4 pt-4 sm:pt-6 md:pt-8 pb-10 md:pb-16 bg-white font-helvetica">

            {/* ✅ SINGLE CENTERED CONTAINER */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full max-w-[900px] mx-auto text-black"
            >

                {/* 🔝 TOP CONTENT */}
                <motion.div variants={item} className="mb-10">

                    {/* Last Updated */}
                    <p className="text-gray-500 text-[13px] sm:text-[14px] md:text-[16px] mb-6">
                        Last Updated: 1-04-2026
                    </p>

                    {/* Paragraph (exact 3 lines + correct bold) */}
                    <p className="text-[13px] sm:text-[14px] md:text-[16px] leading-[1.6] mb-6">
                        <span className="font-normal">
                            BANGMETRIC Services (“BANGMETRIC”, “we”, “our”, “us”)
                        </span>{" "}
                        is committed to <br />
                        protecting your personal data and ensuring transparency in how it is collected, <br />
                        used, and shared, in compliance with:
                    </p>

                    {/* Bullet Points */}
                    <ul className="list-disc pl-6 text-[13px] sm:text-[14px] md:text-[16px] leading-[1.4] mb-6">
                        <li>General Data Protection Regulation (GDPR)</li>
                        <li>Digital Personal Data Protection Act, 2023 (India)</li>
                    </ul>

                    {/* Website */}
                    <p className="text-[13px] sm:text-[14px] md:text-[16px] leading-[1.4]">
                        Our website address is:{" "}
                        <span className="font-medium">www.bangmetric.com</span>
                    </p>
                </motion.div>

                {/* 🔹 SECTION 2 */}
                <motion.div variants={item} className="mb-6">
                    <h2 className="font-bold text-[26px] md:text-[28px] mb-2">
                        2. Personal Data We Collect
                    </h2>

                    <h3 className="font-bold text-[14px] md:text-[16px] mb-2">
                        a. Information You Provide
                    </h3>

                    <p className="text-[13px] md:text-[15px] mb-2">
                        We collect personal data when you:
                    </p>

                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] mb-4 space-y-1">
                        <li>Fill out contact forms</li>
                        <li>Request demos or services</li>
                        <li>Subscribe to newsletters</li>
                        <li>Engage with us via email or chat</li>
                    </ul>

                    <p className="text-[13px] md:text-[15px] mb-2">
                        This may include:
                    </p>

                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company name and designation</li>
                        <li>Any additional information voluntarily provided</li>
                    </ul>
                </motion.div>

                {/* 🔹 SECTION 2B */}
                <motion.div variants={item} className="mb-6">
                    <h3 className="font-bold text-[14px] md:text-[16px] mb-2">
                        b. Automatically Collected Data
                    </h3>

                    <p className="text-[13px] md:text-[15px] mb-2">
                        When you visit our website, we may collect:
                    </p>

                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                        <li>IP address</li>
                        <li>Browser type and device information</li>
                        <li>Pages visited and interaction data</li>
                        <li>Date/time stamps and referring URLs</li>
                    </ul>
                </motion.div>
                <motion.div variants={item} className="mb-6">
                    <h3 className="font-bold text-[14px] md:text-[16px] mb-2">
                        c. Comments & User-Generated Content
                    </h3>

                    <p className="text-[13px] md:text-[15px] mb-2">
                        If you leave comments:
                    </p>

                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-2">
                        <li>We collect data shown in the comment form</li>
                        <li>IP address and browser details may be collected for spam detection</li>
                    </ul>
                    <p className="text-[13px] md:text-[15px] mb-2">
                        Profile-related services (if enabled) may display publicly visible information.
                    </p>
                </motion.div>
                <motion.div variants={item} className="mb-6">
                    <h3 className="font-bold text-[14px] md:text-[16px] mb-2">
                        d. Media Uploads
                    </h3>

                    <p className="text-[13px] md:text-[15px] mb-2 leading-[1.6]">
                        If you upload images, avoid including embedded location data (EXIF GPS), as
                        <br />
                        such data may be accessible to others.
                    </p>
                </motion.div>

                {/* 🔹 SECTION 3 */}
                <motion.div variants={item}>
                    <h2 className="font-bold text-[26px] md:text-[28px] mb-2">
                        3. Legal Basis for Processing
                    </h2>

                    <p className="text-[13px] md:text-[15px] mb-2">
                        We process your personal data based on:
                    </p>

                    <p className="font-bold text-[13px] md:text-[15px] mt-2 mb-2">
                        Under GDPR:
                    </p>

                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                        <li>Consent</li>
                        <li>Contractual necessity</li>
                        <li>Legitimate interests</li>
                        <li>Legal obligations</li>
                    </ul>
                    <p className="font-bold text-[13px] md:text-[15px] mt-2 mb-2">
                        Under DPDP Act (India)
                    </p>

                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                        <li>Consent (free, informed, specific, and unambiguous)  </li>
                        <li>Legitimate uses as permitted under law</li>
                    </ul>
                </motion.div>

                <motion.div variants={item}>
                    <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-4">
                        4. How We Use Your Data
                    </h2>

                    <p className="text-[13px] md:text-[15px] mb-2">
                        We use your data to:
                    </p>

                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                        <li>Provide and manage our services</li>
                        <li>Respond to inquiries and demo requests</li>
                        <li>Improve website performance and user experience</li>
                        <li>Send marketing communications (with consent)</li>
                        <li>Conduct analytics and business insights</li>
                        <li>Ensure security and prevent fraud</li>
                    </ul>
                </motion.div>
                <motion.div variants={item} className="mb-10">

                    {/* HEADING */}
                    <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-4">
                        5. Cookies and Tracking Technologies
                    </h2>

                    {/* SUBTEXT */}
                    <p className="text-[13px] md:text-[15px] mb-3">
                        We use{" "}
                        <span className="text-[#7B5CFF] font-medium">
                            first-party and third-party cookies
                        </span>{" "}
                        to:
                    </p>

                    {/* LIST 1 */}
                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                        <li>Enable essential website functionality</li>
                        <li>Analyze website traffic and performance</li>
                        <li>Personalize user experience</li>
                        <li>Support marketing and retargeting efforts</li>
                    </ul>

                    {/* SUBTEXT */}
                    <p className="text-[13px] md:text-[15px] mb-3">
                        Cookies may include data from tools such as:
                    </p>

                    {/* LIST 2 */}
                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                        <li>Google Analytics</li>
                        <li>LinkedIn Ads</li>
                        <li>Marketing automation platforms</li>
                    </ul>

                    {/* IMPORTANT */}
                    <p className="text-[#7B5CFF] font-semibold text-[14px] md:text-[16px] mb-2">
                        Important:
                    </p>

                    {/* LIST 3 */}
                    <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                        <li>Cookies do not typically contain personally identifiable information</li>
                        <li>You can manage or disable cookies via browser settings</li>
                    </ul>

                </motion.div>
                <motion.div variants={item} className="mb-10">

                    {/* 🔹 SECTION 6 */}
                    <div className="mb-6">
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            6. Cookie Consent
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            By using our website, you consent to the use of cookies as outlined in this policy.
                            <br />
                            You have the option to:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mt-3">
                            <li>Accept all cookies</li>
                            <li>Reject non-essential cookies</li>
                            <li>Customize your preferences</li>
                        </ul>
                    </div>

                    {/* 🔹 SECTION 7 */}
                    <div className="mb-6">
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            7. Information Sharing
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            We may share your personal data with:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                            <li>Affiliates and group companies</li>
                            <li>Service providers (hosting, analytics, CRM tools)</li>
                            <li>Advertising and marketing partners</li>
                            <li>Legal or regulatory authorities (when required)</li>
                        </ul>

                        <p className="text-[13px] md:text-[15px]">
                            We do not sell your personal data.
                        </p>
                    </div>

                    {/* 🔹 SECTION 8 */}
                    <div>
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            8. Third-Party Services
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            Our website may include integrations with:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                            <li>Google (Analytics, Ads, Tag Manager)</li>
                            <li>LinkedIn (Ads & retargeting)</li>
                            <li>YouTube / Vimeo (embedded content)</li>
                            <li>Cloud hosting providers (e.g., AWS)</li>
                        </ul>

                        <p className="text-[13px] md:text-[15px]">
                            These third parties may collect data in accordance with their own privacy policies.
                        </p>
                    </div>

                </motion.div>
                <motion.div variants={item} className="mb-10">

                    {/* 🔹 SECTION 9 */}
                    <div className="mb-6">
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            9. International Data Transfers
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            As a global organization, your data may be processed in countries outside
                            your jurisdiction.
                        </p>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            We ensure:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                            <li>
                                GDPR-compliant safeguards (e.g., Standard Contractual Clauses)
                            </li>
                            <li>
                                Compliance with DPDP Act cross-border provisions
                            </li>
                        </ul>
                    </div>

                    {/* 🔹 SECTION 10 */}
                    <div>
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            10. Data Retention
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            We retain personal data:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                            <li>Only as long as necessary for business or legal purposes</li>
                            <li>Based on the nature, sensitivity, and purpose of data</li>
                        </ul>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            Examples:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                            <li>
                                Contact form data: retained for follow-up and business communication
                            </li>
                            <li>
                                User account data: retained until deletion request or inactivity
                            </li>
                        </ul>

                        <p className="text-[13px] md:text-[15px]">
                            Data is securely deleted or anonymized thereafter.
                        </p>
                    </div>

                </motion.div>
                <motion.div variants={item} className="mb-10">

                    {/* 🔹 SECTION 11 */}
                    <div className="mb-6">
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            11. Your Rights
                        </h2>

                        {/* GDPR */}
                        <p className="font-medium text-[13px] md:text-[15px] mb-2">
                            Under GDPR
                        </p>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            You have the right to:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                            <li>Access your data</li>
                            <li>Rectify inaccuracies</li>
                            <li>Request deletion</li>
                            <li>Restrict or object to processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent</li>
                        </ul>

                        <p className="text-[13px] md:text-[15px] mb-4">
                            You may also lodge a complaint with a supervisory authority.
                        </p>

                        {/* DPDP */}
                        <p className="font-bold text-[13px] md:text-[15px] mb-2">
                            Under DPDP Act (India)
                        </p>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            You have the right to:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                            <li>Access information about your data</li>
                            <li>Correct and update personal data</li>
                            <li>Request erasure</li>
                            <li>Withdraw consent</li>
                            <li>Seek grievance redressal</li>
                        </ul>
                    </div>

                    {/* 🔹 SECTION 12 */}
                    <div>
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            12. Children’s Privacy
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            We do not knowingly collect data from individuals under:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                            <li>
                                <span className="font-semibold">
                                    13 years (global standard)
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    18 years for marketing-specific activities (best practice)
                                </span>
                            </li>
                        </ul>

                        <p className="text-[13px] md:text-[15px]">
                            If such data is identified, it will be deleted promptly.
                        </p>
                    </div>

                </motion.div>
                <motion.div variants={item} className="mb-10">

                    {/* 🔹 SECTION 13 */}
                    <div className="mb-6">
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            13. Data Security
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            We implement appropriate safeguards including:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1 mb-4">
                            <li>Secure servers and encryption</li>
                            <li>Access controls</li>
                            <li>Regular monitoring and audits</li>
                        </ul>

                        <p className="text-[13px] md:text-[15px]">
                            However, no system can guarantee absolute security.
                        </p>
                    </div>

                    {/* 🔹 SECTION 14 */}
                    <div className="mb-6">
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            14. Grievance Redressal
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            For any data-related concerns, please contact:
                        </p>

                        <p className="text-[13px] md:text-[15px] font-medium">
                            Grievance Officer – BANGMETRIC
                        </p>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            📧 Email: <span className="font-medium">[Insert Email]</span>
                        </p>

                        <p className="text-[13px] md:text-[15px]">
                            We will respond within legally mandated timelines.
                        </p>
                    </div>

                    {/* 🔹 SECTION 15 */}
                    <div>
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            15. Embedded Content
                        </h2>

                        <p className="text-[13px] md:text-[15px]">
                            Our website may include embedded content (e.g., videos, articles).
                            <br/>
                            Such content behaves as if you visited the third-party website directly and may 
                             <br/>
                            collect data accordingly.
                        </p>
                    </div>

                </motion.div>
                <motion.div variants={item} className="mb-10">

                    {/* 🔹 SECTION 16 */}
                    <div className="mb-6">
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            16. Changes to This Policy
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-2">
                            We may update this Privacy Policy periodically.
                        </p>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            Material changes will be communicated via:
                        </p>

                        <ul className="list-disc pl-6 text-[13px] md:text-[15px] space-y-1">
                            <li>Website notice</li>
                            <li>Email (if applicable)</li>
                        </ul>
                    </div>

                    {/* 🔹 SECTION 17 */}
                    <div>
                        <h2 className="font-bold text-[26px] md:text-[28px] mb-2 mt-2">
                            17. Contact Us
                        </h2>

                        <p className="text-[13px] md:text-[15px] mb-3">
                            For any privacy-related queries:
                        </p>

                        <p className="text-[13px] md:text-[15px] font-medium mb-2">
                            BANGMETRIC Services
                        </p>

                        <p className="text-[13px] md:text-[15px] mb-1">
                            📧 Email: <span className="font-medium">connect@bangmetric.com</span>
                        </p>

                        <p className="text-[13px] md:text-[15px]">
                            🌐 Website: <span className="font-medium">www.bangmetric.com</span>
                        </p>
                    </div>

                </motion.div>

            </motion.div>
        </section>
    );
}