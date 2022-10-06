import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';

const FindId = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [isValidate, setIsValidate] = useState(true);
    const [isValidate2, setIsValidate2] = useState(true);
    const [isIdbuttonClick, setIsIdbuttonClick] = useState(true);
    const [userList, setUserList] = useState([]);

    const [failModalIsOpen, setFailModalIsOpen] = useState(false);
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

    const router = useRouter();

    const failButtonRef = useRef(null);
    const successButtonRef = useRef(null);

    useEffect(() => {
        if (validateEmail(email)) setIsValidate(true);
        if (email === '') setIsValidate(true);
    }, [email])
    useEffect(() => {
        if (validateEmail(email2)) setIsValidate2(true);
        if (email2 === '') setIsValidate2(true);
    }, [email2])
    useEffect(() => { }, [userId]);
    useEffect(() => { }, [password]);
    useEffect(() => { }, [failModalIsOpen]);
    useEffect(() => { }, [successModalIsOpen]);

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const idInputHandler = (event) => setUserId(event.target.value); //입력된 value 값을 id state에 보관
    const emailInputHandler = (event) => {
        setIsValidate(false);
        setEmail(event.target.value);
    }
    const emailInputHandler2 = (event) => {
        setIsValidate2(false);
        setEmail2(event.target.value);
    }

    const finIdHandler = (event) => {
        event.preventDefault();
        setIsIdbuttonClick(true);

        if (!isValidate) return;

        const formValue = { email };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };

        fetch('http://localhost:8090/users/find/email', options)
            .then(response => response.json())
            .then(user => {
                if (user.length != 0) {
                    setUserList(user);
                    setSuccessModalIsOpen(true);
                    setFailModalIsOpen(false);
                }
                else {
                    setSuccessModalIsOpen(false);
                    setFailModalIsOpen(true);
                }
            })
            .catch(error => console.error('email을 확인하세요.', error));
    };

    const findPasswordHandler = (event) => {
        event.preventDefault();
        setIsIdbuttonClick(false);

        if (!isValidate) return;

        const formValue = { userId };
        console.log(formValue);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };

        // console.log(options);

        fetch('http://localhost:8090/users/find/password', options)
            .then(response => response.json())
            .then(data => {
                if(data.userId != '') {
                    setPassword(data.password);
                    setSuccessModalIsOpen(true);
                    setFailModalIsOpen(false);
                }
                else {
                    setSuccessModalIsOpen(false);
                    setFailModalIsOpen(true);
                }
            })
            .catch(error => console.error('id를 확인하세요.', error));
    };

    const emailTextColor = isValidate ? 'text-grey-900' : 'font-bold text-red-700 line-through';
    const emailTextColor2 = isValidate2 ? 'text-grey-900' : 'font-bold text-red-700 line-through';

    return <>
        <div className='flex h-3/4 items-center justify-around'>
            <div className="flex w-1/2 h-full items-center justify-center sm:px-6 lg:px-8" s>
                <div className="w-3/5 max-w-md space-y-16">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">ID 찾기</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='flex-col w-4/5'>
                            <div>
                                <label htmlFor="email" className="sr-only">EMAIL</label>
                                <input id="email" type="email" onChange={emailInputHandler} required
                                    className={`relative block w-full appearance-none rounded-md border
                         border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10
                         focus:border-black focus:outline-none
                         focus:ring-black sm:text-sm ${emailTextColor}`}
                                    placeholder="EMAIL" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end py-1">
                        <div className="text-md">
                            <a onClick={finIdHandler}
                                className="mr-10 font-bold border px-2 py-1
                                border-transparent bg-black text-white rounded-md
                                hover:text-black hover:bg-white">SUBMIT</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 h-full items-center justify-center sm:px-6 lg:px-8" s>
                <div className="w-3/5 max-w-md space-y-16">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">PASSWORD 찾기</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='flex-col w-4/5'>
                            <div>
                                <label htmlFor="user-id" className="sr-only">User ID</label>
                                <input id="user-id" type="text" onChange={idInputHandler}
                                    required className="relative block w-full appearance-none rounded-none rounded-t-md border
                           border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                           focus:border-black focus:outline-none
                           focus:ring-black sm:text-sm"
                                    placeholder="ID" />

                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" type="email" onChange={emailInputHandler2} required autoFocus
                                    className={`relative block w-full appearance-none rounded-md border
                                    border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10
                                    focus:border-black focus:outline-none
                                    focus:ring-black sm:text-sm ${emailTextColor2}`}
                                    placeholder="EMAIL" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end py-1">
                        <div className="text-md">
                            <a onClick={findPasswordHandler}
                                className="mr-10 font-bold border px-2 py-1
                                border-transparent bg-black text-white rounded-md
                                hover:text-black hover:bg-white">SUBMIT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Transition.Root show={failModalIsOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={failButtonRef} onClose={setFailModalIsOpen}>
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
                                                {isIdbuttonClick ? '아이디 없음' : '비밀번호 없음'}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-base text-gray-500">
                                                    {isIdbuttonClick ? '이메일에 해당하는 아이디가 존재 하지 않습니다.' : 'ID 값이 존재하지 않습니다.'}
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
            <Dialog as="div" className="relative z-10" initialFocus={successButtonRef} onClose={setSuccessModalIsOpen}>
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
                                                {isIdbuttonClick ? '이메일에 해당하는 아이디' : '아이디에 해당하는 비밀번호'}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <div className="text-lg text-gray-500">
                                                    {isIdbuttonClick ? userList.map((user, index) => {
                                                        return <p key={index}>-{user.userId}</p>
                                                    }) : password}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={isIdbuttonClick ? () => {setSuccessModalIsOpen(false)} : () => router.push('./sign-in')}
                                        className="inline-flex w-full justify-center rounded-md border 
                                                border-transparent bg-black px-4 py-2 text-base font-medium 
                                                text-white shadow-sm hover:bg-white hover:text-black outline-none ring-2
                                                ring-black ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"

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

export default FindId