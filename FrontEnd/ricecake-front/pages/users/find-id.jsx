import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const FindId = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [isValidate, setIsValidate] = useState(true);
    const [isValidate2, setIsValidate2] = useState(true);

    useEffect(() => {
        if (email === '') setIsValidate(true);
    }, [email])
    useEffect(() => {
        if (email2 === '') setIsValidate2(true);
    }, [email2])

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const idInputHandler = (event) => setId(event.target.value); //입력된 value 값을 id state에 보관
    const emailInputHandler = (event) => {
        setIsValidate(false);
        setEmail(event.target.value);
        if (validateEmail(email)) setIsValidate(true);
    }
    const emailInputHandler2 = (event) => {
        setIsValidate2(false);
        setEmail2(event.target.value);
        if (validateEmail(email2)) setIsValidate2(true);
    }

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
                            <Link href="/">
                                <a className="mr-10 font-bold border px-2 py-1
                    border-transparent bg-black text-white rounded-md
                    hover:text-black hover:bg-white">SUBMIT</a>
                            </Link>
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
                            <Link href="/users/sign-up">
                                <a className="mr-10 font-bold border px-2 py-1
                    border-transparent bg-black text-white rounded-md
                    hover:text-black hover:bg-white">SUBMIT</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FindId