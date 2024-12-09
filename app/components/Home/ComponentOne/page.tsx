import { Button } from '@/components/ui/button'
import React from 'react'

const ComponentOne = () => {
    return (
        <div className="bg-pageBlue min-h-screen w-full flex px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-16 items-center justify-center">
                {/* Left Section: Image and Text */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left gap-6 lg:gap-0">
                    {/* Image */}
                    <div>
                        <img
                            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto rounded-lg"
                            src="https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpoOmKWmB6sveVWwYmPqgDk-Z3k-BY4czXh1MaXvmyeNa1Ah-SP3bEZ1sBNGu8PwV~d5HyQ18ppw-6pKmFwXmJW~nTBs9igUOOIYQwcwnxR9SLx9anJXnbBw2IgmYS2jl4i02MbgYUUqlCZ~S6GyxPFsg0Kv8FIDvWGJYXrZIEKZAjgnqrSQ-FjuvIe-Iy05LgFuSik-9eJcVk~DDzaIDNmJWPm6JlXUnbyix1Gbz~YvmgLQMLOZrA27KzdO4C0OMUZEGNGRS62-keSSbHg5g4LCjOHrFtCqOgHcEQ242MmMjyZ~GT0Ng9OPIfdIebK5B~DbB35DABbaqagXQI2nbQ__"
                            alt="Furniture"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="mt-6 lg:mt-[110px]">
                        <h3 className="font-lato text-Textpink mt-4 text-sm sm:text-base lg:text-lg">Best Furniture for Your Castle...</h3>
                        <h1 className="font-sans text-[24px] sm:text-[28px] lg:text-[35px] font-bold mt-2">New Furniture Collection</h1>
                        <h1 className="font-sans text-[24px] sm:text-[28px] lg:text-[35px] font-bold mt-2">Trends in 2020</h1>
                        <p className="text-gray-500 mt-2 text-sm sm:text-base lg:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="text-gray-500 mt-2 text-sm sm:text-base lg:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <Button className="bg-Textpink mt-4 px-6 py-2 rounded-lg">Shop Now</Button>
                    </div>
                </div>

                {/* Right Section: Circle and Image */}
                <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
                    <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-[300px] sm:w-[400px] lg:w-[500px] bg-circlePink rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/c453/494a/61ecc67b127029400b09a70cf2e9e973?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bfnjCHRCyGpKFG0MkP9C3u1Ni9VT4laLaRoxphGre-qXfr7F3B6WPRT92guukA~T0SFy2O-s842jF1sEgs4OEahM~aXDtFYsk7sRWbyByMgLcvK3SaZgSwBoR4mvcopt2HGaJi7vrUWqLhHsgI-b~I870glBwplx~jAaC-7gbZFbUk5nTKj2ktd-UY5bynhH9Kaw1aN3ZdRFad2FBdvOAh4vK9q35EWInU4T8dEtGAMEzi2hcVmvFM41uSUspuBvAQ1o9gOw7RW0VoIhA0qlC5kqoAkq5bz0ZS9Q-ZQVTDjrgAMbVZI2nyDBlw229-V3M4lSDVoI8D25XpKejTci9g__"
                            alt="Decorative"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentOne;
