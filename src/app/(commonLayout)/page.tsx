"use client";
import AboutUs from "@/components/LandingComponents/AboutUs";
import Banner from "@/components/LandingComponents/Banner";
import HowItWorks from "@/components/LandingComponents/HowItWorks/HowItWorks";
import ServicesOverview from "@/components/LandingComponents/ServiceOverview";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CounterView from "@/components/LandingComponents/Counter";
import VideoSeciton from "@/components/LandingComponents/VideoSection";
import TestimonialsSlider from "@/components/LandingComponents/Testimonials";

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
      <CounterView />
      <ServicesOverview />
      <HowItWorks />
      <VideoSeciton />
      <TestimonialsSlider />
    </div>
  );
};

export default page;
