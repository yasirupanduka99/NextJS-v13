import React from "react";
import Link from "next/link";

// This not-found.jsx will override root not-found.jsx when comes to /tickets/[someting not found page]. remember this file only works inside the tickets route

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </main>
  );
}
