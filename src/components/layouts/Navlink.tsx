"use client";
import { CiFolderOn, CiLocationOn } from "react-icons/ci";
import { GiNewspaper, GiStethoscope } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaCanadianMapleLeaf, LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PiNewspaperThin } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaSackDollar } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdViewComfy } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { CiBadgeDollar } from "react-icons/ci";
import { VscRobot } from "react-icons/vsc";

// export const navLink = [
//   {
//     name: "Overview",
//     href: "/admin",
//     icon: RiDashboardFill,
//   },
//   {
//     name: "Booking List",
//     href: "/dashboard/booking-list",
//     icon: LiaClipboardListSolid,
//   },
//   {
//     name: "Service",
//     href: "/dashboard/service",
//     icon: LiaCanadianMapleLeaf,
//     subItems: [
//       { name: "Add Service", href: "/dashboard/add-service", icon: GoPlus },
//       {
//         name: "All Services",
//         href: "/dashboard/all-service",
//         icon: CiFolderOn,
//       },
//     ],
//   },
//   {
//     name: "Locations",
//     href: "/dashboard/locations",
//     icon: CiLocationOn,
//     subItems: [
//       {
//         name: "Add Location",
//         href: "/dashboard/add-location",
//         icon: MdOutlineAddLocationAlt,
//       },
//       {
//         name: "All Location",
//         href: "/dashboard/all-location",
//         icon: GrMapLocation,
//       },
//     ],
//   },
//   {
//     name: "Our clinicians",
//     href: "/dashboard/clinicians",
//     icon: GiStethoscope,
//     subItems: [
//       {
//         name: "Add Clinician",
//         href: "/dashboard/add-clinicians",
//         icon: GoPlus,
//       },
//       {
//         name: "All Clinician",
//         href: "/dashboard/all-clinicians",
//         icon: IoPeopleOutline,
//       },
//     ],
//   },
//   {
//     name: "Blog",
//     href: "/dashboard/blog",
//     icon: PiNewspaperThin,
//     subItems: [
//       { name: "Add Blogs", href: "/dashboard/blog/post1", icon: GoPlus },
//       { name: "All Blogs", href: "/dashboard/blog/post2", icon: GiNewspaper },
//     ],
//   },
// ];

export const AdminNavLink = [
  {
    name: "Overview",
    href: "/admin",
    icon: MdViewComfy,
  },
  {
    name: "Users & Accounts",
    href: "/admin/user-and-accounts",
    icon: FaUserFriends,
  },
  {
    name: "Document Template",
    href: "/admin/document-template",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    name: "Submission Logs",
    href: "/admin/submission-logs",
    icon: CiBadgeDollar,
  },
  {
    name: "AI/API Monitoring ",
    href: "/admin/monitoring",
    icon: VscRobot,
  },
];

export const DashBoardLink = [
  // name is services but will be dashboard
  {
    name: "Service",
    href: "/services",
    icon: VscServerProcess,
  },
  {
    name: "Advance Tools",
    href: "/advance-tools",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    name: "Project",
    href: "/projects",
    icon: RiDashboardFill,
  },
  {
    name: "Subscription",
    href: "/subscription",
    icon: FaSackDollar,
  },

  {
    name: "My Documents",
    href: "/document",
    icon: PiNewspaperThin,
  },

  {
    name: "Help/Guides",
    href: "/guidelines",
    icon: FaHeadset,
  },
  {
    name: "Profile ",
    href: "/admin-profile ",
    icon: IoSettingsOutline,
  },
];
