"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuChevronRight } from "react-icons/lu";

const BreadCrumb: React.FC = () => {
  const location = usePathname();
  const searchParams = useSearchParams(); // ✅ fix here
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  const pathnames = location.split("/").filter((x) => x);

  useEffect(() => {
    const tabPath = searchParams.get("tab")?.split("/") || [];
    setBreadcrumbs(tabPath);
  }, [searchParams]);

  return (
    <div className="hidden sm:block">
      <div className="flex items-start gap-2 font-semibold sm:text-base text-xs md:text-lg text-wrap">
        {pathnames.map((breadcrumb, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Link
              href={path}
              key={`path-${index}`}
              className="capitalize flex items-center gap-2 text-[15px] font-sans text-primary"
            >
              {breadcrumb}
              {index < pathnames.length - 1 && (
                <LuChevronRight className="min-h-5 min-w-5" />
              )}
            </Link>
          );
        })}

        {breadcrumbs.map((breadcrumb, index) => (
          <span
            key={`tab-${index}`}
            className="capitalize flex items-center text-[15px] font-sans text-primary"
          >
            {index === 0 && <LuChevronRight className="min-h-5 min-w-5" />}
            {breadcrumb}
            {index < breadcrumbs.length - 1 && (
              <LuChevronRight className="min-h-5 min-w-5" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
