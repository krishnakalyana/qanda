import BottomBar from './_components/BottomBar'
import Feed from './_components/Feed'
import Header from './_components/Header'

export default function Trending() {
  return (
    <div className='flex flex-col gap-y-2 '>
      <div id='' className='flex flex-col gap-4  top-0 bg'>
        <Header />
        <BottomBar />
      </div>
      <div className=' w-full overflow-auto '>
        <Feed />
      </div>
    </div>
  )
}
