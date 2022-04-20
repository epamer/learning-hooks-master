import { useContext } from "react";
import { GlobalState, StateContext } from "../contexts";
import { UserState } from "../reducers/userReducer";

function useUserState(): UserState {
  const { state } = useContext<GlobalState>(StateContext);
  return state.user;
}

export default useUserState;
