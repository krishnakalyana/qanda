'use client'
import UserIcon from '@/assets/icons/User'
import { Button } from '../ui/button'
import ModeToggle from './ThemeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { buttons } from '@/lib/constants/navbutton'
import { useAppSelector } from '@/lib/hooks'

export default function Navbar() {
  const pathname = usePathname()
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const auth: 'private' | 'public' = isLoggedIn ? 'private' : 'public'
  const navClass = 'tracking-widest uppercase'

  return (
    <nav className=' h-full p-2 flex flex-col bg-accent justify-between '>
      <div className='flex flex-col gap-2'>
        {buttons[auth].map((button, index) => {
          return (
            <Link
              key={button.title}
              href={{
                pathname: button.link
              }}
            >
              <Button
                size={'sm'}
                className={cn(
                  navClass,
                  button.link == pathname ? 'text-primary' : ''
                )}
                variant={'ghost'}
              >
                {button.title}
              </Button>
            </Link>
          )
        })}
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
