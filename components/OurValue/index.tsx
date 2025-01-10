enum EImageUri {
  CommunityFocus = "/images/communityfocused.png",
  Collaboration = "/images/collaboration.png",
  Empowerment = "/images/empowerment.png",
  Innovation = "/images/innovation.png",
  SustainabilityFocused = "/images/sustainabilityfocused.png",
  Impactful = "/images/impactful.png",
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
          <h2 className="text-[24px] leading-[38px] font-[700] font-plusJakarta text-customgray">
            Our <span className="uxmm-text-color">Values</span>
            <img
              src={EImageUri.Line}
              alt="wavy line"
              className="absolute w-20 h-auto left-[45px] right-0 mx-auto top-[40px]"
            />
          </h2>
        </div>

        {/* Values Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:max-w-4xl">
          {/* CommunityFocus */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.CommunityFocus}
                alt="CommunityFocus Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-[600] text-[16px] leading-[26px] font-plusJakarta mb-5">
              Community Focus
            </h3>
            <p className="text-center text-[14px] font-[400] leading-[22px] font-poppins text-customgray">
              We prioritize serving the community, building a strong, supportive
              and contributing to the development of Myanmar.
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
            <h3 className="font-[600] text-[16px] leading-[26px] font-plusJakarta mb-5">
              Empowerment
            </h3>
            <p className="text-center text-[14px] font-[400] leading-[22px] font-poppins text-customgray">
              We are committed to providing accessible and quality education to
              empower individuals and communities through design.
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
            <h3 className="font-[600] text-[16px] leading-[26px] font-plusJakarta mb-5">
              Collaboration
            </h3>
            <p className="text-center text-[14px] font-normal leading-[22px] text-customgray font-poppins">
              We believe in the power of teamwork and partnerships to achieve
              great results.
            </p>
          </div>

          {/* Innovation */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.Innovation}
                alt="Innovative Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-[600] text-[16px] leading-[26px] font-plusJakarta mb-5">
              Innovation
            </h3>
            <p className="text-center text-[14px] font-normal leading-[22px] text-customgray font-poppins">
              We encourage creativity and continuous learning.
            </p>
          </div>

          {/* SustainabilityFocused */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.SustainabilityFocused}
                alt="SustainabilityFocused Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-[600] text-[16px] leading-[26px] font-plusJakarta mb-5">
              Sustainability Focused
            </h3>
            <p className="text-center text-[14px] font-normal leading-[22px] text-customgray font-poppins">
              We strive to create sustainable and long-lasting solutions.
            </p>
          </div>

          {/* Impactful */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={EImageUri.Impactful}
                alt="Impactful Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-[600] text-[16px] leading-[26px] font-plusJakarta mb-5">
              Impactful
            </h3>
            <p className="text-center text-[14px] font-normal leading-[22px] text-customgray font-poppins">
              We aim to make a positive and lasting impact on society through
              our work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
