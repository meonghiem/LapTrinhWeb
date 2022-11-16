import Head from 'next/head'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import React from 'react'

import banner from '../../../public/images/logo.jpg'
import google from '../../../public/images/logo/google.png'
import pionero from '../../../public/images/pionero.jpg'

function Login() {

  function handleSignIn(e) {
    e.preventDefault()
    signIn('google', { callbackUrl: 'http://localhost:3000/employee/AttendanceTracking' })
  }
  return (
    <>
      <Head>
        <title>PingDaily</title>
      </Head>
      <div className="bg-slate-100">
        <div className="absolute left-0 h-full right-1/3">
          <div className="">
            <Image src={banner} alt="abc" layout="fill" />
          </div>
          <div className="flex flex-col justify-center absolute left-0 h-full right-0 text-center">
            <p className="text-[78.9px] font-['Roboto'] not-italic font-bold leading-[92px] text-white">
              技術を武器に<br></br>世界に喜びを
            </p>
            <p className="text-white text-[21.9px] font-['Roboto'] not-italic font-medium leading-[26px]">
              Bring happiness to the world with technology
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center absolute left-2/3 right-0 h-full">
          <div className="mx-auto w-[200px] h-[100px]">
            <Image src={pionero} alt="abc" layout="responsive" className="" />
          </div>

          <div className="flex flex-col mx-auto space-y-[20px]">
            <button
              onClick={(e) => {
                handleSignIn(e)
              }}
            >
              <div className="flex flex-row items-center justify-center border-[1px] border-solid border-black space-x-[10px] h-[50px]">
                <div className="pt-[7px] ">
                  <Image src={google} alt="abc" layout="fixed" className="" />
                </div>
                <p className="font-medium text-[20px] leading-[23px] font-['Roboto'] not-italic decoration-[#939393] self-center">
                  Sign in with Google
                </p>
              </div>
            </button>
            <div className="flex flex-row justify-center items-center h-[30px]">
              <div className="w-2/5 h-[1px] border-[1px] border-solid border-black"></div>
              <p className="mx-auto">Or</p>
              <div className="w-2/5 h-[1px] border-[1px] border-solid border-black"></div>
            </div>
            <input className="border-b-[1px] border-[#004b8f] pl-4 h-[55px]" type="text" placeholder="Email" />
            <input type="text" placeholder="Password" className="border-b-[1px] border-[#004b8f] pl-4 h-[55px]" />
            <button className="rounded bg-[#0f6fc6] border-[1px] border-black h-[55px]">Login</button>
            <p className="text-[#ff0202]">The email address or password you entered is invalid.</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
