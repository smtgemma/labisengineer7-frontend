"use client";
import DashboardLayout from "@/components/layouts/Dashboard";
import { DashBoardLink } from "@/components/layouts/Navlink";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout navLink={DashBoardLink}>{children}</DashboardLayout>;
}
