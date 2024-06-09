'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAppSelector } from '@/lib/hooks'
import { IoCreateOutline } from 'react-icons/io5'
import { IoSearchOutline } from 'react-icons/io5'
// import { AlertDialogDemo } from './CreateFuss'
import { useRouter } from 'next/navigation'
import { routeConstant } from '@/lib/constants/routeConstant'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()
  const { isLoggedIn } = useAppSelector(state => state.auth)

  return (
    <div className='flex gap-2 items-center'>
      <div className='flex-1 relative'>
        <Input type='search' placeholder='Got a question?' />
        <Button
          size={'icon'}
          variant={'outline'}
          className='absolute top-0 right-0'
        >
          <IoSearchOutline />
        </Button>
      </div>
      {isLoggedIn ? (
        <Link href={'/feed/createfuss'}>
          <Button className='' size={'sm'}>
            Create a Fuss <IoCreateOutline className='ml-2 text-xl' />
          </Button>
        </Link>
      ) : (
        <Button
          className=''
          size={'sm'}
          onClick={() => {
            router.push(routeConstant.LOGIN)
          }}
        >
          Login to Create a Fuss <IoCreateOutline className='ml-2 text-xl' />
        </Button>
      )}
    </div>
  )
}
