import AboutUs from "@/components/LandingComponents/AboutUs";
import Banner from "@/components/LandingComponents/Banner";
import HowItWorks from "@/components/LandingComponents/HowItWorks/HowItWorks";
import ServicesOverview from "@/components/LandingComponents/ServiceOverview";

const page = () => {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <ServicesOverview/>
      <HowItWorks/>
    </div>
  );
};

export default page;