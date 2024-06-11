import { Button } from '@/components/ui/button'
import { IoCloudUploadOutline } from 'react-icons/io5'
export interface imagetype {
  src: string
  title: string
}
export default function FussImage() {
  const images: imagetype[] = [{ src: '', title: '' }]
  // const images: imagetype[] = []
  return (
    <div className='w-full'>
      {images.length <= 0 && (
        <div className='grid items-center justify-center w-full h-full border-solid border-primary-foreground border-2 rounded'>
          <Button size={'default'} variant={'ghost'} className='p-10'>
            <IoCloudUploadOutline className='text-5xl text-primary ' />
          </Button>
        </div>
      )}
      <div>some images</div>
    </div>
  )
}
