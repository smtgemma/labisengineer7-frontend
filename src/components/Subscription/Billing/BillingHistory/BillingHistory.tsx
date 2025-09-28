"use client";
import React from "react";
import BillingTableBody from "@/components/Subscription/Billing/BillingTableBody/BillingTableBody";
import { useGetBuilingHistoryInvoiceQuery } from "@/redux/features/subscription/subscripionPlanSlice";
import tokenCatch from "@/lib/token";

interface BillingHistoryProps {
  className?: string;
}

const BillingHistory: React.FC<BillingHistoryProps> = ({ className = "" }) => {
  return (
    <section className="overflow-auto rounded-lg border border-gray-200 mt-6">
      <table className="w-full">
        <thead
          style={{
            background:
              "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
          }}
          className=""
        >
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
              Dredits
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white">
              Invoice
            </th>
          </tr>
        </thead>
        <BillingTableBody />
      </table>
    </section>
  );
};

export default BillingHistory;

export { BillingHistory };
