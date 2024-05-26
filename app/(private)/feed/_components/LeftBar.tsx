import Link from 'next/link'

export default function LeftBar() {
  return (
    <nav className=' flex-col whitespace-nowrap gap-2 tracking-wider text-sm font-normal hidden xl:flex'>
      <Link href={{}}>Main</Link>
      <Link href={{}}>All</Link>
      <Link href={{}}>Featured</Link>
      <Link href={{}}>Threads</Link>
      <Link href={{}}>Open only</Link>
      <Link href={{}}>Solved only</Link>
      <Link href={{}}>Browse tags</Link>
    </nav>
  )
}
