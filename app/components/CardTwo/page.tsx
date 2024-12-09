import React from 'react';

interface CardProps {
  extraColor: string;
  image: string;
  cardCol: string;
}

const CardThree: React.FC<CardProps> = ({ extraColor, image, cardCol }) => {
  return (
    <div
      className="h-[306px] w-[365px] rounded-lg"
      style={{ backgroundColor: extraColor }} // Use inline styles for dynamic colors
    >
      {/* Image */}
      <div
        style={{ backgroundColor: cardCol }}
        className="flex items-center justify-center text-center"
      >
        <img className="w-[223px] h-[229px]" src={image} alt="Product" />
      </div>

      {/* Content */}
      <div className="flex flex-row gap-[40px] justify-evenly mt-4">
        <h2 className="font-lato text-[#151875] text-[20px]">
          Comfort Handy Craft
        </h2>

        <div className="flex flex-row gap-5">
          <h2 className="font-lato text-[#151875] text-[20px]">$42.11</h2>
          <h2 className="font-lato text-[#FB2448] text-[20px]">$42.11</h2>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
