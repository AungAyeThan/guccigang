import React from "react";

type FlexComponentProps = {
  imageUrl: string;
  title: string;
  type: string;
  author: string;
  date: string;
};

const FlexComponent: React.FC<FlexComponentProps> = ({
  imageUrl,
  title,
  author,
  type,
  date,
}) => {
  return (
    <div className="flex md:flex-row min-[320px]:flex-col items-center space-x-4">
      <img src={imageUrl} alt="Demo" className="w-[65%] h-[50%] object-cover" />
      <div className="flex flex-col items-start gap-3.5 flex-1">
        <p className="w-[338px] text-[#616161] text-[14px] font-poppins leading-[22px]">
          {date}
        </p>
        <p className="p-3 text-customgray bg-gray-200 text-[16px] leading-[26px] font-[400] font-poppins bg-opacity-50 rounded">
          {type}
        </p>
        <p className="self-stretch text-[#3A3A3A] text-base text-[16px] font-[500] leading-[26px] font-poppins">
          {title}
        </p>
        <p className="w-[338px] text-[#3A3A3A] text-base text-[16px] font-[400] font-poppins leading-[26px]">
          {author}
        </p>
      </div>
    </div>
  );
};

export default FlexComponent;
