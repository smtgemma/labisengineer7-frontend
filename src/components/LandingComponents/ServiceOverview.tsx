import React from "react";
import { Search, FileText, Scale, HardHat, LucideIcon } from "lucide-react";
import Container from "../shared/Container/Container";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
}

const ServicesOverview: React.FC = () => {
  const services: ServiceCard[] = [
    {
      icon: Search,
      title: "Construction Project Planning",
      description:
        "Comprehensive project planning and scheduling services. From initial design to final inspection, we manage every phase of your construction project with precision. Comprehensive project planning and scheduling services. From initial design to final inspection, we manage every phase of your construction project with precision.",
      buttonText: "Start Planning",
      bgColor: "bg-gradient-to-br from-white-50 via-blue-50 to-blue-300",
      iconColor: "text-gray-800",
      textColor: "text-gray-800",
    },
    {
      icon: FileText,
      title: "Building Permits & Documentation",
      description:
        "Navigate complex permit processes with ease. We handle all regulatory documentation, ensuring compliance with local building codes and regulations.",
      buttonText: "Get Permits",
      bgColor: "bg-gradient-to-br from-white-50 via-blue-50 to-blue-300",
      iconColor: "text-gray-800",
      textColor: "text-gray-800",
    },
    {
      icon: Scale,
      title: "Quality Control & Inspection",
      description:
        "Professional quality assurance throughout your project. Our certified inspectors ensure construction meets all safety standards and specifications.",
      buttonText: "Schedule Inspection",
      bgColor: "bg-gradient-to-br from-white-50 via-blue-50 to-blue-300",
      iconColor: "text-gray-800",
      textColor: "text-gray-800",
    },
    {
      icon: HardHat,
      title: "Engineer Certificate",
      description:
        "Quickly produce valid engineer certificates for property sales and transactions. AI checks and fills all necessary details.",
      buttonText: "Begin Project",
      bgColor: "bg-gradient-to-br from-white-50 via-blue-50 to-blue-300",
      iconColor: "text-gray-800",
      textColor: "text-gray-800",
    },
  ];

  const handleServiceClick = (serviceTitle: string): void => {
    console.log(`Starting service: ${serviceTitle}`);
    // Add your service navigation logic here
  };

  return (
    <Container>
      <div className="w-full  my-14 px-4 py-12  ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#017AFF] mb-4">
            Services Overview
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service: ServiceCard, index: number) => {
            const IconComponent: LucideIcon = service.icon;
            const isLightCard: boolean = service.textColor === "text-gray-800";

            return (
              <div
                key={index}
                className={`
    bg-gradient-to-br from-white-50 via-blue-50 to-blue-300
    rounded-2xl p-6 lg:p-8 cursor-pointer
    transition-all duration-500 ease-in-out
    hover:shadow-2xl hover:scale-[1.01]

    ${
      isLightCard
        ? "border border-blue-200"
        : "border border-white/20 backdrop-blur-sm"
    }
  `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-18 h-18 rounded-full ${
                      isLightCard
                        ? "bg-white shadow-md border border-gray-200"
                        : "bg-white/20 backdrop-blur-sm shadow-lg border border-white/30"
                    } flex items-center justify-center`}
                  >
                    <IconComponent
                      className={`w-12 h-12 ${service.iconColor}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3
                    className={`text-xl lg:text-2xl font-bold ${
                      service.textColor
                    } mb-4 leading-tight ${
                      isLightCard ? "" : "drop-shadow-sm"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`${
                      service.textColor
                    } text-sm lg:text-base leading-relaxed ${
                      isLightCard ? "opacity-80" : "opacity-90"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className={`inline-flex items-center px-6 py-3 ${
                    isLightCard
                      ? " text-[#017AFF] hover:text-white border-2 border-blue-300 hover:bg-blue-500 focus:ring-blue-500  shadow-md"
                      : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:ring-white/50 border border-white/30 shadow-lg"
                  } font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                  type="button"
                  aria-label={`Start ${service.title} service`}
                >
                  Begin Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ServicesOverview;
