import Button from "@/app/components/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import upwork from "@/public/blog.jpg";


export default function SingleBlog({ params }) {
  const { id } = params;
  // if (id > 5) {
  //   notFound();
  // }
  return (
    <div>
      <h1>{id}</h1>
      <Button></Button>
      <Image placeholder="blur" src={upwork} alt="Upwork Image" />
    </div>
  );
}
