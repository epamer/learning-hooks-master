import React, { ChangeEvent, useEffect } from "react";
import { useNavigation } from "react-navi";
import { useInput } from "react-hookedup";

import { PostsActionTypes } from "../reducers/postsReducer";
import {
  useAPICreatePost,
  useDebouncedUndo,
  useDispatch,
  useUserState
} from "../hooks";

function CreatePost() {
  const dispatch = useDispatch();
  const user = useUserState();

  const { value: title, bindToInput: bindTitle, clear: clearTitle } = useInput(
    ""
  );

  const [
    content,
    setContent,
    { undo, redo, canUndo, canRedo, reset: resetContent }
  ] = useDebouncedUndo(400);

  const [post, createPost] = useAPICreatePost();

  const navigation = useNavigation();

  useEffect(() => {
    if (post?.data) {
      dispatch({ type: PostsActionTypes.CREATE_POST, ...post.data });
      navigation.navigate(`/view/${post.data.id}`);
    }
  }, [post, dispatch, navigation]);

  function handleCreate() {
    createPost({ title, content, author: user });
    clearTitle();
    resetContent("");
  }

  function handleContent(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setContent(value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          value={title}
          {...bindTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <button type="button" onClick={undo} disabled={!canUndo}>
        Undo
      </button>
      &nbsp;
      <button type="button" onClick={redo} disabled={!canRedo}>
        Redo
      </button>
      &nbsp;
      <input type="submit" className="accent-button" value="Create" />
    </form>
  );
}

export default CreatePost;
