'use client'

import client from '@/libs/graphql-client'
import { ApolloProvider } from '@apollo/client'

type Props = {
  children: React.ReactNode
}

export default function ApolloClientProvider({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
