import React, { useState } from "react";
import clsx from "clsx";

export function Tabs({ children, defaultValue, className }) {
  const [selectedTab, setSelectedTab] = useState(defaultValue || "");

  const handleTabClick = (value) => {
    setSelectedTab(value);
  };

  return (
    <div className={clsx("tabs", className)}>
      <div className="tabs-list flex space-x-4 border-b">
        {React.Children.map(children, (child) => {
          if (child.type !== TabsTrigger) return null;
          return React.cloneElement(child, {
            isActive: selectedTab === child.props.value,
            onClick: () => handleTabClick(child.props.value),
          });
        })}
      </div>
      <div className="tabs-content mt-6">
        {React.Children.map(children, (child) => {
          if (child.type !== TabsContent) return null;
          return React.cloneElement(child, {
            isActive: selectedTab === child.props.value,
          });
        })}
      </div>
    </div>
  );
}

export function TabsList({ children, className }) {
  return <div className={clsx("tabs-list", className)}>{children}</div>;
}

export function TabsTrigger({ children, isActive, onClick, className }) {
  return (
    <button
      className={clsx(
        "py-2 px-4 text-sm font-medium focus:outline-none",
        isActive ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-gray-800"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, isActive, className }) {
  return isActive ? <div className={clsx("tab-content", className)}>{children}</div> : null;
}
