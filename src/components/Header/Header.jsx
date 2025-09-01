"use client";

import { useEffect, useState } from "react";
import "./Style.css";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeAutoNext = 6000;

  const slides = [
    {
      img: "/ndt-3.jpg",
      title: "Master Engineering Excellence",
      subtitle: "Profession and Authoritative",
      desc: "Advance your career with cutting-edge engineering education from industry experts. Join Scaftech Engineering Services Academy and transform your technical expertise into professional success.",
      link: "/NDT",
      thumbTitle: "PROFESSIONAL AUTHORITATIVE",
    },
    {
      img: "/roof-3.jpg",
      title: "Industry-Leading Training",
      subtitle: "Credibility and Trust",
      desc: "Learn from certified professionals with decades of experience. Our comprehensive curriculum covers the latest industry standards and cutting-edge technologies in scaffolding and structural engineering.",
      link: "/lifthing&basicrigger",
      thumbTitle: "CREDIBILITY & TRUST",
    },
    {
      img: "/roof-1.jpg",
      title: "Your Engineering Future Starts Here",
      subtitle: "Engineering Capabilities",
      desc: "Join over 500 successful graduates who have advanced their careers through our academy. With 98% placement success rate and strong industry partnerships, your future is secure.",
      link: "/work&height",
      thumbTitle: "CLEAR CALL TO ACTION",
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % slides.length);
    }, timeAutoNext);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="carousel relative w-full overflow-hidden z-0">
      {/* Slider */}
      <div className="list relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0b1b2bcc]" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            {/* Content */}
            <div className="content absolute top-1/3 left-6 md:left-16 max-w-xl text-white z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#33e10c] drop-shadow-lg">
                {slide.title}
              </h1>
              <div className="font-semibold text-lg md:text-2xl mt-3 tracking-wide">
                {slide.subtitle}
              </div>
              <p className="des mt-4 text-sm md:text-base leading-relaxed text-white/90">
                {slide.desc}
              </p>
              <a
                href={slide.link}
                className="inline-block mt-6 px-6 py-3 bg-[#33e10c] text-black font-semibold text-sm rounded-lg shadow-lg hover:bg-[#2cc90a] hover:scale-105 transform transition duration-300 ease-in-out"
              >
                Enroll Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails — bottom-right, hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 right-5 z-20 gap-5 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group overflow-hidden rounded-lg transition-all duration-300 ${
                isActive
                  ? "ring-2 ring-[#33e10c] scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Show slide ${index + 1}: ${slide.thumbTitle}`}
              aria-current={isActive ? "true" : undefined}
            >
              <div className="relative w-28 xl:w-36 h-16 xl:h-24">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 rounded-md"
                />
              </div>
              <div className="px-1 py-1 text-center text-[11px] font-semibold text-white/90 w-28 xl:w-36">
                {slide.thumbTitle}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
