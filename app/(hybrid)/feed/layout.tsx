'use client'
import { API_PATH } from '@/lib/constants/apiPathConstant'
import { setIsLoggedIn } from '@/lib/features/auth/authSlice'
import { useAppDispatch } from '@/lib/hooks'
import instance from '@/middlewares/interceptor'
import { useEffect } from 'react'

export default function HybridLayout({
  children,
  createfuss
}: {
  children: React.ReactNode
  createfuss: React.ReactNode
}) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    instance
      .get(`${process.env.NEXT_PUBLIC_API_URL}${API_PATH.isLoggedIn}`)
      .then(res => {
        if (res) dispatch(setIsLoggedIn(true))
      })
      .catch(err => {
        dispatch(setIsLoggedIn(false))
      })
  }, [])
  return (
    <>
      {children}
      {createfuss}
    </>
  )
}
