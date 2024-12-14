import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules

enum EImageUri {
  Slider1 = "/images/slider1.png",
  Slider2 = "/images/slider2.png",
  Slider3 = "/images/slider3.png",
  Slider4 = "/images/slider4.png",
  Slider5 = "/images/slider5.png",
  GroupPic = "/images/group-pic.png",
}

const DesktopSlider: React.FC = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]} // Include the Coverflow module
      effect="coverflow" // Enable Coverflow effect
      coverflowEffect={{
        rotate: 0, // Reduce rotation for a wider appearance
        stretch: 50, // Increase spacing between slides for a more open look
        depth: 150, // Depth for better perspective
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      centeredSlides={true} // Center the active slide
      slidesPerView={3.5} // Show 3 slides at a time
      loop={true} // Enable infinite loop
      spaceBetween={2} // Space between slides
      className="mySwiper"
    >
      {/* Slides */}
      <SwiperSlide>
        <img src={EImageUri.Slider1} alt="Slide 1" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={EImageUri.Slider2} alt="Slide 2" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={EImageUri.Slider3} alt="Slide 3" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={EImageUri.Slider4} alt="Slide 4" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={EImageUri.Slider5} alt="Slide 5" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={EImageUri.Slider5} alt="Slide 6" className="rounded-lg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default DesktopSlider;
