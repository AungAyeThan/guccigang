import React from "react";
enum EImageUri {
  GroupPic = "/images/group-pic.png",
}
const Volunteer = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center px-6 py-12 md:px-16">
        <div className="text-gray-500 text-sm mb-4 font-poppins text-base leading-[26px] text-left">
          <span className="text-gray-500">Programs</span>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-black-500">Volunteer</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-[54px] text-[40px]">
          Become a <span className="uxmm-text-color">Volunteer</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-[26px leading-relaxed mt-4 max-w-2xl font-poppins">
          Becoming a mentor with UXMM can provide you with an opportunity to
          share your expertise and knowledge with others, while also building
          your professional network and enhancing your leadership skills.
        </p>

        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-pink-600 hover:to-red-600 transition">
          Become a mentor
        </button>
      </div>

      <div className="flex px-4 py-12">
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
              <p className="text-[32px] font-semibold leading-[42px] text-left font-plusJakarta">
                Benefits of becoming a{" "}
                <span className="uxmm-text-color">mentor with UXMM</span>
              </p>
            </div>
            <div className="block flex justify-center md:hidden md:w-1/2 md:justify-end mt-5">
              <img
                src={EImageUri.GroupPic}
                alt="uxmm"
                className="h-auto max-w-full"
              />
            </div>
            <p className="max-w-md font-poppins text-[16px] leading-[26px] text-customgray mt-7 md:py-0">
              As a mentor, you will work with UX enthusiasts who are looking to
              develop their skills and grow in their careers. You will provide
              guidance, support, and feedback to help them achieve their goals
              and advance in their careers. This can be a highly rewarding
              experience, as you will have the opportunity to share your
              knowledge and expertise, while also making a positive impact on
              the UX community.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between ml-0 md:ml-[14%]">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg px-6 py-12">
          <h2 className="text-[30px] font-extrabold leading-[44px] text-left font-plusJakarta text-customgray">
            It’s easier than you think. <br />
            <span className="uxmm-text-color">Join us.</span> We’ll help you
            every step of the way.
          </h2>

          <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg">
              Become a mentor
            </button>
          </div>
        </div>

        {/* Right Decorative Dots */}
      </div>
    </>
  );
};

export default Volunteer;