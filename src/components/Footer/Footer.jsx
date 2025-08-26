import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const socialLinks = [
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      url: "https://www.instagram.com/scaftech.ng/",
      label: "Instagram",
    },
    {
      icon: <FacebookIcon className="w-5 h-5" />,
      url: "https://web.facebook.com/Scaftechengineeringservices?_rdc=1&_rdr",
      label: "Facebook",
    },
    {
      icon: <YouTubeIcon className="w-5 h-5" />,
      url: "https://www.youtube.com/@scaftech_nigeria",
      label: "YouTube",
    },
    {
      icon: <LinkedInIcon className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/scaftech-engineering-services-61aaa0255/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#0a192f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Logo */}
        <div className="flex justify-center md:justify-start mb-8">
          <img
            src="/images/Scarftech-logo.webp"
            alt="Scarftech logo"
            className="w-[150px] sm:w-[200px] lg:w-[240px] object-contain"
          />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* About */}
          <div>
            <h2 className="font-semibold text-lg tracking-wide text-white mb-4">
              ABOUT
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Courses"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/Blog"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/Accredition"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  Accreditations
                </a>
              </li>
            </ul>
          </div>

          {/* Faculties */}
          <div>
            <h2 className="font-semibold text-lg tracking-wide text-white mb-4">
              OUR FACULTIES
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Health & Safety", url: "/Courses/health-safety" },
                { label: "ASNT NDT Inspection", url: "/Courses/ndt" },
                {
                  label: "Lifting Operations",
                  url: "/Courses/lifting-operation",
                },
                {
                  label: "Defensive Driving",
                  url: "/Courses/defensive-driving",
                },
                {
                  label: "Equipment Operation",
                  url: "/Courses/equipment-operation",
                },
                {
                  label: "Skills Operation",
                  url: "/Courses/skilled-operation",
                },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    className="hover:text-[#07bc0c] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h2 className="font-semibold text-lg tracking-wide text-white mb-4">
              FIND US
            </h2>
            <ul className="space-y-2 text-sm">
              {["Lagos", "Port Harcourt", "Abuja"].map((location, idx) => (
                <li key={idx}>
                  <a
                    href="/about-us"
                    className="hover:text-[#07bc0c] transition-colors"
                  >
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-semibold text-lg tracking-wide text-white mb-4">
              LEGAL
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-services"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookies-policy"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h2 className="font-semibold text-lg tracking-wide text-white mb-4">
              SUPPORT
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <p>
                  Office 27, Ringback mall, <br />
                  Beside Mobil Filling Station, <br />
                  Oribanwa Bus-stop, Ibeju-Lekki Lagos
                </p>
              </li>
              <li>
                <a
                  href="tel:+2348161637797"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  +234-816-163-7797 , +234-811-262-7647
                </a>
              </li>
              <li>
                <a
                  href="mailto:consult@scaftechservices.com"
                  className="hover:text-[#07bc0c] transition-colors"
                >
                  consult@scaftechservices.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h3 className="font-bold text-sm mb-3 text-white">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    aria-label={social.label}
                    className="border border-gray-500 p-2 rounded-full hover:bg-[#07bc0c] hover:border-[#07bc0c] hover:text-white transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Scaftech. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="hover:text-[#07bc0c] transition-colors">
              Help
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-[#07bc0c] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-services"
              className="hover:text-[#07bc0c] transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/cookies-policy"
              className="hover:text-[#07bc0c] transition-colors"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
