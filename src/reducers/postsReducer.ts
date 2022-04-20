export type PostItem = {
  id?: string | undefined;
  title: string;
  content: string;
  author: string;
};

export type PostsPayload = {
  posts: PostItem[];
};

export type PostsState = PostItem[];

export enum PostsActionTypes {
  CREATE_POST = "CREATE_POST",
  FETCH_POSTS = "FETCH_POSTS"
}

export type PostsAction =
  | ({ type: PostsActionTypes.CREATE_POST } & PostItem)
  | ({ type: PostsActionTypes.FETCH_POSTS } & PostsPayload);

export function postsReducer(
  state: PostsState,
  action: PostsAction
): PostsState {
  switch (action.type) {
    case PostsActionTypes.CREATE_POST:
      const newPost: PostItem = {
        id: action.id,
        title: action.title,
        content: action.content,
        author: action.author
      };
      return [newPost, ...state];
    case PostsActionTypes.FETCH_POSTS:
      return action.posts;
    default:
      return state;
  }
}
