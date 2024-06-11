'use client'
import { API_PATH } from '@/lib/constants/apiPathConstant'
import { setIsLoggedIn } from '@/lib/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import instance from '@/middlewares/interceptor'
import { useEffect } from 'react'

export default function HybridLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const dispatch = useAppDispatch()
  const { isLoggedIn } = useAppSelector(state => state.auth)
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
      {modal}
    </>
  )
}
