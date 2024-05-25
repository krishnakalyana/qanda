import { ReactNode } from 'react'
import Navbar from '../Navbar'
import MobileNav from '../MobileNav'

export default function MainLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className='flex h-full flex-col md:flex-row'>
      <div className='block md:hidden'>
        <MobileNav />
      </div>
      <div className='flex-1 overflow-auto p-4'>{children}</div>
      <div className='hidden md:block'>
        <Navbar />
      </div>
    </div>
  )
}
