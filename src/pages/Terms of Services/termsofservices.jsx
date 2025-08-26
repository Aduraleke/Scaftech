import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const TermsOfServices = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <InfoTwoToneIcon />,
      content: (
        <>
          <p>We may collect personal and non-personal information:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              account credentials, and payment details.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> IP address, browser
              type, device info, pages visited, cookies, and tracking data.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      icon: <GraphicEqTwoToneIcon />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Provide, maintain, and improve our services.</li>
          <li>
            Respond to inquiries, process transactions, and fulfill requests.
          </li>
          <li>Send updates or promotional materials (opt-out anytime).</li>
          <li>Analyze usage to optimize performance and user experience.</li>
          <li>Comply with legal obligations and protect rights and safety.</li>
        </ul>
      ),
    },
    {
      title: "How We Share Your Information",
      icon: <AccountCircleTwoToneIcon />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Trusted service providers assisting in website operations.</li>
          <li>Legal requirements (court orders, subpoenas).</li>
          <li>Business transfers (mergers, acquisitions, or asset sales).</li>
        </ul>
      ),
    },
    {
      title: "Data Security",
      content: (
        <p>
          We implement technical and organizational measures to protect your
          data, though no internet transmission is completely secure.
        </p>
      ),
    },
    {
      title: "Your Rights and Choices",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Access: Request information we hold about you.</li>
          <li>Correction: Update inaccurate or incomplete info.</li>
          <li>Deletion: Request deletion subject to legal obligations.</li>
          <li>Opt-Out: Stop marketing communications at any time.</li>
        </ul>
      ),
    },
    {
      title: "Cookies and Tracking",
      content: (
        <p>
          Our website uses cookies to enhance your experience. You can manage
          cookies in your browser settings.
        </p>
      ),
    },
    {
      title: "Third-Party Links",
      content: (
        <p>
          We may link to third-party websites but are not responsible for their
          privacy or content. Review their policies directly.
        </p>
      ),
    },
    {
      title: "Children’s Privacy",
      content: (
        <p>
          Our services are not intended for children under 13. We do not
          knowingly collect data from minors. Contact us if you believe we have.
        </p>
      ),
    },
    {
      title: "International Data Transfers",
      content: (
        <p>
          Your information may be transferred to countries with different data
          protection laws. We take steps to protect your information in
          accordance with these terms.
        </p>
      ),
    },
    {
      title: "Changes to These Terms",
      content: (
        <p>
          We may update these Terms from time to time. Updated versions will be
          posted with a revised &quot;Last Updated&quot; date. Review
          periodically for changes.
        </p>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <p>
          If you have questions or concerns regarding these Terms, please
          contact us.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#0a192f] text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#07bc0c] mb-4 tracking-wide">
            TERMS OF SERVICE
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Last Updated: August 11, 2025
          </p>
        </div>

        {/* Sections */}
        <article className="space-y-10">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="border-l-4 border-[#07bc0c] pl-5 sm:pl-6 py-5 hover:bg-[#071b1b] transition-all rounded-md"
            >
              <h2 className="text-[#07bc0c] text-xl sm:text-2xl font-semibold mb-2 flex items-center gap-2">
                {section.icon} {section.title}
              </h2>
              <div className="text-gray-200">{section.content}</div>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default TermsOfServices;
