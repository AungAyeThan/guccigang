import React from "react";
enum EImageUri {
  Line = "/images/our-value-line.svg",
}
const WhatWeDo = () => {
  return (
    <div className="bg-pink-50 p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left Section: Title */}
        <div className="md:w-2/4 text-right mr-5">
          <h2 className="text-[24px] leading-[38px] font-[700] font-plusJakarta font-bold mb-2">
            <span>What </span>
            <span className="uxmm-text-color">We Do</span>
          </h2>
          <img
            src={EImageUri.Line}
            alt="wavy line"
            className="w-20 h-auto md:ml-[500px] lg:ml-[87%] right-0 mx-auto"
          />
        </div>

        {/* Right Section: Events List */}
        <div className="md:w-2/3 space-y-6">
          <div>
            <h3 className="text-[16px] font-poppins font-semibold leading-[26px] font-[600] uxmm-text-color">
              Community Events
            </h3>
            <p className="text-customgray font-poppins text-[14px] leading-[22px] font-[400]">
              Organize regular online & offline meetups, conferences, and
              workshops.
            </p>
          </div>
          <div>
            <h3 className="text-[16px] font-poppins font-semibold leading-[26px] font-[600] uxmm-text-color">
              Mentorship
            </h3>
            <p className="text-customgray font-poppins text-[14px] leading-[22px] font-[400]">
              Offer mentorship programs for aspiring designers.
            </p>
          </div>
          <div>
            <h3 className="text-[16px] font-poppins font-semibold leading-[26px] font-[600] uxmm-text-color">
              Education
            </h3>
            <p className="text-customgray font-poppins text-[14px] leading-[22px] font-[400]">
              Provide courses, workshops, bootcamps, and training programs.
            </p>
          </div>
          <div>
            <h3 className="text-[16px] font-poppins font-semibold leading-[26px] font-[600] uxmm-text-color">
              Volunteer Opportunities
            </h3>
            <p className="text-customgray font-poppins text-[14px] leading-[22px] font-[400]">
              Engage volunteers in various initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
