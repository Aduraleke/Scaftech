import { useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Map accreditation logos to courses
const courseLinks = [
  { label: "QA/QC Inspector Training", link: "/Courses/inspector-training" },
  { label: "Heavy Equipment Training", link: "/Courses/heavy-equipment" },
  { label: "Blasting & Painting Training", link: "/Courses/blasting-painting" },
  { label: "Health & Safety Training", link: "/Courses/health-safety" },
  { label: "Work at Height", link: "/Courses/work-height" },
  { label: "OSHA Training", link: "/Courses/osha" },
  { label: "Rigger Training", link: "/Courses/rigger" },
];

const AccreditationSlider = ({
  logos = [
    { src: "/images/gallery/Scaftech-logo.jpg", alt: "Scaftech" },
    { src: "/images/IOSH-2.png", alt: "IOSH" },
    { src: "/images/NPORS-3.png", alt: "NPORS" },
    { src: "/images/IWCF-4.png", alt: "IWCF" },
    { src: "/images/IADC-5.jpg", alt: "IADC" },
    { src: "/images/IRATA-10.png", alt: "IRATA" },
  ],
  duration = 25,
  direction = "left",
  pauseOnHover = true,
  className = "",
}) => {
  const controls = useAnimation();
  const navigate = useNavigate();

  // Duplicate logos for seamless scrolling
  const loopedLogos = useMemo(() => [...logos, ...logos], [logos]);

  // Start animation
  const startAnimation = useCallback(() => {
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: { duration, ease: "linear", repeat: Infinity },
    });
  }, [controls, direction, duration]);

  // Stop animation
  const stopAnimation = useCallback(() => controls.stop(), [controls]);

  // Start animation on mount
  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, [startAnimation, stopAnimation]);

  // Pause animation when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.hidden ? stopAnimation() : startAnimation();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [startAnimation, stopAnimation]);

  // Navigate to related course on logo click
  const handleLogoClick = (alt) => {
    const matchedCourse = courseLinks.find((course) =>
      course.label.toLowerCase().includes(alt.toLowerCase())
    );
    navigate(matchedCourse?.link || "/courses");
  };

  return (
    <section
      aria-label="Our accreditations"
      className={`relative w-full overflow-hidden py-6 sm:py-8 ${className}`}
    >
      {/* Gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#0a192f] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#0a192f] to-transparent z-10" />

      <div className={pauseOnHover ? "group" : undefined}>
        <motion.div
          className="flex w-max items-center"
          animate={controls}
          style={{ willChange: "transform" }}
          onMouseEnter={() => pauseOnHover && stopAnimation()}
          onMouseLeave={() => pauseOnHover && startAnimation()}
        >
          {loopedLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              onClick={() => handleLogoClick(logo.alt)}
              className="mx-4 sm:mx-8 md:mx-10 shrink-0 cursor-pointer opacity-80 hover:opacity-100 transition-all hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain rounded-xl shadow-md bg-white p-2 transition-all duration-300 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

AccreditationSlider.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["left", "right"]),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};

export default AccreditationSlider;
