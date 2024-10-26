import React, { useState, useEffect } from "react";
import OurValue from "../components/OurValue";
import Members from "../components/common/Members";
import GetInTouch from "../components/GetInTouch";

enum EImageUri {
  Slider1 = "/images/slider1.png",
  Slider2 = "/images/slider2.png",
  Slider3 = "/images/slider3.png",
  Slider4 = "/images/slider4.png",
  Slider5 = "/images/slider5.png",
  GroupPic = "/images/group-pic.png",
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4); // Default to 4 for desktop

  const images: string[] = [
    EImageUri.Slider1,
    EImageUri.Slider2,
    EImageUri.Slider3,
    EImageUri.Slider4,
    EImageUri.Slider5,
  ];

  useEffect(() => {
    // Function to update the number of visible images based on window size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1);
      } else {
        setVisibleImages(4);
      }
    };

    // Call the function once to set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const getVisibleImages = () => {
    const doubledImages = images.concat(images);
    return doubledImages.slice(currentIndex, currentIndex + visibleImages);
  };

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="flex overflow-hidden rounded-lg">
          {getVisibleImages().map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${currentIndex + index}`}
              className={`object-cover h-64 ${visibleImages === 1 ? "w-full" : "w-1/4"}`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-r-md shadow hover:bg-opacity-100"
        >
          ◀️
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-l-md shadow hover:bg-opacity-100"
        >
          ▶️
        </button>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex bg-white px-4 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center md:flex-row md:justify-between">
          <div className="flex hidden justify-center md:block md:w-1/2 md:justify-end">
            <img
              src={EImageUri.GroupPic}
              alt="uxmm"
              className="h-auto max-w-full"
            />
          </div>
          <div className="text-center md:mt-5 md:w-1/2 md:text-left">
            <div className="flex items-center justify-between">
              <p className="mb-1 sm:mb-1 text-2xl sm:text-3xl font-semibold">
                Behind <span className="uxmm-text-color">UXMM</span>
              </p>
            </div>
            <div className="block flex justify-center md:hidden md:w-1/2 md:justify-end">
              <img
                src={EImageUri.GroupPic}
                alt="uxmm"
                className="h-auto max-w-full"
              />
            </div>
            <p className="max-w-md font-poppins text-[16px] leading-[26px] text-customgray mt-7 md:py-0">
              UXMM is a pioneering non-profit organization established in 2020
              by a passionate group of UX practitioners in Myanmar, UXMM has
              grown into Myanmar's largest non-profit design organization. We
              offer a variety of programs, including meetups, conferences,
              workshops, and mentorship opportunities. Our goal is to foster
              innovation, collaboration, and continuous learning.
            </p>
            <p className="font-poppins mt-3 text-[16px] leading-[26px] text-customgray mt-7 md:py-0 text-left">
              As a volunteer-led organization, we're committed to creating an
              inclusive and supportive environment for designers of all levels.
              With a growing network of members, UXMM serves as a central hub
              for design knowledge, resources, and networking. We're committed
              to driving the growth of design and technology in Myanmar and
              beyond.{" "}
            </p>
          </div>
        </div>
      </div>

      <OurValue />

      <div className="bg-gray-100 p-5">
        <p className="text-center text-[24px] font-[700] leading-[38px] mb-[15px]">
          Meet Our <span className="uxmm-text">Members</span>
        </p>
        <div className="flex justify-center">
          <Members />
        </div>
      </div>

      <GetInTouch/>
    </>
  );
};

export default ImageCarousel;
