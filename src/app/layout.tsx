import { ClientWrapperLayout } from '@/components/layout/client-wrapper'
import ApploClientProvider from '@/contexts/apolloContext'
import { getTranslation } from '@/i18n'
import {
  DEFAULT_NS,
  KEY_PREFIX_OPTIONS,
  LANGUAGE_OPTIONS,
} from '@/i18n/settings'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Inter } from 'next/font/google'
import { Style } from './layout.css'

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
      <body className={`${inter.className} ${Style.body}`}>
        <AppRouterCacheProvider>
          <ApploClientProvider>
            <ClientWrapperLayout>{children}</ClientWrapperLayout>
          </ApploClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
