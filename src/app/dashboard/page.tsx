'use client'
import DefaultLayout from '@/components/layout/default'
import { Dashboard } from '@/features/dashboard/components/index'

export default function Page() {
  return (
    <DefaultLayout>
      <Dashboard></Dashboard>
    </DefaultLayout>
  )
}
