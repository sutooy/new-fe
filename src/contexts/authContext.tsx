'use client'
import { GetUserQuery } from '@/generated/graphql'
import { createContext, ReactNode, useContext, useState } from 'react'

export type UserState = GetUserQuery | undefined

export type AuthContextType = {
  user: UserState
}
const initialState: UserState = undefined
const AuthContext = createContext<AuthContextType>({ user: initialState })

type Props = { children: ReactNode }

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserState>(initialState)

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
