import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import Intro from './_homeComponents/Intro'
import TrendingQuestions from './_homeComponents/TrendingQuestions'
import { CardContainer } from '@/components/ui/3d-card'

export default function Home() {
  const words = [
    {
      text: 'Got'
    },
    {
      text: 'a '
    },
    { text: '    ' },
    {
      text: '  Question ?',
      className: 'text-primary tracking-[1rem]'
    }
  ]
  return (
    <main className=' h-full pb-8 grid grid-cols-1 items-center lg:grid-cols-2 md:mb-0'>
      <div>
        <CardContainer className='inter-var flex flex-col'>
          <TypewriterEffect words={words} className='' />
          <Intro />
        </CardContainer>
      </div>
      <TrendingQuestions />
    </main>
  )
}
