import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ChatDTO, GeneralResponse, MessageDTO, UserDTO} from "@/store/apiTypes";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/users/'}),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query <GeneralResponse<{users:UserDTO[]}>,
            void>
        ({
            query: () => ({
                url: `/`
            }),
            providesTags: ["Users"]
        }),
    }),
})

export const {useGetUsersQuery} = usersApi
