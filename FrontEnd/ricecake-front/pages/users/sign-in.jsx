import React, { useState, useRef, Fragment, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import authAtom from '../../stores/authAtom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


const SignIn = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const [failModalIsOpen, setFailModalIsOpen] = useState(false);

    const [auth, setAuth] = useAtom(authAtom);

    const router = useRouter();

    const cancelButtonRef = useRef(null);

    useEffect(() => {}, [userId, password]);
    useEffect(() => {console.log(auth);}, [auth])

    const idInputHandler = (event) => setUserId(event.target.value); //입력된 value 값을 id state에 보관
    const passwordInputHandler = (event) => setPassword(event.target.value);

    const signInButtonHandler = (event) => {
        // console.log(userId, password);
        event.preventDefault();

        const formValue = { userId, password };
        // console.log(formValue);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };

        fetch('http://localhost:8090/users/auth/sign-in', options)
            // .then(response => response.json())
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.userId != '') {
                    setAuth({userId: data.userId});
                    sessionStorage.setItem('userId', userId);
                    router.push('../Main/Main');
                }
                else {
                    console.log(data);
                    setFailModalIsOpen(true);
                }
            })
            .catch(error => {
                console.log(error + "아이디 비밀번호 오류");
            });
    };

    return <>
        <div className="flex h-3/4 items-center justify-center sm:px-6 lg:px-8" s>
            <div className="w-1/3 max-w-md space-y-16">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">LOGIN</h2>
                </div>
                <div className="flex items-center justify-center">
                    <div className='flex-col w-4/5'>
                        <div>
                            <label htmlFor="user-id" className="sr-only">User ID</label>
                            <input id="user-id" type="text" onChange={idInputHandler} autoComplete="id"
                                required className="relative block w-full appearance-none rounded-none rounded-t-md border
                                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                                 focus:border-black focus:outline-none
                                 focus:ring-black sm:text-sm"
                                placeholder="ID" />

                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" type="password" onChange={passwordInputHandler} autoComplete="current-password"
                                required className="relative block w-full appearance-none rounded-none rounded-b-md border
                                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                                 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                placeholder="Password" />
                        </div>
                    </div>
                    <div className='flex w-1/5 items-center justify-center'>
                        <ArrowRightCircleIcon onClick={signInButtonHandler}
                            className='h-20 w-20 text-white fill-black hover:animate-sizeup' />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <Link href="/users/find-id">
                            <a className="mr-10 font-bold border px-3 py-2
                                border-transparent bg-black text-white rounded-md
                                hover:text-black hover:bg-white">아이디/비밀번호 찾기</a>
                        </Link>
                    </div>

                    <div className="text-sm">
                        <Link href="/users/sign-up">
                            <a className="font-bold border px-3 py-2
                                border-transparent bg-black text-white rounded-md
                                hover:text-black hover:bg-white">회원 가입</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <Transition.Root show={failModalIsOpen} as={Fragment} on>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setFailModalIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                                                아이디 또는 비밀번호가 맞지 않습니다.
                                            </Dialog.Title>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setFailModalIsOpen(false)}
                                    >
                                        OK
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    </>
}

export default SignIn