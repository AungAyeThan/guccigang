import GetInTouch from "@/components/GetInTouch";
import Partners from "@/components/Partners";
import React from "react";

enum EImageUri {
  GroupPic = "/images/group-pic.png",
  MentorProgram = "/images/mentor-program.png",
  SpeakerProgram = "/images/speaker-program.png",
  VolunteerProgram = "/images/volunteer-program.png",
  DoodleAsset1 = "/images/mentor-doodle.png",
  DoodleAsset2 = "/images/doddle-asset-2.png",
  PartnerProgram = "/images/partnership.png",
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
        <h1 className="leading-[54px] text-[40px] font-[700] font-plusJararta lg:w-[45%] text-center">
          Become a <span className="uxmm-text-color"> Partner</span>
        </h1>
        <div className="absolute sm:top-[100px] md:top-[145px] min-[320px]:left-[30%] sm:left-[79%] md:left-[85%] lg:left-[78%] xl:left-[72%] hidden md:block">
          <img
            src={EImageUri.DoodleAsset1}
            alt="DoodleAsset"
            className="absw-12 h-12 md:h-[50px] lg:h-[50px] xl:h-[60px]"
          />
        </div>

        {/* Description */}
        <p className="md:text-[16px] leading-[26px] mt-4 font-poppins text-customgray w-[85%] lg:w-[63%] xl:w-[43%]">
          Becoming a partner with UXMM can provide you with an opportunity to
          connect with a community of UX professionals and enthusiasts, as well
          as promote your brand or product to a highly engaged audience.
        </p>

        <a
          href="https://forms.gle/syhDbWK6jKsn8xuaA"
          className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-pink-600 hover:to-red-600 transition"
        >
          Become a Partner
        </a>

        <div className="absolute sm:top-[100px] md:top-[350px] lg:top-[350px] min-[320px]:left-[20%] min-[760px]:left-[5%] lg:left-[15%] xl:left-[20%]  hidden md:block">
          <img
            src={EImageUri.DoodleAsset2}
            alt="DoodleAsset"
            className="w-12 h-12 md:h-[50px] lg:h-[50px] xl:h-[60px]"
          />
        </div>
      </div>

      {/* <Partners /> */}

      <div className="flex px-4 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center md:flex-row md:justify-between">
          <div className="flex hidden justify-center md:block md:w-1/2 md:justify-end">
            <img
              src={EImageUri.PartnerProgram}
              alt="uxmm"
              className="h-auto max-w-full rounded-lg border-4 border-white shadow-md"
            />
          </div>
          <div className="md:mt-5 md:w-1/2 md:text-left">
            <div className="flex items-center justify-between">
              <p className="text-[32px] font-semibold leading-[42px] text-left md:m-4 font-plusJakarta">
                Benefits of becoming a{" "}
                <span className="uxmm-text-color">Partner with UXMM</span>
              </p>
            </div>
            <div className="block flex justify-center md:hidden md:w-1/2  md:justify-end mt-5">
              <img
                src={EImageUri.PartnerProgram}
                alt="uxmm"
                className="h-auto max-w-full"
              />
            </div>
            <div className="max-w-md font-poppins text-[16px] leading-[26px] text-customgray mt-7 md:m-4 md:py-0 list-disc list-inside">
              <p>
                As a partner, you can collaborate with UXMM on events,
                workshops, or talks, and showcase your expertise or products to
                the community. This partnership can also help you to stay
                up-to-date with the latest UX trends and best practices, network
                with other UX professionals, and potentially attract new talent
                to your organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between ml-0 md:ml-[14%]">
        {/* Left Content */}
        <div className="text-center md:text-left px-6 py-12">
          <h2 className="text-[30px] font-extrabold leading-[44px] text-left font-plusJakarta text-customgray">
            It’s easier than you think. <br />
            <span className="uxmm-text-color">Join us.</span> We’ll help you
            every step of the way.
          </h2>

          <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="https://forms.gle/syhDbWK6jKsn8xuaA"
              className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg"
            >
              Become a partner
            </a>
          </div>
        </div>

        {/* Right Decorative Dots */}
      </div>

      <h2 className="text-center font-plusJakarta font-[700] text-[24px] leading-[38px] mb-8 mt-12">
        Browse <span className="uxmm-text-color">another programs</span> that we
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
              <div className="font-plusJakarta text-[32px] leading-[42px] font-[700] text-customgray">
                Mentor Program
              </div>
              <p className="mt-2 text-customgray font-poppins text-base font-normal leading-[26px] text-left">
                Becoming a mentor with UXMM can provide you with an opportunity
                to share your expertise and knowledge with others, while also
                building your professional network and enhancing your leadership
                skills.
              </p>
            </div>
            <a
              href="/mentor"
              className="mt-4 self-start px-6 py-2 border-2 border-red-500 uxmm-text-color text-[16px] leading-[26px] font-[500] font-poppins rounded-xl hover:from-pink-600 hover:to-red-600 transition"
            >
              Become a mentor
            </a>
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
              <div className="font-plusJakarta text-[32px] leading-[42px] font-[700] text-customgray">
                Speaker Program
              </div>
              <p className="mt-2 text-customgray font-poppins text-[16px] leading-[26px] text-left">
                Becoming a speaker with UXMM can provide you with an opportunity
                to share your expertise and insights with a community of UX
                professionals and enthusiasts in Myanmar.
              </p>
            </div>
            <a
              href="/speaker"
              className="mt-4 self-start px-6 py-2 border-2 border-red-500 uxmm-text-color text-[16px] leading-[26px] font-[500] font-poppins rounded-xl hover:from-pink-600 hover:to-red-600 transition"
            >
              Become a Speaker
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col lg:flex-row rounded-lg shadow-md p-6 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-8 max-w-4xl w-full">
            <div className="flex flex-col justify-between lg:w-1/2">
              <div>
                <div className="font-plusJakarta text-[32px] leading-[42px] font-[700] text-customgray">
                  Speaker Program
                </div>
                <p className="mt-2 text-customgray font-poppins text-[16px] leading-[26px] text-left">
                  Becoming a speaker with UXMM can provide you with an
                  opportunity to share your expertise and insights with a
                  community of UX professionals and enthusiasts in Myanmar.
                </p>
              </div>
              <a
                href="/speaker"
                className="mt-4 self-start px-6 py-2 border-2 border-red-500 uxmm-text-color text-[16px] leading-[26px] font-[500] font-poppins rounded-xl hover:from-pink-600 hover:to-red-600 transition"
              >
                Become a Speaker
              </a>
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
              <div className="font-plusJakarta text-[32px] leading-[42px] font-[700] text-customgray">
                Volunteer Program
              </div>
              <p className="mt-2 text-customgray font-poppins text-[16px] leading-[26px] text-left">
                Becoming a volunteer with UXMM can provide you with an
                opportunity to contribute to the development of the UX community
                and gain valuable experience in event planning and management.
              </p>
            </div>
            <a
              href="/volunteer"
              className="mt-4 self-start px-6 py-2 border-2 border-red-500 uxmm-text-color text-[16px] leading-[26px] font-[500] font-poppins rounded-xl hover:from-pink-600 hover:to-red-600 transition"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default Partner;
