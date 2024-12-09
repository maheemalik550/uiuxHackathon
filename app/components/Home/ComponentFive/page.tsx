import { Button } from '@/components/ui/button'
import React from 'react'

const ComponentFive = () => {
  return (
    <div className="bg-[#F1F0FF] min-h-screen w-full flex px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-16 items-center justify-center">
        {/* Circle Image */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <div className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-circlePink rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/2de2/ab83/660b40645da77ab88d969b9136d72dae?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hG9XTPXMopRLL38jyPl1RBvy0MJouj38wfgzB5gQHFwiMZA4FHrbGpeLC4zlGcFQsJVWT4AhGVZbMOEfIvbtpwsgp7oYDWeWX0FDcfmuFF7jzyw4XyhJBMmEl~YrS1KWwunCAfkBg8BzIdr1gd~EYdktoOw~TfXnQFEKUXKiH-6sO7OAb3YSZgXbA2YZ1NC8blxzUOnCvVFjThK6CMsJr5QmS5O1e8344nTm5-bxg179eUv2TWSf6Yt1umaNHR0CE3BnXorM4ZBp5DGumN7aMZWOoZyI0FttIIuYjVeS-XnrQDzcX3hHwj2kBdy0mDoiJ6AWQqs62-jqfeJGZipdjg__"
              alt="Feature Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* Left Section: Image and Text */}
        <div className="flex items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <div className="mt-8 lg:mt-[110px]">
            <h1 className="font-sans text-textPurple text-[24px] sm:text-[28px] lg:text-[35px] font-bold mt-2">
              Unique Features For Latest
            </h1>
            <h1 className="font-sans text-textPurple text-[24px] sm:text-[28px] lg:text-[35px] font-bold mt-2">
              Trading Products
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-500 mt-2 text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button className="bg-Textpink mt-4 px-6 py-2 rounded-lg">Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentFive;
