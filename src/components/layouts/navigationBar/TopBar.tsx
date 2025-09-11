import type { Dispatch, SetStateAction } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import type { User } from "../types";

import { useSelector } from "react-redux";
import { Root } from "react-dom/client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import tokenCatch from "@/lib/token";
import { useUserInfoQuery } from "@/redux/features/auth/auth";
import { LanguageSwitcher } from "@/components/googleTranslation/LanguageSwitcher";

export default function TopBar({
  isOpen,
  setIsOpen,
  user,
  dark = false,
}: {
  user: null | User;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dark?: boolean;
}) {
  const profile = useSelector((state: any) => state.user.userData);

  const token = tokenCatch();
  const decoded: any = jwtDecode(token || " ");
  const id = decoded.id;
  const { data, isLoading, refetch } = useUserInfoQuery({ id, token });
  const profileUser = data?.data;

  const firstChar1 = profileUser?.firstName.charAt(0);

  return (
    <header className={`  shadow-md ${dark ? "bg-black " : "bg-white"}`}>
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section: Toggle Button (Mobile) */}
        <button
          className={`lg:hidden p-2 rounded-md  transition-colors ${dark ? "bg-black " : "hover:bg-gray-100"
            }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <LuX
              className={`h-6 w-6  ${dark ? "text-white" : "text-gray-700"}`}
            />
          ) : (
            <LuMenu
              className={`h-6 w-6  ${dark ? "text-white " : "text-gray-700"}`}
            />
          )}
        </button>

        {/* Left Section: Welcome Message (Desktop) */}
        <div className="items-center gap-2 ">
          <span
            className={` text-sm font-medium ${dark ? "text-white " : "text-gray-700"
              }`}
          >
            Welcome Back,{" "}
            {!profile
              ? `${profile?.firstName} ${profile?.lastName} `
              : `${profileUser?.firstName} ${profileUser?.lastName}`}
          </span>
          <span className="text-xl">👋</span>
        </div>

        <LanguageSwitcher />
        {/* Right Section: User Actions */}
        {/* User Profile Section */}
        <div className="flex items-center gap-3 px-3 py-3">
          {profile?.profilePic || profileUser?.profilePic ? (
            <>
              <img
                src={profile?.profilePic || profileUser?.profilePic}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-blue-500 w-11 h-11 object-fill"
              />
            </>
          ) : (
            <>
              <div className="w-11 h-11 flex justify-center items-center rounded-full bg-blue-600">
                <h2 className="text-3xl font-bold text-white">{firstChar1}</h2>
              </div>
            </>
          )}

          <div className="flex-1">
            <div
              className={`font-medium ${dark ? "text-white" : "text-gray-500"}`}
            >
              {!profile
                ? `${profile?.firstName} ${profile?.lastName} `
                : `${profileUser?.firstName} ${profileUser?.lastName}`}
            </div>
            <div
              className={`text-xs  ${dark ? "text-white" : "text-gray-500"}`}
            >
              {profile?.role || `${profileUser?.role}`}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
