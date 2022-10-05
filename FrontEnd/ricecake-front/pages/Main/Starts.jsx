import { StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Example() {
  return (
    <div className="flex h-auto bg-transparent py-12">
      <div className="mx-auto max-w-7xl flex items-center justify-center px-4 sm:px-6">
        <div className="text-center">
          <p className="mt-5 text-3xl font-bold p-10 text-gray-900 sm:text-6xl">
            Wanna Bite?
          </p>
          <p className="mt-2 text-3xl font-bold p-8 text-gray-900 sm:text-5xl">
            RiceCake
          </p>
          <Link href="/users/sign-in">
            <a className="flex justify-center mx-auto p-6 text-gray-800 hover:text-gray-400">
              <StarIcon className='h-20 w-20 animate-bounce'/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
