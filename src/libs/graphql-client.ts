import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_BFF_URL,
    headers: {
      // TODO: authorizationをSet
      Authorization: 'dummy',
    },
  }),
})
