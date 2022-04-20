import React, { useContext, useEffect } from "react";
import { Resource, useResource } from "react-request-hook";

import { GlobalState, StateContext } from "../contexts";
import PostList from "../post/PostList";
import { PostItem, PostsActionTypes } from "../reducers/postsReducer";
import { ErrorActionTypes } from "../reducers/errorReducer";

function HomePage() {
  const { state, dispatch } = useContext<GlobalState>(StateContext);
  const { error } = state;

  const [posts, getPosts] = useResource(
    (): Resource<PostItem[]> => ({
      url: "/posts",
      method: "get"
    })
  );

  useEffect(getPosts, []);

  useEffect(() => {
    if (posts?.error) {
      dispatch({ type: ErrorActionTypes.POSTS_ERROR });
    }

    if (posts?.data) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS,
        posts: posts.data.reverse()
      });
    }
  }, [posts, dispatch]);

  return (
    <div>
      {error && <b>{error}</b>}
      <PostList />
    </div>
  );
}

export default HomePage;
