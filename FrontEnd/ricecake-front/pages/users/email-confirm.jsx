import React, { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useAtom } from 'jotai';
import emailCodeAtom from '../../stores/emailCodeAtom';
import authAtom from '../../stores/authAtom';
import { useRouter } from 'next/router';
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const EmailConfirm = () => {
    const [code, setCode] = useAtom(emailCodeAtom);
    const [auth, setAuth] = useAtom(authAtom);

    const [userId, setUserId] = useState(auth.userId);
    const [password, setPassword] = useState(auth.password);
    const [name, setName] = useState(auth.name);
    const [email, setEmail] = useState(auth.email);

    const [failModalIsOpen, setFailModalIsOpen] = useState(false);
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

    const cancelButtonRef = useRef(null);
    const successButtonRef = useRef(null);

    const [inputCode, setInputCode] = useState('');

    const router = useRouter();

    const emailCodeInputHandler = (event) => setInputCode(event.target.value);
    const emailCodeCheckHandler = () => {
        console.log('click');
        console.log(code.code);
        console.log(inputCode);
        if (code.code == inputCode) {
            console.log("맞다 " + code.code);

            const formValue = { userId, password, name, email };
            console.log(formValue);
            console.log(auth);

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValue),
            };

            fetch('http://localhost:8090/users', options)
                .then(response => response.json())
                .catch(error => console.error('실패', error));

            setSuccessModalIsOpen(true);

        }
        else {
            setFailModalIsOpen(true);
        }

        setAuth({ userId: null, password: null, name: null, email: null });
        setCode({ code: null });
    }


    return <>
        <div className="flex h-3/4 items-center justify-center sm:px-6 lg:px-8" s>
            <div className="w-1/3 max-w-md space-y-12">
                <div>
                    <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">JOIN</h2>
                </div>
                <div className="flex-col items-center justify-center">
                    <div className="flex items-center justify-center mb-2">
                        <EnvelopeIcon className='h-12 w-12' />
                    </div>
                    <div className="flex items-center justify-center font-semibold">귀하의 이메일로 인증번호를 전송하였습니다.</div>
                    <div className='flex items-center justify-center mt-4'>
                        <div className=' w-4/5'>
                            <label htmlFor="certificationNumber" className="sr-only">인증 번호</label>
                            <input id="certificationNumber" type="text" onChange={emailCodeInputHandler}
                                required className="relative block w-full appearance-none rounded-md border
                             border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                             focus:border-black focus:outline-none
                             focus:ring-black sm:text-sm"
                                placeholder="인증 번호" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="text-md">
                        <Link href="/users/sign-up">
                            <a className="ml-10 font-bold border px-2 py-1
                        border-transparent bg-black text-white rounded-md
                        hover:text-black hover:bg-white" >CANCEL</a>
                        </Link>
                    </div>

                    <div className="text-md">
                        <a className="mr-10 font-bold border px-2 py-1
                            border-transparent bg-black text-white rounded-md
                            hover:text-black hover:bg-white" onClick={emailCodeCheckHandler}>SUBMIT
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <Transition.Root show={failModalIsOpen} as={Fragment}>
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
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                인증번호가 일치하지 않습니다.
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-base text-gray-500">
                                                    이메일에 있는 인증번호를 다시 한번 확인하여 주세요.
                                                </p>
                                            </div>
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

        <Transition.Root show={successModalIsOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={successButtonRef} onClose={() => { }}>
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
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                                            <CheckCircleIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                회원가입 성공 PenCake에 오신걸 환영합니다.
                                            </Dialog.Title>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-white hover:text-black outline-none ring-2 ring-black ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => router.push('./sign-in')}
                                    >
                                        Login
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

export default EmailConfirm