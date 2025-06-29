import AboutUs from "@/components/LandingComponents/AboutUs";
import Banner from "@/components/LandingComponents/Banner";
import ServicesOverview from "@/components/LandingComponents/ServiceOverview";

const page = () => {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <ServicesOverview/>
    </div>
  );
};

export default page;