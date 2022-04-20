import { Dispatch, useContext } from "react";
import { StateContext } from "../contexts";
import { AppAction } from "../reducers/appReducer";

function useDispatch(context = StateContext): Dispatch<AppAction> {
  const { dispatch } = useContext(context);
  return dispatch;
}

export default useDispatch;
