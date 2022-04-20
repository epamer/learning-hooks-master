import { useContext } from "react";
import { GlobalTheme, ThemeContext } from "../contexts";

function useTheme(): GlobalTheme {
  return useContext<GlobalTheme>(ThemeContext);
}

export default useTheme;
