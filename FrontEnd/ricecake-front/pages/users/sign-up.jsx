import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import authAtom from '../../stores/authAtom';
import emailCodeAtom from '../../stores/emailCodeAtom';


const SignUp = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isDuplicate, setIsDuplicate] = useState(false);
    const [isValidate, setIsValidate] = useState(true);
    const [code, setCode] = useAtom(emailCodeAtom);

    const [auth, setAuth] = useAtom(authAtom);
    const router = useRouter();

    useEffect(() => {
        const formValue = { userId };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };
        // console.log(options);
        fetch('http://localhost:8090/users/find', options)
            .then(response => response.json())
            .then(data => {
                data.userId == '' ? setIsDuplicate(false) : setIsDuplicate(true);
            })
            .catch(error => console.error('실패', error));
    }, [userId]);

    useEffect(() => {
        if (email === '') setIsValidate(true);
        if (validateEmail(email)) setIsValidate(true);
    }, [email])

    useEffect(() => { ; }, [password, name])

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const idInputHandler = (event) => { setUserId(event.target.value); }
    const passwordInputHandler = (event) => setPassword(event.target.value);
    const nameInputHandler = (event) => setName(event.target.value);
    const emailInputHandler = (event) => {
        setIsValidate(false);
        setEmail(event.target.value);
    }

    const checkBlank = () => {
        let isNotBlank = true;
        const userInfo = [{ key: 'userId', value: userId },
        { key: 'password', value: password },
        { key: 'name', value: name },
        { key: 'email', value: email }
        ];
        for (let i = 0; i < userInfo.length; i++) {
            if (userInfo[i].value === '') {
                document.getElementById(userInfo[i].key).placeholder = `${userInfo[i].key}를 입력하세요.`;
                isNotBlank = false;
            }
        }
        return isNotBlank;
    }

    const signUpButtonHandler = (event) => {
        event.preventDefault();
        if (!isValidate) return;
        if (isDuplicate) return;

        if (!checkBlank()) return;

        const formValue = { email };
        console.log(formValue);
        setAuth({ userId: userId, password: password, name: name, email: email });
        console.log(auth);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };

        fetch('http://localhost:8090/email/confirm', options)
            .then(response => response.json())
            .then(code => setCode({ code: code }))
            .catch(error => console.error('실패', error));
        router.push('./email-confirm');
    };

    const idTextColor = isDuplicate ? 'font-bold text-red-700 line-through' : 'text-grey-900';
    // const autoFillTextClor = isDuplicate ? 'autofill:text-red-700 autofill:line-through' : 'autofill:text-grey-900'; 
    const emailTextColor = isValidate ? 'text-grey-900' : 'font-bold text-red-700 line-through';

    return <>
        <div className="flex h-3/4 items-center justify-center sm:px-6 lg:px-8 ">
            <div className="w-1/3 max-w-md space-y-16">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">JOIN</h2>
                </div>
                <div className="flex items-center justify-center">
                    <div className='flex-col w-4/5'>
                        <div>
                            <label htmlFor="userId" className="sr-only">User ID</label>
                            <input id="userId" type="text" onChange={idInputHandler} autoComplete="id"
                                required className={`relative block w-full appearance-none rounded-none rounded-t-md border
                                 border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10
                                 focus:border-black focus:outline-none
                                 focus:ring-black sm:text-sm ${idTextColor}`}
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
                                className={`relative block w-full appearance-none rounded-none rounded-b-md border
                                 border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10
                                 focus:border-black focus:outline-none
                                 focus:ring-black sm:text-sm ${emailTextColor}`}
                                placeholder="email" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end py-1">
                    <div className="text-md" onClick={signUpButtonHandler}>
                        <a className="mr-10 font-bold border px-3 py-2
                                border-transparent bg-black text-white rounded-md
                                hover:text-black hover:bg-white">JOIN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignUp