import React from "react";
import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>
              <Link href={`/posts/${post.id}`} passHref>
                <a>
                  {post.id} {post.title}
                </a>
              </Link>
            </h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 4),
    },
  };
}
