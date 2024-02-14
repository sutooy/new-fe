'use client'

import { ClientWrapperLayout } from '@/components/layout/client-wrapper'
import { H1Header } from '@/components/shared/h1-header'
import { GetUserDocument, GetUserQuery } from '@/generated/graphql'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import { useQuery } from '@apollo/client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export const Dashboard = () => {
  const { loading, error, data } = useQuery<GetUserQuery>(GetUserDocument, {
    variables: {
      userId: 16,
    },
  })

  const { t: dashboardT } = useTranslation(NAMESPACE_OPTIONS.dashboard)
  const router = useRouter()
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error! {error.message}</p>
  // if (!data?.user) return
  return (
    <>
      <ClientWrapperLayout>
        <H1Header
          title="タイトル"
          subText="subテキストsubテキストsubテキストsubテキストsubテキストsubテキストsubテキストsubテキストsubテキストsubテキスト"
        />
        {/* {data.user.name} */}
        <Button
          onClick={() => {
            router.push('/')
          }}
        >
          {dashboardT('title')}
        </Button>
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
        ダッシュボード
        <br />
      </ClientWrapperLayout>
    </>
  )
}
