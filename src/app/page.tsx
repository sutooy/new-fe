'use client'
import DefaultLayout from '@/components/layout/default'
import { Login } from '@/features/login/components/index'

export default function Page() {
  return (
    <DefaultLayout>
      <Login></Login>
    </DefaultLayout>
  )
}
