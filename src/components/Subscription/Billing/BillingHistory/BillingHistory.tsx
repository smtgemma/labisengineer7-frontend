"use client";
import React from "react";
import BillingTableBody from "@/components/Subscription/Billing/BillingTableBody/BillingTableBody";
import { useGetBuilingHistoryQuery } from "@/redux/features/subscription/subscripionPlanSlice";
import tokenCatch from "@/lib/token";

interface BillingHistoryProps {
  className?: string;
}

const BillingHistory: React.FC<BillingHistoryProps> = ({ className = "" }) => {
  const token = tokenCatch();
  console.log(token);

  const { data } = useGetBuilingHistoryQuery(token);
  console.log(data);
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
              Dredits
            </th>
          </tr>
        </thead>
        <BillingTableBody data={data?.data} />
      </table>
    </section>
  );
};

export default BillingHistory;

export { BillingHistory };
