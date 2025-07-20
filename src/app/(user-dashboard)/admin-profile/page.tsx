"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";

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
}

interface AdminProfileProps {
  className?: string;
}

const AdminProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminFormData>();

  const handleSaveChanges = (data: AdminFormData) => {
    console.log("Admin profile updated:", data);
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
                Admin Information
              </h2>

              {/* Profile Picture */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Profile Picture:
                </label>
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md border-2 border-white">
                      <Camera size={14} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(handleSaveChanges)}
                className="space-y-4"
              >
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name:
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
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
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Save Changes
                </button>
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
                    defaultValue="Engineer"
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
                    defaultValue="TES-123764"
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
                    2025-06-18 14:34
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

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password:
                  </label>
                  <input
                    type="password"
                    {...register("currentPassword")}
                    placeholder="Password123456"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password:
                  </label>
                  <input
                    type="password"
                    {...register("newPassword")}
                    placeholder="Password123456789"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="Password123456789"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Change Password
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
