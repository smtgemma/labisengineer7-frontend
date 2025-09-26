import React from "react";

const PricingCards = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "€15",
      period: "/month",
      buttonText: "Get Started",
      permissions: [
        "5 projects",
        "Basic document",
        "Email support",
        "1GB storage",
        "Mobile app access",
      ],
    },
    {
      id: 2,
      name: "Professional",
      price: "€29",
      period: "/month",
      buttonText: "Upgrade Plan",
      isPopular: true,
      permissions: [
        "Unlimited projects",
        "Auto document",
        "Generation",
        "CSV export",
        "Support",
      ],
    },
    {
      id: 3,
      name: "Business",
      price: "€59",
      period: "/month",
      buttonText: "Choose Business",
      permissions: [
        "Everything in Pro",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "API access",
      ],
    },
    {
      id: 4,
      name: "Enterprise",
      price: "€99",
      period: "/month",
      buttonText: "Contact Sales",
      permissions: [
        "Everything in Business",
        "Unlimited team members",
        "Custom branding",
        "Dedicated support",
        "SLA guarantee",
        "On-premise option",
      ],
    },
  ];

  return (
    <div className="  ">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-gradient-to-br from-blue-200 via-white to-blue-100 rounded-3xl shadow-sm border border-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-md px-3 py-1 inline-block mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      Plan
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-black">{plan.name}</h2>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-green-500">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1 text-lg">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button
                  style={{
                    background:
                      "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
                  }}
                  className="w-full cursor-pointer  hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 mb-6 shadow-sm"
                >
                  {plan.buttonText}
                </button>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-4"></div>

                {/* Permissions */}
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-4">
                    Permissions:
                  </h3>
                  <ul className="space-y-3">
                    {plan.permissions.map((permission, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">
                          {permission}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
