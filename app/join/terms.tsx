"use client";

export default function TermsSection() {
    return (
        <section className="w-full bg-white pl-[77px] py-10">
            <div className="max-w-[1100px] font-[Helvetica] text-black text-[17px] leading-[1.4]">

                {/* Links Row */}
                <div className="mb-6 text-[20px] font-[Helvetica]">
                    <a href="#" className="underline mr-2 text-[#9562EB]">Terms of Use</a>
                    <span className="mx-1 text-[#9562EB]">|</span>
                    <a href="#" className="underline mx-2 text-[#9562EB]">Privacy</a>
                    <span className="mx-1 text-[#9562EB]">|</span>
                    <a href="#" className="underline mx-2 text-[#9562EB]">Cookies</a>
                    <span className="mx-1 text-[#9562EB]">|</span>
                    <a href="#" className="underline ml-2 text-[#9562EB]">Bangmetric.com</a>
                </div>

                {/* Paragraph 1 */}
                <p className="text-gray-500 mb-6">
                    © 2026 For more information contact BANGMETRIC India. Deloitte refers to one or more of BANGMETRIC Touche Tohmatsu Limited (“DTTL”), its global network of member firms, and their related entities (collectively, the “BANGMETRIC LLC”). DTTL (also referred to as “BANGMETRIC Global”) and each of its member firms and related entities are legally separate and independent entities, which cannot obligate or bind each other in respect of third parties. DTTL and each DTTL member firm and related entity is liable only for its own acts and omissions, and not those of each other. DTTL does not provide services to clients. Please see www.bangmetric.com/about to learn more.
                </p>

                {/* Paragraph 2 */}
                <p className="text-gray-500 mb-6">
                    If you have given your consent to receive job offers from us, please note that you can withdraw your consent anytime by sending your request at cerecruiting@bangmetric.com Once we have processed your request you will receive a confirmation and you will no longer receive job offers from us. Deleting your account by accessing the Edit my profile section from your account also includes the withdrawal of your consent. However, please be aware that if you wish to apply to other jobs, you will need to create a new account once you have your account deleted. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal.
                </p>

                {/* Paragraph 3 */}
                <p className="text-gray-500">
                    On the basis of its legitimate interest, Avature collects IP addresses for the sole purpose of filtering out malicious traffic. We do not associate the IP addresses with any other information and do not share that information with any third party outside of Avature unless it is identified as malicious. Please refer to Avature’s <a href="#" className="underline">privacy policy</a> for more information regarding its processing activities.
                </p>

            </div>
        </section>
    );
}