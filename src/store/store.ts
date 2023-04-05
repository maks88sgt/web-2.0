import { configureStore } from '@reduxjs/toolkit'
import {authApi} from "@/store/authApi";

export const store = configureStore({
        reducer: {
            [authApi.reducerPath]: authApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware),
    });


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
