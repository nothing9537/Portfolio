import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../reducers/themeReducer.'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})