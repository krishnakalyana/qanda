import { HotRightNow } from './HotRightNow'

export default function Feed() {
  // const heading = `tracking-[0.5em] `
  const heading = ` `
  return (
    <div className='h-full w-full '>
      <div className='w-full overflow-auto'>
        Hot right now
        <HotRightNow />
      </div>
      <div> Latest solved </div>
      <div> Newest questions</div>
    </div>
  )
}
