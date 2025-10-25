import React from "react";
import { Download } from "lucide-react";
import moment from "moment";
import { useGetBuilingHistoryInvoiceQuery } from "@/redux/features/subscription/subscripionPlanSlice";
import Loading from "@/components/Others/Loading";
import { saveAs } from "file-saver";

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

const BillingTableBody = () => {
  const { data, isLoading } = useGetBuilingHistoryInvoiceQuery("u");
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  const { pdfUrl, paymentStatus, plan } = data?.data || {};
  console.log(data);

  const handleDownload = (fileUrl: string) => {
    console.log(fileUrl);
    saveAs(fileUrl, "invoice");
  };

  return (
    <tbody className="bg-white divide-y divide-gray-100">
      <tr className={`*:text-nowrap bg-gray-50`}>
        <td className="px-6 py-4 text-sm text-gray-900">
          {/* {moment(row.createdAt).format("ll")} 23/34/2032 */}
          {moment(plan?.createdAt).format("ll")}
        </td>
        <td className="px-6 py-4 text-sm text-gray-900">{plan?.planName}</td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900">
          €{plan?.amount}
        </td>

        <td className="px-6 py-4">
          <span
            className={`inline-flex items-center  border px-3 border-green-200 rounded ${
              paymentStatus === "COMPLETED"
                ? "text-green-700 border-green-200 bg-green-50"
                : "text-yellow-500 border-yellow-200 bg-yellow-50"
            } hover:bg-green-100 transition-colors`}
          >
            {paymentStatus}
          </span>
        </td>
        <td className="px-6 py-4">
          <span className="inline-flex items-center ">{plan?.credits}</span>
        </td>

        <td className="px-6 py-4 text-sm text-gray-900">
          <button
            onClick={() => handleDownload(pdfUrl)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded hover:bg-green-100 transition-colors"
          >
            <Download size={12} />
            PDF
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default BillingTableBody;
