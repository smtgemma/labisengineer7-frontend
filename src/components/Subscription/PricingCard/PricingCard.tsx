"use client";
import React from "react";
import { Check } from "lucide-react";
import { useCreateSubscirptionPlansMutation } from "@/redux/features/subscription/subscripionPlanSlice";
import { toast } from "sonner";
import tokenCatch from "@/lib/token";
import { setSubscriptionData } from "@/redux/features/subscription/subscriptionDataSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import LoadingButton from "@/components/shared/LoadingBtn/LoadingButton";

interface PricingCardProps {
  id: string;
  price: string;
  credits: string;
  planName: string;
  description: string[];
  planType: string;
  permissions: string[];
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  isSelected?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  price,
  credits,
  planName,
  planType,
  permissions,
  buttonText,
  buttonVariant,
  description,
  isSelected = false,
  className = "",
}) => {
  const [createSubscription, { isLoading: btnLoading }] =
    useCreateSubscirptionPlansMutation();

  const accessToken = tokenCatch();

  // create subscription
  const handlePayment = async () => {
    const planIdData = { planId: id };
    try {
      const response = await createSubscription({
        planIdData,
        accessToken,
      }).unwrap();
      console.log(response);
      if (response?.success) {
        toast.success(response?.message);
        window.open(`${response?.data?.paymentUrl}`, "_blank");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // const handleSubscriptionCreate = async (subscriptionId: string) => {
  //   console.log(subscriptionId);

  //   const planId = {
  //     planId: subscriptionId,
  //   };
  //   console.log(planId, token);
  //   try {
  //     const response = await createSubscripton({
  //       planId,
  //       token,
  //     }).unwrap();
  //     console.log(response);
  //     if (response?.success) {
  //       toast.success(response?.message);
  //     }
  //   } catch (error: any) {
  //     toast.error(error?.data?.message);
  //   }
  // };

  return (
    <>
      <div className="relative max-w-md hover:border-blue-500 bg-gradient-to-br from-white via-white to-blue-100 rounded-3xl shadow-sm border border-blue-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        {/* Card Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-md px-3 py-1 inline-block mb-4">
              <span className="text-sm font-medium text-gray-600">Plan</span>
            </div>
            <h2 className="text-2xl font-bold text-black">{planName}</h2>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline">
              <span className="text-4xl font-bold text-green-500">
                €{price}
              </span>
              <span className=" font-semibold  text-xl">{credits} credits</span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handlePayment}
            style={{
              background:
                "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
            }}
            className="w-full cursor-pointer  hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 mb-6 shadow-sm"
          >
            Upgrade Plan
          </button>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-4"></div>

          {/* Permissions */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-4">
              Permissions:
            </h3>
            <ul className="space-y-3">
              {description.map((permission: any, index: number) => (
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
                  <span className="text-gray-700 text-sm">{permission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
