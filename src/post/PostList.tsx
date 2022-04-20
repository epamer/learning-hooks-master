import React, { Fragment } from "react";

import Post from "./Post";
import { usePostsState } from "../hooks";

function PostList() {
  const posts = usePostsState();

  return (
    <section>
      {posts.map((p, i) => (
        <Fragment key={`post-${i}`}>
          <Post {...p} short={true} />
          <hr />
        </Fragment>
      ))}
    </section>
  );
}

export default PostList;
