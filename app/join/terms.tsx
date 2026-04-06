"use client";

export default function TermsSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-[77px] py-10 flex justify-center">
      <div className="w-full max-w-[955px] font-[Helvetica] text-black text-[16px] sm:text-[17px] leading-[1.5]">

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

        <p className="text-gray-500 text-[14px] sm:text-[15px] mb-6">
          © 2026 BANGMETRIC India. All rights reserved.
          BANGMETRIC refers to BANGMETRIC Services Private Limited and its affiliated entities (collectively,
           “BANGMETRIC”). Each entity within BANGMETRIC operates as a legally separate and independent organization
            and is responsible only for its own acts and omissions. No entity within BANGMETRIC has the authority
             to bind or obligate another entity in respect of third parties.
          For more information about BANGMETRIC, please visit: www.bangmetric.com/about
        </p>

        <p className="text-gray-500 text-[14px] sm:text-[15px] mb-6">
          Candidate Communication & Consent
          If you have provided consent to receive job opportunities from BANGMETRIC,
           you may withdraw your consent at any time by sending a request to careers@bangmetric.com
          Upon processing your request, you will receive a confirmation, and you will no longer receive
           job-related communications from us. Withdrawal of consent does not affect the lawfulness of
            processing carried out prior to such withdrawal.
        </p>

        <p className="text-gray-500 text-[14px] sm:text-[15px]">
          Data Collection & Privacy
          BANGMETRIC may collect limited technical data, such as IP addresses, to ensure
           platform security and prevent malicious activity. This information is used solely for
            security purposes and is not linked with personally identifiable information or shared with third parties,
          except where required to address security threats or comply with legal obligations.
          <a href="#" className="underline">
            privacy policy
          </a>{" "}
          For more details on how we process and protect your data, please refer to our Privacy Policy on our website.
        </p>

      </div>
    </section>
  );
}