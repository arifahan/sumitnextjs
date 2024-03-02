import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-5 mb-5 pl-4 font-bold bg-lime-700 p-4">Hellow World
      <p className="pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit voluptate quam omnis ab deleniti necessitatibus dignissimos soluta rerum accusantium, numquam amet. Corporis commodi tempora recusandae debitis ipsam earum nesciunt rem illum repellendus facere saepe omnis iusto aut, molestias illo consequuntur ea necessitatibus iste sed suscipit natus architecto fuga hic?</p>
      <p className="pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit voluptate quam omnis ab deleniti necessitatibus dignissimos soluta rerum accusantium, numquam amet. Corporis commodi tempora recusandae debitis ipsam earum nesciunt rem illum repellendus facere saepe omnis iusto aut, molestias illo consequuntur ea necessitatibus iste sed suscipit natus architecto fuga hic?</p>
      <p className="pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit voluptate quam omnis ab deleniti necessitatibus dignissimos soluta rerum accusantium, numquam amet. Corporis commodi tempora recusandae debitis ipsam earum nesciunt rem illum repellendus facere saepe omnis iusto aut, molestias illo consequuntur ea necessitatibus iste sed suscipit natus architecto fuga hic?</p>
      <p className="pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit voluptate quam omnis ab deleniti necessitatibus dignissimos soluta rerum accusantium, numquam amet. Corporis commodi tempora recusandae debitis ipsam earum nesciunt rem illum repellendus facere saepe omnis iusto aut, molestias illo consequuntur ea necessitatibus iste sed suscipit natus architecto fuga hic?</p>
      <p className="pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit voluptate quam omnis ab deleniti necessitatibus dignissimos soluta rerum accusantium, numquam amet. Corporis commodi tempora recusandae debitis ipsam earum nesciunt rem illum repellendus facere saepe omnis iusto aut, molestias illo consequuntur ea necessitatibus iste sed suscipit natus architecto fuga hic?</p>
      <Link className="flex justify-end pr-10" href="/about/mission"><button className="bg-red-600 p-2 rounded-xl mt-5">Read More</button></Link>
    </main>
  );
}
