import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import {SubmitHandler, useForm} from "react-hook-form"
import useAuth from '../hooks/useAuth';

interface Inputs  {
  email: string,
  password: string,
};


function login() {

const [logIn, setLogIn]= useState(false);
const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

const{signIn,signUp} =useAuth()
const onSubmit: SubmitHandler<Inputs> = async (data) => {

  if(logIn){

    await signIn(data.email, data.password)
  } else {
    await signUp(data.email, data.password)
  }
  

};
  return (
    <div className='relative flex  flex-col h-screen w-screen bg-black md:items-center md:bg-transparent'>
      <Head>
        <title>Netflix</title></Head>
        <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=''
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      
      
      <form onSubmit={handleSubmit(onSubmit)} className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
        <h1 className='text-4xl font-semibold'>Sign In</h1>
        <div className='space-y-4'>
          <label className="inline-block w-full">
            <input type="email" className="input" placeholder='email' {...register("email",{ required: true })}/>
            </label>
            
            <label className="inline-block w-full">
              <input type="password" className="input" placeholder='password' {...register("password",{ required: true })}/>
            </label>
        </div>
        <button type="submit" className="w-full rounded bg-[#E50914] py-3 font-semibold" onClick={()=>setLogIn(true)}>Sign In</button>
        <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
            type="submit"
            onClick={()=>setLogIn(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default login

