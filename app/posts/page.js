import React from "react";
import getAllPosts from "../lib/getAllPosts";
import Link from "next/link";

export default async function PostPage() {
  const posts = await getAllPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="mt-6">
          <Link href={`/posts/${post.id}`}>
            <h1 className="font-bold text-center bg-green-300">{post.id}</h1>
            <h1 className="text-center bg-green-600">{post.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
