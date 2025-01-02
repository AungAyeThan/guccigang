import React, { useState, useEffect } from "react";
import OurValue from "../../components/OurValue";
import Members from "../../components/common/Members";
import GetInTouch from "../../components/GetInTouch";
import DesktopSlider from "@/components/Carousel/desktop";
import MobileSlider from "@/components/Carousel/mobile";
import WhatWeDo from "@/components/WhatWeDo";

enum EImageUri {
  Slider1 = "/images/slider1.png",
  Slider2 = "/images/slider2.png",
  Slider3 = "/images/slider3.png",
  Slider4 = "/images/slider4.png",
  Slider5 = "/images/slider5.png",
  GroupPic = "/images/group-pic.png",
}

const ImageCarousel = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <div className="font-[700] text-[40px] leading-[54px] text-left font-plusJakarta lg:ml-[250px] max-w-[700px] mt-[30px] mb-[30px]">
        <span className="uxmm-text-color">UXMM</span>{" "}
        <span>: Empowering Myanmar's Design Community</span>
      </div>

      {isClient && !isMobile && (
        <div className="w-full max-w-5xl mx-auto py-8 div1">
          <DesktopSlider />
        </div>
      )}

      {isClient && isMobile && (
        <div className="w-full max-w-5xl mx-auto py-8 div2">
          <MobileSlider />
        </div>
      )}

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
              <p className="mb-1 sm:mb-1 text-2xl sm:text-3xl leading-[42px] font-[600] font-plusJakarta">
                <span>Transforming the Myanmar design landscape one</span>{" "}
                <span className="uxmm-text-color">amazing experience</span>{" "}
                <span> at a time.</span>
              </p>
            </div>
            <div className="block flex justify-center md:hidden md:w-1/2 md:justify-end">
              <img
                src={EImageUri.GroupPic}
                alt="uxmm"
                className="h-auto max-w-full"
              />
            </div>
            <p className="max-w-xl font-poppins text-[16px] leading-[26px] text-customgray mt-7 md:py-0">
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

      <div className="px-4 py-8 max-w-5xl mx-auto">
        <h2 className="text-center text-[24px] font-[700] leading-[38px] mb-8 font-plusJakarta">
          <span className="text-customgray">Our </span>
          <span className="uxmm-text-color">Missions & Visions</span>
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-12 gap-8">
          {/* Mission Section */}
          <div className="flex-1 max-w-lg md:max-w-[45%] mx-auto md:mx-0 px-1 md:px-7">
            <h3 className="text-3xl font-semibold leading-[42px] text-left font-plusJakarta">
              Missions
            </h3>
            <div className="border-t border-gray-300 pt-4">
              <h4 className="text-2xl font-bold leading-[38px] text-left font-plusJakarta mb-3">
                Empowering Exceptional User Experiences
              </h4>
              <p className="text-base leading-[26px] text-left font-poppins">
                To collaborate with individuals, communities, organizations, and
                educational institutions both locally and internationally to
                adopt and promote international standard design practices. This
                will enable Myanmar's design professionals to compete globally
                and secure job opportunities.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex-1 max-w-lg md:max-w-[45%] mx-auto md:mx-0 mt-[10%]">
            <h3 className="text-3xl font-semibold leading-[42px] text-left font-plusJakarta">
              Visions
            </h3>
            <div className="border-t border-gray-300 pt-4">
              <h4 className="text-2xl font-bold leading-[38px] text-left font-plusJakarta mb-3">
                Envisioning a Seamless Digital Future
              </h4>
              <p className="text-base leading-[26px] text-left font-poppins">
                To create a design society that prioritizes human-centered,
                sustainable, and impactful products and services across all
                levels and sectors related to UX design in Myanmar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <OurValue />

      <WhatWeDo />

      <div className="bg-gray-100 p-5">
        <p className="text-center text-[24px] font-[700] leading-[38px] mb-[15px] font-plusJakarta pt-[50px]">
          The Heart of UXMM:{" "}
          <span className="uxmm-text-color">Our Core Team</span>
        </p>
        <div className="flex justify-center">
          <Members />
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default ImageCarousel;
