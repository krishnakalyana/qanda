'use client'

import React from 'react'

import Link from 'next/link'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { routeConstant } from '@/lib/constants/routeConstant'
export default function RegisterForm() {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
        <CardItem
          translateZ='20'
          className='text-xl tracking-widest font-bold text-neutral-600 dark:text-white'
        >
          Get Registered
        </CardItem>
        <form>
          {/* Inputs */}
          <div className='grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2'>
            <CardItem
              as='p'
              translateZ='10'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              <Input placeholder='Username' />
            </CardItem>
            <CardItem
              as='p'
              translateZ='10'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              <Input placeholder='First Name' />
            </CardItem>
            <CardItem
              as='p'
              translateZ='10'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              <Input placeholder='Last Name' />
            </CardItem>
            <CardItem
              as='p'
              translateZ='10'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              <Input placeholder='Email' type='email' />
            </CardItem>
            <CardItem
              as='p'
              translateZ='10'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              <Input placeholder='Password' type='password' />
            </CardItem>
            <CardItem
              as='p'
              translateZ='10'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              <Input placeholder='Confirm Password' type='password' />
            </CardItem>
          </div>

          <div className='mt-4 w-full'>
            <CardItem translateZ='20' className='w-full'>
              <Button className='w-full'>Signup</Button>
            </CardItem>
            <CardItem
              translateZ='20'
              className='w-full py-8 tracking-widest font-thin text-center text-xs'
            >
              <p>Already have an account?</p>
            </CardItem>
            <Link
              href={{
                pathname: `${routeConstant.LOGIN}`
              }}
            >
              <CardItem translateZ='20' className='w-full'>
                <Button className='w-full'>Login</Button>
              </CardItem>
            </Link>
          </div>
        </form>
      </CardBody>
    </CardContainer>
  )
}
