import React from "react";
import "tailwindcss/tailwind.css";

export default function Profile() {
  return (
    <div className="flex  gap-4 p-4 sm:p-6 bg-gray-50">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 border">
        <UserIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-sm font-medium">Mon compte :</h4>
        <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Jared Palmer
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          jared@example.com
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Administrator
        </div>
      </div>
    </div>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
