/// <reference types="react-scripts" />

declare module "react-hookedup" {
  import { ChangeEventHandler } from "react";

  export function useInput(
    initial: any
  ): {
    value: any;
    bindToInput: {
      value: any;
      onChange: ChangeEventHandler;
    };
    clear: () => void;
  };
}
