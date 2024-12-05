enum EImageUri {
  IXDA = "/images/ixda.png",
  UXMY = "/images/uxmy.png",
  UXPH = "/images/uxph.png",
  UXSEA = "/images/uxsea.png",
}

const Partners = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-16">
      <h2 className="text-center text-2xl font-bold font-plusJakarta text-black">
        Our <span className="text-red-500">Partners</span>
      </h2>
      <p className="mt-4 text-center text-customgray font-poppins">
        UXMM has numerous partners both{" "}
        <span className="text-red-500">locally</span> and{" "}
        <span className="text-red-500">internationally</span>
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
