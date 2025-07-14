"use client";

import { useForm } from "react-hook-form";
import logoImg from "../../../assets/landing-page/main-logo.png";
import Image from "next/image";

type RoleForm = {
  userType: string;
  registration: string;
};

export default function RoleTeeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleForm>();

  const onSubmit = (data: RoleForm) => {
    console.log("User role form data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-white border border-blue-300 rounded-2xl p-3 md:p-6 shadow-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 my-8">
            <Image src={logoImg} width={300} height={200} alt="logo" />
          </div>
          <h2 className="lg:text-5xl text-2xl font-semibold md:my-10 my-6 ">
            What’s your Role!
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* User Type */}
          <div>
            <label className="block mb-1 text-sm font-medium">User Type</label>
            <select
              {...register("userType", { required: "Please select a role" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm;"
              defaultValue=""
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Engineer">Engineer</option>
              <option value="Architect">Architect</option>
              <option value="Inspector">Inspector</option>
            </select>
            {errors.userType && (
              <p className="error-text">{errors.userType.message}</p>
            )}
          </div>

          {/* TEE Registration No. */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              TEE Registration No.{" "}
              <span className="text-red-500">(required)</span>
            </label>
            <input
              {...register("registration", {
                required: "Registration number is required",
              })}
              placeholder="UHINUJohnu#%^"
              className="input-style py-3"
            />
            {errors.registration && (
              <p className="error-text">{errors.registration.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
