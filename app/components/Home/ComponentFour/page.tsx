import React from 'react';
import { FcAutomotive } from 'react-icons/fc';

const ComponentFour = () => {
  return (
    <div className="py-8 px-4 bg-gray-50">
      {/* Title */}
      <h1 className="font-sans text-[35px] text-[#1A0B5B] font-bold text-center mb-6">
        What Shopex offer
      </h1>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="h-[270px] w-[90%] sm:w-[320px] lg:w-[280px] xl:w-[300px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center bg-white"
            >
              <div className="mb-4">
                <FcAutomotive size={100} />
              </div>
              <h1 className="text-[#1A0B5B] font-bold font-sans text-lg">
                24/7 Support
              </h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-600">Lorem ipsum dolor sit.</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ComponentFour;
