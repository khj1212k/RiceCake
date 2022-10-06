import Link from "next/link";
import Calendars from "../Calendar";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import authAtom from "../../stores/authAtom";
import dateAtom from "../../stores/dateAtom";
import { XMarkIcon } from "@heroicons/react/24/outline";

const DiaryMain = () => {
  const clickHandler = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const router = useRouter();

  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryContents, setDiaryContents] = useState("");
  const [emotion, setEmotion] = useState("");
  const [loginUser, setAuth] = useAtom(authAtom);
  const [date, setDate] = useAtom(dateAtom);
  const [diaries, setDiaries] = useState();


  const diaryTitleHandler = (event) => {
    setDiaryTitle(event.target.value);
  };

  const diaryContentsHandler = (event) => {
    setDiaryContents(event.target.value);
  };

  const createEmotionHandler = (event) => { };

  const createDiaryTitleHandler = (event) => { };

  const createDiaryContentHandelr = (event) => { };

  useEffect(() => {
    async function getDiary() {
      const userId = loginUser.userId;
      const getUrl = "http://localhost:8090/diaries/2022-10-06/" + userId;
      // console.log(getUrl);
      await fetch(getUrl)
        .then((response) => response.json())
        .then((diary) => {
          setDiaries(diary);
          console.log(diary);
          // setDiaryContent(diaryContent);
          router.push("/Diary/DiaryMain");
        });
    }
    getDiary();
  }, []);

  return (
    <>
      <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-end px-6 space-x-2 ">
          <Link href="/Main/Main">
            <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
              BACK
            </a>
          </Link>
          <button
            className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
            type="button"
            data-modal-toggle="popup-modal"
            onClick={clickHandler}
          >
            SAVE
          </button>
        </div>

        <div id="Container" className="flex justify-around p-5">
          <div id="Calander Container" className="pt-16 ">
            Calender
            <Calendars />
          </div>
          <div id="text Editer Container" className="">
            <div className="flex justify-center w-96 ">
              <textarea
                placeholder="Title"
                onChange={diaryTitleHandler}
                className="w-full row-span-6 pt-10 overflow-hidden text-4xl text-center text-gray-900 bg-transparent outline-none resize-none"
              >
                {diaries && diaries.diaryTitle}
              </textarea>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-px bg-gray-400 mb-7"></div>
            </div>
            <div className="flex justify-center">
              <textarea
                placeholder="내용을 입력해주세요."
                onChange={diaryContentsHandler}
                rows="12"
                className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 h-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll block p-2.5 w-full text-sm text-gray-900 rounded-lg bg-transparent resize-none"
              >
                {/* {diaries && diaries.diaryContents} */}
                {console.log(diaries)}
              </textarea>

            </div>
            <div className="flex justify-center">
              <button
                // onClick={deleteButtonHandler}
                type="button"
              >
                <XMarkIcon className="h-5 px-1 text-gray-800 hover:text-gray-400" />
              </button>
            </div>
          </div>
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
                                // checked
                                id="red-checkbox"
                                type="radio"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-red-600 bg-gray-100 rounded border-gray-300 "
                              />
                              <label
                                // for="red-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900"
                              >
                                Upset
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="green-checkbox"
                                type="radio"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-green-600 bg-gray-100 rounded border-gray-300"
                              />
                              <label
                                // for="green-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Tired
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="purple-checkbox"
                                type="radio"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-purple-600 bg-gray-100 rounded border-gray-300"
                              />
                              <label
                                // for="purple-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Wonderful
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="teal-checkbox"
                                type="radio"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-teal-600 bg-gray-100 rounded border-gray-300"
                              />
                              <label
                                // for="teal-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Wrorried
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="yellow-checkbox"
                                type="radio"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-yellow-400 bg-gray-100 rounded border-gray-300 "
                              />
                              <label
                                // for="yellow-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Great
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                // checked=""
                                id="orange-checkbox"
                                type="radio"
                                name="checkbox"
                                value=""
                                class="w-4 h-4 accent-orange-500 bg-gray-100 rounded border-gray-300 "
                              />
                              <label
                                // for="orange-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Soso
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={(createStoryListHandler) => setOpen(false)}
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
export default DiaryMain;
