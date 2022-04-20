import React, { useEffect, useReducer, useState } from "react";
import { Router, View } from "react-navi";
import { mount, route } from "navi";

import appReducer from "./reducers/appReducer";
import { GlobalTheme, ThemeContext, StateContext } from "./contexts";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import FooterBar from "./pages/FooterBar";

const routes = mount({
  "/": route({ view: <HomePage /> }),
  "/view/:id": route(req => {
    return { view: <PostPage id={req.params.id} /> };
  })
});

function App() {
  const [theme, setTheme] = useState<GlobalTheme>({
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
    error: ""
  });

  const { user } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = `React Hooks Blog`;
    }
  }, [user]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <Router routes={routes}>
          <section className="small-container padding-top">
            <HeaderBar setTheme={setTheme} />
            <hr />
            <View />
            <FooterBar />
          </section>
        </Router>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
