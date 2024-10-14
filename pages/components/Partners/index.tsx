enum EImageUri {
  IXDA = "/images/ixda.png",
  UXMY = "/images/uxmy.png",
  UXPH = "/images/uxph.png",
  UXSEA = "/images/uxsea.png",
}

const Partners = () => {
  return (
    <div className="mt-[3rem] md:mt-[1rem]">
      <p className="text-center text-2xl font-bold leading-10">
        Our <span className="uxmm-text">Partners</span>
      </p>
      <p className="mt-3 text-center text-lg font-normal leading-7">
        UXMM has numerous partners both{" "}
        <span className="uxmm-text-color">locally</span> and{" "}
        <span className="uxmm-text-color">internationally</span>
      </p>

      <div className="ml-5 mt-4 grid grid-cols-2 gap-4 md:ml-[10rem] md:mt-5 md:grid-cols-6">
        <img src={EImageUri.UXPH} alt="uxph" className="h-[80px] w-[80px]" />
        <img src={EImageUri.IXDA} alt="ixda" className="h-[80px] w-[80px]" />
        <img src={EImageUri.UXMY} alt="uxmy" className="h-[80px] w-[80px]" />
        <img src={EImageUri.UXSEA} alt="uxsea" className="h-[80px] w-[80px]" />
        <img src={EImageUri.IXDA} alt="ixda" className="h-[80px] w-[80px]" />
        <img src={EImageUri.UXMY} alt="uxmy" className="h-[80px] w-[80px]" />
      </div>
    </div>
  );
};

export default Partners;
