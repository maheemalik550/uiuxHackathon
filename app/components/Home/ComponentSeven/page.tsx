import React from 'react'

const ComponentSeven = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 p-4 bg-white">
            {/* Left Box */}
            <div className="bg-[#FFF6FB] p-4 flex flex-col items-center justify-center w-full lg:w-1/3 text-center rounded-md shadow-md">
                <h2 className="text-xl font-semibold font-sans text-textPurple">23% off in all products</h2>
                <button className="text-pink-500 font-medium mt-2 hover:underline">Shop Now</button>
                <img
                    src="https://s3-alpha-sig.figma.com/img/429c/934a/dc8a953600bab29da0ff9265ab06bb80?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d~F68jpk23o1zfMLyfOg-iCq7dMAc7~74rPiCqRCnWFMgjOH2jSDY~hUHspJjjIWHY5rRZ50ShAMq~zSSDGuayISRDyc6HiC4qofaZw-cMJL~uXfq-sL~i91exh3E33zN-~qggV1yf4tLS9jcRvHuk1dXHxtTkCGyvbY-4U2GcVMIp0tP8z3hLZ2Gy8EyRdH95kiNvbAXWDD8VEgZsKeqLjLxx0vP1LRY1vhWgeqYI9Br~bLB8GkVJcSF-VYOXuHOFDFmd0NQba7sMuQUhybqKtd5LxAfvcwx9OJSOIFgJFY47Q5Za8nqW8KJLgCa9KKGoEMcmMA82HG-O1-1hynRQ__"
                    alt="Product"
                    className="w-3/4 mt-4"
                />
            </div>

            {/* Center Box */}
            <div className="bg-blue-50 p-4 flex flex-col items-center justify-center w-full lg:w-1/3 text-center border-2  rounded-md shadow-md">
                <h2 className="text-xl font-semibold font-sans text-textPurple">23% off in all products</h2>
                <button className="text-blue-500 font-medium mt-2 hover:underline">View Collection</button>
                <img
                    src="https://s3-alpha-sig.figma.com/img/5c7c/ebfc/bebf2952988250989ce526d7c72d8017?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCaKUO-hwDA8-7gWsV6muUVf00cMhBj0Ge4bAI2vP9Wb4Qs99tehJiMrCPhairea3tUM3PEwGhDkE2bgEgjDtK6XiwKoeLw1b8QHWDfyPYaL8sGMKmk5q28mwctuyGDRWBoxlxaEQKDn32HtqVA-2Zitg-6Cl~oa5Pxlldq5aafOkWyeVq3wMQ-mz0HHJ97E8rOuVYqqLMU68GJV1HrtmRj495tg3woPzpSjRrH-kt-WtwMn5SmXzpJOCqnWQq33fNmoaVInPc1AFFh24-a5y4DFtmpKl-6ZjUeVr7XVZ84dnTR2kXiUbqBMnSXIBGDMzeKXEXVXO-jElTCy9VIHXA__"
                    alt="Product Showcase"
                    className="w-3/4 mt-4"
                />
            </div>

            {/* Right List */}
            <div className="flex flex-col items-start justify-start w-full lg:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/f465/6277/0a8fe5a5431dd1e8da59ce63ebdf445d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aOCehw~AWCBU~n1k4w5sxF7k3mhk7xhaJ40iAWc77v9X3R1QpVsUzaOJFVZxtmNjTXXKFjQQN4mgENh95rZX4Lxjxsuwi7vgyvW1HW9ZSWLWC67PXOSc5orWZTlDcJ0pwEAsqhQg8iPb7NFkFJ5xawTQgyBtEIaVHacdVd0SbSXCCXRZDVvqcgZOh0A46SLK3K-XtkDsVm-r8y8wpHvorkcQQ3Xz~exrAE7dGRpXQFlbdGNjvVcHJwxZh8b9zi8Vt6q75bDhlzKC~7clTm~MjGS0VAOrRcMryMgh7pmahhAixyXFNSBP9ykGSrfSPspJtcm9YRW3gIK8gKErtA-8Qw__"
                        alt="Chair"
                        className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                        <p className="text-gray-800 font-medium">Executive Seat Chair</p>
                        <p className="text-gray-500">$3200</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/8f9e/3360/812ad9085efca29edde766f48d07bc8c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPuSIIpcbOJVe7fMoXDP1dhJ3ocYvBOKqR8b2t9EbDF5K344MRIv5kR~lQtXjDy4ptGGROoJPbOrFsu~l1ErM9-iamrVPN5lWbRdUTj73RiwSIpMW120WIMKKcpl3Ee4NqTYJYnCwx8Mr~Ellz-9ubaYaSEg9eHqD1po0YMvjUNWdZ9EBn0~6ppSMsYbCkbrhwAsUSgf1FjpKctlMQTlN9vNWUJJhnzFx7yAal9zppoaSGKaHoKFBUgRb-bVClS~ythWPq6YuWtKKXCOOCejjGY4uMiXM31PciPO8ZsMlvtw3UpphNo~ZzlQRVufyqFrWQ0WghHO9dNfa19jTGcoHw__"
                        alt="Chair"
                        className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                        <p className="text-gray-800 font-medium">Executive Seat Chair</p>
                        <p className="text-gray-500">$3200</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/d6c0/2151/5b60fe030b1c494d6461176139d9d671?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d863maT0iU9EuSp7jCRSe1~yY1Ig3oy8cjaEVIlJvqfcrp9yMgIzys6V~FjbQSweRp-bqce1~iO7MGprzxKVaql1ETamodAizZqVRInTWHf5pND4iCuulZqkUcQS6QmmvM0PdKfiAErgOOiJ6dqWOr19TaBIR2EDgq27O65m6gmSeL3TBeGm1QiIqrC5u8x81nGsDtGI9z-Zilaydg8RM3WOGaaMx5PQeh2H0Ti24BsE38E2jBkVH9qOTx2pz5m~~-~rjKcSB4UwW090rtLl2RJfypmA37TZvePMpPyyiLbE9YMN6qhTvJYfN04t8lph8h8nXql4g0qdXeat-opd~w__"
                        alt="Chair"
                        className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                        <p className="text-gray-800 font-medium">Executive Seat Chair</p>
                        <p className="text-gray-500">$3200</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ComponentSeven