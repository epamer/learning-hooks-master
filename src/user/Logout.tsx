import React from "react";

import { UserActionTypes } from "../reducers/userReducer";
import { useDispatch, useUserState } from "../hooks";

function Logout() {
  const dispatch = useDispatch();
  const user = useUserState();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: UserActionTypes.LOGOUT });
      }}
    >
      Logged in as <b>{user}</b>
      &nbsp; &nbsp;
      <input type="submit" value="Logout" />
    </form>
  );
}

export default Logout;
