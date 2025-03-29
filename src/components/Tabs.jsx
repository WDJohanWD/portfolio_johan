import React, { useState } from "react";
import clsx from "clsx";

export function Tabs({ children, defaultValue, className }) {
  const [selectedTab, setSelectedTab] = useState(defaultValue || "overview");

  const handleTabClick = (value) => {
    setSelectedTab(value);
  };

  const renderTriggers = () => {
    return React.Children.map(children, (child) => {
      if (child.type === TabsList) {
        return React.cloneElement(child, {
          children: React.Children.map(child.props.children, (trigger) => {
            if (trigger.type !== TabsTrigger) return trigger;
            return React.cloneElement(trigger, {
              isActive: selectedTab === trigger.props.value,
              onClick: () => handleTabClick(trigger.props.value),
            });
          }),
        });
      }
      if (child.type === TabsTrigger) {
        return React.cloneElement(child, {
          isActive: selectedTab === child.props.value,
          onClick: () => handleTabClick(child.props.value),
        });
      }
      return null;
    });
  };

  const renderContent = () => {
    return React.Children.map(children, (child) => {
      if (child.type === TabsContent) {
        return React.cloneElement(child, {
          isActive: selectedTab === child.props.value,
        });
      }
      return null;
    });
  };

  return (
    <div className={clsx("tabs", className)}>
      <div className="tabs-list flex space-x-4 border-b">
        {renderTriggers()}
      </div>
      <div className="tabs-content mt-6">
        {renderContent()}
      </div>
    </div>
  );
}

export function TabsList({ children, className }) {
  return <div className={clsx("tabs-list", className)}>{children}</div>;
}

export function TabsTrigger({ children,  isActive, onClick }) {
  return (
    <button
      className={clsx(
        "py-2 px-4 text-sm font-medium focus:outline-none -mt-4",
        isActive
          ? "border-b-2 border-primary text-primary"
          : "text-gray-600 hover:text-gray-800"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, isActive, className }) {
  return isActive ? (
    <div className={clsx("tab-content", className)}>{children}</div>
  ) : null;
}
