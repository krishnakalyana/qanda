import Image from 'next/image'
import userImage from '@/assets/images/user.png'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Button } from '@/components/ui/button'
export default function Profile() {
  const skills = ['Reactjs', 'Nodejs', 'Nextjs']
  const interests = ['Frontend', 'System Design', 'Photography', 'Tech']
  return (
    <div className='grid content-center gap-4 h-full'>
      <CardContainer>
        <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
          <div className='flex justify-between flex-col-reverse flex-wrap-reverse sm:flex-row'>
            {/* Details */}
            <div className='flex-1 flex flex-col gap-8 w-full'>
              <CardItem
                translateZ='50'
                className='text-xl tracking-widest font-bold uppercase text-neutral-600 dark:text-white'
              >
                <h2 className='text-primary'>John Doe</h2>
                <h4 className='text-xs font-light'>Senior Software Engineer</h4>
              </CardItem>
              <CardItem translateZ='50' className=''>
                <h6 className='text-sm font-normal'>
                  Questions asked : <span className='font-semibold'>45 </span>
                </h6>
                <h6 className='text-sm font-normal'>
                  Questions Answerd : <span className='font-semibold'>5 </span>
                </h6>
              </CardItem>
              <CardItem translateZ='50' className=''>
                <h6 className='text-sm font-normal'>
                  Skills :{' '}
                  <span className='font-semibold'>
                    {skills.toString().split(',').join(', ')}
                  </span>
                </h6>
              </CardItem>
              <CardItem translateZ='50' className=''>
                <h6 className='text-sm font-normal'>
                  Interests :{' '}
                  <span className='font-semibold'>
                    {interests.toString().split(',').join(', ')}
                  </span>
                </h6>
              </CardItem>
            </div>
            {/* Image */}
            <div className='flex-shrink-0 flex flex-col justify-between gap-4 items-center'>
              <CardItem translateZ='100' className='w-full mt-4'>
                <Image
                  src={userImage}
                  height='100'
                  width='100'
                  className='h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>
              <CardItem>
                {' '}
                <Button
                  size={'sm'}
                  className='tracking-wider'
                  variant={'outline'}
                >
                  Edit Profile
                </Button>
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
