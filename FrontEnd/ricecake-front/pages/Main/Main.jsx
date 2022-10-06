import Link from "next/link";



export default function Example() {
  return (
    <>
      <div className="flex h-auto my-20 bg-transparent dark:bg-black">
        <div className="mx-auto max-w-7xl flex items-center justify-center px-4 sm:px-6">
          <div className="flex space-y-20 flex-col text-center my-28 ">
            <Link href="/Story/StoryMain">
              <a>
                <div className="p-2 mt-2 text-3xl font-bold leading-8 text-gray-900 hover:text-neutral-600 sm:text-5xl">
                  Story
                </div>
              </a>
            </Link>
            <div class="mb-7 h-px bg-gray-400 w-11/12 mx-auto"></div>
            <Link href="/Diary/DiaryMain">
              <a>
                <div className="p-2 text-3xl font-bold leading-8 text-gray-900 hover:text-neutral-600 sm:text-5xl">
                  Diary
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}