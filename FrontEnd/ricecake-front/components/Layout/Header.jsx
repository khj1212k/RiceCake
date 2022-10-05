import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, StarIcon, ArrowRightOnRectangleIcon, } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes) {

  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <Link href="/Main/Main">
            <a className="flex flex-shrink-0 items-center ">
              RiceCake
              <StarIcon
                className="block h-5 w-auto px-1"
              />
            </a>
          </Link>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button href="/auth/sign-out"
            type="button"
            className="rounded-full bg-white p-1 text-gray-800 hover:text-gray-400 "
          >
            <span className="sr-only">View notifications</span>
            <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex rounded-full bg-white text-sm  hover:text-gray-400 ">
                <span className="sr-only">Open user menu</span>
                <Bars3Icon
                  className="h-8 w-8 rounded-full"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      id='theme-toggle'
                      type='button'
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Light/Dark
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/Story/StoryMain"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      My Stories
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/Diary/DiaryMain"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      My Diaries
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/Main/Main"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Profie
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div class="mb-7 h-px bg-gray-400 w-1/7 mx-auto"></div>
    </div>
  )
}