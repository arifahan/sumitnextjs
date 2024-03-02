import Link from "next/link";
import React from "react";


export default function AboutLayout({ children }) {
  return (
    <div>
      <nav>
        <ul className="flex gap-6 font-bold font text-3xl pb-6 ">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vission">Vission</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
