import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
console.log(process.env.NEXT_PUBLIC_BFF_URL)

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_BFF_URL,
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsIm5hbWUiOiJlbWFpbDkiLCJyb2xlcyI6ImFkbWluIiwiZW1haWwiOiJlbWFpbDkiLCJpYXQiOjE3MDUwMjgwNDUsImV4cCI6MTcwNTA2NDA0NX0.m90XC0tcza3Jw0jJyXb0dJ-lADRCmXgZZXbfPgzGce8',
    },
  }),
})
