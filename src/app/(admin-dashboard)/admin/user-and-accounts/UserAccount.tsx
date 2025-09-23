"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CgArrowsV } from "react-icons/cg";
import { MoreHorizontal } from "lucide-react";
import {
  useGetAllUserStatusQuery,
  useUserStatusChangeMutation,
  useUserDeleteMutation,
} from "@/redux/features/adminOverView/adminUserSlice";
import Loading from "@/components/Others/Loading";
import { toast } from "sonner";
import LoadingButton from "@/components/shared/LoadingBtn/LoadingButton";
import Swal from "sweetalert2";
import tokenCatch from "@/lib/token";

export default function UsersAccountsTable() {
  const token = tokenCatch();

  const { data, isLoading, refetch } = useGetAllUserStatusQuery(token);
  console.log(data);
  const [updateStatus, { isLoading: statusChangLoading }] =
    useUserStatusChangeMutation();
  const [deleteAccount, { isLoading: deleteLoading }] = useUserDeleteMutation();
  const [users, setUsers] = useState([]);

  const [selectedRole, setSelectedRole] = useState("All");
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  useEffect(() => {
    if (data?.data) {
      setUsers(data.data);
    }
  }, [data]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const filteredUsers =
    selectedRole === "All"
      ? users
      : users.filter((user: any) => user.role === selectedRole);

  if (isLoading) {
    return <Loading />;
  }

  const handleAction = (row: any) => {
    setActiveMenuId(row.id);
  };
  const closeMenu = () => setActiveMenuId(null);

  // user delete function working
  const handleUserDelete = async (id: any) => {
    console.log("del");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00C951",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteAccount({ id, token }).unwrap();
          console.log(response);
          if (response?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonColor: "#00C951",
            });
            refetch();
          }
        } catch (error: any) {
          toast.error(error?.data?.message);
        }
      }
    });
  };

  if (deleteLoading) {
    return <Loading />;
  }

  // accountspent working function
  const handleUserSpentAccount = async (id: any) => {
    try {
      const response = await updateStatus({ id, token }).unwrap();
      console.log(response);
      if (response?.success) {
        toast.success(response?.message);
        refetch();
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };
  const MeenuItem = ({ closeMenu, rowData }: any) => (
    <>
      <div className=" absolute botton-4 right-0 bg-white shadow-md rounded-md w-48 border border-gray-200 z-50">
        <div className="relative p-3">
          <button
            onClick={closeMenu}
            className="absolute top-1 right-1 text-gray-400 hover:text-black"
          >
            <X size={14} />
          </button>

          <div className="flex flex-col gap-2 mt-5">
            <button
              onClick={() => handleUserSpentAccount(rowData.id)}
              className="text-green-600 hover:bg-green-500 hover:text-white cursor-pointer font-medium py-2 px-3 rounded text-left"
            >
              {statusChangLoading ? (
                <>
                  <LoadingButton />
                </>
              ) : (
                "Suspend Account"
              )}
            </button>

            <button
              onClick={() => handleUserDelete(rowData.id)}
              className="text-red-600 hover:bg-red-500 hover:text-white  font-medium py-2 px-3 rounded text-left"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="md:px-6 min-h-screen">
      <div className="py-4 flex justify-between">
        <h2 className="text-lg md:text-[32px] font-semibold text-gray-900">
          Users & Accounts
        </h2>
        <select
          onChange={handleRoleChange}
          className="px-6 py-3 text-sm border border-gray-300 rounded-md bg-neutral-900 text-white"
        >
          <option value="All">All User</option>
          <option value="ENGINEER">Engineer</option>
          <option value="COMPANY">Company </option>
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
            {filteredUsers?.map((row: any) => (
              <div
                key={row.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 text-info text-[16px]"
              >
                <div className="col-span-3">{row.createdAt}</div>
                <div className="col-span-2">{row.fullName}</div>
                <div className="col-span-3">{row.email}</div>
                <div className="col-span-2">{row.role}</div>
                <div className={`col-span-1 `}>
                  <span
                    className={` ${
                      row.status === "INACTIVE"
                        ? "bg-red-400 text-white border border-red-500"
                        : ""
                    } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200`}
                  >
                    {row.status}
                  </span>
                </div>
                <div className="col-span-1 ">
                  <div className="relative">
                    <button
                      onClick={() => handleAction(row)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <MoreHorizontal size={16} className="text-gray-500" />
                    </button>
                    {activeMenuId === row.id && (
                      <MeenuItem closeMenu={closeMenu} rowData={row} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
