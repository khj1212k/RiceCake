import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import authAtom from '../../stores/authAtom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';


const SignIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAtom(authAtom);
    const router = useRouter();

    const idInputHandler = (event) => setId(event.target.value); //입력된 value 값을 id state에 보관
    const passwordInputHandler = (event) => setPassword(event.target.value);

    const signInButtonHandler = (event) => {
        event.preventDefault();

        const formValue = { id, password };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };

        fetch('http://localhost:8090/users/auth/sign-in', options)
            .then(response => response.json())
            .then(user => setAuth({ user: user.id }))
            .catch(error => console.error('실패', error));

        router.push('/');
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
    </>
}

export default SignIn