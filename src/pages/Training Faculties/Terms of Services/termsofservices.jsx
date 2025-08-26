
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const TermsOfServices = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#07bc0c] mb-3">
            TERMS OF SERVICE
          </h1>
          <p className="text-sm text-gray-300">Last Updated: August 11, 2025</p>
        </div>

        <article className="space-y-8 text-gray-100 text-sm sm:text-base leading-relaxed">
          <p>
            Scaftech Engineering Services (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides
            services subject to these Terms of Service. By accessing or using
            our website (https://scaftechservices.com) or services, you agree to
            comply with and be bound by these terms.
          </p>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
              <InfoTwoToneIcon /> Information We Collect
            </h2>
            <p>We may collect personal and non-personal information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Personal Information:</strong> Name, email, phone
                number, account credentials, and payment details.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> IP address, browser
                type, device info, pages visited, cookies, and tracking data.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
              <GraphicEqTwoToneIcon /> How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide, maintain, and improve our services.</li>
              <li>
                Respond to inquiries, process transactions, and fulfill
                requests.
              </li>
              <li>Send updates or promotional materials (opt-out anytime).</li>
              <li>
                Analyze usage to optimize performance and user experience.
              </li>
              <li>
                Comply with legal obligations and protect rights and safety.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
              <AccountCircleTwoToneIcon /> How We Share Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Trusted service providers assisting in website operations.
              </li>
              <li>Legal requirements (court orders, subpoenas).</li>
              <li>
                Business transfers (mergers, acquisitions, or asset sales).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              Data Security
            </h2>
            <p>
              We implement technical and organizational measures to protect your
              data, though no internet transmission is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              Your Rights and Choices
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Access: Request information we hold about you.</li>
              <li>Correction: Update inaccurate or incomplete info.</li>
              <li>Deletion: Request deletion subject to legal obligations.</li>
              <li>Opt-Out: Stop marketing communications at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies to enhance your experience. You can
              manage cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              Third-Party Links
            </h2>
            <p>
              We may link to third-party websites but are not responsible for
              their privacy or content. Review their policies directly.
            </p>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              Children’s Privacy
            </h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect data from minors. Contact us if you believe we
              have.
            </p>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              International Data Transfers
            </h2>
            <p>
              Your information may be transferred to countries with different
              data protection laws. We take steps to protect your information in
              accordance with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Updated versions will
              be posted with a revised &quot;Last Updated&quot; date. Review periodically
              for changes.
            </p>
          </div>

          <div>
            <h2 className="text-[#07bc0c] text-lg sm:text-xl font-bold mb-2">
              Contact Us
            </h2>
            <p>
              If you have questions or concerns regarding these Terms, please
              contact us.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default TermsOfServices;
