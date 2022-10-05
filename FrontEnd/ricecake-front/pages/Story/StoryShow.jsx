import React from "react";
import Link from "next/link";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import sendStory from "../../stores/sendStory";
import { useAtom } from "jotai";
import sendStoryList from "../../stores/sendStoryList";

const StoryShow = () => {
  const [storyList, setSendTitle] = useAtom(sendStoryList);
  const [story, setStory] = useAtom(sendStory);
  console.log(storyList);
  //   console.log(story.data.storyTitle);
  console.log(story);
  return (
    <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex justify-end px-6 space-x-2 ">
        <Link href="/Story/StorySub">
          <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
            BACK
          </a>
        </Link>
        <button>
          <p
            className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
            // onClick={}
            type="button"
          >
            EDIT
          </p>
        </button>
      </div>

      <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-center p-2 mt-2 text-3xl font-bold leading-8 text-gray-900 sm:text-5xl">
          {storyList.data.storyListTitle}
        </div>
        <div className="flex justify-center text-gray-600 mt-7 sm:text-xl">
          <textarea
            placeholder=" Sub Story1"
            className="text-center bg-transparent outline-none resize-none"
          >
            {story.storyTitle}
          </textarea>
        </div>
        <div class="mt-3 mb-7 mx-auto h-px bg-gray-400 w-2/3"></div>
        <div className="flex justify-center">
          <textarea
            placeholder="스토리 내용"
            className="row-span-6 pt-5 overflow-hidden text-center bg-transparent outline-none resize-none text-1xl"
          >
            {story.storyContents}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default StoryShow;
