"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import { useUserInfoQuery } from "@/redux/features/auth/auth";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Loading from "@/components/Others/Loading";
import tokenCatch from "@/lib/token";
import { jwtDecode } from "jwt-decode";
import {
  useProfileUpdateMutation,
  useUpdatePasswordMutation,
} from "@/redux/features/profile/profileSlice";
import { toast } from "sonner";
import LoadingButton from "@/components/shared/LoadingBtn/LoadingButton";
import moment from "moment";

interface AdminFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  userType: string;
  tesRegistration: string;
  profile: FileList;
}

type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

interface AdminProfileProps {
  className?: string;
}

type FormData = {
  profile: FileList;
};

const AdminProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminFormData>();

  // form 2: password update
  const {
    register: registerPassword,
    handleSubmit: upPasswordSubmit,
    formState: { errors: passwordErrors },
    watch,
  } = useForm<PasswordForm>();
  const newPassword = watch("newPassword");

  const token = tokenCatch();
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  console.log(image);

  // const user = useSelector((state: any) => state.user.userData);
  // const [user, setUser] = useState<string | null>(null);

  if (token) {
    const decoded: string | null = jwtDecode(token || " ");
    console.log(decoded);
  }

  const decoded: any = jwtDecode(token || " ");
  const id = decoded.id;

  const [userUpdate, { isLoading: profileLoading }] =
    useProfileUpdateMutation();

  const [updatePasswordCatch, { isLoading: upPasswordLoading }] =
    useUpdatePasswordMutation();

  const { data, isLoading, refetch } = useUserInfoQuery({ id, token });
  if (isLoading) {
    return <Loading />;
  }
  const user = data?.data;

  console.log(user);

  const onSubmit = async (data: AdminFormData) => {
    // const file = image[0];
    // console.log(file, "file");
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(user));

    // append file safely
    if (image) {
      formData.append("file", image);
    }

    const res = await userUpdate({ formData, token }).unwrap();
    if (res?.success) {
      toast.success(res?.message);
      refetch();
    }
    console.log(res);
  };

  // change password

  // const handlePasswordUpdate = async (data: AdminFormData) => {
  //   console.log(data, "formData");
  //   const UpdatePasswoardData = {
  //     currentPassword: data.currentPassword,
  //     newPassword: data.newPassword,
  //     confirmPassword: data.confirmPassword,
  //   };

  //   console.log("password", UpdatePasswoardData);
  //   const res = await updatePasswordCatch({
  //     UpdatePasswoardData,
  //     token,
  //   }).unwrap();
  //   if (res?.success) {
  //     toast.success(res?.message);
  //     refetch();
  //   }
  //   console.log(res);
  // };

  const handlePasswordUpdate = async (data: PasswordForm) => {
    try {
      const payload = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      };

      const res = await updatePasswordCatch({
        body: payload,
        token,
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        refetch();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Password update failed");
      console.error("Password update error:", error);
    }
  };

  // const handleChangePassword = (data: AdminFormData) => {
  //   console.log("Password change requested:", data);
  // };

  return (
    <div className={`bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen`}>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Admin Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                {user?.role} Information
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Profile Picture */}
                <div className="mb-6">
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-3">
                    Profile Picture:
                  </label> */}

                    <div className="relative inline-block">
                      {/* Profile Image */}

                      {preview ? (
                        <>
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                            <img
                              src={preview}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                            <img
                              src={user?.profilePic}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </>
                      )}

                      {/* File Input Trigger */}
                      <label
                        htmlFor="profile-upload"
                        className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md border-2 border-white cursor-pointer"
                      >
                        <Camera size={14} className="text-white" />
                      </label>

                      {/* Hidden File Input (Hook Form) */}
                      <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        {...register("profile")}
                        onChange={(e: any) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files?.[0];
                            if (file) {
                              setImage(file);
                            }
                            setPreview(URL.createObjectURL(e.target.files[0]));
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name:
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
                      defaultValue={user?.firstName}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      defaultValue={user?.lastName}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      defaultValue={user?.email}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      defaultValue={user?.phone}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {profileLoading ? (
                  <>
                    <button
                      type="submit"
                      className="bg-blue-500 cursor-p hover:bg-blue-600 text-white px-10 py-2 rounded-md font-medium transition-colors"
                    >
                      <LoadingButton />{" "}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="bg-blue-500 cursor-p hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                    >
                      Save Changes
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* User Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                User Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User Type:
                  </label>
                  <input
                    type="text"
                    {...register("userType")}
                    defaultValue={user?.role}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    TES Registration Number:
                  </label>
                  <input
                    type="text"
                    {...register("tesRegistration")}
                    defaultValue={user?.teeRegistration || "N/A"}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Login Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Login Info
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Login Method:
                  </span>
                  <button className="text-primary hover:text-blue-800 text-sm underline">
                    Google Sign-in
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Last Login:
                  </span>
                  <span className="text-sm text-gray-600">
                    {moment(user?.updatedAt).format("L")} |{" "}
                    {moment(user?.updatedAt).format("LT")}
                  </span>
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Change Password:
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                If you wish to update your password, enter a new one below.
              </p>

              <form
                onSubmit={upPasswordSubmit(handlePasswordUpdate)}
                className="space-y-4"
              >
                {/* Current Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password:
                  </label>
                  <input
                    type="password"
                    {...registerPassword("currentPassword", {
                      required: "Current password is required",
                    })}
                    placeholder="Password123456"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:border-transparent outline-none transition-all placeholder-gray-400
            ${
              passwordErrors.currentPassword
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
                  />
                  {passwordErrors.currentPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {passwordErrors.currentPassword.message}
                    </p>
                  )}
                </div>

                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password:
                  </label>
                  <input
                    type="password"
                    {...registerPassword("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    placeholder="Password123456789"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:border-transparent outline-none transition-all placeholder-gray-400
            ${
              passwordErrors.newPassword
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
                  />
                  {passwordErrors.newPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {passwordErrors.newPassword.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    {...registerPassword("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === newPassword || "Passwords do not match",
                    })}
                    placeholder="Password123456789"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:border-transparent outline-none transition-all placeholder-gray-400
            ${
              passwordErrors.confirmPassword
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
                  />
                  {passwordErrors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {passwordErrors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 cursor-p hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    {upPasswordLoading ? (
                      <>
                        <LoadingButton />
                      </>
                    ) : (
                      " Change Password"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Subscription Plan */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Subscription Plan
              </h2>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Plan:</span>
                <button className="text-primary hover:text-blue-800 text-sm underline">
                  Professionals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
