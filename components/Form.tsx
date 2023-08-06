'use client'

import Link from "next/link"
import React from "react"
import { FormInput } from "./FormInput"

export const Form = () => {
  const inputFields = [
    {
      placeholder: 'First Name',
      fieldType: 'text',
      errorMessage: 'First Name cannot be empty',
      pattern: '^[A-Za-z]*'
    },
    {
      placeholder: 'Last Name',
      fieldType: 'text',
      errorMessage: 'Last Name cannot be empty',
      pattern: '^[A-Za-z]*'
    },
    {
      placeholder: 'Email Address',
      fieldType: 'emai',
      errorMessage: 'Looks like this is not an email',
    },
    {
      placeholder: 'Password',
      fieldType: 'Password',
      errorMessage: 'Password cannot be empty',
      pattern: '^[A-Za-z1-9]*'
    }
  ]

  const handleOnSubmit = (e: any) => {
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <form onSubmit={handleOnSubmit} className='bg-white grid place-content-center p-5 rounded-xl gap-5 shadow-2xl'>
        {inputFields.map((field: any) => <FormInput key={field.placeholder} {...field}/>)}
        <button className='bg-green py-3 text-white rounded-lg shadow-xl uppercase'>
          Claim your free trial
        </button>
        <p className='text-center text-xs text-grayish_blue px-4'>
          By clicking the button you are agreeing to our 
          <Link href='./' className='text-red'> Terms and Services</Link>
        </p>
    </form>
  )
}
