import React, { FC, ReactNode } from "react";

interface TextBoxProps {
  className?: string; // Optional additional classes
  children: ReactNode; // Content to display inside the TextBox
}

const TextBox: FC<TextBoxProps> = ({ className = "", children }) => {
  return (
    <div
      className={`bg-blue-100 p-4 rounded-lg overflow-x-auto mt-3 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default TextBox;
