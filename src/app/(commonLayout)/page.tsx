"use client";
import AboutUs from "@/components/LandingComponents/AboutUs";
import Banner from "@/components/LandingComponents/Banner";
import HowItWorks from "@/components/LandingComponents/HowItWorks/HowItWorks";
import ServicesOverview from "@/components/LandingComponents/ServiceOverview";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <Banner />
      <AboutUs />
      <ServicesOverview />
      <HowItWorks />
    </div>
  );
};

export default page;
