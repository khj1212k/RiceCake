import { StarIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="fixed flex py-12 bg-white">
      start
      <div className="flex items-center justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="text-center">
          <p className="p-24 mt-2 text-3xl font-bold leading-8 text-gray-900 md-h-auto animate-pulse sm:text-7xl">
            Wanna Bite?
          </p>
          <p className="p-2 mt-2 text-3xl font-bold leading-8 text-gray-900 sm:text-5xl">
            RiceCake
          </p>
          <button
            href="/auth/sign-in"
            type="button"
            className="p-5 text-gray-800 hover:text-gray-400 animate-none"
          >
            <span className="sr-only">View notifications</span>
            <StarIcon className="h-10 " aria-hidden="true" />
          </button>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"></dl>
        </div>
      </div>
    </div>
  );
}
