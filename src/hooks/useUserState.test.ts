import { act, renderHook } from "@testing-library/react-hooks";

import { StateContextWrapper } from "./testUtils";
import useDispatch from "./useDispatch";
import useUserState from "./useUserState";
import { UserActionTypes } from "../reducers/userReducer";

describe("useUserState hook", () => {
  test("should use user state", () => {
    const { result } = renderHook(() => useUserState(), {
      wrapper: StateContextWrapper
    });

    expect(result.current).toBe("");
  });

  test("should update user state on login", () => {
    const { result } = renderHook(
      () => ({ state: useUserState(), dispatch: useDispatch() }),
      { wrapper: StateContextWrapper }
    );

    act(() =>
      result.current.dispatch({
        type: UserActionTypes.LOGIN,
        username: "Test User"
      })
    );

    expect(result.current.state).toBe("Test User");
  });

  test("should update user state on register", () => {
    const { result } = renderHook(
      () => ({ state: useUserState(), dispatch: useDispatch() }),
      { wrapper: StateContextWrapper }
    );

    act(() =>
      result.current.dispatch({
        type: UserActionTypes.REGISTER,
        username: "Test User"
      })
    );

    expect(result.current.state).toBe("Test User");
  });
});
