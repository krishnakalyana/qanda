import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import FussImage from './FussImage'
interface Tags {
  id: string
  title: string
}
export default function CreateFuss() {
  const tagsList: Tags[] = [
    { id: '3ebsGJ', title: '#javascript' },
    { id: '3ebsGK', title: '#react' },
    { id: '3ebsss', title: '#css' },
    { id: '3ebsBs', title: '#html5' },
    { id: '3ebYXs', title: '#nextjs' }
  ]
  return (
    <>
      <h1 className='text-sm text-center font-medium tracking-widest pb-2'>
        Do you really want to create a fuss?
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-y-8'>
          <div className='flex flex-col gap-y-4 max-h-60'>
            <Input type='text' placeholder='Whats your problem?' />
            <Textarea placeholder='Explain in detail' />
          </div>
          <Separator className='w-full' />
          <div className='flex flex-col gap-y-4'>
            <Input type='text' placeholder='Add Tags' />
            <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
              {tagsList.map((tag, index) => {
                return (
                  <Badge variant='secondary' key={tag.id}>
                    {tag.title}
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>
        <FussImage />
      </div>
    </>
  )
}
