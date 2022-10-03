import React, { Fragment, useRef, useState } from "react";
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

const StoryMain = () => {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(true);
    };
    const cancelButtonRef = useRef(null);

    return (
        <>
            <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-end px-6 space-x-2 ">
                    <Link href="/Main/Main">
                        <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                            BACK
                        </a>
                    </Link>
                </div>

                <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex justify-center p-2 mt-2 text-3xl font-bold leading-8 text-gray-900 sm:text-5xl">
                        All Stories
                    </div>
                    <div class="mt-3 mb-7 mx-auto h-px bg-gray-400 w-2/3"></div>
                    <div>
                        {/* storylist */}
                    </div>

                    <button
                        className="flex justify-center mx-auto p-5 text-gray-800 hover:text-gray-400"
                        onClick={clickHandler}
                        type="button"
                        data-modal-toggle="popup-modal">
                        <PlusIcon className='h-5 w-5' />
                    </button>
                </div>
            </div>


            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
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
                                                    Add Story Title
                                                </Dialog.Title>
                                                <div className="flex mt-2">
                                                    <div class="flex items-center mr-4">
                                                        <textarea
                                                            placeholder="내용을 입력하세요."
                                                            rows="2"
                                                            outline="none"
                                                            className="block p-2.5 text-sm text-gray-900 rounded-lg resize-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Add Sub Title
                                                </Dialog.Title>
                                                <div className="flex mt-2">
                                                    <div class="flex items-center mr-4">
                                                        <textarea
                                                            placeholder="내용을 입력하세요."
                                                            rows="2"
                                                            outline="none"
                                                            className="block p-2.5 text-sm text-gray-900 rounded-lg resize-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
        </>
    );
};

export default StoryMain;  