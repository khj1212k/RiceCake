import React, { Fragment, useRef, useState } from "react";
import Link from "next/link";
import Header from "../../components/Layout/Header";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const DiaryDetail = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(true);
  };
  const cancelButtonRef = useRef(null);

  function checkOnlyOne(element) {
    const checkboxes = document.getElementsByName("checkbox");

    checkboxes.forEach((cb) => {
      cb.checked = false;
    });

    element.checked = true;
  }

  return (
    <>
      <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
        {/* <div class="flex space-x-2 justify-start px-6 ">DiaryMain</div> */}
        <div className="flex justify-end px-6 space-x-2 ">
          <Link href="/Diary/DiaryMain">
            <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
              BACK
            </a>
          </Link>
          {/* <Link href="/Diary/DiaryMain">
            <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
              CHANGE
            </a>
          </Link> */}
          <button
            className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
            type="button"
            data-modal-toggle="popup-modal"
            onClick={clickHandler}
          >
            CHANGE
          </button>
        </div>

        <div className="flex justify-center">
          <textarea
            placeholder="Title"
            className="row-span-6 pt-10 overflow-hidden text-4xl text-center text-gray-900 outline-none resize-none w-96"
          />
        </div>
        <div className="w-1/2 h-px mx-auto bg-gray-400 mb-7"></div>
        <div className="flex justify-center">
          <textarea
            placeholder="내용을 입력하세요."
            rows="12"
            outline="none"
            // class="text-gray-900 resize-none overflow-hidden text-lg outline-none py-3/4 w-96"
            // class="overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100
            // scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16]
            // dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96"
            className="block p-2.5 w-1/2 text-sm text-gray-900 rounded-lg "
          />
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            // initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            // 뒤에 흐린 배경
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0" // opacity = 불투명
              enterTo="opacity-100" // opacity = 불투명
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="flex justify-center px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        {
                          // 빨간 경고 그림
                          /* <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon
                            className="w-6 h-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div> */
                        }
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Today's Mood
                          </Dialog.Title>
                          <div className="flex mt-2">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="red-checkbox"
                                type="checkbox"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-red-600 bg-gray-100 rounded border-gray-300 "
                                onclick={checkOnlyOne(this)}
                              />
                              <label
                                for="red-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900"
                              >
                                Red
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="green-checkbox"
                                type="checkbox"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-green-600 bg-gray-100 rounded border-gray-300"
                                onclick={checkOnlyOne(this)}
                              />
                              <label
                                for="green-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Green
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="purple-checkbox"
                                type="checkbox"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-purple-600 bg-gray-100 rounded border-gray-300"
                                onclick={checkOnlyOne(this)}
                              />
                              <label
                                for="purple-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Purple
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="teal-checkbox"
                                type="checkbox"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-teal-600 bg-gray-100 rounded border-gray-300"
                                onclick={checkOnlyOne(this)}
                              />
                              <label
                                for="teal-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Teal
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="yellow-checkbox"
                                type="checkbox"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-yellow-400 bg-gray-100 rounded border-gray-300 "
                                onclick={checkOnlyOne(this)}
                              />
                              <label
                                for="yellow-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Yellow
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="orange-checkbox"
                                type="checkbox"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-orange-500 bg-gray-100 rounded border-gray-300 "
                                onclick={checkOnlyOne(this)}
                              />
                              <label
                                for="orange-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Orange
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
};

export default DiaryDetail;
