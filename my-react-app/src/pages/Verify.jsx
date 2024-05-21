import React from "react";
import "tailwindcss/tailwind.css";
import Button from "../components/forms/Button";
import Inpute from "../components/forms/Inpute";

export default function Component() {
  return (
    <div className="flex w-full p-0 min-h-screen flex-col items-center   bg-white dark:bg-gray-950">
      <h1 className="mb-8 text-3xl font-bold">Verification</h1>
      <div className="w-full max-w-6xl space-y-6 px-4 sm:px-0 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-800">
                  <SmartphoneIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium">Mobile Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-500">
                  Completed
                </span>
              </div>
            </div>
            <form className="space-y-4 p-6">
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium">+1</span>
                </div>
                <Inpute placeholder="Enter your mobile number" type="tel" />
              </div>
              <div className="flex justify-end">
                <Button buttonName="Verification Code" />
              </div>
            </form>
          </div>
          <div className="card bg-base-100 border rounded-lg dark:bg-gray-950">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-800">
                  <MailboxIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium">Email Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-500">
                  Completed
                </span>
              </div>
            </div>
            <form className="space-y-4 p-6">
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium">Code</span>
                </div>
                <Inpute placeholder="Enter verification code" type="text" />
              </div>
              <div className="flex justify-end">
                <Button buttonName="Verify Email" />
              </div>
            </form>
          </div>
        </div>
        <div className="card bg-base-100 border rounded-lg dark:bg-gray-950">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-800">
                <CreditCardIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium">Identity Verification</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-gray-400" />
              <span className="text-sm font-medium text-gray-400">Pending</span>
            </div>
          </div>
          <form className="space-y-4 p-6">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">ID</span>
              </div>
              <div className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <UploadIcon className="h-8 w-8 text-gray-400 dark:text-gray-600" />
                  <span className="text-sm font-medium text-gray-400 dark:text-gray-600">
                    Upload your ID
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <Button buttonName=" Verify Identity" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function MailboxIcon(props) {
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
