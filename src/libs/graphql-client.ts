import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
console.log(process.env.NEXT_PUBLIC_BFF_URL)

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_BFF_URL,
    headers: {
      Authorization: 'dummy',
    },
  }),
})
