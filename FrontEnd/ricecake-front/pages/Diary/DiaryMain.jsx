import Link from "next/link";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const DiaryMain = () => {

    return (
      <>
        <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
          {/* <div class="flex space-x-2 justify-start px-6 ">DiaryMain</div> */}
          <div className="flex justify-end px-6 space-x-2 ">
            <Link href="/Main/Main">
              <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                BACK
              </a>
            </Link>
            <Link href="/Diary/DiaryDetail">
              <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                EDIT
              </a>
            </Link>
          </div>

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


          {/* <div id="Container" className="flex justify-around p-5"> */}

            <div id="text Editer Container" className="">
              <div className="flex justify-center">
                <textarea
                  placeholder="Title"
                  className="row-span-6 pt-10 overflow-hidden text-4xl text-center text-gray-900 outline-none resize-none w-96"
                />
              </div>
              <div className="flex justify-center">
                <div className="w-full h-px bg-gray-400 mb-7 "></div>
              </div>
              <div className="flex justify-center">
                <textarea
                  placeholder="내용을 입력하세요."
                  rows="10"
                  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg resize-none"
                />
              </div>
            </div>
          </div>
        {/* </div> */}
      </>
    );
};


export default DiaryMain;