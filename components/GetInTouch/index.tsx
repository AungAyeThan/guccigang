enum EImageUri {
  IXDA = "/images/ixda.png",
  UXMY = "/images/uxmy.png",
  UXPH = "/images/uxph.png",
  UXSEA = "/images/uxsea.png",
}

const GetInTouch = () => {
  return (
    <div className="bg-pink-50 py-12 px-4 text-center">
      <h2 className="text-[36px] leading-[40px] text-center font-[700] font-plusJakarta">
        <span className="text-customgray">Get In</span>{" "}
        <span className="uxmm-text-color">Touch</span>
      </h2>
      <p className="mt-5 mx-auto text-customgray text-center font-[400] font-poppins text-[16px] leading-[26px] max-w-xs md:max-w-xl ">
        Please don't hesitate to drop us a line.
        <p>
          You can reach us at the email address provided on our website, and{" "}
          <br />
          we will do our utmost to get back to you in a timely manner.
        </p>
      </p>

      <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
        <button className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 text-white shadow-lg font-poppins border-2">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
