import { Login } from '@/features/login/components/index'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signin',
  description: 'Login app',
}

export default function Page() {
  return <Login></Login>
}
