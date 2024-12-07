import GetInTouch from "@/components/GetInTouch";
import React from "react";
enum EImageUri {
  GroupPic = "/images/group-pic.png",
  MentorProgram = "/images/mentor-program.png",
  SpeakerProgram = "/images/speaker-program.png",
  VolunteerProgram = "/images/volunteer-program.png",
  DoodleAsset1 = "/images/mentor-doodle.png",
  DoodleAsset2 = "/images/doddle-asset-2.png",
}
const Partner = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center px-6 py-12 md:px-16">
        <div className="text-sm mb-4 font-poppins text-base leading-[26px] text-left">
          <span className="text-sideMapGray">Programs</span>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-black-500">Partner</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-[54px] text-[40px]">
          Become a <span className="uxmm-text-color">Partner</span>
        </h1>
        <div className="absolute sm:top-[100px] md:top-[145px] min-[320px]:left-[90%] sm:left-[79%] md:left-[85%] lg:left-[72%]  hidden md:block">
          <img
            src={EImageUri.DoodleAsset1}
            alt="DoodleAsset"
            className="absw-12 h-12 md:h-[50px] lg:h-[50px] xl:h-[60px]"
          />
        </div>

        {/* Description */}
        <p className="md:text-[16px] leading-[26px] mt-4 font-poppins text-customgray md:w-[41%]">
          Becoming a partner with UXMM can provide you with an opportunity to
          connect with a community of UX professionals and enthusiasts, as well
          as promote your brand or product to a highly engaged audience.
        </p>

        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-pink-600 hover:to-red-600 transition">
          Become a Partner
        </button>

        <div className="absolute max-[320px]:top-[300px] sm:top-[100px] md:top-[345px] min-[320px]:left-[20%]  lg:left-[25%]  hidden md:block">
          <img
            src={EImageUri.DoodleAsset2}
            alt="DoodleAsset"
            className="w-12 h-12 md:h-[50px] lg:h-[50px] xl:h-[60px]"
          />
        </div>
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
                <span className="uxmm-text-color">Partner with UXMM</span>
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
              As a partner, you can collaborate with UXMM on events, workshops,
              or talks, and showcase your expertise or products to the
              community. This partnership can also help you to stay up-to-date
              with the latest UX trends and best practices, network with other
              UX professionals, and potentially attract new talent to your
              organization.
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
              Become a partner
            </button>
          </div>
        </div>

        {/* Right Decorative Dots */}
      </div>

      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 mt-7">
        Browse <span className="text-red-500">another programs</span> that we
        offer
      </h2>

      <div className="flex items-center justify-center mt-5">
        <div className="flex flex-col lg:flex-row rounded-lg shadow-md p-6 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-8 max-w-4xl w-full">
          {/* Left Image Section */}
          <div className="flex-shrink-0 lg:w-1/2">
            <img
              src={EImageUri.MentorProgram}
              alt="Mentor Program"
              className="rounded-lg w-full h-[200px] object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col justify-between lg:w-1/2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Mentor Program
              </h2>
              <p className="mt-2 text-customgray font-poppins text-base font-normal leading-[26px] text-left">
                Becoming a mentor with UXMM can provide you with an opportunity
                to share your expertise and knowledge with others, while also
                building your professional network and enhancing your leadership
                skills.
              </p>
            </div>
            <button className="mt-4 self-start px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500 hover:text-white transition">
              Become a mentor
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 md:hidden">
        <div className="flex flex-col lg:flex-row rounded-lg shadow-md p-6 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-8 max-w-4xl w-full">
          <div className="flex-shrink-0 lg:w-1/2">
            <img
              src={EImageUri.SpeakerProgram}
              alt="Speaker Program"
              className="rounded-lg w-full h-[200px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-between lg:w-1/2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Speaker Program
              </h2>
              <p className="mt-2 text-customgray font-poppins text-base font-normal leading-[26px] text-left">
                Becoming a mentor with UXMM can provide you with an opportunity
                to share your expertise and knowledge with others, while also
                building your professional network and enhancing your leadership
                skills.
              </p>
            </div>
            <button className="mt-4 self-start px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500 hover:text-white transition">
              Become a Speaker
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col lg:flex-row rounded-lg shadow-md p-6 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-8 max-w-4xl w-full">
            <div className="flex flex-col justify-between lg:w-1/2">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Speaker Program
                </h2>
                <p className="mt-2 text-customgray font-poppins text-base font-normal leading-[26px] text-left">
                  Becoming a mentor with UXMM can provide you with an
                  opportunity to share your expertise and knowledge with others,
                  while also building your professional network and enhancing
                  your leadership skills.
                </p>
              </div>
              <button className="mt-4 self-start px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500 hover:text-white transition">
                Become a Speaker
              </button>
            </div>

            <div className="flex-shrink-0 lg:w-1/2">
              <img
                src={EImageUri.SpeakerProgram}
                alt="Speaker Program"
                className="rounded-lg w-full h-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 mb-12">
        <div className="flex flex-col lg:flex-row rounded-lg shadow-md p-6 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-8 max-w-4xl w-full">
          {/* Left Image Section */}
          <div className="flex-shrink-0 lg:w-1/2">
            <img
              src={EImageUri.VolunteerProgram}
              alt="Partner Program"
              className="rounded-lg w-full h-[200px] object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col justify-between lg:w-1/2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Volunteer Program
              </h2>
              <p className="mt-2 text-customgray font-poppins text-base font-normal leading-[26px] text-left">
                Becoming a mentor with UXMM can provide you with an opportunity
                to share your expertise and knowledge with others, while also
                building your professional network and enhancing your leadership
                skills.
              </p>
            </div>
            <button className="mt-4 self-start px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500 hover:text-white transition">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default Partner;
