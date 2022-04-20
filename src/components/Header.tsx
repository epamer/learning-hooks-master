import React from "react";

import { useTheme } from "../hooks";

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  const { primaryColor } = useTheme();

  return <h1 style={{ color: primaryColor }}>{text}</h1>;
};

export default Header;
