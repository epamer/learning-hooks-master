import React, { useEffect } from "react";
import { Resource, useResource } from "react-request-hook";
import { Link } from "react-navi";

import Post from "../post/Post";
import { PostItem } from "../reducers/postsReducer";
import Spinner from "../components/Spinner";

type PostPageProps = {
  id: string;
};

function PostPage({ id }: PostPageProps) {
  const [post, getPost] = useResource(
    (): Resource<PostItem> => ({
      url: `/posts/${id}`,
      method: "get"
    })
  );

  useEffect(getPost, [id]);

  return (
    <div>
      <div>
        <Link href="/">Go back</Link>
      </div>
      {post?.data ? <Post {...post.data} /> : <Spinner />}
      <hr />
    </div>
  );
}

export default PostPage;
