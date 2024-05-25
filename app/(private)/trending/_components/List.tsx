import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
export default function List() {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      orientation='vertical'
      className='w-full '
    >
      <CarouselContent className='-mt-1 h-[70vh]'>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className='pt-1 basis-2/4 md:basis-1/4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex items-center justify-center p-6'>
                  <span className='text-3xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
