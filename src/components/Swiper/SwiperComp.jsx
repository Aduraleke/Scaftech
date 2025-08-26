import Carousel from "react-multi-carousel"
import WithStyles from "../././Swiper/WithStyle"
import 'react-multi-carousel/lib/styles.css';

const SwiperComp = () => {
  return (
    <div>

<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <WithStyles
    description="Tighening and loosing of bolts of all sizes on flanges, clamps etc"
    headline="Bolt Tensioning"
    image="/image/equipments/bolt_tension-1.jpg"
  />
  <WithStyles
    description="Precision Cold Cutting Using Industry Standard Cutting Machine and Expert Beveling to any size"
    headline="Cold Cutting"
    image="/image/equipments/cold-cutting-machine.jpg"
  />
  <WithStyles
    description="Professional Setup of Habitats in any area that requires HOT WORK"
    headline="Habitat Preparation"
    image="/image/equipments/habitat.jpg"
  />
  <WithStyles
    description="Tighening and loosing of bolts of all sizes on flanges, clamps etc"
    headline="Bolt Tensioning"
    image="/image/equipments/bolt_tension-1.jpg"
  />
  <WithStyles
    description="Precision Cold Cutting Using Industry Standard Cutting Machine and Expert Beveling to any size"
    headline="Cold Cutting"
    image="/image/equipments/cold-cutting-machine.jpg"
  />
  <WithStyles
    description="Professional Setup of Habitats in any area that requires HOT WORK"
    headline="Habitat Preparation"
    image="/image/equipments/habitat.jpg"
  />
</Carousel>
    </div>
  )
}

export default SwiperComp