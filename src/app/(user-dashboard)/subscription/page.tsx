import Header from "@/components/shared/Header/Header";
import BillingHistory from "@/components/Subscription/Billing/BillingHistory/BillingHistory";
import PricingCard from "@/components/Subscription/PricingCard/PricingCard";
import React from "react";

interface PricingPlan {
  id: string;
  price: string;
  period: string;
  planName: string;
  planType: string;
  permissions: string[];
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  isSelected?: boolean;
}

const subscription: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: "starter",
      price: "0",
      period: "month",
      planName: "Starter",
      planType: "Free",
      permissions: [
        "1 active project",
        "Basic AI extraction",
        "Manual download only",
      ],
      buttonText: "Selected",
      buttonVariant: "secondary",
      isSelected: true,
    },
    {
      id: "professional",
      price: "29",
      period: "month",
      planName: "Professional",
      planType: "Plus",
      permissions: [
        "Unlimited projects",
        "Auto document",
        "Generation",
        "CSV export",
        "Support",
      ],
      buttonText: "Upgrade",
      buttonVariant: "primary",
    },
    {
      id: "enterprise",
      price: "99",
      period: "month",
      planName: "Enterprise",
      planType: "Premium",
      permissions: [
        "Everything in Professional",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team collaboration",
        "White-label options",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "primary",
    },
  ];

  return (
    <section className="bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen">
      <div>
        <Header title="Subscription" />

        <div className="flex flex-wrap gap-6 mt-6">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              price={plan.price}
              period={plan.period}
              planName={plan.planName}
              planType={plan.planType}
              permissions={plan.permissions}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              isSelected={plan.isSelected}
            />
          ))}
        </div>

        <div className="mt-12">
          <Header title="Billing History" />
          <BillingHistory />
        </div>
      </div>
    </section>
  );
};

export default subscription;
