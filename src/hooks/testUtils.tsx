import React, { ReactNode, useReducer } from "react";

import { StateContext, ThemeContext } from "../contexts";
import appReducer from "../reducers/appReducer";

type ContextWrapperProps = {
  children?: ReactNode;
};

export function ThemeContextWrapper({ children }: ContextWrapperProps) {
  return (
    <ThemeContext.Provider
      value={{
        primaryColor: "deepskyblue",
        secondaryColor: "coral"
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function StateContextWrapper({ children }: ContextWrapperProps) {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
    error: ""
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
