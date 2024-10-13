import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <Link href={"/tickets/create"}>
          <button className="btn-primary rounded">Add Ticket</button>
        </Link>
      </nav>

      {/* If TicketList is delayed in loading (e.g., due to network latency), 
      Suspense can optionally show a fallback UI (like a loading spinner or message). */}
      {/* if we not use this Suspense barrier this full page replace with loading screen. If we add Suspense barrier then only replace loading screen with that barrier component */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
