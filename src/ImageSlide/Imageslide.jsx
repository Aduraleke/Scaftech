// src/components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "public/safetyman-2.jpg",
    title: "Health and Safety",
    description: "9 Courses to ensure a safe workplace.",
  },
  {
    image: "public/lift-4.jpg",
    title: "Lifting Operations",
    description: "54 Courses to master lifting operations.",
  },
  {
    image: "public/lift-2.jpg",
    title: "Work at Height",
    description: "32 Courses to work safely at height.",
  },
   {
    image: "public/scaftek-fold-2.jpg",
    title: "Scalffold Training courses",
    description: "23 Courses to become a certified scaffolder.",
  },
   {
    image: "public/hydro-10.jpg",
    title: "Tower Crane",
    description: "3 Courses to operate tower cranes safely.",
  },
   {
    image: "public/ndt-3.jpg",
    title: "ASNT NDT INSPECTION",
    description: "6 Courses to master NDT inspection techniques.",
  },
];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-64 md:h-96">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
