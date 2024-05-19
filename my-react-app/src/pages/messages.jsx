import React from "react";
import "tailwindcss/tailwind.css";

const Messages = () => {
  return (
    <div className="flex flex-col gap-4 p-2 md:w-[50%] mt-10">
      <header className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
        <h2 className="text-xl font-semibold">Inbox</h2>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <SearchIcon className="h-5 w-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FilterIcon className="h-5 w-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </header>
      <div className="space-y-4">
        <MessageItem
          name="Olivia Davis"
          date="Oct 08, 2023"
          title="Question about Budget"
          content="Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success."
          amount="$500"
          avatarInitials="CN"
        />
        <MessageItem
          name="John Doe"
          date="Oct 07, 2023"
          title="Proposal for New Project"
          content="Hi team, I've put together a proposal for the new project we discussed last week. I'd like to schedule a meeting to go over the details and get your feedback."
          amount="$1,000"
          avatarInitials="JD"
        />
        <MessageItem
          name="Sarah Miller"
          date="Oct 06, 2023"
          title="Update on Marketing Campaign"
          content="Hi everyone, I wanted to provide an update on the marketing campaign we launched last week. The initial results are looking promising, and I'd like to schedule a meeting to discuss next steps."
          amount="$750"
          avatarInitials="SM"
        />
        <MessageItem
          name="Jessica Bates"
          date="Oct 05, 2023"
          title="Feedback on Design Mockups"
          content="Hi team, I've had a chance to review the design mockups for the new website. I have a few suggestions and feedback that I'd like to discuss in our next meeting."
          amount="$300"
          avatarInitials="JB"
        />
      </div>
    </div>
  );
};

const MessageItem = ({
  name,
  date,
  title,
  content,
  amount,
  avatarInitials,
}) => (
  <div className="group flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
    <div className="avatar">
      <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
        <span className="text-xl">{avatarInitials}</span>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{date}</div>
      </div>
      <div className="mt-1 font-medium">{title}</div>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
        {content}
      </p>
      <div className="mt-2 flex items-center justify-between">
        <div className="font-semibold flex items-center">
          {amount}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  </div>
);

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Messages;
