"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import logoImg from "../../assets/landing-page/main-logo.png";
import {
  useGoogleLoginMutation,
  useSignInMutation,
} from "@/redux/features/auth/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import LoadingButton from "../shared/LoadingBtn/LoadingButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ForgotPasswordModal from "./forgotPassword/ForgotPasswordEmailModal";
import { setUserData } from "@/redux/features/auth/userDataCatchSlice";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";

type FormData = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [sigInUser, { isLoading }] = useSignInMutation();
  const dispath = useDispatch();
  const router = useRouter();

  const [googleSignIn, { isLoading: googleLoading }] = useGoogleLoginMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await sigInUser(data).unwrap();
      console.log(response);
      if (response?.success) {
        // localStorage.setItem("accessToken", response?.data?.accessToken);
        Cookies.set("accessToken", response?.data?.accessToken);
        console.log(response?.data?.userData?.role);
        dispath(setUserData(response?.data?.userData));

        toast.success(response?.message);
        if (response?.data?.userData?.role === "SUPER_ADMIN") {
          router.push("/admin");
        } else {
          router.push("/new-project");
        }
        reset();
      }
    } catch (error: any) {
      console.log("error:", error);
      const errorMessage =
        error?.data?.message ||
        error?.error ||
        "Something went wrong. Please try again.";

      toast.error(errorMessage);
    }
  };

  // google login working for functonalti
  const handleSuccess = async (credentialResponse: any) => {
    console.log("yesTonek= ", credentialResponse);
    try {
      const googleToken = {
        googleToken: credentialResponse.credential,
      };
      const response = await googleSignIn(googleToken).unwrap();
      console.log("response", response);

      if (response?.success) {
        console.log("accessToken", response?.data?.accessToken);
        localStorage.setItem("accessToken", response?.data?.accessToken);
        router.push("/new-project");
        toast.success("Login successful");
      }

      console.log("Login successful", response.data);
      // Handle successful login (store tokens, redirect, etc.)
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-3">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-3 lg:p-8 border border-[#017AFF]">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 my-8">
            <Image src={logoImg} width={300} height={200} alt="logo" />
          </div>
          <h2 className="lg:text-5xl text-2xl font-semibold mt-2 ">
            Hi, Welcome Back!
          </h2>
          <p className="text-base text-gray-500 max-w-sm mx-auto  mt-5">
            Please enter your email and password below!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-sm">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              className="input-style"
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input-style"
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>
          <button
            type="button"
            className="text-primary text-base underline cursor-pointer mb-3"
            onClick={() => setModalOpen(true)}
          >
            Forget Password
          </button>

          <button
            style={{
              background:
                "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
            }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            {isLoading ? (
              <>
                <LoadingButton />{" "}
              </>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="">
            <GoogleLogin
              size="large"
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-sm text-gray-400">or with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <p className="text-center text-sm mt-4">
            If you any account please{" "}
            <a
              href="/signUp"
              className="text-blue-600 hover:underline font-medium"
            >
              SignUp
            </a>
          </p>
        </form>
      </div>
      <ForgotPasswordModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}
