import React from "react";
import { Download } from "lucide-react";
import moment from "moment";

// export interface BillingData {
//   id: string;
//   date: string;
//   plan: string;
//   amount: string;
//   status: "Paid" | "Pending" | "Failed";
//   renewalDate: string;
// }

interface BillingData {
  createdAt: string;
  plan: {
    planName: string;
  };
  amount: number;
  credits: number;
  paymentStatus: "COMPLETED" | "PENDING" | "FAILED";
}

interface BillingTableBodyProps {
  data: BillingData[];
}

const BillingTableBody: React.FC<BillingTableBodyProps> = ({ data }) => {
  const getStatusStyles = (status: BillingData["paymentStatus"]) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-800 border-green-200";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "FAILED":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <tbody className="bg-white divide-y divide-gray-100">
      {data?.map((row, index) => (
        <tr
          key={index}
          className={`*:text-nowrap ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <td className="px-6 py-4 text-sm text-gray-900">
            {moment(row.createdAt).format("ll")}
          </td>
          <td className="px-6 py-4 text-sm text-gray-900">
            {row.plan.planName}
          </td>
          <td className="px-6 py-4 text-sm font-medium text-gray-900">
            €{row.amount}
          </td>
          <td className="px-6 py-4">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(
                row.paymentStatus
              )}`}
            >
              {row.paymentStatus}
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900">
            {moment(row.createdAt).format("ll")}
          </td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center ">{row.credits}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BillingTableBody;
