'use client'
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
import { buttons } from '@/lib/constants/navbutton'
import { usePathname } from 'next/navigation'
export default function MobileNav() {
  const pathname = usePathname()
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
            {buttons.map((button, index) => {
              return (
                <Link
                  key={button.title}
                  href={{
                    pathname: button.link
                  }}
                >
                  <DropdownMenuItem
                    className={pathname == button.link ? 'text-primary' : ''}
                  >
                    {button.title}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
