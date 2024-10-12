import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Battery-Charge.svg";

export default function Navbar() {
  return (
    <nav>
      <h1>NextJS v13</h1>
      <Image
        src={Logo}
        alt="NextJS v13 Logo"
        quality={100}
      />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
