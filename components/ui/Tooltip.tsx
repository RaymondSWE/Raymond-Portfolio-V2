import React, { useState } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position: "top" | "right" | "bottom" | "left";
  margin?: number;
}

const Tooltip = ({ content, children, position, margin = 8 }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const getPositionClasses = (position: string, margin: number) => {
    const marginValue = `${margin}`;
    switch (position) {
      case "top":
        return `bottom-full mb-${marginValue}`;
      case "right":
        return `left-full ml-${marginValue}`;
      case "bottom":
        return `top-full mt-${marginValue}`;
      case "left":
        return `right-full mr-${marginValue}`;
      default:
        return "";
    }
  };

  const positionClass = getPositionClasses(position, margin);

  return (
    <div className="relative flex items-center justify-center">
      {isVisible && (
        <div
          className={`absolute z-10 p-4 text-base text-gray-300 whitespace-normal min-w-[250px] bg-black bg-opacity-80 rounded-md ${positionClass}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
        </div>
      )}
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        aria-haspopup="true"
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
