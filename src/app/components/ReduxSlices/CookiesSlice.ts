import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Cookies from "js-cookie";

import { AppState } from "../../store";

const projectName = "boilerplate";

export const coockiesNames = {
  darkMode: `${projectName}Mode`,
  token: `${projectName}Token`,
  currentUser: `${projectName}User`,
  stores: `${projectName}Stores`,
};

/*
interface TToken {
  access: string;
  refresh: string;
}
interface currentUser {
  customer_id: string;
  email: string;
  full_name: string;
  id: number;
  phone: string;
  photo: string | null;
  type: number;
  username: string;
}
*/
export interface CookieState {
  darkMode: boolean;
  /*
  token: TToken | undefined;
  currentUser: currentUser | undefined;
  innerSize: number[];
  */
}


function createDarkModeCookie(): boolean {
  Cookies.set(coockiesNames.darkMode, `${false}`);
  return false;
}

function initCookies(type: string): any {
  switch (type) {
    case coockiesNames.darkMode:
      return Cookies.get(coockiesNames.darkMode)
        ? Cookies.get(coockiesNames.darkMode)?.toString() === "true"
          ? true
          : false
        : createDarkModeCookie();

    default:
      break;
  }
}

const initialState: CookieState = {
  darkMode: initCookies(coockiesNames.darkMode),
  
  /*
  token: initCookies(coockiesNames.token),
  currentUser: initCookies(coockiesNames.currentUser),
  innerSize: [window.innerWidth, window.innerHeight],
  */
};

export const CookiesSlice = createSlice({
  name: "Cookies",
  initialState,

  reducers: {
    handleMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      Cookies.set(coockiesNames.darkMode, `${action.payload}`);
    },
    /*
    handleCurrentUser: (
      state,
      action: PayloadAction<currentUser | undefined>
    ) => {
      state.currentUser = action.payload;
      action.payload !== undefined &&
        Cookies.set(coockiesNames.currentUser, JSON.stringify(action.payload));
    },
    handleEraseCookies: (): void => {
      Cookies.remove(coockiesNames.token);
      Cookies.remove(coockiesNames.currentUser);
      Cookies.remove(coockiesNames.stores);
    },
    handleInnerSize: (state, action: PayloadAction<number[]>): void => {
      state.innerSize = action.payload;
    },
    handleToken: (state, action: PayloadAction<TToken | undefined>): void => {
      state.token = action.payload;
      action.payload !== undefined &&
        Cookies.set(coockiesNames.token, JSON.stringify(action.payload));
    },
    */
  },
});

export const DarkMode = (state: AppState) => state.cookies.darkMode;
//export const Token = (state: AppState) => state.cookies.token;
//export const selectUser = (state: AppState) => state.cookies.currentUser;
//export const InnerSize = (state: AppState) => state.cookies.innerSize;

export const {
  handleMode,
  //handleCurrentUser,
  //handleEraseCookies,
  //handleInnerSize,
  //handleToken,
} = CookiesSlice.actions;

export default CookiesSlice.reducer;
