import React from "react";
import Link from "next/link";
import { PlusIcon } from '@heroicons/react/24/outline'

const StorySub = () => {
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
                    Main Story1
                </div>
                <div className="flex justify-center p-2 mt-2 text-3xl leading-8 text-gray-600 sm:text-xl">
                    Sub Title
                </div>
                <div class="mt-3 mb-7 mx-auto h-px bg-gray-400 w-2/3"></div>
                <div>
                    {/* storylist */}
                </div>

                <Link href="/Story/StorySubText">
                    <a className="flex justify-center mx-auto p-5 text-gray-800 hover:text-gray-400">
                        <PlusIcon className='h-5 w-5' />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default StorySub;  