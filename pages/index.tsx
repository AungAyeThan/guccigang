import OurValue from './components/OurValue';
import Partners from './components/Partners';

enum EImageUri {
  UxmmLogo = '/images/home.png',
  Sumyathninicon = '/images/sumyathnin-icon.png',
  Phyokyawheinicon = '/images/phyokyawhein-icon.png',
  Alvin = '/images/alvin-icon.png',
  Key = '/images/key-icon.png',
  Workshop = '/images/physical-workshop.png',
}

export default function Home() {
  return (
    <>
      <div className="flex bg-white px-4 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
            <h1 className="home-title mb-4 font-plusJakarta">User Experiences Myanmar</h1>
            <div className="block flex justify-center md:hidden md:w-1/2 md:justify-end">
              <img src={EImageUri.UxmmLogo} alt="uxmm" className="h-auto max-w-full" />
            </div>
            <p className="max-w-md font-poppins text-[16px] leading-[26px] text-gray">
              Our organization provides technical knowledge and educational resources for Product design, User
              Experience, and User Interface.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg">
                Join With Us →
              </button>
              <button className="rounded-full border border-pink-500 bg-white px-6 py-3 font-semibold text-pink-500 shadow-lg">
                Latest Event
              </button>
            </div>
          </div>

          <div className="flex hidden justify-center md:block md:w-1/2 md:justify-end">
            <img src={EImageUri.UxmmLogo} alt="uxmm" className="h-auto max-w-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 bg-slate-50">
        <div>
          <div className="flex justify-between">
            <div className="profile-small-sm relative left-[13rem] top-[4rem]">
              <button className="rounded-full border-[5px] border-white bg-amber-300 hover:bg-yellow-700">
                <img src={EImageUri.Sumyathninicon} alt="uxmm" className="inline-block" />
              </button>
            </div>

            <div className="profile-small-sm relative right-[2rem] top-[4rem]">
              <button className="rounded-full border-[5px] border-white bg-blue-400 hover:bg-blue-700">
                <img src={EImageUri.Phyokyawheinicon} alt="uxmm" className="inline-block" />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="profile-small-sm relative bottom-[-8rem] left-[7rem]">
              <button className="rounded-full border-[5px] border-white bg-indigo-400 hover:bg-indigo-700">
                <img src={EImageUri.Alvin} alt="uxmm" className="inline-block" />
              </button>
            </div>

            <div className="profile-small-sm relative bottom-[-8rem] right-[9rem]">
              <button className="rounded-full border-[5px] border-white bg-yellow-300 hover:bg-yellow-400">
                <img src={EImageUri.Alvin} alt="uxmm" className="inline-block" />
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="profile-small-sm relative bottom-[-12rem] left-[13rem]">
              <button className="rounded-full border-[5px] border-white bg-indigo-400 hover:bg-indigo-700">
                <img src={EImageUri.Alvin} alt="uxmm" className="inline-block" />
              </button>
            </div>

            <div className="profile-small-sm relative bottom-[-12rem] right-[2rem]">
              <button className="rounded-full border-[5px] border-white bg-purple-400 hover:bg-purple-700">
                <img src={EImageUri.Key} alt="uxmm" className="inline-block" />
              </button>
            </div>
          </div>
        </div>

        <div className="left-7 ml-7 mt-[5rem] p-4 ps-10">
          <div className="p-4 md:p-8">
            <p className="home-sectiontwo text-center font-bold">
              About <span className="uxmm-text">UXMM</span>
            </p>
            <p className="text-center font-poppins text-[16px] font-normal leading-[26px] text-mildGray">
              UXMM empowers UX design in Myanmar through our career growth platform, offering technical knowledge,
              educational resources, and community engagement.
            </p>
          </div>
          <button className="uxmm-btn relative mt-4 text-white md:ml-[3rem] md:mt-2 lg:ml-[6rem] xl:ml-[7rem] 2xl:ml-[12rem]">
            About Us {'->'}
          </button>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="profile-small-sm relative left-[4rem] top-[4rem]">
              <button className="rounded-full border-[5px] border-white bg-amber-300 hover:bg-yellow-700">
                <img src={EImageUri.Sumyathninicon} alt="uxmm" className="inline-block" />
              </button>
            </div>

            <div className="profile-small-sm relative right-[12rem] top-[4rem]">
              <button className="rounded-full border-[5px] border-white bg-blue-400 hover:bg-blue-700">
                <img src={EImageUri.Phyokyawheinicon} alt="uxmm" className="inline-block" />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="profile-small-sm relative bottom-[-8rem] md:left-[10rem]">
              <button className="rounded-full border-[5px] border-white bg-indigo-400 hover:bg-indigo-700">
                <img src={EImageUri.Alvin} alt="uxmm" className="inline-block" />
              </button>
            </div>

            <div className="profile-small-sm relative bottom-[-8rem] right-[5rem]">
              <button className="rounded-full border-[5px] border-white bg-yellow-300 hover:bg-yellow-400">
                <img src={EImageUri.Alvin} alt="uxmm" className="inline-block" />
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="profile-small-sm relative bottom-[-12rem] left-[4rem]">
              <button className="rounded-full border-[5px] border-white bg-indigo-400 hover:bg-indigo-700">
                <img src={EImageUri.Alvin} alt="uxmm" className="inline-block" />
              </button>
            </div>

            <div className="profile-small-sm relative bottom-[-12rem] right-[12rem]">
              <button className="rounded-full border-[5px] border-white bg-purple-400 hover:bg-purple-700">
                <img src={EImageUri.Key} alt="uxmm" className="inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xl font-bold leading-[38px] sm:mt-4 md:text-2xl">
        Latest <span className="uxmm-text">Event</span>
      </p>

      <div className="flex bg-white px-4 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start md:flex-row md:justify-between md:pl-[100px]">
          <div className="mb-8 text-center md:mb-0 md:ml-auto md:w-1/2 md:text-left">
            <h2 className="font-poppins text-sm text-mildGray">Physical Workshop</h2>
            <h1 className="mb-5 whitespace-nowrap text-left font-plusJakarta text-[24px] font-bold leading-[38px] text-gray">
              From Ideation to Implementation
            </h1>
            <p className="mb-4 max-w-md font-poppins text-[16px] leading-[26px] text-gray">
              Attend our workshop to learn how to create a design system from ideation to implementation. Ideal for
              beginners and design system refreshers, discover best practices for showcasing your skills and experience
              effectively.
            </p>
            {/* Button */}
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg">
              Register Now →
            </button>
          </div>

          {/* Right Section: Image */}
          <div className="flex justify-center md:w-1/2">
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
    </>
  );
}
