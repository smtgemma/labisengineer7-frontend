"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import {
  useGetSinginTrackingQuery,
  useUserInfoQuery,
} from "@/redux/features/auth/auth";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/Others/Loading";
import tokenCatch from "@/lib/token";
import { jwtDecode } from "jwt-decode";
import {
  useGetTheEngreerQuery,
  usePostEngreerInfoMutation,
  useProfileUpdateMutation,
  useUpdatePasswordMutation,
} from "@/redux/features/profile/profileSlice";
import { toast } from "sonner";
import LoadingButton from "@/components/shared/LoadingBtn/LoadingButton";
import moment from "moment";
import { useGetPlanQuery } from "@/redux/features/subscription/subscripionPlanSlice";
import { setUserData } from "@/redux/features/auth/userDataCatchSlice";

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

type EngineerFormData = {
  firstName: string;
  lastName: string;
  fatherName: string;
  motherName: string;
  bornDate: string;
  bornTown: string;
  idCardNumber: string;
  phone: string;
  town: string;
  streetAddress: string;
  streetNumber: string;
  postalCode: string;
  engVatNumber: string;
};

interface AdminProfileProps {
  className?: string;
}

type FormData = {
  profile: FileList;
};

const AdminProfile = () => {
  const dispatch = useDispatch();
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
  const [imageSin, setImageSin] = useState<File | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);

  const {
    register: infoRegister,
    handleSubmit: handleUserInfo,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      bornDate: "",
      bornTown: "",
      idCardNumber: "",
      phone: "",
      town: "",
      streetAddress: "",
      streetNumber: "",
      postalCode: "",
      engVatNumber: "",
    },
  });

  // const user = useSelector((state: any) => state.user.userData);
  // const [user, setUser] = useState<string | null>(null);

  if (token) {
    const decoded: string | null = jwtDecode(token || " ");
  }

  const decoded: any = jwtDecode(token || " ");
  const id = decoded.id;
  console.log(decoded);
  const [userUpdate, { isLoading: profileLoading }] =
    useProfileUpdateMutation();

  const [updatePasswordCatch, { isLoading: upPasswordLoading }] =
    useUpdatePasswordMutation();
  const [engreeningPost, { isLoading: upEngLoading }] =
    usePostEngreerInfoMutation();

  const { data, isLoading, refetch } = useUserInfoQuery({ id, token });
  const { data: singInTrack } = useGetSinginTrackingQuery(token);

  console.log("tracking for singin", singInTrack);

  const {
    data: engData,
    isLoading: engLoading,
    refetch: engRefetch,
  } = useGetTheEngreerQuery(token);

  const { data: planGet } = useGetPlanQuery(token);

  console.log("engreer", engData?.data);
  const engneerData = engData?.data;

  useEffect(() => {
    if (engneerData) {
      reset({
        firstName: engneerData.firstName || "",
        lastName: engneerData.lastName || "",
        fatherName: engneerData.fatherName || "",
        motherName: engneerData.motherName || "",
        bornDate: engneerData.bornDate || "",
        bornTown: engneerData.bornTown || "",
        idCardNumber: engneerData.idCardNumber || "",
        phone: engneerData.phone || "",
        town: engneerData.town || "",
        streetAddress: engneerData.streetAddress || "",
        streetNumber: engneerData.streetNumber || "",
        postalCode: engneerData.postalCode || "",
        engVatNumber: engneerData.engVatNumber || "",
      });
    }
  }, [engneerData, reset]);

  if (isLoading) {
    return <Loading />;
  }
  const user = data?.data;
  const firstChar1 = user?.firstName.charAt(0);

  const onSubmit = async (data: AdminFormData) => {
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
      dispatch(setUserData(res?.data));
      refetch();
    }
  };

  // change password

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

  console.log("sign:", engneerData?.signature);
  // engreening information working
  const handleEngineerFormSubmit = async (newformData: EngineerFormData) => {
    console.log("newformData eng", newformData);
    const formData = new FormData();
    formData.append("data", JSON.stringify(newformData));
    if (imageSin) {
      formData.append("file", imageSin);
    }

    try {
      const res = await engreeningPost({ formData, token }).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        engRefetch();
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

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

                      {user?.profilePic || preview ? (
                        <>
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
                        </>
                      ) : (
                        <>
                          <div className="w-24 h-24 rounded-full flex justify-center items-center overflow-hidden bg-blue-500">
                            <h2 className="font-bold text-5xl text-white">
                              {firstChar1}
                            </h2>
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

              <form
                onSubmit={handleUserInfo(handleEngineerFormSubmit)}
                className=""
              >
                {/* Row 1: First / Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Engineer Name
                    </label>
                    <input
                      {...infoRegister("firstName")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      placeholder="First Name"
                      defaultValue={engneerData?.firstName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Engineer SurnName
                    </label>
                    <input
                      {...infoRegister("lastName")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      placeholder="Last Name"
                      defaultValue={engneerData?.lastName}
                    />
                  </div>
                </div>

                {/* Row 2: Father's / Mother's Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Father's Name
                    </label>
                    <input
                      {...infoRegister("fatherName")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      placeholder="Father's Name"
                      defaultValue={engneerData?.fatherName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Mother's Name
                    </label>
                    <input
                      {...infoRegister("motherName")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      placeholder="Mother's Name"
                      defaultValue={engneerData?.motherName}
                    />
                  </div>
                </div>

                {/* Row 3: Birth Date / Birth Town */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Bonr Date
                    </label>
                    <input
                      type="date"
                      {...infoRegister("bornDate")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      defaultValue={engneerData?.bornDate}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Born Town
                    </label>
                    <input
                      {...infoRegister("bornTown")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      placeholder=" Born Town"
                      defaultValue={engneerData?.bornTown}
                    />
                  </div>
                </div>

                {/* Row 4: Identity Number / License Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">ID</label>
                    <input
                      {...infoRegister("idCardNumber")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      placeholder="ID Number"
                      defaultValue={engneerData?.idCardNumber}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      {...infoRegister("phone")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      placeholder="+30 69..."
                      defaultValue={engneerData?.phone}
                    />
                  </div>
                </div>

                {/* Row 8: Address */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Town
                    </label>
                    <input
                      {...infoRegister("town")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      defaultValue={engneerData?.town}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Street Address
                    </label>
                    <input
                      {...infoRegister("streetAddress")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      defaultValue={engneerData?.streetAddress}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Street Number
                    </label>
                    <input
                      {...infoRegister("streetNumber")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      defaultValue={engneerData?.streetNumber}
                    />
                  </div>
                </div>

                {/* Row 9: Postal Code / VAT Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Postal Code
                    </label>
                    <input
                      {...infoRegister("postalCode")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      defaultValue={engneerData?.postalCode}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      VAT Number
                    </label>
                    <input
                      {...infoRegister("engVatNumber")}
                      className="w-full border border-gray-300  rounded-md p-2"
                      defaultValue={engneerData?.engVatNumber}
                    />
                  </div>
                </div>

                {/* Signature Upload */}
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">
                    Upload Signature
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e: any) => {
                      if (e.target.files && e.target.files[0]) {
                        const file = e.target.files?.[0];
                        if (file) {
                          setImageSin(file);
                        }
                        setSignaturePreview(
                          URL.createObjectURL(e.target.files[0])
                        );
                      }
                    }}
                    className="w-full border border-gray-300  rounded-md rounded-lg px-3 py-2"
                  />
                  {signaturePreview ? (
                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-1">Preview:</p>

                      <>
                        <img
                          src={signaturePreview}
                          alt="Signature Preview"
                          className="h-20 object-contain border rounded-lg"
                        />
                      </>
                    </div>
                  ) : (
                    <>
                      {engneerData?.signature ? (
                        <>
                          <div className="mt-3">
                            <p className="text-sm text-gray-600 mb-1">
                              Preview:
                            </p>
                            <>
                              <img
                                src={engneerData?.signature}
                                alt="Signature Preview"
                                className="h-20 object-contain border rounded-lg"
                              />
                            </>
                          </div>
                        </>
                      ) : (
                        <p className=" mt-5 text-blue-500">
                          No Signature . Please upload signatue .
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Submit */}
                <div className="text-end mt-5">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700"
                  >
                    {upEngLoading ? (
                      <>
                        <LoadingButton />
                      </>
                    ) : (
                      "Save user Information"
                    )}
                  </button>
                </div>
              </form>
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
                    {singInTrack?.data?.loginMethod}
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
                  {planGet?.data?.planName || "No Subscription"}
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
