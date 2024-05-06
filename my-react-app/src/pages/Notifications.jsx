import React from "react";

const Notifications = () => {
  return (
    <>
      {" "}
      <div className="h-full max-w-sm">
        <h1 className="font-bold text-3xl mt-16 text-gray-500 ">
          Mes Annonces
        </h1>
        <div class=" flex items-center justify-center mt-10 ">
          <details class="overflow-hidden border border-gray-300 rounded-lg mr-5">
            <summary class="flex cursor-pointer items-center justify-between gap-2 mr-10 bg-white p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Toutes mes annonces </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
          </details>

          <details class="overflow-hidden  border border-gray-300 rounded-lg ">
            <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Date </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
          </details>
        </div>
        <div className="bg-gray-50 p-10 rounded-xl mt-8">
          <h1 className="mt-5 text-md font-normal text-center ">
            Voudrais-tu être celui qui brise ce silence en créant une annonce ?{" "}
          </h1>
          <button className="w-full mt-8 rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
            Ajouter une Annonces!
          </button>
        </div>
      </div>
    </>
  );
};

export default Notifications;
