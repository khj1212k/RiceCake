import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import authAtom from '../../stores/authAtom';


const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [auth, setAuth] = useAtom(authAtom);
    const router = useRouter();

    const idInputHandler = (event) => setId(event.target.value); //입력된 value 값을 id state에 보관
    const passwordInputHandler = (event) => setPassword(event.target.value);
    const nameInputHandler = (event) => setName(event.target.value);
    const emailInputHandler = (event) => setEmail(event.target.value);

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
            .then(user => setAuth({ token: user.token, user: user.id }))
            .catch(error => console.error('실패', error));

        router.push('/');
    };

    return <>
        <div className="flex h-3/4 items-center justify-center sm:px-6 lg:px-8" s>
            <div className="w-1/3 max-w-md space-y-16">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">JOIN</h2>
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
                            <input id="password" type="password" onChange={passwordInputHandler}
                                required className="relative block w-full appearance-none rounded-none rounded-tb-md border
                                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                                 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                placeholder="Password" />
                        </div>
                        <div>
                            <label htmlFor="name" className="sr-only">NAME</label>
                            <input id="name" type="text" onChange={nameInputHandler} 
                                required className="relative block w-full appearance-none rounded-none rounded-tb-md border
                                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                                 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                placeholder="NAME" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">EMAIL</label>
                            <input id="email" type="email" onChange={emailInputHandler} required autoFocus 
                                className="relative block w-full appearance-none rounded-none rounded-b-md border
                                 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                                 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                placeholder="email" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="text-md">
                        <Link href="/auth/sign-up">
                            <a className="ml-10 font-bold border px-3 py-2
                                border-transparent bg-black text-white rounded-md
                                hover:text-black hover:bg-white" >CANCEL</a>
                        </Link>
                    </div>

                    <div className="text-md">
                        <Link href="/auth/sign-up">
                            <a className="mr-10 font-bold border px-3 py-2
                                border-transparent bg-black text-white rounded-md
                                hover:text-black hover:bg-white">JOIN</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignUp