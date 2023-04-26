import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {authApi} from "@/store/authApi";
import {auth} from "@/store/auth/authReducer";
import {chatsApi} from "@/store/chatsApi";

const reducer = combineReducers({
    auth: auth.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
})


export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, chatsApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
