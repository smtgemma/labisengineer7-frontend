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
  period: string;
  planName: string;
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
  period,
  planName,
  planType,
  permissions,
  buttonText,
  buttonVariant,
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
    <div
      className={`bg-white rounded-2xl p-8 w-full h-fit max-w-sm flex flex-col ${className}`}
    >
      {/* Price Section */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold text-green-500">€{price}</span>
          <span className="text-gray-500 text-base">/{period}</span>
        </div>
      </div>

      {/* Plan Info */}
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">{planType}</div>
        <h3 className="text-2xl font-bold text-black">{planName}</h3>
      </div>

      {/* Permissions */}
      <div className="mb-8">
        <div className="text-sm font-medium text-black mb-4">Permissions:</div>
        <div className="space-y-3">
          {permissions.map((permission, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5386 15.4058C5.59727 15.4424 5.80393 15.5453 6.0114 15.3677L14.2485 8.33489C14.3447 8.25249 14.3999 8.13116 14.3999 8.00182C14.3999 7.87249 14.3447 7.75116 14.2485 7.66876L6.0114 0.635956C5.9218 0.559423 5.83247 0.535156 5.75513 0.535156C5.65327 0.535156 5.57193 0.57729 5.5386 0.597823C5.40927 0.67729 5.2914 0.84449 5.34767 1.07516L6.98367 7.76902C7.021 7.92129 7.021 8.08236 6.98367 8.23462L5.34767 14.9285C5.2914 15.1592 5.40927 15.3264 5.5386 15.4058Z"
                  fill="#4BA3FA"
                />
                <path
                  d="M3.2001 9.59844C4.08375 9.59844 4.8001 8.88209 4.8001 7.99844C4.8001 7.11478 4.08375 6.39844 3.2001 6.39844C2.31644 6.39844 1.6001 7.11478 1.6001 7.99844C1.6001 8.88209 2.31644 9.59844 3.2001 9.59844Z"
                  fill="#4BA3FA"
                />
              </svg>

              <span className="text-sm text-gray-700">{permission}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handlePayment}
        className={`w-full py-3 cursor-pointer px-6 rounded-lg font-medium text-white text-base transition-colors bg-[#017AFF]`}
      >
        {btnLoading ? (
          <>
            <LoadingButton />
          </>
        ) : (
          buttonText
        )}
      </button>
    </div>
  );
};

export default PricingCard;
