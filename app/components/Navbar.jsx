import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>NextJS v13</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
