import { ClientWrapperLayout } from '@/components/layout/client-wrapper'
import { getTranslation } from '@/i18n'
import {
  DEFAULT_NS,
  KEY_PREFIX_OPTIONS,
  LANGUAGE_OPTIONS,
} from '@/i18n/settings'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// metadataを多言語対応
export async function generateMetadata({
  params: { lng = LANGUAGE_OPTIONS.ENGLISH },
}) {
  const { t, i18n } = await getTranslation(lng, DEFAULT_NS, {
    keyPrefix: KEY_PREFIX_OPTIONS.metadata,
  })
  return {
    title: t('title'),
    description: t('description'),
  }
}

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
