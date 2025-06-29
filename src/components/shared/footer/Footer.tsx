'use client';

import Container from "../Container/Container";
import Logo from "../Logo";

export default function Footer() {
    return (
        <div className="bg-background">
            <Container>

                <footer className="">
                    <div className=" mx-auto grid grid-cols-1 md:flex md:justify-between gap-10">
                        {/* Logo & Subscribe */}
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <Logo
                                    height={120}
                                    width={324}
                                />
                            </div>
                            <p className=" text-2xl md:text-[32px] font-medium">JOIN THE COMMUNITY</p>


                            {/* Right - Input + Button */}
                            <form className="relative w-full md:max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-6 pr-40 rounded-md text-gray-800 bg-white outline-none"
                                    tabIndex={-1}
                                />
                                <button
                                    type="submit"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary text-white  px-5 py-2 rounded-md hover:bg-blue-800 transition"
                                    tabIndex={-1}
                                >
                                    SUBSCRIBE NOW
                                </button>
                            </form>

                            <p className="text-sm text-gray-900 md:text-[18px]">
                                By subscribing you agree to with our Privacy Policy
                            </p>
                        </div>

                        {/* Quick Share */}
                        <div>
                            <h3 className="font-semibold text-base md:text-2xl mb-2">Quick Share</h3>
                            <ul className="space-y-2 text-sm text-gray-900 md:text-[18px]">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Service</a></li>
                                <li><a href="#" className="hover:underline">How it work</a></li>
                                <li><a href="#" className="hover:underline">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* Policy */}
                        <div>
                            <h3 className="font-semibold text-base md:text-2xl text-gray-900 mb-2">Policy</h3>
                            <ul className="space-y-2 text-sm text-gray-900 md:text-[18px]">
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 mt-12 border-t border-gray-200 text-center text-sm text-gray-500">
                        © 2024 abcdss. All rights reserved.
                    </div>
                </footer>
            </Container>
        </div>


    );
}