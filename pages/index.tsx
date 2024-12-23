import GetInTouch from "../components/GetInTouch";
import OurValue from "../components/OurValue";
import Partners from "../components/Partners";

enum EImageUri {
  UxmmLogo = "/images/home.png",
  Sumyathninicon = "/images/sumyathnin-icon.png",
  Phyokyawheinicon = "/images/phyokyawhein-icon.png",
  Alvin = "/images/alvin-icon.png",
  Key = "/images/key-icon.png",
  Workshop = "/images/physical-workshop.png",
  GroupPicRight = "/images/group_12399_r.png",
  GroupPicLeft = "/images/image_828_l.png",
  DoodleAsset3 = "/images/doodle-assets-3.svg",
  DoodleAsset4 = "/images/doodle-assets-4.svg",
}

export default function Home() {
  return (
    <>
      <div className="flex bg-white px-4 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
            <div className="flex items-center justify-between">
              <h1 className="uxmm-text-color font-[700] text-[40px] leading-[54px] mb-4 font-plusJakarta md:w-[80%]">
                Empowering Myanmar's Design Community
              </h1>
              {/* This doodle will now be positioned using absolute positioning */}
              <div
                className="absolute sm:top-[50px] md:top-[185px]
                md:left-[350px] lg:left-[400px] xl:left-[550px] 2xl:left-[41%] hidden md:block"
              >
                <img
                  src={EImageUri.DoodleAsset3}
                  alt="DoodleAsset3"
                  className="w-12 h-12 lg:w-[150px] md:h-[50px] lg:h-[50px] xl:h-[60px]"
                />
              </div>
            </div>
            <div className="block flex justify-center md:hidden md:w-1/2 md:justify-end">
              <img
                src={EImageUri.UxmmLogo}
                alt="uxmm"
                className="h-auto max-w-full"
              />
            </div>
            <p className="md:max-w-lg font-poppins text-[16px] font-[400] leading-[26px] text-customgray mt-5 md:py-0 text-left">
              UXMM is a pioneering non-profit organization established in 2020.
              Driven by a dedicated team of volunteers, we've been empowering
              Myanmar's design community and fostering a culture of innovation
              and collaboration.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg border-2">
                Join With Us →
              </button>
              <button className="rounded-full border border-pink-500 bg-white px-6 py-3 font-semibold text-pink-500 shadow-lg hover:bg-pink-200 border-2">
                Upcoming Events
              </button>
            </div>
          </div>

          <div className="flex hidden justify-center md:block md:w-1/2 md:justify-end">
            <img
              src={EImageUri.UxmmLogo}
              alt="uxmm"
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-8 bg-slate-50">
        {/* Main container */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-6 px-4">
          {/* Left Member Image */}
          <div className="flex items-center justify-center">
            <div>
              <img
                src={EImageUri.GroupPicLeft}
                alt="Left Member"
                className="w-[300px]"
              />
            </div>
          </div>

          {/* Middle Text Section */}
          <div className="text-center max-w-lg">
            <h2 className="text-[24px] leading-[38px] font-[700] font-bold text-customgray mb-4">
              About{" "}
              <span className="uxmm-text-color font-plusJakarta">UXMM</span>
            </h2>
            <p className="mb-6 text-center font-poppins text-[16px] font-[400] leading-[26px] text-customgray">
              UXMM is a dynamic non-profit organization dedicated to advancing
              the design field in Myanmar. We're committed to providing valuable
              resources, education, and networking opportunities for designers.
              As a volunteer-led organization, we're passionate about empowering
              the next generation of design talent and focused on fostering
              innovation, collaboration, and a supportive community.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row md:justify-center">
              <a
                href="/aboutus"
                className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg inline-block"
              >
                About Us &rarr;
              </a>
            </div>
          </div>

          {/* Right Member Image */}
          <div className="flex items-center justify-center lg:ml-4">
            <div>
              <img
                src={EImageUri.GroupPicRight}
                alt="Right Member"
                className="w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[24px] font-[700] leading-[38px] sm:mt-4 font-plusJakarta">
        Community <span className="uxmm-text-color">Event</span>
      </p>

      <div className="flex justify-center md:hidden md:w-1/2 md:justify-end px-4 py-4">
        <img
          src={EImageUri.Workshop}
          alt="physical workshop"
          className="h-auto max-w-full rounded-lg"
        />
      </div>

      <div className="relative flex bg-white px-4 py-1 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start md:flex-row md:justify-between md:pl-[100px]">
          <div className="mb-7 text-center md:text-left">
            <div className="flex items-center justify-between">
              <h2 className="font-poppins text-[16px] leading-[26px] font-[400] text-mildGray mt-10">
                Physical Workshop
              </h2>
              {/* This doodle will now be positioned using absolute positioning */}
              <div className="absolute top-[65px] md:left-[450px] lg:left-[450px] xl:left-[650px] 2xl:left-[45%] hidden md:block">
                <img
                  src={EImageUri.DoodleAsset4}
                  alt="DoodleAsset4"
                  className="w-12 h-12 lg:w-[150px] md:h-[50px] lg:h-[50px] xl:h-[80px] 2xl:h-[80px]"
                />
              </div>
            </div>

            <h1 className="text-left font-plusJakarta text-[20px] font-[700] mb-3 md:text-[24px] font-bold leading-[38px] text-customgray">
              From Ideation to Implementation
            </h1>

            <p className="mb-4 max-w-md font-poppins font-[400] text-[16px] leading-[26px] text-customgray text-left">
              Attend our workshop to learn how to create a design system from
              ideation to implementation. Ideal for beginners and design system
              refreshers, discover best practices for showcasing your skills and
              experience effectively.
            </p>

            {/* Button */}
            <a
              href="/events"
              className="mt-4 inline-block rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg text-center"
            >
              View All Events &rarr;
            </a>
          </div>

          {/* Right Section: Image */}
          <div className="flex hidden justify-center md:block md:w-1/2 md:justify-end">
            <img
              src={EImageUri.Workshop}
              alt="physical workshop"
              className="h-auto max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <OurValue />
      <Partners />
      <GetInTouch />
    </>
  );
}
