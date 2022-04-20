import { renderHook } from "@testing-library/react-hooks";

import { StateContextWrapper } from "./testUtils";
import useDispatch from "./useDispatch";

describe("useDispatch hook", () => {
  test("should use dispatch", () => {
    const { result } = renderHook(() => useDispatch(), {
      wrapper: StateContextWrapper
    });

    expect(typeof result.current).toBe("function");
  });
});
