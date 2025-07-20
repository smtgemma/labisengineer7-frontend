"use client";
import React from "react";
import { CgArrowsV } from "react-icons/cg";
import { MoreHorizontal } from "lucide-react";
import { useGetAllUserStatusQuery } from "@/redux/features/adminOverView/adminUserSlice";
import Loading from "@/components/Others/Loading";

const usersData = [
  {
    id: 1,
    joiningDate: "Jun 25, 2023 | 08:52 AM",
    userName: "John Doe",
    emailAddress: "john.doe@example.com",
    role: "Engineer",
    status: "Active",
  },
  {
    id: 2,
    joiningDate: "Jun 26, 2023 | 09:15 AM",
    userName: "Jane Smith",
    emailAddress: "jane.smith@company.com",
    role: "Company",
    status: "Inactive",
  },
];

const StatusBadge = ({ status }: { status: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
    {status}
  </span>
);

const ActionButton = () => (
  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
    <MoreHorizontal size={16} className="text-gray-500" />
  </button>
);

export default function UsersAccountsTable() {
  const { data, isLoading } = useGetAllUserStatusQuery("un");
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div className="md:px-12 min-h-screen">
      <div className="py-4 flex justify-between">
        <h2 className="text-lg md:text-[32px] font-semibold text-gray-900">
          Users & Accounts
        </h2>
        <select className="px-6 py-3 text-sm border border-gray-300 rounded-md bg-neutral-900 text-white">
          <option>All User</option>
          <option>Engineer</option>
          <option>Company</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <div className="min-w-[850px]">
          <div className="grid grid-cols-12 gap-4 bg-primary text-white px-6 py-3 text-md lg:text-xl">
            <div className="col-span-3">Joining </div>
            <div className="col-span-2 flex">
              User <CgArrowsV className="my-auto ml-1" />
            </div>
            <div className="col-span-3 flex">
              Email <CgArrowsV className="my-auto ml-1" />
            </div>
            <div className="col-span-2 flex">
              Role <CgArrowsV className="my-auto ml-1" />
            </div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Action</div>
          </div>

          <div className="divide-y divide-gray-200">
            {usersData.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 text-info text-[16px]"
              >
                <div className="col-span-3">{row.joiningDate}</div>
                <div className="col-span-2">{row.userName}</div>
                <div className="col-span-3">{row.emailAddress}</div>
                <div className="col-span-2">{row.role}</div>
                <div className="col-span-1">
                  <StatusBadge status={row.status} />
                </div>
                <div className="col-span-1">
                  <ActionButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
