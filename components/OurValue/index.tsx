enum EImageUri {
  Collaboration = "/images/collaboration.png",
  Empowerment = "/images/empowerment.png",
  Transparency = "/images/transparency.png",
  Diversity = "/images/diversity.png",
  WavyBackground = "/images/wavy-background.png",
  Line = "/images/our-value-line.svg",
}

const OurValue = () => {
  return (
    <div className="relative py-16">
      {/* Wavy Background Image */}
      <div
        className="mt-[150px] absolute inset-0 bg-no-repeat bg-center bg-contain opacity-80"
        style={{
          backgroundImage: `url(${EImageUri.WavyBackground})`,
        }}
      ></div>

      {/* Content (Text and Values Grid) */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-plusJakarta text-customgray">
            Our <span className="text-red-500">Values</span>
            <img
              src={EImageUri.Line}
              alt="wavy line"
              className="absolute w-20 h-auto left-[70px] right-0 mx-auto top-[40px]"
            />
          </h2>
        </div>

        {/* Values Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:max-w-4xl">
          {/* Transparency */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.Transparency}
                alt="Transparency Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-lg font-bold font-plusJakarta mb-5">
              Transparency
            </h3>
            <p className="text-center text-[14px] font-[400] leading-[22px] font-poppins text-customgray">
              Team transparency at UXMM involves clear communication, shared
              decision-making, accountability, and fosters trust and a shared
              sense of ownership, helping us achieve our goals.
            </p>
          </div>

          {/* Collaboration */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.Collaboration}
                alt="Collaboration Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-lg font-bold font-plusJakarta mb-5">
              Collaboration
            </h3>
            <p className="text-center text-[14px] font-normal leading-[22px] text-customgray font-poppins">
              Team collaboration at UXMM involves working efficiently towards
              shared goals, leveraging strengths, promoting inclusivity and
              support, leading to better outcomes and a stronger community.
            </p>
          </div>

          {/* Empowerment */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.Empowerment}
                alt="Empowerment Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-lg font-bold font-plusJakarta mb-5">
              Empowerment
            </h3>
            <p className="text-center text-[14px] font-normal leading-[22px] text-customgray font-poppins">
              Team empowerment at UXMM involves providing growth opportunities,
              fostering autonomy, innovation, and experimentation, enabling
              individuals to reach their full potential and contribute to the
              community's success.
            </p>
          </div>

          {/* Diversity */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.Diversity}
                alt="Diversity Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-lg font-bold font-plusJakarta mb-5">
              Diversity
            </h3>
            <p className="text-center text-[14px] font-normal leading-[22px] text-customgray font-poppins">
              Team diversity at UXMM involves embracing differences, creating a
              diverse and inclusive environment that reflects our users, leading
              to better design solutions and a more representative community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
