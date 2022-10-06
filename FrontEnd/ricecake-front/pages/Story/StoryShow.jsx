import React, { useState } from "react";
import Link from "next/link";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import sendStory from "../../stores/sendStory";
import { useAtom } from "jotai";
import sendStoryList from "../../stores/sendStoryList";
import { useRouter } from "next/router";

const StoryShow = () => {
  const [storyList, setStoryList] = useAtom(sendStoryList);
  const [story, setStory] = useAtom(sendStory);
  const [storyTitle, setStoryTitle] = useState();
  const [storyContents, setStoryContents] = useState();
  const router = useRouter();

  console.log(storyList);
  //   console.log(story.data.storyTitle);
  console.log(story);

  const storyTitleHandler = (event) => {
    setStoryTitle(event.target.value);
  };

  const storyContentsHandler = (event) => {
    setStoryContents(event.target.value);
  };

  const editHandler = (event) => {
    event.preventDefault(); // 기본 폼 동작 비활성화
    const storyListId = "";
    const storyList = { storyListId };
    const storyDate = story.storyDate;
    const storyId = story.storyId;
    const submitValue = {
      storyId,
      storyTitle,
      storyContents,
      storyDate,
      storyList,
    };
    console.log(submitValue);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitValue), // 직렬화
    };
    fetch("http://localhost:8090/story", options)
      .then((response) => response.json())
      .then((story) => {
        setStory(story);
        console.log(story);
      }) // 모든 StoryList 데이터를 가져와서 배열에 담아줘야하는건가
      .catch((error) => console.log("fail", error));
    router.push("/Story/StorySub");
  };

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
            onClick={editHandler}
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
            className="text-center bg-transparent outline-none resize-none scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 h-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll block p-2.5 w-full text-sm text-gray-900 rounded-lg"
            onChange={storyTitleHandler}
            // value={}
          >
            {story.storyTitle}
          </textarea>
        </div>
        <div class="mt-3 mb-7 mx-auto h-px bg-gray-400 w-2/3"></div>
        <div className="flex justify-center ">
          <textarea
            placeholder="스토리 내용"
            rows="12"
            className=" w-2/3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 h-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll block p-2.5 w-full text-sm text-gray-900 rounded-lg bg-transparent resize-none"
            onChange={storyContentsHandler}
          >
            {story.storyContents}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default StoryShow;
