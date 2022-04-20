import { PostsAction, postsReducer, PostsState } from "./postsReducer";
import { UserAction, userReducer, UserState } from "./userReducer";
import { ErrorAction, errorReducer, ErrorState } from "./errorReducer";

export type AppState = {
  user: UserState;
  posts: PostsState;
  error: ErrorState;
};

export type AppAction = UserAction | PostsAction | ErrorAction;

export default function appReducer(state: AppState, action: AppAction) {
  return {
    user: userReducer(state.user, action as UserAction),
    posts: postsReducer(state.posts, action as PostsAction),
    error: errorReducer(state.error, action as ErrorAction)
  };
}
