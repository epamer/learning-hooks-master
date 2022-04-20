import { act, renderHook } from "@testing-library/react-hooks";

import { StateContextWrapper } from "./testUtils";
import useDispatch from "./useDispatch";
import usePostsState from "./usePostState";
import { PostItem, PostsActionTypes } from "../reducers/postsReducer";

describe("usePostsState hook", () => {
  test("should use posts state", () => {
    const { result } = renderHook(() => usePostsState(), {
      wrapper: StateContextWrapper
    });

    expect(result.current).toEqual([]);
  });

  test("should update posts state on fetch option", () => {
    const { result } = renderHook(
      () => ({ state: usePostsState(), dispatch: useDispatch() }),
      { wrapper: StateContextWrapper }
    );

    const samplePosts: PostItem[] = [
      {
        id: "test1",
        content: "test content",
        author: "Test User",
        title: "test title"
      },
      {
        id: "test2",
        content: "test content2",
        author: "Test User",
        title: "test title2"
      }
    ];

    act(() =>
      result.current.dispatch({
        type: PostsActionTypes.FETCH_POSTS,
        posts: samplePosts
      })
    );

    expect(result.current.state).toEqual(samplePosts);
  });

  test("should update posts state on create post action", () => {
    const { result } = renderHook(
      () => ({ state: usePostsState(), dispatch: useDispatch() }),
      { wrapper: StateContextWrapper }
    );

    const newPost: PostItem = {
      title: "Hello world",
      content: "This is a test",
      author: "Test User"
    };

    act(() =>
      result.current.dispatch({
        type: PostsActionTypes.CREATE_POST,
        ...newPost
      })
    );

    expect(result.current.state[0]).toEqual(newPost);
  });
});
