import React from "react";
import Link from "next/link";
import Header from "../../components/Layout/Header";

const DiaryMain = () => {
  return (
    <>
      <Header />
      <div class="min-h-full h-3/4 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* <div class="flex space-x-2 justify-start px-6 ">DiaryMain</div> */}
        <div class="flex space-x-2 justify-end px-6 ">
          <Link href="/">
            <a class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
              BACK
            </a>
          </Link>
          <Link href="/Diary/DiaryMian">
            <a class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
              EDIT
            </a>
          </Link>
        </div>

        <div id="Container" className="flex justify-around p-5">
          <div id="Calander Container">
            <textarea
              placeholder="Calendar 자리"
              cols="30"
              rows="10"
              className="text-xl text-center rounded-lg bg-slate-600"
            >
              calendar
            </textarea>
          </div>
          <div id="text Editer Container" className="">
            <div class="flex justify-center">
              <textarea
                placeholder="Title"
                class=" text-gray-900 w-96 resize-none overflow-hidden row-span-6 text-center text-4xl outline-none pt-10"
              />
            </div>
            <div className="flex justify-center">
              <div class="mb-7 h-px bg-gray-400 w-full "></div>
            </div>
            <div class="flex justify-center">
              <textarea
                placeholder="내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 "
                rows="12"
                // class="text-gray-900 resize-none overflow-hidden text-lg outline-none py-3/4 w-96"
                // class="overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100
                // scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16]
                // dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryMain;
