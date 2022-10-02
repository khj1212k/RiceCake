import React, { useState } from 'react'
import Link from 'next/link'

const EmailConfirm = () => {
   const [certificationNumber, setCertificationNumber] = useState(0);

   const certificationNumberInputHandler = (event) => setCertificationNumber(event.target.value);


    return <>
        <div className="flex h-3/4 items-center justify-center sm:px-6 lg:px-8" s>
            <div className="w-1/3 max-w-md space-y-16">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">JOIN</h2>
                </div>
                <div className="flex-col items-center justify-center">
                    <div className="flex items-center justify-center font-semibold">귀하의 이메일로 인증번호를 전송하였습니다.</div>
                    <div className='flex items-center justify-center mt-4'>
                        <div className=' w-4/5'>
                            <label htmlFor="certificationNumber" className="sr-only">인증 번호</label>
                            <input id="certificationNumber" type="text" onChange={certificationNumberInputHandler}
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
                        <Link href="/users/sign-up">
                            <a className="mr-10 font-bold border px-2 py-1
                        border-transparent bg-black text-white rounded-md
                        hover:text-black hover:bg-white">SUBMIT</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default EmailConfirm