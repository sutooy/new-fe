'use client'
import client from '@/libs/graphql-client'
import { ApolloProvider } from '@apollo/client'

type Props = {
  children: React.ReactElement
}

export default function DefaultLayout({ children }: Props) {
  return (
    <main>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </main>
  )
}
