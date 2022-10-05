import Link from "next/link";
import React, { useState } from 'react';
import Calendars from '../Calendar';
import { useRouter } from "next/router";
import { useAtom } from 'jotai';
import authAtom from "../../stores/authAtom";
import { XMarkIcon } from '@heroicons/react/24/outline'


const DiaryMain = () => {

  const [userId, setuserId] = useState('');
  const [diaryDate, setdiaryDate] = useState('');
  const [auth, setAuth] = useAtom(authAtom);
  const router = useRouter();

  // const DiaryButtonHandler = (event) => {
  //   event.preventDefault();

  //   const formValue = { userId, diaryDate };

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formValue),
  //   };

  //   const url = 'userId' + '/' + 'diaryDate';
  //   fetch('http://localhost"8090/diaries/' + url , options)
  //   ,then(response => {

  //   })

  //   }
  // };


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

        <div id="Container" className="flex justify-around p-5">
          <div id="Calander Container" className="pt-16 ">
            Calender
            <Calendars />
          </div>
          <div id="text Editer Container" className="">
            <div className="flex justify-center w-96">
              <textarea
                placeholder="Title"
                className="row-span-6 pt-10 overflow-hidden text-4xl text-center text-gray-900 outline-none resize-none w-full"
              />
            </div>
            <div className="flex justify-center">
              <div className="w-full h-px bg-gray-400 mb-7 "></div>
            </div>
            <div className="flex justify-center">
              <textarea
                placeholder="내용을 입력해주세요."
                rows="12"
                className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 h-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll block p-2.5 w-full text-sm text-gray-900 rounded-lg resize-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                // onClick={}
                type="button"
              >
                <XMarkIcon className="h-5 px-1 text-gray-800 hover:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DiaryMain;