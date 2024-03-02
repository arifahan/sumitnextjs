import Link from "next/link";
import React from "react";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function BlogPage() {
  const blogs = [
    { id: 1, title: "Blog 1", description: "Blog 1 Description" },
    { id: 2, title: "Blog 2", description: "Blog 5 Description" },
    { id: 3, title: "Blog 3", description: "Blog 3 Description" },
    { id: 4, title: "Blog 4", description: "Blog 4 Description" },
    { id: 5, title: "Blog 5", description: "Blog 5 Description" },
  ];

  return (
    <main className="mt-5 mb-5 pl-4 font-bold bg-zinc-500 p-4">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blogs/${blog.id}`}>
          <ul>
            <li className="pb-6" key={blog.id}>{blog.title}</li>
          </ul>
        </Link>
      ))}
    </main>
  );
}
