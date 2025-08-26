"use client";

import { useEffect, useState } from "react";
import "./style.css";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeAutoNext = 4000;

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
      <div className="list relative h-[60vh] md:h-[80vh] lg:h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0b1b2bcc]" />
            <div className="content absolute top-1/4 left-6 md:left-16 max-w-xl text-white z-10">
              <h1 className="text-2xl md:text-4xl font-bold text-[#33e10c]">
                {slide.title}
              </h1>
              <div className="font-bold text-lg md:text-xl mt-2">
                {slide.subtitle}
              </div>
              <p className="des mt-3 text-sm md:text-base">{slide.desc}</p>
              <a href={slide.link}>
                <a className="buttons mt-5" href="/contact-us">
                  <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </a>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails — bottom-right, hidden on mobile only */}
      <div className="thumbnail hidden md:flex absolute bottom-12 right-5 z-20 gap-5">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item cursor-pointer transition-transform ${
              index === activeIndex ? "scale-105" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-32 xl:w-48 rounded"
            />
            <div className="content text-center mt-2 text-xs font-semibold text-white">
              {slide.thumbTitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
