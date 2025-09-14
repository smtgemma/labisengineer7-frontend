"use client";

import Container from "../Container/Container";
import Logo from "../Logo";

export default function Footer() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat pt-14"
      style={{
        backgroundImage: "url('./footerBg.png')",
        backgroundPositionY: "-2px",
      }}
    >
      {/* Dark Overlay (optional for better text contrast) */}
      <div className="absolute inset-0" />

      <Container>
        <footer className="relative z-10">
          {/* subscribing  */}
          <div className="  flex justify-center my-12">
            <form className="relative w-full md:max-w-3xl">
              <h2 className="text-lg md:text-3xl font-semibold mb-2 text-block">
                Subscribe to Our Newsletter
              </h2>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-5 pr-40 border border-[#61BDFF]  rounded-md text-gray-800 bg-white outline-none"
              />
              <button
                type="submit"
                style={{
                  borderRadius: "8px",
                  background:
                    "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%)",
                }}
                className="absolute  top-1/2 md:top-[77px] right-2 cursor-pointer text-white transform -translate-y-1/2 bg-primary text-block px-5 py-3 rounded-md hover:bg-blue-800 transition"
              >
                Subscribe Now
              </button>
              <p className="text-sm md:text-base text-block/80 text-center mt-2">
                By subscribing you agree to with our Privacy Policy
              </p>
            </form>
          </div>
          <div className="mx-auto grid grid-cols-1 md:flex  md:justify-between gap-10">
            {/* Logo & Subscribe */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Logo height={120} width={324} />
              </div>
              <p className="text-2xl md:text-[32px] font-medium text-block">
                JOIN THE COMMUNITY
              </p>
            </div>

            {/* Quick Share */}
            <div>
              <h3 className="font-semibold text-base md:text-2xl mb-2 text-block">
                Quick Share
              </h3>
              <ul className="space-y-2 text-sm md:text-[18px] text-block/90">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How it work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h3 className="font-semibold text-base md:text-2xl mb-2 text-block">
                Policy
              </h3>
              <ul className="space-y-2 text-sm md:text-[18px] text-block/90">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="py-8 mt-12  border-t border-[#8D8D8D] text-center text-sm text-block/70">
            © 2024 abcdss. All rights reserved.
          </div>
        </footer>
      </Container>
    </div>
  );
}
