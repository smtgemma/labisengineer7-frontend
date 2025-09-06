import BillingForm from "@/components/Subscription/Billing/BillingForm/BillingForm";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen">
        <div className="mt-12 flex flex-col xl:flex-row gap-6">
          <BillingForm className="flex-2/3" />
        </div>
      </section>
    </div>
  );
};

export default page;
