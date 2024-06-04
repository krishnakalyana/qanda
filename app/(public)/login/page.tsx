'use client'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { routeConstant } from '@/lib/constants/routeConstant'
import axios from 'axios'
import Link from 'next/link'

export default function Login() {
  const handleLogin = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault()
    axios
      .post(
        'http://localhost:8080/auth/login',
        {
          email: 'john@gmail.com',
          password: 'User@1234'
        },
        {
          withCredentials: true // This ensures cookies are included in the request
        }
      )
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const getusers = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault()
    axios
      .get(`http://localhost:8080/users`, {
        withCredentials: true // Include cookies in this request
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className='grid content-center gap-4 h-full'>
      <CardContainer className='inter-var'>
        <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
          <CardItem
            translateZ='20'
            className='text-xl tracking-widest font-bold text-neutral-600 dark:text-white'
          >
            Welcome back
          </CardItem>
          <form>
            {/* Inputs */}
            <div className='flex flex-col gap-2 mt-2 '>
              <CardItem as='p' translateZ='10' className=' w-full'>
                <Input placeholder='Username or Email' />
              </CardItem>

              <CardItem as='p' translateZ='10' className=' w-full'>
                <Input placeholder='Password' type='password' />
              </CardItem>
            </div>

            <div className='mt-4 w-full'>
              <CardItem translateZ='20' className='w-full'>
                <Button className='w-full' onClick={handleLogin}>
                  Login
                </Button>
              </CardItem>

              <CardItem
                translateZ='20'
                className='w-full py-8 tracking-widest font-thin text-center text-xs'
              >
                <p>Do not have an account?</p>
              </CardItem>
              {/* <Link
                href={{
                  pathname: `${routeConstant.REGISTER}`
                }} */}
              {/* > */}
              <CardItem translateZ='20' className='w-full'>
                <Button className='w-full' onClick={getusers}>
                  Signup
                </Button>
              </CardItem>
              {/* </Link> */}
            </div>
          </form>
        </CardBody>
      </CardContainer>
    </div>
  )
}
