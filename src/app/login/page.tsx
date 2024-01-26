import { Login } from '@/features/login/components/index'
import { getTranslation } from '@/i18n'
import {
  DEFAULT_NS,
  KEY_PREFIX_OPTIONS,
  LANGUAGE_OPTIONS,
} from '@/i18n/settings'

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

export default function Page() {
  return <Login></Login>
}
