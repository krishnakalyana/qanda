import Link from 'next/link'

export default function BottomBar() {
  return (
    <nav className='py-4  px-1 w-full flex flex-wrap gap-4 justify-between whitespace-nowrap tracking-wider text-sm font-normal flex-col md:flex-row  '>
      <Link href={{}} className='bg-accent p-2 rounded-md min-w-32 text-center'>
        Main
      </Link>
      <Link href={{}} className='bg-accent p-2 rounded-md min-w-32 text-center'>
        All
      </Link>
      <Link href={{}} className='bg-accent p-2 rounded-md min-w-32 text-center'>
        Featured
      </Link>
      <Link href={{}} className='bg-accent p-2 rounded-md min-w-32 text-center'>
        Open only
      </Link>
      <Link href={{}} className='bg-accent p-2 rounded-md min-w-32 text-center'>
        Solved only
      </Link>
      <Link href={{}} className='bg-accent p-2 rounded-md min-w-32 text-center'>
        Browse tags
      </Link>
    </nav>
  )
}
