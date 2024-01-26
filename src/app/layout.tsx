import { ClientWrapperLayout } from '@/components/layout/client-wrapper'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapperLayout>{children}</ClientWrapperLayout>
      </body>
    </html>
  )
}
