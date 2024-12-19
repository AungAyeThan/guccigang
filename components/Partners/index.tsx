enum EImageUri {
  IXDA = "/images/ixda.png",
  UXMY = "/images/uxmy.png",
  UXPH = "/images/uxph.png",
  UXSEA = "/images/uxsea.png",
}

const Partners = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-16">
      <h2 className="text-center font-[700] lending-[38px] text-[24px] font-plusJakarta">
        <span className="text-customgray">Our</span>{" "}
        <span className="uxmm-text-color">Partners</span>
      </h2>
      <p className="mt-4 text-center text-customgray font-poppins text-[16px] lending-[26px] font-[400]">
        Join our growing network of
        <span className="uxmm-text-color"> local</span> and{" "}
        <span className="uxmm-text-color">international partners</span>
        <p>who share our commitment to giving back to the community.</p>
      </p>

      <div className="grid grid-cols-2 mt-8 md:grid-cols-6 justify-center mx-auto lg:mx-[150px]">
        <img src={EImageUri.UXPH} alt="UX PH" className="w-16 h-auto mx-auto" />
        <img
          src={EImageUri.IXDA}
          alt="IxDA Singapore"
          className="w-16 h-auto mx-auto"
        />
        <img
          src={EImageUri.UXMY}
          alt="UX Malaysia"
          className="w-16 h-auto mx-auto"
        />
        <img
          src={EImageUri.UXSEA}
          alt="UXSEA Society"
          className="w-16 h-auto mx-auto"
        />
        <img
          src={EImageUri.IXDA}
          alt="IxDA Singapore 2"
          className="w-16 h-auto mx-auto"
        />
        <img
          src={EImageUri.UXMY}
          alt="UX Malaysia 2"
          className="w-16 h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Partners;
