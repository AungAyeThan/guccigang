import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

const CardComponent: React.FC<CardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col h-[300px]">
      {/* Updated container for image */}
      <div className="w-full h-[200px] overflow-hidden rounded-lg flex justify-center items-center p-3">
        <img src={image} alt="uxmm" className="w-[full] h-full object-cover" />
      </div>
      <div className="mt-2 ml-4">
        <p className="text-[16px] leading-[26px] font-[500] font-poppins text-customgray">
          {title}
        </p>
      </div>
      <div className="w-[200px] ml-4">
        <span className="font-poppins text-[14px] leading-[22px] font-[400] text-customgray">
          {subtitle.split(",").map((text, index) => (
            <React.Fragment key={index}>
              {text}
              {index < subtitle.split(",").length - 1 && (
                <>
                  ,<br />
                </>
              )}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default CardComponent;
