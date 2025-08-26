"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slidder = () => {
  const slides = [
    {
      title: "Inspection Services",
      image: "/inspect-3.jpg",
      link: "/Courses/inspector-training",
      desc: "Scaftech Engineering Services provides specialized inspection services for tanks and vessels across various industrial sectors in Nigeria.",
    },
    {
      title: "Lifting Machine",
      image: "/Scaftechfork-3.jpg",
      link: "/Courses/lifting-operation",
      desc: "Scaftech carries out lifting equipment inspection in accordance with industry standards and applicable legislations.",
    },
    {
      title: "Maintenance",
      image: "/side-lifting-2.jpg",
      link: "/Courses/equipment-operation",
      desc: "At Scaftech Engineering Services, we provide comprehensive LOLER (Lifting Operations and Lifting Equipment Regulations 1998) services.",
    },
    {
      title: "Leadership and Accountability",
      image: "/inspector-1.jpg",
      link: "/Courses/leadership-accountability",
      desc: "LOLER inspections apply to a wide range of lifting appliances and accessories.",
    },
  ];

  return (
    <div className="mx-4 lg:mx-8 py-8">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true, clickable: true }}
      
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
          1800: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="mt-8">
            <a href={slide.link}>
              <div className="bg-[#0a192f] border border-[#07bc0c] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {slide.desc}{" "}
                    <span className="text-[#07bc0c] font-semibold">
                      read more
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slidder;
