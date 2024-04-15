import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SignInPage() {
  return (
    <div className='w-full h-screen grid place-items-center'>
      <SignIn/>
    </div>
  )
}
