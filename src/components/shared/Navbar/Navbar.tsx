"use client";

import logo from "@/assets/landing-page/main-logo.png";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons
import Logo from "../Logo";
import Container from "../Container/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "How it Works", href: "#works" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 600);
    });
  });

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // return (
  //   <div
  //     className={` bg-camp-primary ${
  //       scroll ? "sticky w-full bg-camp-primary " : ""
  //     }`}
  //   ></div>

  return (
    <nav
      className={`w-full px-4 py-6 bg-white shadow-sm border-b border-gray-100  top-0 z-50 bg-camp-primary ${
        scroll ? "sticky w-full bg-camp-primary " : ""
      }`}
    >
      <Container>
        <div className=" mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Link
              href="/signIn"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
            >
              Login
            </Link>
            <Link
              href="/signUp"
              style={{
                borderRadius: "6px",
                background:
                  "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%)",
              }}
              className=" text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 space-y-4 px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Link
                href="/signIn"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded text-center"
              >
                Login
              </Link>
              <Link
                href="/signUp"
                className="bg-blue-600 text-white px-4 py-2 rounded text-center"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
