enum EImageUri {
  IXDA = "/images/ixda.png",
  UXMY = "/images/uxmy.png",
  UXPH = "/images/uxph.png",
  UXSEA = "/images/uxsea.png",
}

const GetInTouch = () => {
  return (
    <div className="bg-pink-50 py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray">
        Get In <span className="text-red-500">Touch</span>
      </h2>
      <p className="mt-5 mx-auto text-gray-600 text-center font-normal font-poppins text-[16px] leading-[26px] max-w-xs md:max-w-md ">
        Please don't hesitate to drop us a line. You can reach us at the email
        address provided on our website, and we will do our utmost to get back
        to you in a timely manner.
      </p>

      <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
        <button className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg font-poppins">
          Contact Us &rarr;
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
