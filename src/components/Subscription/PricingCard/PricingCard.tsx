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
  description: string;
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
          <p>{description}</p>
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
