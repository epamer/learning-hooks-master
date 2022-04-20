import React, { useEffect } from "react";

import { GlobalTheme } from "../contexts";
import { useAPIThemes } from "../hooks";

type ThemeItemProps = {
  theme: GlobalTheme;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
};

function ThemeItem({ theme, active, onClick }: ThemeItemProps) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderBottom: active ? "2px solid black" : "none",
        margin: ".5em"
      }}
    >
      <div
        style={{
          borderWidth: ".5em",
          borderStyle: "solid",
          borderTopColor: theme.primaryColor,
          borderLeftColor: theme.primaryColor,
          borderBottomColor: theme.secondaryColor,
          borderRightColor: theme.secondaryColor,
          display: "inline-block"
        }}
      />
    </span>
  );
}

type ChangeThemeProps = {
  theme: GlobalTheme;
  setTheme: React.Dispatch<React.SetStateAction<GlobalTheme>>;
};

function ChangeTheme({ theme, setTheme }: ChangeThemeProps) {
  const [themes, getThemes] = useAPIThemes();

  const { data, isLoading } = themes;

  useEffect(getThemes, []);

  function isActive(t: GlobalTheme) {
    return (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
    );
  }

  return (
    <div>
      Change theme:
      {isLoading && "Loading themes..."}
      {data &&
        data.map((t: GlobalTheme, i: number) => (
          <ThemeItem
            key={`theme-${i}`}
            theme={t}
            active={isActive(t)}
            onClick={() => setTheme(t)}
          />
        ))}
    </div>
  );
}

export default ChangeTheme;
