enum EImageUri {
  IXDA = "/images/ixda.png",
  UXMY = "/images/uxmy.png",
  UXPH = "/images/uxph.png",
  UXVN = "/images/uxvn.png",
  UXTesting = "/images/uxtesting.png",
  UXSEA = "/images/uxseas.png",
  DesignMatter = "/images/DesignMatters.png",
  MMProjects = "/images/mmprojects.png",
  Phandeeyar = "/images/phandeeyar.png",
  productbase = "/images/productbaze.png",
  waimyanmar = "/images/WAImyanmar.png",
  savvysummit = "/images/savvyuxsummit.png",
  xers = "/images/xers.png",
}

const Partners = () => {
  return (
    <>
      <div className="bg-white py-8 px-4 md:px-16">
        <h2 className="text-center font-[700] leading-[38px] text-[24px] font-plusJakarta">
          <span className="text-customgray">Our</span>{" "}
          <span className="uxmm-text-color">International Partners</span>
        </h2>
        <p className="mt-4 text-center text-customgray font-poppins text-[16px] leading-[26px] font-[400]">
          Join our growing network of
          <span className="uxmm-text-color"> local</span> and{" "}
          <span className="uxmm-text-color">international partners</span>
          <p>who share our commitment to giving back to the community.</p>
        </p>

        <div className="grid grid-cols-2 mt-8 md:grid-cols-5 justify-center mx-auto lg:mx-[150px]">
          <a
            href="https://uxsea.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.UXSEA}
              alt="UXSEA Society"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
          <a
            href="https://www.uxph.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.UXPH}
              alt="UX PH"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
          <a
            href="https://www.uxtesting.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.UXTesting}
              alt="UX Testing"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
          <a
            href="https://www.uxvn.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.UXVN}
              alt="UX VN"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
          <a
            href="https://www.savvyuxsummit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.savvysummit}
              alt="savvy summit"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
        </div>
      </div>
      <div className="bg-white py-8 px-4 md:px-16">
        <h2 className="text-center font-[700] leading-[38px] text-[24px] font-plusJakarta">
          <span className="text-customgray">Our</span>{" "}
          <span className="uxmm-text-color">Local Partners</span>
        </h2>

        <div className="grid grid-cols-2 mt-8 md:grid-cols-6 justify-center mx-auto lg:mx-[150px]">
          <img
            src={EImageUri.DesignMatter}
            alt="Design Matters"
            className="w-[80px] h-auto mx-auto"
          />
          <img
            src={EImageUri.MMProjects}
            alt="MMProjects"
            className="w-[80px] h-auto mx-auto"
          />
          <img
            src={EImageUri.Phandeeyar}
            alt="Phandeeyar"
            className="w-[80px] h-auto mx-auto"
          />
          <a
            href="https://www.productbaze.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.productbase}
              alt="productbase"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
          <a
            href="https://www.womeninai.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.waimyanmar}
              alt="waimyanmar"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
          <a
            href="https://xers.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={EImageUri.xers}
              alt="xers"
              className="w-[80px] h-auto mx-auto"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Partners;
