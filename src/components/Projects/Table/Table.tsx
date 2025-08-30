"use client";
import React from "react";
import TableRow from "@/components/Projects/Table/TableRow/TableRow";
import {
  useGetAllProjectQuery,
  useProjectDeleteMutation,
} from "@/redux/features/projectService/projectServiceSlice";
import Loading from "@/components/Others/Loading";
import Swal from "sweetalert2";
import { toast } from "sonner";
import tokenCatch from "@/lib/token";

export interface TableData {
  createdOn: string;
  projectName: string;
  type: string;
  document: string;
  status: "In Progress" | "Completed" | "Submitted";
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const token = tokenCatch();
  const { data: projects, isLoading, refetch } = useGetAllProjectQuery(token);

  console.log("token", projects);

  const [projectDeleteData] = useProjectDeleteMutation();

  if (isLoading) {
    return <Loading />;
  }

  // project delete function
  const handleUserDelete = async (id: any) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#017AFF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await projectDeleteData({ id, token }).unwrap();
          console.log(response);
          if (response?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonColor: "#017AFF",
            });
            refetch();
          }
        } catch (error: any) {
          toast.error(error?.data?.message);
        }
      }
    });
  };
  return (
    <div className="w-full overflow-auto rounded-lg shadow-sm">
      <table className="w-full">
        {/* Table Header */}
        <thead className="bg-[#017AFF] text-white">
          <tr className="*:text-nowrap">
            <th className="text-left text-sm font-medium px-6 py-3">
              Created On
            </th>
            <th className="text-left text-sm font-medium px-6 py-3">
              Project Name
            </th>
            <th className="text-left text-sm font-medium px-6 py-3">Type</th>
            <th className="text-left text-sm font-medium px-6 py-3">
              Document
            </th>
            <th className="text-left text-sm font-medium px-6 py-3">Status</th>
            <th className="text-left text-sm font-medium px-6 py-3">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white">
          {projects?.data?.projects.map((row: any, index: number) => (
            <TableRow
              key={index}
              data={row}
              handleUserDelete={handleUserDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
