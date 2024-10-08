enum EImageUri {
  Collaboration = '/images/collaboration.png',
  Empowerment = '/images/empowerment.png',
  Transparency = '/images/transparency.png',
}

const OurValue = () => {
  return (
    <div className="text-center">
      <p className="mt-8 text-2xl font-bold leading-10">
        Our <span className="uxmm-text">Value</span>
      </p>
      <div className="mt-[3rem] grid grid-cols-1 gap-0 sm:mx-[4rem] md:mx-[5rem] md:mt-[3rem] md:grid-cols-2">
        <div className="mx-4 md:mx-[4rem]">
          <div className="flex items-center justify-center">
            <img src={EImageUri.Transparency} alt="uxmm" className="inline-block" />
          </div>
          <p className="mt-2 text-lg font-semibold">Transparency</p>
          <div className="mt-2 md:m-[30px]">
            <p className="text-center text-sm leading-6">
              Team transparency at UXMM involves clear communication, shared decision-making, accountability, and
              fosters trust and a shared sense of ownership, helping us achieve our goals.
            </p>
          </div>
        </div>
        <div className="mx-4 md:mx-[4rem]">
          <div className="flex items-center justify-center">
            <img src={EImageUri.Collaboration} alt="uxmm" className="inline-block" />
          </div>
          <p className="mt-2 text-lg font-semibold">Collaboration</p>
          <div className="mt-2 md:m-[30px]">
            <p className="text-sm leading-6">
              Team collaboration at UXMM involves working efficiently towards shared goals, leveraging strengths,
              promoting inclusivity and support, leading to better outcomes and a stronger community.
            </p>
          </div>
        </div>
        <div className="mx-4 md:mx-[4rem]">
          <div className="flex items-center justify-center">
            <img src={EImageUri.Empowerment} alt="uxmm" className="inline-block" />
          </div>
          <p className="mt-2 text-lg font-semibold">Empowerment</p>
          <div className="mt-2 md:m-[30px]">
            <p className="text-sm leading-6">
              Team empowerment at UXMM involves providing growth opportunities, fostering autonomy, innovation, and
              experimentation, enabling individuals to reach their full potential and contribute to the community's
              success.
            </p>
          </div>
        </div>
        <div className="mx-4 md:mx-[4rem]">
          <div className="flex items-center justify-center">
            <img src={EImageUri.Empowerment} alt="uxmm" className="inline-block" />
          </div>
          <p className="mt-2 text-lg font-semibold">Diversity</p>
          <div className="mt-2 md:m-[30px]">
            <p className="text-sm leading-6">
              Team diversity at UXMM involves embracing differences, creating a diverse and inclusive environment that
              reflects our users, leading to better design solutions and a more representative community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
