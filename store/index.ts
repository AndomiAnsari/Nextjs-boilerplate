import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./reducer/slice"; // Adjust the path to your slice reducer
import sessionReducer from "./reducer/session";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: SliceReducer,
    session: sessionReducer,
  },
});

export const { dispatch, getState } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;