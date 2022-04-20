import { Resource, useResource } from "react-request-hook";

import { UserPayload } from "../reducers/userReducer";
import { PostItem } from "../reducers/postsReducer";
import { GlobalTheme } from "../contexts";

export function useAPILogin() {
  return useResource(
    (username: string, password: string): Resource<UserPayload[]> => ({
      url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
      method: "get"
    })
  );
}

export function useAPIRegister() {
  return useResource(
    (username: string, password: string): Resource<UserPayload> => ({
      url: "/users",
      method: "post",
      data: { username, password }
    })
  );
}

export function useAPICreatePost() {
  return useResource(
    ({ title, content, author }: PostItem): Resource<PostItem> => ({
      url: "/posts",
      method: "post",
      data: { title, content, author }
    })
  );
}

export function useAPIThemes() {
  return useResource(
    (): Resource<GlobalTheme[]> => ({
      url: "/themes",
      method: "get"
    })
  );
}
