import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { RxHamburgerMenu } from 'react-icons/rx'
import ModeToggle from './ThemeToggle'
import Link from 'next/link'
import { routeConstant } from '@/lib/constants/routeConstant'
export default function MobileNav() {
  return (
    <div className='flex bg-accent justify-between p-2'>
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size={'icon'}>
            <RxHamburgerMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>QANDA</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link
              href={{
                pathname: `${routeConstant.HOME}`
              }}
            >
              <DropdownMenuItem>Home</DropdownMenuItem>
            </Link>
            <Link
              href={{
                pathname: `${routeConstant.FEED}`
              }}
            >
              <DropdownMenuItem>Feed</DropdownMenuItem>
            </Link>
            <Link
              href={{
                pathname: `${routeConstant.PROFILE}`
              }}
            >
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link
              href={{
                pathname: `${routeConstant.REGISTER}`
              }}
            >
              <DropdownMenuItem>Register</DropdownMenuItem>
            </Link>
            <Link
              href={{
                pathname: `${routeConstant.LOGIN}`
              }}
            >
              <DropdownMenuItem>Login</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
