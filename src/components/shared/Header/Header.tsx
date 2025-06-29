import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, className = "" }) => {
  return (
    <header className={`${className}`}>
      <div className="flex gap-2 flex-col">
        <h1 className="text-lg font-semibold text-gray-900 leading-tight">
          {title}
        </h1>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
