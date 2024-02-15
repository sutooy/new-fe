import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import Cookies from 'js-cookie'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_BFF_URL,
    headers: {
      Authorization: `Bearer ${Cookies.get('token') || 'dummy'}`,
    },
  }),
})
