export enum UserActionTypes {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT"
}

export type UserPayload = {
  username: string;
};

export type UserState = string;

export type UserAction =
  | ({ type: UserActionTypes.LOGIN } & UserPayload)
  | ({ type: UserActionTypes.REGISTER } & UserPayload)
  | { type: UserActionTypes.LOGOUT };

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionTypes.LOGIN:
    case UserActionTypes.REGISTER:
      return action.username;
    case UserActionTypes.LOGOUT:
      return "";
    default:
      return state;
  }
}
