import { getTranslation } from '@/i18n';
import {
  DEFAULT_NS,
  KEY_PREFIX_OPTIONS,
  LANGUAGE_OPTIONS,
} from '@/i18n/settings';
import { Button, TextField } from "@mui/material";

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
  return (
    <div>
      <TextField label="メールアドレス" />
      <TextField label="パスワード" />
      <Button variant="contained">ログイン</Button>
    </div>
  )
}
