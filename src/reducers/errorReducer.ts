export type ErrorState = string;

export enum ErrorActionTypes {
  POSTS_ERROR = "POSTS_ERROR"
}

export type ErrorAction = { type: ErrorActionTypes.POSTS_ERROR };

export function errorReducer(state: ErrorState, action: ErrorAction) {
  if (action.type === ErrorActionTypes.POSTS_ERROR) {
    return "Failed to fetch posts";
  } else {
    return state;
  }
}
