import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { IoCreateOutline } from 'react-icons/io5'
interface Tags {
  id: string
  title: string
}
export function AlertDialogDemo() {
  const tagsList: Tags[] = [
    { id: '3ebsGJ', title: '#javascript' },
    { id: '3ebsGK', title: '#react' }
  ]
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='' size={'sm'}>
          Create a Fuss <IoCreateOutline className='ml-2 text-xl' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='tracking-[0.3em] mb-4 font-light '>
            Why so serious?
          </AlertDialogTitle>
          <AlertDialogDescription className='flex flex-col gap-y-8'>
            <div className='flex flex-col gap-y-4'>
              <Input type='text' placeholder='Whats your problem?' />
              <Textarea placeholder='Explain in detail ' />
            </div>
            <Separator className='w-full' />
            <div className='flex flex-col gap-y-4'>
              <Input type='text' placeholder='Add Tags' />
              {tagsList.map((tag, index) => {
                return <div key={tag.id}>{tag.title}</div>
              })}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Nevermind</AlertDialogCancel>
          <AlertDialogAction>Create fuss</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
