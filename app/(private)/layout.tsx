'use client'
import { API_PATH } from '@/lib/constants/apiPathConstant'
import instance from '@/middlewares/interceptor'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { routeConstant } from '@/lib/constants/routeConstant'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setIsLoggedIn } from '@/lib/features/auth/authSlice'
export default function PrivateLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter()
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    instance
      .get(`${process.env.NEXT_PUBLIC_API_URL}${API_PATH.isLoggedIn}`)
      .then(res => {
        if (res) dispatch(setIsLoggedIn(true))
      })
      .catch(err => {
        dispatch(setIsLoggedIn(false))
        router.push(routeConstant.LOGIN)
      })
  }, [])
  return <>{children}</>
}
