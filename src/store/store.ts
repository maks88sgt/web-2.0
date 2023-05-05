import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {authApi} from "@/store/authApi";
import {auth} from "@/store/auth/authReducer";
import {chatsApi} from "@/store/chatsApi";
import {chat} from "@/store/chats/chatReducer";
import {usersApi} from "@/store/usersApi";

const reducer = combineReducers({
    auth: auth.reducer,
    chat: chat.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
})


export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, chatsApi.middleware, usersApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
