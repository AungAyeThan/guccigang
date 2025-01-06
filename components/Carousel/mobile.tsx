import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules

enum EImageUri {
  Slider1 = "/images/slider1.png",
  Slider2 = "/images/slider2.png",
  Slider3 = "/images/slider3.png",
  Slider4 = "/images/slider4.png",
  Slider5 = "/images/slider5.png",
  Slider6 = "/images/slider6.jpg",
  GroupPic = "/images/group-pic.png",
}

const MobileSlider: React.FC = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={EImageUri.Slider1}
          alt="Slide 1"
          className="rounded-lg w-full h-48 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={EImageUri.Slider2}
          alt="Slide 2"
          className="rounded-lg w-full h-48 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={EImageUri.Slider3}
          alt="Slide 3"
          className="rounded-lg w-full h-48 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={EImageUri.Slider4}
          alt="Slide 4"
          className="rounded-lg w-full h-48 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={EImageUri.Slider5}
          alt="Slide 5"
          className="rounded-lg w-full h-48 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={EImageUri.Slider6}
          alt="Slide 6"
          className="rounded-lg w-full h-48 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MobileSlider;
