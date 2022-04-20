import React, { useContext } from "react";
import useWindowSize from "@rehooks/window-size";

import { GlobalState, GlobalTheme } from "../contexts";
import Header from "../components/Header";
import ChangeTheme from "../components/ChangeTheme";
import Spinner from "../components/Spinner";
import UserBar from "../user/UserBar";
import CreatePost from "../post/CreatePost";
import { ThemeContext, StateContext } from "../contexts";

type HeaderBarProps = {
  setTheme: React.Dispatch<React.SetStateAction<GlobalTheme>>;
};

function HeaderBar({ setTheme }: HeaderBarProps) {
  const theme = useContext<GlobalTheme>(ThemeContext);

  const { state } = useContext<GlobalState>(StateContext);
  const { user } = state;

  const { innerWidth } = useWindowSize();

  const mobilePhone = innerWidth < 640;

  return (
    <div>
      <Header text="React Hooks Blog" />
      {!mobilePhone && <ChangeTheme theme={theme} setTheme={setTheme} />}
      {!mobilePhone && (
        <React.Suspense fallback={<Spinner />}>
          <UserBar />
        </React.Suspense>
      )}
      {!mobilePhone && <br />}
      {user && <CreatePost />}
    </div>
  );
}

export default HeaderBar;
