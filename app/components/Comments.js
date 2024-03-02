import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div>
      <h1 className="pt-6 text-3xl">Recent Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col pt-10 gap-2 [&>*:last-child]:text-blue-600">
          <p className="font-bold">{comment.name}</p>
          <p>{comment.body}</p>
          <p className="underline italic">{comment.email}</p>
        </div>
      ))}
    </div>
  );
}
