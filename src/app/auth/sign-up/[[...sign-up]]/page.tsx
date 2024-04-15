import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignUpPage() {
  return (
    <div className='w-full h-screen grid place-items-center'>
      <SignUp/>
    </div>
  )
}
