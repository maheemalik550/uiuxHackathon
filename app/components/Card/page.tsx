import React from 'react';

interface CardProps {
  extraColor: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ extraColor, image }) => {
  return (
    <div
      style={{ backgroundColor: extraColor }}
      className="h-[361px] w-[270px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="bg-pageBlue flex items-center justify-center text-center">
        <img className="w-[178px] h-[178px]" src={image} alt="" />
      </div>
      {/* Content */}
      <div className="text-center space-y-3" style={{ backgroundColor: extraColor }}>
        <h2 className="font-lato text-Textpink font-bold text-[20px]">Centilever Chair</h2>
        <div className="flex flex-row gap-2 pl-[100px]">
          <div className="w-[20px] h-2 rounded-full bg-[#05E6B7]"></div>
          <div className="w-[20px] h-2 rounded-full bg-[#F701A8]"></div>
          <div className="w-[20px] h-2 rounded-full bg-[#00009D]"></div>
        </div>
        <h2 className="font-lato text-[#151875] text-[20px]">Code - Y523301</h2>
        <h2 className="font-lato text-[#151875] text-[20px]">$42.11</h2>
      </div>
    </div>
  );
};

export default Card;
