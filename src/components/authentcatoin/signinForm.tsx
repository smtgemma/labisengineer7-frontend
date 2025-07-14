"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import logoImg from "../../assets/landing-page/main-logo.png";

type FormData = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
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
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Signin
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md mt-2"
          >
            <FcGoogle size={20} /> Continue with Google
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-sm text-gray-400">or with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <p className="text-center text-sm mt-4">
            If you any account please{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
