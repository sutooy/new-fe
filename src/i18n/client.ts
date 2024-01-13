// クライアントーコンポーネント用設定ファイル
'use client'

import i18next, { Namespace } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'
import { PrefixOptions, getOptions } from './settings'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: any, namespace: any) =>
        import(`./languages/${language}/${namespace}.json`)
    )
  )
  .init(getOptions())

/**
 * @description client component用の翻訳hooks
 */
export const useTranslation = (ns?: Namespace, options?: PrefixOptions) => {
  return useTranslationOrg(ns, options)
}
