import React from "react";
import { Link } from "react-navi";

import { PostItem } from "../reducers/postsReducer";
import { useTheme } from "../hooks";

type PostProps = PostItem & {
  short?: boolean | undefined;
};

function Post({ id, title, content, author, short = false }: PostProps) {
  const { secondaryColor } = useTheme();

  let processedContent = content;
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + "...";
    }
  }

  return (
    <article>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <p>{processedContent}</p>
      {short && (
        <div>
          <Link href={`/view/${id}`}>View full post</Link>
        </div>
      )}
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </article>
  );
}

export default React.memo(Post);
