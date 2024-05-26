import { cn } from '@/lib/utils'
import { HotRightNow } from './HotRightNow'

export default function Feed() {
  const heading = `tracking-[0.5em] mb-4 `
  return (
    <div className='flex flex-col gap-8'>
      <div className='w-full overflow-auto'>
        <h1 className={cn(heading)}>Hot Right Now</h1>
        <HotRightNow />
      </div>
      <div className='w-full overflow-auto mt-4'>
        <h1 className={cn(heading)}>Latest solved</h1>
        <HotRightNow />
      </div>
      <div className='w-full overflow-auto mt-4'>
        <h1 className={cn(heading)}>Newest questions</h1>
        <HotRightNow />
      </div>
    </div>
  )
}
