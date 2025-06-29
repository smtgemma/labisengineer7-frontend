'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonArrow({ title = 'Click Me', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white  py-[13px] px-[32px] rounded-lg transition"
    >
      <span className="mr-3">{title}</span>
      <ArrowRight  />
    </button>
  );
}
