import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  StarIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div className="flex items-center flex-shrink-0">
            RiceCake
            <StarIcon className="block w-auto h-5 pl-1 lg:hidden" />
            <StarIcon className="hidden w-auto h-5 pl-1 lg:block" />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4"></div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            href="/auth/sign-out"
            type="button"
            className="p-1 text-gray-800 bg-white rounded-full hover:text-gray-400 "
          >
            <span className="sr-only">View notifications</span>
            <ArrowRightOnRectangleIcon className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex text-sm bg-white rounded-full hover:text-gray-400 ">
                <span className="sr-only">Open user menu</span>
                <Bars3Icon className="w-8 h-8 rounded-full" />
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
              <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
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
  );
}
