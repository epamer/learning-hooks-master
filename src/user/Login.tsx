import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInput } from "react-hookedup";

import { UserActionTypes, UserPayload } from "../reducers/userReducer";
import { useAPILogin, useDispatch } from "../hooks";
import { AppAction } from "../reducers/appReducer";
import { Resource } from "react-request-hook";

function useLoginEffect(
  user: Resource<UserPayload[]> & { error?: any },
  dispatch: React.Dispatch<AppAction>,
  setLoginFailed: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (user?.data) {
      if (user.data.length > 0) {
        setLoginFailed(false);
        dispatch({
          type: UserActionTypes.LOGIN,
          username: user.data[0].username
        });
      } else {
        setLoginFailed(true);
      }
    }

    if (user?.error) {
      setLoginFailed(true);
    }
  }, [user, dispatch, setLoginFailed]);
}

function Login() {
  const dispatch = useDispatch();
  const { value: username, bindToInput: bindUsername } = useInput("");
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const { value: password, bindToInput: bindPassword } = useInput("");
  const [user, login] = useAPILogin();

  useLoginEffect(user, dispatch, setLoginFailed);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        login(username, password);
      }}
    >
      <h3>Login</h3>
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        value={username}
        {...bindUsername}
        name="login-username"
        id="login-username"
      />
      <label htmlFor="login-password">Password:</label>
      <input
        type="password"
        value={password}
        {...bindPassword}
        name="login-password"
        id="login-password"
      />
      <input type="submit" value="Login" disabled={username.length === 0} />
      {loginFailed && (
        <div style={{ color: "red", fontSize: "smaller" }}>
          Invalid username or password
        </div>
      )}
    </form>
  );
}

export default Login;
