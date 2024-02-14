import { Namespace } from 'i18next'
import { UseTranslationOptions } from 'react-i18next'

// prefixOptions
export const KEY_PREFIX_OPTIONS = {
  metadata: 'metadata',
} as const
type KeyPrefix = (typeof KEY_PREFIX_OPTIONS)[keyof typeof KEY_PREFIX_OPTIONS]
export interface PrefixOptions extends UseTranslationOptions<KeyPrefix> {
  keyPrefix?: KeyPrefix
  defaultValue?: string
}

// language
const LANGUAGE_JAPANESE = 'ja' as const
const LANGUAGE_ENGLISH = 'en' as const

export const LANGUAGE_OPTIONS = {
  JAPANESE: LANGUAGE_JAPANESE,
  ENGLISH: LANGUAGE_ENGLISH,
} as const

export type Language = (typeof LANGUAGE_OPTIONS)[keyof typeof LANGUAGE_OPTIONS]

const FALLBACK_LANGUAGE = LANGUAGE_OPTIONS.ENGLISH

// namespace
export const NAMESPACE_OPTIONS = {
  common: 'common',
  login: 'login',
  dashboard: 'dashboard',
} as const
export const DEFAULT_NS = NAMESPACE_OPTIONS.common

export const getOptions = (ns: Namespace = DEFAULT_NS) => {
  return {
    debug: true,
    supportedLngs: Object.values(LANGUAGE_OPTIONS),
    fallbackLng: FALLBACK_LANGUAGE,
    fallbackNS: DEFAULT_NS,
    ns,
    backend: {
      loadPath: '/languages/{{lng}}/{{ns}}.json',
    },
  }
}
