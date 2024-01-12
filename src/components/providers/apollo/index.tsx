'use client'
import client from '@/libs/graphql-client'
import { ApolloProvider } from '@apollo/client'

type Props = {
  children: React.ReactElement
}

export default function ApolloClientProvider({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
