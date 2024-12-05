import React from "react";
enum EImageUri {
  MentorProgram = "/images/mentor-program.png",
}

const PartnerProgram = () => {
  return (
    <>
      <div className="flex items-center justify-center">
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
                Partner Program
              </h2>
              <p className="mt-2 text-customgray font-poppins text-base font-normal leading-[26px] text-left">
                Becoming a partner with UXMM can provide you with an opportunity
                to connect with a community of UX professionals and enthusiasts,
                as well as promote your brand or product to a highly engaged
                audience.
              </p>
            </div>
            <button className="mt-4 self-start px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500 hover:text-white transition">
              Become a partner
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerProgram;
