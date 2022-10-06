import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import authAtom from '../../stores/authAtom';

const ModifyProfile = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [name, setName] = useState('');
  const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
  const [password, setPassword] = useState('');
  const [isNameButtonClick, setIsNameButtonClick] = useState(true);

  const [failModalIsOpen, setFailModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const router = useRouter();

  const failButtonRef = useRef(null);
  const successButtonRef = useRef(null);

  useEffect(() => { }, [userId]);
  useEffect(() => { }, [password]);
  useEffect(() => { }, [failModalIsOpen]);
  useEffect(() => { }, [successModalIsOpen]);


  const nameInputHandler = (event) => setName(event.target.value) //입력된 value 값을 id state에 보관
  const passwordInputHandler = (event) => setPassword(event.target.value)

  const nameChangeHanlder = (event) => {
    event.preventDefault();
    setIsNameButtonClick(true);
    if(name == '') {
      document.getElementById('name').placeholder = 'name을 입력하세요.';
      return;
    }

    const formValue = { userId, name };

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue),
    };

    fetch('http://localhost:8090/users', options)
      .then(response => response.json())
      .then(data => {
        if (data.userId != '') {
          setSuccessModalIsOpen(true);
          setFailModalIsOpen(false);
        }
        else {
          setSuccessModalIsOpen(false);
          setFailModalIsOpen(true);
        }
      })
      .catch(error => console.error('name을 확인하세요.', error));
  };

  const passwordChangeHandler = (event) => {
    setIsNameButtonClick(false);
    event.preventDefault();
    if(password == '') {
      document.getElementById('password').placeholder = 'password를 입력하세요.';
      return;
    }

    const formValue = { userId, password };

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue),
    };

    fetch('http://localhost:8090/users', options)
      .then(response => response.json())
      .then(data => {
        if (data.userId != '') {
          setSuccessModalIsOpen(true);
          setFailModalIsOpen(false);
        }
        else {
          setSuccessModalIsOpen(false);
          setFailModalIsOpen(true);
        }
      })
      .catch(error => console.error('name을 확인하세요.', error));
  };

  return <>
    <div className='flex h-3/4 items-center justify-around'>
      <div className="flex w-1/2 h-full items-center justify-center sm:px-6 lg:px-8" s>
        <div className="w-3/5 max-w-md space-y-16">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">NAME 변경</h2>
          </div>
          <div className="flex items-center justify-center">
            <div className='flex-col w-4/5'>
              <div>
                <label htmlFor="name" className="sr-only">NAME</label>
                <input id="name" type="text" onChange={nameInputHandler} required
                  className="relative block w-full appearance-none rounded-md border
                       border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10
                       focus:border-black focus:outline-none
                       focus:ring-black sm:text-sm text-grey-900"
                  placeholder="name" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end py-1">
            <div className="text-md">
              <a onClick={nameChangeHanlder}
                className="mr-10 font-bold border px-2 py-1
                              border-transparent bg-black text-white rounded-md
                              hover:text-black hover:bg-white">CHANGE</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 h-full items-center justify-center sm:px-6 lg:px-8" s>
        <div className="w-3/5 max-w-md space-y-16">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">PASSWORD 변경</h2>
          </div>
          <div className="flex items-center justify-center">
            <div className='flex-col w-4/5'>
              <div>
                <label htmlFor="password" className="sr-only">User ID</label>
                <input id="password" type="text" onChange={passwordInputHandler}
                  required className="relative block w-full appearance-none rounded-none rounded-t-md border
                         border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                         focus:border-black focus:outline-none
                         focus:ring-black sm:text-sm"
                  placeholder="password" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end py-1">
            <div className="text-md">
              <a onClick={passwordChangeHandler}
                className="mr-10 font-bold border px-2 py-1
                              border-transparent bg-black text-white rounded-md
                              hover:text-black hover:bg-white">CHANGE</a>
            </div>
          </div>
        </div>
      </div>
    </div>

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
                        {isNameButtonClick ? 'Name이 변경되었습니다.' : 'Password이 변경되었습니다.'}
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => router.push('./sign-in')}
                    className="inline-flex w-full justify-center rounded-md border 
                              border-transparent bg-black px-4 py-2 text-base font-medium 
                             text-white shadow-sm hover:bg-white hover:text-black outline-none ring-2
                             ring-black ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setSuccessModalIsOpen(false)}
                    className="inline-flex w-full justify-center rounded-md border 
                              border-transparent bg-black px-4 py-2 text-base font-medium 
                             text-white shadow-sm hover:bg-white hover:text-black outline-none ring-2
                             ring-black ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
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

export default ModifyProfile