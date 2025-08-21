"use client";
import React from "react";
import TableRow from "@/components/Projects/Table/TableRow/TableRow";
import { useGetAllProjectQuery } from "@/redux/features/projectService/projectServiceSlice";
import Loading from "@/components/Others/Loading";

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

const DocTable: React.FC<TableProps> = () => {
  const { data: projects, isLoading } = useGetAllProjectQuery("project");
  console.log(projects?.data);

  if (isLoading) {
    return <Loading />;
  }
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
          {projects?.data?.map((row: any, index: number) => (
            <TableRow key={index} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocTable;
