import Comments from "@/app/components/Comments";
import getAllPosts from "@/app/lib/getAllPosts";
import getPost from "@/app/lib/getPost";
import getPostComment from "@/app/lib/getPostComment";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function SinglePost({ params }) {
  const { id } = params;
  const postPromise = await getPost(id);
  const commentsPromise = await getPostComment(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;

  return (
    <div>
      <h1 className="font-bold text-2xl p-2 capitalize">
        {post.id + " " + post.title}
      </h1>
      <p className="text-xl py-3 capitalize">{post.body}</p>
      <Suspense fallback="Loading Comments.....">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}


// Single Post Static Generation
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
