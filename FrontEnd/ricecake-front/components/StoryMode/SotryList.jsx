import {MinusIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'


export default function Example() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="my-28 flex text-center flex-col space-y-24">
        <Link  href="/">
          <a>
          <div className="hover:text-neutral-600 mt-2 text-3xl p-2 font-bold leading-8 text-gray-900 sm:text-5xl">
            Story
          </div>
    
          </a>
        </Link>
        <Link  href="/">
          <a>
            <div className="hover:text-neutral-600 text-3xl font-bold p-2 leading-8 text-gray-900 sm:text-5xl">
              Diary
            </div>
          </a>
        </Link>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          </dl>
        </div>
      </div>
    </div>
  )
}
