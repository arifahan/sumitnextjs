import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center">
      <h1 className="text-3xl">The reauested content was not found</h1>
      <Link href="/">
        <button className="text-2xl bg-green-500 p-3 rounded-full text-white hover:bg-green-900">
          Please go to home page
        </button>
      </Link>
    </main>
  );
}
