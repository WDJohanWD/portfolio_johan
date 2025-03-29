import React from "react";
import clsx from "clsx";

export function Badge({ children, variant = "default", className }) {
  const baseStyles = "px-2 py-1 rounded text-xs font-medium";
  const variants = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-700 text-white",
    success: "bg-green-600 text-white",
    danger: "bg-red-600 text-white",
    warning: "bg-yellow-500 text-white",
  };

  return <span className={clsx(baseStyles, variants[variant], className)}>{children}</span>;
}
