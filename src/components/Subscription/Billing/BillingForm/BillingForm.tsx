"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/shared/LoadingBtn/LoadingButton";
import { useCreateBllingIngfoMutation } from "@/redux/features/subscription/subscripionPlanSlice";
import tokenCatch from "@/lib/token";

interface BillingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  addressLine: string;
  city: string;
  state: string;
  zipCode: string;
  additionalInfo: string;
}

interface BillingFormProps {
  onSubmit?: (data: BillingFormData) => void;
  className?: string;
}

const BillingForm: React.FC<BillingFormProps> = ({
  onSubmit,
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingFormData>();

  const router = useRouter();
  const accessToken = tokenCatch();

  const [bllingInfoPost, { isLoading }] = useCreateBllingIngfoMutation();

  const handleFormSubmit = async (data: BillingFormData) => {
    console.log("Form submitted:", data);
    try {
      const response = await bllingInfoPost({ data, accessToken }).unwrap();
      console.log(response);
      if (response?.success) {
        toast.success(response?.message);
        router.push("/subscription-pay");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  const countries = [
    "United States",
    "Canada",
    "AFGHANISTAN",
    "AUSTRIA",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "Other",
  ];

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* country/Region */}
        <div>
          <label
            htmlFor="countryRegion"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            country/Region
          </label>
          <div className="relative">
            <select
              id="countryRegion"
              {...register("country", {
                required: "country is required",
              })}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none pr-10"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <ChevronDown
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
          {errors.country && (
            <p className="mt-1 text-sm text-red-600">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("addressLine", { required: "Address is required" })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          {errors.addressLine && (
            <p className="mt-1 text-sm text-red-600">
              {errors.addressLine.message}
            </p>
          )}
        </div>

        {/* City, State, ZIP Code Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              {...register("city")}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              {...register("state")}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              {...register("zipCode")}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label
            htmlFor="additionalInformation"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            {...register("additionalInfo")}
            rows={4}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          />
        </div>

        {/* Security Notice */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Your billing information is securely stored and encrypted.
          </p>
          <button className="py-3 cursor-pointer px-14 rounded-lg font-medium text-white text-base transition-colors bg-[#017AFF]">
            {isLoading ? (
              <>
                <LoadingButton />
              </>
            ) : (
              "Save & Continue"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
