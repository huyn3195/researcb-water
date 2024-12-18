"use client"; // Ensures client-side interactivity in Next.js
import { FC, useState } from "react";

interface CodeDropdownProps {
  code: string;
}

const CodeDropdown: FC<CodeDropdownProps> = ({ code }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6">
      {/* Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md shadow hover:bg-gray-300 transition text-left"
      >
        {isOpen ? "Hide Code" : "Show Code"}
      </button>

      {/* Code Block */}
      {isOpen && (
        <div className="bg-gray-100 p-4 rounded-lg mt-3 shadow-lg overflow-x-auto max-w-full">
          <pre className="overflow-x-auto whitespace-pre-wrap break-all">
            <code className="text-sm">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeDropdown;
