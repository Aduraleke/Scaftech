const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#07bc0c] mb-4 tracking-wide">
            OUR PRIVACY POLICY
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Last Updated: August 11, 2025
          </p>
        </div>

        {/* Article */}
        <article className="space-y-12 text-gray-200 text-sm sm:text-base leading-relaxed">
          {/* Intro */}
          <p className="text-gray-100">
            Scaftech Engineering Services (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your personal information when you visit our website{" "}
            <a
              href="https://scaftechservices.com"
              target="_blank"
              className="text-[#07bc0c] underline hover:text-green-400 transition-colors"
            >
              https://scaftechservices.com
            </a>{" "}
            (the &quot;Website&quot;) or engage with our services. By using our
            Website, you consent to the practices described in this policy.
          </p>

          {/* Sections */}
          {[
            {
              title: "Information We Collect",
              content: (
                <>
                  <p>
                    <strong>Personal Information:</strong> Contact Information
                    (Name, email, phone), Account Information (username,
                    password), Payment Information (billing details via secure
                    third-party processors).
                  </p>
                  <p className="mt-2">
                    <strong>Non-Personal Information:</strong> Usage Data,
                    Cookies, and Tracking Technologies.
                  </p>
                </>
              ),
            },
            {
              title: "How We Use Your Information",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Provide, maintain, and improve services and website
                    functionality.
                  </li>
                  <li>
                    Respond to inquiries, process transactions, and fulfill
                    service requests.
                  </li>
                  <li>
                    Send updates, newsletters, or promotional materials (opt-out
                    anytime).
                  </li>
                  <li>
                    Analyze website usage to optimize performance and user
                    experience.
                  </li>
                  <li>
                    Comply with legal obligations and protect our rights and
                    safety.
                  </li>
                </ul>
              ),
            },
            {
              title: "How We Share Your Information",
              content: (
                <p>
                  We do not sell, trade, or rent your personal information. We
                  may share your information with trusted service providers, for
                  legal requirements, or during business transfers such as
                  mergers or acquisitions.
                </p>
              ),
            },
            {
              title: "Data Security",
              content: (
                <p>
                  We implement reasonable measures to protect your personal
                  information. However, no transmission over the internet is
                  completely secure, and we cannot guarantee absolute security.
                </p>
              ),
            },
            {
              title: "Your Rights and Choices",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Access:</strong> Request access to the personal
                    information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion, subject to
                    legal obligations.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Opt out of marketing
                    communications anytime.
                  </li>
                </ul>
              ),
            },
            {
              title: "Cookies and Tracking",
              content: (
                <p>
                  Our Website uses cookies to enhance your experience. You can
                  disable cookies through your browser settings.
                </p>
              ),
            },
            {
              title: "Third-Party Links",
              content: (
                <p>
                  Our Website may contain links to third-party websites. We are
                  not responsible for their privacy practices. Review their
                  privacy policies.
                </p>
              ),
            },
            {
              title: "Children’s Privacy",
              content: (
                <p>
                  Our services are not intended for individuals under 13. We do
                  not knowingly collect information from children under 13.
                  Contact us immediately if you believe we have.
                </p>
              ),
            },
            {
              title: "International Data Transfers",
              content: (
                <p>
                  If you are outside your home country, your information may be
                  transferred to countries with different data protection laws.
                  We ensure your information is protected.
                </p>
              ),
            },
            {
              title: "Changes to This Privacy Policy",
              content: (
                <p>
                  We may update this Privacy Policy from time to time. The
                  updated version will be posted with a revised &quot;Last
                  Updated&quot; date.
                </p>
              ),
            },
            {
              title: "Contact Us",
              content: (
                <p>
                  If you have questions or concerns about this Privacy Policy,
                  please contact us.
                </p>
              ),
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="border-l-4 border-[#07bc0c] pl-4 sm:pl-6 py-4 hover:bg-[#071b1b] transition-all rounded-md"
            >
              <h2 className="text-[#07bc0c] text-xl sm:text-2xl font-semibold mb-2">
                {section.title}
              </h2>
              <div className="text-gray-200">{section.content}</div>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
