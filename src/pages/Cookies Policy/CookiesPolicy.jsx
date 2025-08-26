const CookiesPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: (
        <p>
          Scaftech Engineering Services (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) uses cookies on our website
          (https://scaftechservices.com). This Cookies Policy explains what
          cookies are, how we use them, and your choices regarding their use.
        </p>
      ),
    },
    {
      title: "What Are Cookies?",
      content: (
        <p>
          Cookies are small text files stored on your device by your web
          browser. They help websites remember your preferences, improve user
          experience, and provide personalized services.
        </p>
      ),
    },
    {
      title: "Types of Cookies We Use",
      content: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to
              function properly. Without these, some services may not be
              available.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Collect information about
              how visitors use the site to improve functionality and speed.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences
              (e.g., language, settings) to enhance your experience.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Track your browsing behavior
              to deliver relevant ads and promotional content.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Cookies",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Enhance website functionality and user experience.</li>
          <li>Analyze website traffic and improve performance.</li>
          <li>Provide personalized content and marketing messages.</li>
          <li>Ensure security and prevent fraudulent activity.</li>
        </ul>
      ),
    },
    {
      title: "Third-Party Cookies",
      content: (
        <p>
          We may use third-party services (e.g., Google Analytics, ad networks)
          that place cookies on your device. We are not responsible for their
          cookies or privacy practices; please review their policies directly.
        </p>
      ),
    },
    {
      title: "Your Cookie Choices",
      content: (
        <p>
          You can manage cookies through your browser settings. You may choose
          to block or delete cookies, but this may affect website functionality.
        </p>
      ),
    },
    {
      title: "Children’s Cookies",
      content: (
        <p>
          Our website is not intended for children under 13. We do not knowingly
          place cookies to collect information from minors.
        </p>
      ),
    },
    {
      title: "Changes to This Cookies Policy",
      content: (
        <p>
          We may update this Cookies Policy from time to time. The revised
          version will include an updated &quot;Last Updated&quot; date.
        </p>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <p>
          If you have questions or concerns about our use of cookies, please
          contact us at aduralekeodesanmi@gmail.com.
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
            COOKIES POLICY
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Last Updated: August 26, 2025
          </p>
        </div>

        {/* Sections */}
        <article className="space-y-10">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="border-l-4 border-[#07bc0c] pl-5 sm:pl-6 py-5 hover:bg-[#071b1b] transition-all rounded-md"
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

export default CookiesPolicy;
