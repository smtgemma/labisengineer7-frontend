"use client";

import { useEffect, useRef, useState } from "react";
import BreadCrumb from "../Others/BreadCrumb";
import SideBar from "./navigationBar/SiderBar";
import TopBar from "./navigationBar/TopBar";
import { NavLink } from "./types";

const DashboardLayout = ({
  children,
  navLink,
}: {
  children: React.ReactNode;
  navLink: NavLink[];
}) => {
  const user = null;
  const [isOpen, setIsOpen] = useState(false);
  const [isShort, setIsShort] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // setIsShort(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <div className="flex bg-[#F1F5F9]">
      <div className="max-h-screen h-full sticky top-0 z-50 ">
        <SideBar
          dark={false}
          setIsShort={setIsShort}
          additionalRoutes={null}
          navLink={navLink}
          isOpen={isOpen}
          isShort={isShort}
          navRef={navRef}
        />
      </div>
      <div className="w-full">
        <div className="sticky top-0 z-40">
          <TopBar
            dark={false}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            user={user}
          />
        </div>
        <div className="p-4 min-h-screen space-y-2">
          <BreadCrumb />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
