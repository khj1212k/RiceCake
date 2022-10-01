import { MinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <div className="flex py-12 bg-white ">
        main
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col text-center my-28 ">
            <Link href="/">
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

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"></dl>
          </div>
        </div>
      </div>
      <div className="flex py-12 bg-white">
        main
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col text-center my-28 ">
            <Link href="/">
              <a>
                <div className="p-2 mt-2 text-3xl font-bold leading-8 text-gray-900 hover:text-neutral-600 sm:text-5xl">
                  Story
                </div>
              </a>
            </Link>
            <div class="mb-7 h-px bg-gray-400 w-11/12 mx-auto"></div>
            <Link href="/">
              <a>
                <div className="p-2 text-3xl font-bold leading-8 text-gray-900 hover:text-neutral-600 sm:text-5xl">
                  Diary
                </div>
              </a>
            </Link>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"></dl>
          </div>
        </div>
      </div>
      <div className="flex py-12 bg-white">
        main
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col text-center my-28 ">
            <Link href="/">
              <a>
                <div className="p-2 mt-2 text-3xl font-bold leading-8 text-gray-900 hover:text-neutral-600 sm:text-5xl">
                  Story
                </div>
              </a>
            </Link>
            <div class="mb-7 h-px bg-gray-400 w-11/12 mx-auto"></div>
            <Link href="/">
              <a>
                <div className="p-2 text-3xl font-bold leading-8 text-gray-900 hover:text-neutral-600 sm:text-5xl">
                  Diary
                </div>
              </a>
            </Link>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"></dl>
          </div>
        </div>
      </div>
    </>
  );
}
