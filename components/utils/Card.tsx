import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

const CardComponent: React.FC<CardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center">
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img src={image} alt="uxmm" className="w-full h-full object-cover" />
      </div>
      <p className="text-xl font-semibold mb-2 mt-2 text-[16px] leading-[26px] font-[500] text-center">
        {title}
      </p>
      <p className="text-gray-600 text-[14px] leading-[22px] font-[400] text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default CardComponent;
