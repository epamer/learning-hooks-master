import { useState, useEffect, useCallback } from "react";
import useUndo from "use-undo";
import { useDebouncedCallback } from "use-debounce";

type useDebouncedUndoReturnType = [
  string,
  (value: string) => void,
  {
    reset: (newPresent: string) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
  }
];

function useDebouncedUndo(timeout = 400): useDebouncedUndoReturnType {
  const [content, setInput] = useState<string>("");
  const [undoContent, { set: setContent, ...undoRest }] = useUndo<string>("");

  const [setDebounce, cancelDebounce] = useDebouncedCallback(value => {
    setContent(value);
  }, timeout);

  useEffect(() => {
    cancelDebounce();
    setInput(undoContent.present);
  }, [cancelDebounce, undoContent]);

  const setter = useCallback(
    function setterFn(value) {
      setInput(value);
      setDebounce(value);
    },
    [setInput, setDebounce]
  );

  return [content, setter, undoRest];
}

export default useDebouncedUndo;
