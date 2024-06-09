'use client'
import { useRouter } from 'next/navigation'
import { Card } from '../ui/card'

export default function InterceptorModal({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const handleClose = () => router.back()

  return (
    <div className='fixed inset-0 bg-zinc-900/20 z-10'>
      <div className='flex items-center h-full max-w-6xl mx-auto'>
        <Card className=' bg-white w-full h-4/5 p-2 overflow-auto'>
          {children}
        </Card>
      </div>
    </div>
  )
}
