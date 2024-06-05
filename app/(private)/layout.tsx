'use client'
import { API_PATH } from '@/lib/constants/apiPathConstant'
import instance from '@/middlewares/interceptor'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { routeConstant } from '@/lib/constants/routeConstant'
export default function PrivateLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter()
  const isLoggedIn = useRef(false)
  useEffect(() => {
    instance
      .get(`${process.env.NEXT_PUBLIC_API_URL}${API_PATH.isLoggedIn}`)
      .then(res => {
        isLoggedIn.current = true
      })
      .catch(err => {
        isLoggedIn.current = false
        router.push(routeConstant.LOGIN)
      })
  }, [isLoggedIn])
  return <>{children}</>
}
