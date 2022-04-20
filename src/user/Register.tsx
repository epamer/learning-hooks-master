import React, { useEffect, Dispatch } from "react";
import { useInput } from "react-hookedup";
import { Resource } from "react-request-hook";

import { UserActionTypes, UserPayload } from "../reducers/userReducer";
import { useAPIRegister, useDispatch } from "../hooks";
import { AppAction } from "../reducers/appReducer";

function useRegisterEffect(
  user: Resource<UserPayload>,
  dispatch: React.Dispatch<AppAction>
) {
  useEffect(() => {
    if (user?.data) {
      dispatch({
        type: UserActionTypes.REGISTER,
        username: user.data.username
      });
    }
  }, [user, dispatch]);
}

function Register() {
  const dispatch = useDispatch();

  const { value: username, bindToInput: bindUsername } = useInput("");
  const { value: password, bindToInput: bindPassword } = useInput("");
  const { value: passwordRepeat, bindToInput: bindPasswordRepeat } = useInput(
    ""
  );

  const [user, register] = useAPIRegister();

  useRegisterEffect(user, dispatch);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        register(username, password);
        dispatch({ type: UserActionTypes.REGISTER, username });
      }}
    >
      <h3>Register</h3>
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        value={username}
        {...bindUsername}
        name="register-username"
        id="register-username"
      />
      <label htmlFor="register-password">Password:</label>{" "}
      <input
        type="password"
        value={password}
        {...bindPassword}
        name="register-password"
        id="register-password"
      />{" "}
      <label htmlFor="register-password-repeat">Repeat password:</label>{" "}
      <input
        type="password"
        value={passwordRepeat}
        {...bindPasswordRepeat}
        name="register-password-repeat"
        id="register-password-repeat"
      />
      <input
        type="submit"
        value="Register"
        disabled={
          username.length === 0 ||
          password.length === 0 ||
          password !== passwordRepeat
        }
      />
    </form>
  );
}

export default Register;
