// サーバーコンポーネント用設定ファイル
import { createInstance, Namespace } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions, Language, PrefixOptions } from './settings'

// TODO: LanguageDetectorが効いていない
const initI18next = async (ns: Namespace) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        // NOTE: 型定義が提供されてない ^ any定義による影響の小ささから、一旦型定義は後回しにする
        (language: any, namespace: any) =>
          import(`./languages/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(ns))
  return i18nInstance
}

/**
 * @description server component用の翻訳データ取得関数
 */
export const getTranslation = async (
  lng: Language,
  ns: Namespace,
  options: PrefixOptions = {}
) => {
  const i18nextInstance = await initI18next(ns)
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  }
}
