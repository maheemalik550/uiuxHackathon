import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-pageBlue py-10 px-5 md:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Left Section */}
                <div className="flex flex-col">
                    <h1 className='font-sans text-textPurple font-bold text-[35px] w-[74px] h-[74px]'>Hekto</h1>
                    <div className="mt-4">
                        <div className="relative w-full">
                            <div className="flex w-full">
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="p-3 w-[200px] border border-purple-500 rounded-l-md focus:outline-none"
                                />
                                <button className="p-3 bg-Textpink text-white rounded-r-md">
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                    <p className="mt-6 text-sm text-gray-600">Contact Info</p>
                    <address className="text-sm text-gray-500">
                        17 Princess Road, London, Greater London NW1 8JR, UK
                    </address>
                </div>

                {/* Categories Section */}
              

                
                {/* Categories Section */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold text-purple-600">Categories</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li>Laptops & Computers</li>
                        <li>Cameras & Photography</li>
                        <li>Smart Phones & Tablets</li>
                        <li>Video Games & Consoles</li>
                        <li>Waterproof Headphones</li>
                    </ul>
                </div>

                {/* Customer Care Section */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold text-purple-600">Customer Care</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li>My Account</li>
                        <li>Discount</li>
                        <li>Returns</li>
                        <li>Orders History</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>

                {/* Pages Section */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold text-purple-600">Pages</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li>Blog</li>
                        <li>Browse the Shop</li>
                        <li>Category</li>
                        <li>Pre-Built Pages</li>
                        <li>Visual Composer Elements</li>
                        <li>WooCommerce Pages</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-sm text-gray-500">
                <p>&copy;Webrey - All Rights Reserved</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-gray-500 hover:text-purple-600">Facebook</a>
                    <a href="#" className="text-gray-500 hover:text-purple-600">Twitter</a>
                    <a href="#" className="text-gray-500 hover:text-purple-600">Instagram</a>
                </div>
            </div>
        </footer>


    )
}

export default Footer