import React from "react";
import TableRow from "@/components/Projects/Table/TableRow/TableRow";

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
  return (
    <div className="w-full overflow-auto rounded-lg shadow-sm">
      <table className="w-full">
        {/* Table Header */}
        <thead className="bg-blue-500 text-white">
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
          {data.map((row, index) => (
            <TableRow key={index} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
