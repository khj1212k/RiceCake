import Link from "next/link";
import React, { useState } from "react";
import { useAtom } from "jotai";
import sendStoryList from "../../stores/sendStoryList";
import { useRouter } from "next/router";

const StorySubText = () => {
  const [storyTitle, setStoryTitle] = useState("");
  const [storyContents, setStoryContents] = useState("");
  const [atomStoryList, setSendStoryList] = useAtom(sendStoryList);
  const router = useRouter();

  const storyTitleHandler = (event) => {
    setStoryTitle(event.target.value);
  };

  const storyContentsHandler = (event) => {
    setStoryContents(event.target.value);
    console.log(atomStoryList.data.storyListId);
  };

  let today = new Date();
  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
  }

  const createStoryHandler = (event) => {
    console.log(dateFormat(today));
    event.preventDefault();
    const storyListId = atomStoryList.data.storyListId;
    const storyList = { storyListId };
    const storyDate = dateFormat(today);
    const submitValue = {
      storyTitle,
      storyContents,
      storyDate,
      storyList,
    };
    console.log(submitValue);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitValue),
    };
    fetch("http://localhost:8090/story", options)
      .then((response) => response.json())
      .then((storyList) => {
        setStoryLists(storyList);
        console.log(storyList);
      })
      .catch((error) => console.log("fail", error));
    router.push("/Story/StorySub");
  };

  return (
    <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex justify-end px-6 space-x-2 ">
        <Link href="/Story/StorySub">
          <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
            BACK
          </a>
        </Link>
        <Link href="/Story/StorySub">
          <a
            onClick={createStoryHandler}
            className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            SUBMIT
          </a>
        </Link>
      </div>

      <div className="flex justify-center">
        <textarea
          onChange={storyTitleHandler}
          placeholder="Title"
          className="row-span-6 pt-10 overflow-hidden text-4xl text-center text-gray-900 bg-transparent outline-none resize-none w-96"
        />
      </div>
      <div className="w-1/2 h-px mx-auto bg-gray-400 mb-7"></div>
      <div className="flex justify-center">
        <textarea
          onChange={storyContentsHandler}
          placeholder="내용을 입력하세요."
          rows="12"
          outline="none"
          className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 h-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll block p-2.5 w-1/2 text-sm bg-transparent text-gray-900 rounded-lg resize-none"
        />
      </div>
    </div>
  );
};

export default StorySubText;
