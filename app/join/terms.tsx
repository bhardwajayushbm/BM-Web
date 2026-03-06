"use client";

export default function TermsSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-[77px] py-10 flex justify-center">
      <div className="w-full max-w-[1100px] font-[Helvetica] text-black text-[16px] sm:text-[17px] leading-[1.5]">

        {/* Links Row */}
        <div className="mb-6 text-[18px] sm:text-[20px] flex flex-wrap gap-x-2 gap-y-2">

          <a href="#" className="underline text-[#9562EB]">
            Terms of Use
          </a>

          <span className="text-[#9562EB]">|</span>

          <a href="#" className="underline text-[#9562EB]">
            Privacy
          </a>

          <span className="text-[#9562EB]">|</span>

          <a href="#" className="underline text-[#9562EB]">
            Cookies
          </a>

          <span className="text-[#9562EB]">|</span>

          <a href="#" className="underline text-[#9562EB]">
            Bangmetric.com
          </a>

        </div>


        {/* Paragraph 1 */}
        <p className="text-gray-500 mb-6">
          © 2026 For more information contact BANGMETRIC India. Deloitte refers
          to one or more of BANGMETRIC Touche Tohmatsu Limited (“DTTL”), its
          global network of member firms, and their related entities
          (collectively, the “BANGMETRIC LLC”). DTTL (also referred to as
          “BANGMETRIC Global”) and each of its member firms and related entities
          are legally separate and independent entities, which cannot obligate
          or bind each other in respect of third parties. DTTL and each DTTL
          member firm and related entity is liable only for its own acts and
          omissions, and not those of each other. DTTL does not provide services
          to clients. Please see www.bangmetric.com/about to learn more.
        </p>


        {/* Paragraph 2 */}
        <p className="text-gray-500 mb-6">
          If you have given your consent to receive job offers from us, please
          note that you can withdraw your consent anytime by sending your
          request at cerecruiting@bangmetric.com. Once we have processed your
          request you will receive a confirmation and you will no longer receive
          job offers from us. Deleting your account by accessing the Edit my
          profile section from your account also includes the withdrawal of your
          consent. However, please be aware that if you wish to apply to other
          jobs, you will need to create a new account once you have your account
          deleted. The withdrawal of consent shall not affect the lawfulness of
          processing based on consent before its withdrawal.
        </p>


        {/* Paragraph 3 */}
        <p className="text-gray-500">
          On the basis of its legitimate interest, Avature collects IP addresses
          for the sole purpose of filtering out malicious traffic. We do not
          associate the IP addresses with any other information and do not share
          that information with any third party outside of Avature unless it is
          identified as malicious. Please refer to Avature’s{" "}
          <a href="#" className="underline">
            privacy policy
          </a>{" "}
          for more information regarding its processing activities.
        </p>

      </div>
    </section>
  );
}