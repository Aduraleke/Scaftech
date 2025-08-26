
import "./Swiper/Style.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Imageslider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper_parent_div"
    >
      <SwiperSlide className="swiper_slide">
        <img className="swier_image" src="public/lift-3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swier_image" src="public/Scaftechfork-6.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swier_image"
          src="/public/Scaftechfork-4.jpg"
          alt=""
        />
      </SwiperSlide>
      {/* <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default Imageslider;
