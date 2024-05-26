import Feed from './_components/Feed'
import Header from './_components/Header'
import LeftBar from './_components/LeftBar'

export default function Trending() {
  return (
    <div className='flex flex-col gap-y-2 h-full'>
      <Header />
      <div className='h-full flex gap-x-2'>
        <LeftBar />
        <div className='w-full'>
          <Feed />
        </div>
      </div>
    </div>
  )
}
