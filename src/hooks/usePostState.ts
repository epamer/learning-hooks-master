import { useContext } from "react";
import { GlobalState, StateContext } from "../contexts";
import { PostsState } from "../reducers/postsReducer";

function usePostsState(): PostsState {
  const { state } = useContext<GlobalState>(StateContext);
  return state.posts;
}

export default usePostsState;
