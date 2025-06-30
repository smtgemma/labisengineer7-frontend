import React from "react";
import BillingTableBody, {
  BillingData,
} from "@/components/Subscription/Billing/BillingTableBody/BillingTableBody";

interface BillingHistoryProps {
  className?: string;
}

const BillingHistory: React.FC<BillingHistoryProps> = ({ className = "" }) => {
  const billingData: BillingData[] = [
    {
      id: "1",
      date: "July 1, 2024",
      plan: "Professional Plan",
      amount: "€29.00",
      status: "Paid",
      renewalDate: "July 1, 2025",
    },
    {
      id: "2",
      date: "June 1, 2024",
      plan: "Professional Plan",
      amount: "€29.00",
      status: "Paid",
      renewalDate: "June 1, 2025",
    },
    {
      id: "3",
      date: "May 1, 2024",
      plan: "Starter Plan",
      amount: "€0.00",
      status: "Paid",
      renewalDate: "May 1, 2025",
    },
    {
      id: "4",
      date: "April 1, 2024",
      plan: "Professional Plan",
      amount: "€29.00",
      status: "Pending",
      renewalDate: "April 1, 2025",
    },
  ];

  return (
    <section className="overflow-auto rounded-lg border border-gray-200 mt-6">
      <table className="w-full">
        <thead className="bg-[#017AFF]">
          <tr className="*:text-nowrap">
            <th className="px-6 py-3 text-left text-sm font-medium text-white">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white">
              Plan
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white">
              Renewal Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white">
              Invoice
            </th>
          </tr>
        </thead>
        <BillingTableBody data={billingData} />
      </table>
    </section>
  );
};

export default BillingHistory;

export { BillingHistory };
