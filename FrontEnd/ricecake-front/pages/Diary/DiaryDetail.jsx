import React from "react";
import Link from "next/link";
import Header from "../../components/Layout/Header";

const DiaryDetail = () => {
  return (
    <>
      <Header />
      <div class="min-h-full h-3/4 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* <div class="flex space-x-2 justify-start px-6 ">DiaryMain</div> */}
        <div class="flex space-x-2 justify-end px-6 ">
          <Link href="/Diary/DiaryMain">
            <a class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
              BACK
            </a>
          </Link>
          <Link href="/Diary/DiaryMain">
            <a class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
              CHANGE
            </a>
          </Link>
        </div>

        <div class="flex justify-center">
          <textarea
            placeholder="Title"
            class=" text-gray-900 w-96 resize-none overflow-hidden row-span-6 text-center text-4xl outline-none pt-10"
          />
        </div>
        <div class="mb-7 h-px bg-gray-400 w-1/2 mx-auto"></div>
        <div class="flex justify-center">
          <textarea
            placeholder="내용을 입력하세요."
            rows="12"
            // class="text-gray-900 resize-none overflow-hidden text-lg outline-none py-3/4 w-96"
            // class="overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100
            // scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16]
            // dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96"
            class="block p-2.5 w-1/2 text-sm text-gray-900 rounded-lg "
          />
        </div>

        <button
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="popup-modal"
        >
          Toggle modal
        </button>

        <div
          id="popup-modal"
          tabIndex="-1"
          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
        >
          <div class="relative p-4 w-full max-w-md h-full md:h-auto jus">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="p-6 text-center">
                <svg
                  aria-hidden="true"
                  class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryDetail;
