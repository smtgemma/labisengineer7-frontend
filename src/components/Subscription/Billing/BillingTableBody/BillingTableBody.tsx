import React from "react";
import { Download } from "lucide-react";

export interface BillingData {
  id: string;
  date: string;
  plan: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  renewalDate: string;
}

interface BillingTableBodyProps {
  data: BillingData[];
}

const BillingTableBody: React.FC<BillingTableBodyProps> = ({ data }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Failed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <tbody className="bg-white divide-y divide-gray-100">
      {data.map((row, index) => (
        <tr
          key={row.id}
          className={`*:text-nowrap ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <td className="px-6 py-4 text-sm text-gray-900">{row.date}</td>
          <td className="px-6 py-4 text-sm text-gray-900">{row.plan}</td>
          <td className="px-6 py-4 text-sm font-medium text-gray-900">
            {row.amount}
          </td>
          <td className="px-6 py-4">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(
                row.status
              )}`}
            >
              {row.status}
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-gray-900">{row.renewalDate}</td>
          <td className="px-6 py-4">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded hover:bg-green-100 transition-colors">
              <Download size={12} />
              PDF
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BillingTableBody;
