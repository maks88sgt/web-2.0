import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ChatDTO, GeneralResponse, MessageDTO} from "@/store/apiTypes";

export const chatsApi = createApi({
    reducerPath: 'chatsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/chats/'}),
    tagTypes: ["Chats"],
    endpoints: (builder) => ({
        getUserChats: builder.query <GeneralResponse<ChatDTO>,
            {
                userId: string
            }>
        ({
            query: ({userId}) => ({
                url: `/${userId}`
            }),
            providesTags: ["Chats"]
        }),
        createChat: builder.mutation <GeneralResponse<ChatDTO>,
            {
                chatname: string;
                participants: string[];
                owner: string
            }>
        ({
            query: ({chatname, participants, owner}) => ({
                url: `/`,
                method: "POST",
                body: {
                    chatname, participants, owner
                }
            }),
            invalidatesTags: ["Chats"]
        }),
        deleteChat: builder.mutation <GeneralResponse,
            {
                chatId: string;
                owner: string
            }>
        ({
            query: ({chatId, owner}) => ({
                url: `/${chatId}`,
                method: "DELETE",
                body: {owner}
            }),
        }),
        updateChat: builder.mutation <GeneralResponse<ChatDTO>,
            {
                id: string;
                chatname: string;
                participants: string[];
                owner: string;
                messages: MessageDTO
            }>
        ({
            query: ({chatname, participants, owner, id, messages}) => ({
                url: `/${id}`,
                method: "PUT",
                body: {
                    chatname, participants, owner, messages
                }
            }),
        }),
    }),
})

export const {useGetUserChatsQuery, useCreateChatMutation, useDeleteChatMutation, useUpdateChatMutation} = chatsApi
