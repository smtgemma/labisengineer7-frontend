"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  typeSet?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonGlobal({
  title = "Click Me",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-primary hover:bg-blue-700 text-white  py-[13px] px-[32px] rounded-lg transition"
    >
      <span>{title}</span>
    </button>
  );
}
