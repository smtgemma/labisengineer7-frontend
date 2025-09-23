"use client";

import { useForm } from "react-hook-form";
import logoImg from "../../../assets/landing-page/main-logo.png";
import Image from "next/image";
import { toast } from "sonner";

import LoadingButton from "@/components/shared/LoadingBtn/LoadingButton";
import { useState } from "react";
import { useRoleSetAndUpdateMutation } from "@/redux/features/auth/auth";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

type RoleForm = {
  userType: string;
  registration: string;
};

export default function RoleForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RoleForm>();

  const [rolebase, setRolebase] = useState("engineer");
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  console.log(email);

  const [rolePost, { isLoading }] = useRoleSetAndUpdateMutation();
  console.log(rolebase);

  // tee registration
  const onSubmit = async (data: RoleForm) => {
    const roleData = { ...data, email };
    console.log("User role form data:", roleData);

    try {
      const response = await rolePost(roleData).unwrap();
      console.log(response);
      if (response?.success) {
        toast.success(response?.message);
        router.push("/signIn");
        reset();
      }
    } catch (error: any) {
      console.log(error, "yes");
      toast.error(error.data.message);
    }
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
              onChange={(e) => setRolebase(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm;"
              defaultValue=""
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="engineer">Engineer</option>
              {/* <option value="company">Company</option> */}
            </select>
            {errors.userType && (
              <p className="error-text">{errors.userType.message}</p>
            )}
          </div>

          {/* TEE Registration No. */}

          {rolebase === "engineer" ? (
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
          ) : (
            <div>
              <label className="block mb-1 text-sm font-medium">
                VAT Registration No.{" "}
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
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            {isLoading ? (
              <>
                <LoadingButton />
              </>
            ) : (
              "Continue"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
