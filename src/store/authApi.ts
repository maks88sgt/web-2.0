import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/auth/'}),
    endpoints: (builder) => ({
        singup: builder.mutation<{ message: string }, {
            username: string;
            nickname: string;
            email: string;
            password: string;
        }>({
            query: (userData) => ({
                url: "/signup", method: "POST", body: userData
            }),
        }),
        singin: builder.mutation<{ message: string }, {
            username: string;
            password: string;
        }>({
            query: (userData) => ({
                url: "/signin", method: "POST", body: userData
            }),
        }),
    }),
})

export const {useSingupMutation} = authApi
