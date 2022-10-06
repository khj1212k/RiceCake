import { StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Start() {
  return (
    <div className="flex h-auto py-20 bg-transparent">
      <div className="flex items-center justify-center px-4 mx-auto max-w-7xl sm:px-6">
        <div className="text-center">
          <p className="p-10 mt-5 text-3xl font-bold text-gray-900 sm:text-6xl">
            Wanna Bite?
          </p>
          <p className="p-8 mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
            RiceCake
          </p>
          <Link href="/users/sign-in">
            <a className="flex justify-center p-6 mx-auto text-gray-800 hover:text-gray-400">
              <StarIcon className="w-20 h-20 animate-bounce" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
