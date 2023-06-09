import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './features/weatherSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";

export const store = configureStore({
    reducer : {
        weatherReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector