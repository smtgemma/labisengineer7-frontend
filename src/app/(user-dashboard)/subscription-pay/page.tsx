import Header from "@/components/shared/Header/Header";
import BillingForm from "@/components/Subscription/Billing/BillingForm/BillingForm";
import PaymentMethodForm from "@/components/Subscription/PaymentMethodForm/PaymentMethodForm";
import React from "react";

export default function SubscriptionPay() {
  return (
    <section className="bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen">
      <Header title="Billing Information" />

      <div className="mt-12 flex flex-col xl:flex-row gap-6">
        <BillingForm className="flex-2/3" />
        <PaymentMethodForm className="flex-1/3" />
      </div>
    </section>
  );
}
