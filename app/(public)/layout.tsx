'use client'
import { API_PATH } from '@/lib/constants/apiPathConstant'
import instance from '@/middlewares/interceptor'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { routeConstant } from '@/lib/constants/routeConstant'
import { useAppDispatch } from '@/lib/hooks'
import { setIsLoggedIn } from '@/lib/features/auth/authSlice'
export default function PublicRoute({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    instance
      .get(`${process.env.NEXT_PUBLIC_API_URL}${API_PATH.isLoggedIn}`)
      .then(res => {
        if (res) dispatch(setIsLoggedIn(true))
        router.push(routeConstant.HOME)
      })
      .catch(err => {
        dispatch(setIsLoggedIn(false))
      })
  }, [])
  return <>{children}</>
}
