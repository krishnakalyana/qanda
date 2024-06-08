import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IoCreateOutline } from 'react-icons/io5'
import { IoSearchOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex-1 relative'>
        <Input type='search' placeholder='Got a question?' />
        <Button
          size={'icon'}
          variant={'outline'}
          className='absolute top-0 right-0'
        >
          <IoSearchOutline />
        </Button>
      </div>
      <Button className='' size={'sm'}>
        Create a Fuss <IoCreateOutline className='ml-2 text-xl' />
      </Button>
    </div>
  )
}
