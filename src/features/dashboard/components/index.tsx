import { GetUserDocument, GetUserQuery } from '@/generated/graphql'
import { useQuery } from '@apollo/client'

export const Dashboard = () => {
  const { loading, error, data } = useQuery<GetUserQuery>(GetUserDocument, {
    variables: {
      userId: 16,
    },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! {error.message}</p>
  if (!data?.user) return
  return <>{data.user.name}</>
}
