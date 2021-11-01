import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "./components/ReduxSlices/counterSlice";
import CookiesSlice from "./components/ReduxSlices/CookiesSlice";

export function makeStore() {
  return configureStore({
    reducer: { 
      cookies: CookiesSlice,
      counter: counterReducer 
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
