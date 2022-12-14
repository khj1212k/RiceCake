import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import sendStoryList from "../../stores/sendStoryList";
import sendStory from "../../stores/sendStory";
import { useRouter } from "next/router";

const StorySub = () => {
  const [sendTitle, setSendTitle] = useAtom(sendStoryList);
  const [story, setStory] = useAtom(sendStory);
  const router = useRouter();
  const [stories, setStroies] = useState([]);

  useEffect(() => {
    console.log(sendTitle);
    async function getStroies() {
      const storyListId = sendTitle.data.storyListId;
      console.log(storyListId);
      const getUrl = "http://localhost:8090/story/" + storyListId;
      await fetch(getUrl)
        .then((response) => response.json())
        .then((stories) => {
          setStroies(stories);
          console.log(stories);
        });
    }
    getStroies();

  }, []);

  const deleteHandler = (storyId) => {
    const deleteUrl = "http://localhost:8090/story?id=" + storyId;
    fetch(deleteUrl, { method: "DELETE" })
      .then((response) => response.json())
      .then((stories) => {
        setStroies(stories);
      });
  };

  return (
    <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex justify-end px-6 space-x-2 ">
        <Link href="/Story/StoryMain">
          <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
            BACK
          </a>
        </Link>
      </div>

      <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-center p-2 mt-2 text-3xl font-bold leading-8 text-gray-900 sm:text-5xl">
          {sendTitle.data.storyListTitle}
        </div>
        <div className="flex justify-center p-2 mt-2 text-3xl leading-8 text-gray-600 sm:text-sm">
          {sendTitle.data.storyListSubTitle}
        </div>
        <div className="mt-3 mb-7 mx-auto h-px bg-gray-400 w-2/3"></div>
        <div className="flex flex-col text-center">
          {stories &&
            stories.map((story) => (
              <div
                className="flex justify-center space-x-10 "
                key={story.storyListId}
              >
                <button
                  className="text-lg hover:text-gray-400"
                  key={story.storyId}
                  onClick={() => {
                    router.push("/Story/StoryShow");
                    setStory(story);
                  }}
                >
                  {story.storyTitle}
                </button>
                <button
                  key={story.storyId}
                  onClick={() => deleteHandler(story.storyId)}
                >
                  <XMarkIcon
                    className="h-5 px-1 text-gray-300 hover:text-gray-400"
                  />
                </button>
              </div>
            ))}
        </div>

        <Link href="/Story/StorySubText">
          <a className="flex justify-center p-5 mx-auto">
            <PlusIcon className="w-5 h-5 text-gray-800 hover:text-gray-400" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default StorySub;
