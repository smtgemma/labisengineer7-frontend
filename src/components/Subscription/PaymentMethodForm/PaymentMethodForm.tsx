"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import PaymentForm from "./PaymentsForms";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
// import CheckoutForm from "./PaymentsForms";

const stripePromise = loadStripe(
  "pk_test_51Rjz4GFKPqk0ANQJfDWcoTh1RTSw7n9olBmh4oHjhPzIBWVjDccdlBrnDWZCmo0aDzZbKvmPgciIC6AwWD0UsEKA00rvRugLwb"
);

interface Options {
  mode: string;
  amount: number;
  currency: string;
  appearance: {};
}

const options: Options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  nameOnCard: string;
  country: string;
  postalCode: string;
}

interface PaymentMethodFormProps {
  onSubmit?: (data: PaymentFormData) => void;
  className?: string;
}

const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({
  onSubmit,
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>();

  const paymentId = useSelector(
    (state: RootState) => state.subscriptionData.subscription
  );
  console.log(paymentId);

  const handleFormSubmit = (data: PaymentFormData) => {
    console.log("Payment form submitted:", data);
    onSubmit?.(data);
  };

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "Other",
  ];

  return (
    <>
      <div
        className={`bg-white h-fit rounded-lg border border-gray-200 p-6 max-w-md mx-auto ${className}`}
      >
        {/* <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements> */}
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Payment Method
        </h2>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {/* Card Information Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Card Information
            </label>

            {/* Card Number */}
            <div className="relative">
              <input
                type="text"
                {...register("cardNumber", {
                  required: "Card number is required",
                })}
                className="w-full px-3 py-3 border border-gray-300 rounded-t-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              {/* Card Icons */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                <div className="w-6 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">V</span>
                </div>
                <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
              </div>
            </div>

            {/* Expiry and CVC Row */}
            <div className="flex">
              <input
                type="text"
                placeholder="MM/YY"
                {...register("expiryDate", {
                  required: "Expiry date is required",
                })}
                className="flex-1 px-3 py-3 border border-gray-300 border-t-0 border-r-0 rounded-bl-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                placeholder="CVC"
                {...register("cvc", { required: "CVC is required" })}
                className="flex-1 px-3 py-3 border border-gray-300 border-t-0 rounded-br-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Name on Card */}
          <div>
            <label
              htmlFor="nameOnCard"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name on Card
            </label>
            <input
              type="text"
              id="nameOnCard"
              {...register("nameOnCard", {
                required: "Name on card is required",
              })}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Country or region */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Country or region
            </label>
            <div className="relative">
              <select
                id="country"
                {...register("country", { required: "Country is required" })}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none pr-10"
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Postal Code */}
          <div>
            <input
              type="text"
              {...register("postalCode", {
                required: "Postal code is required",
              })}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Pay Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors mt-6"
          >
            Pay Now €3.49
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentMethodForm;
