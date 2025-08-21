import React from "react";
import { TableData } from "@/components/Projects/Table/Table";
import moment from "moment";
import Link from "next/link";

interface TableRowProps {
  data: any;
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Submitted":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors *:text-nowrap">
      <td className="text-sm text-gray-900 px-6 py-4">
        {moment(data.createdAt).format("l")}
      </td>
      <td className="text-sm text-gray-900 px-6 py-4">
        {data.service.serviceName}
      </td>
      <td className="text-sm text-gray-600 px-6 py-4">{data.type}</td>
      <td className="text-sm px-6 py-4">
        <Link
          href={`/projects/${data.id}`}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          View Document
        </Link>
      </td>
      <td className="text-sm px-6 py-4">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
            data.status
          )}`}
        >
          {data.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          {/* <button className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors">
            Edit
          </button> */}
          <button className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded hover:bg-red-100 transition-colors">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
