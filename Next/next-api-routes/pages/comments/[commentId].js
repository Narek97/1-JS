import React from "react";
import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.id}. {comment.text}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps(content) {
  const { params } = content;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
}
