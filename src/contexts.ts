import React, { Dispatch } from "react";

import { AppAction, AppState } from "./reducers/appReducer";

export type GlobalTheme = {
  primaryColor: string;
  secondaryColor: string;
};

export const ThemeContext = React.createContext<GlobalTheme>({
  primaryColor: "deepskyblue",
  secondaryColor: "deeppink"
});

export type GlobalState = {
  state: AppState;
  dispatch: Dispatch<AppAction>;
};

export const StateContext = React.createContext<GlobalState>({
  state: {
    user: "",
    posts: [],
    error: ""
  },
  dispatch: () => {}
});
