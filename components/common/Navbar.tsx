'use client'
import UserIcon from '@/assets/icons/User'
import { Button } from '../ui/button'
import ModeToggle from './ThemeToggle'
import Link from 'next/link'
import { routeConstant } from '@/lib/constants/routeConstant'

export default function Navbar() {
  return (
    <nav className=' h-full p-2 flex flex-col bg-accent justify-between '>
      <div className='flex flex-col gap-2'>
        <Link
          href={{
            pathname: `${routeConstant.HOME}`
          }}
        >
          <Button
            size={'sm'}
            className='tracking-widest uppercase text-primary'
            variant={'ghost'}
          >
            Home
          </Button>
        </Link>
        <Link
          href={{
            pathname: `${routeConstant.FEED}`
          }}
        >
          <Button
            size={'sm'}
            className='tracking-widest uppercase'
            variant={'ghost'}
          >
            Feed
          </Button>
        </Link>
        <Link
          href={{
            pathname: `${routeConstant.PROFILE}`
          }}
        >
          <Button
            size={'sm'}
            className='tracking-widest uppercase'
            variant={'ghost'}
          >
            Profile
          </Button>
        </Link>
        <Link
          href={{
            pathname: `${routeConstant.REGISTER}`
          }}
        >
          <Button
            size={'sm'}
            className='tracking-widest uppercase'
            variant={'ghost'}
          >
            Register
          </Button>
        </Link>
        <Link
          href={{
            pathname: `${routeConstant.LOGIN}`
          }}
        >
          <Button
            size={'sm'}
            className='tracking-widest uppercase'
            variant={'ghost'}
          >
            Login
          </Button>
        </Link>
      </div>
      <div className=' flex flex-col   gap-2'>
        <Button size={'sm'} variant={'link'}>
          <UserIcon />
        </Button>
        <ModeToggle />
      </div>
    </nav>
  )
}
