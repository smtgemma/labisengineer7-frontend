import { CiFolderOn, CiLocationOn } from "react-icons/ci";
import { GiNewspaper, GiStethoscope } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaCanadianMapleLeaf, LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PiNewspaperThin } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";

export const navLink = [
  {
    name: "Overview",
    href: "/admin",
    icon: RiDashboardFill,
  },
  {
    name: "Booking List",
    href: "/dashboard/booking-list",
    icon: LiaClipboardListSolid,
  },
  {
    name: "Service",
    href: "/dashboard/service",
    icon: LiaCanadianMapleLeaf,
    subItems: [
      { name: "Add Service", href: "/dashboard/add-service", icon: GoPlus },
      {
        name: "All Services",
        href: "/dashboard/all-service",
        icon: CiFolderOn,
      },
    ],
  },
  {
    name: "Locations",
    href: "/dashboard/locations",
    icon: CiLocationOn,
    subItems: [
      {
        name: "Add Location",
        href: "/dashboard/add-location",
        icon: MdOutlineAddLocationAlt,
      },
      {
        name: "All Location",
        href: "/dashboard/all-location",
        icon: GrMapLocation,
      },
    ],
  },
  {
    name: "Our clinicians",
    href: "/dashboard/clinicians",
    icon: GiStethoscope,
    subItems: [
      {
        name: "Add Clinician",
        href: "/dashboard/add-clinicians",
        icon: GoPlus,
      },
      {
        name: "All Clinician",
        href: "/dashboard/all-clinicians",
        icon: IoPeopleOutline,
      },
    ],
  },
  {
    name: "Blog",
    href: "/dashboard/blog",
    icon: PiNewspaperThin,
    subItems: [
      { name: "Add Blogs", href: "/dashboard/blog/post1", icon: GoPlus },
      { name: "All Blogs", href: "/dashboard/blog/post2", icon: GiNewspaper },
    ],
  },
];

export const AdminNavLink = [
  {
    name: "Overview",
    href: "/admin",
  },
  {
    name: "Users & Accounts",
    href: "/admin/user-and-accounts",
  },
  {
    name: "Document Template",
    href: "/admin/document-template",
  },
  {
    name: "Submission Logs",
    href: "/admin/submission-logs",
  },
  {
    name: "AI/API Monitoring ",
    href: "/admin/monitoring",
    // icon: GoPlus,
  },
];

export const DashBoardLink = [
  // name is services but will be dashboard
  {
    name: "Service",
    href: "/dashboard",
  },
  {
    name: "Project",
    href: "/dashboard/project",
  },
  {
    name: "Subscription",
    href: "/dashboard/subscription",
  },
  {
    name: "Help/Guides",
    href: "/dashboard/helps-guides",
  },
  {
    name: "Profile ",
    href: "/dashboard/profile ",
    // icon: GoPlus,
  },
];
