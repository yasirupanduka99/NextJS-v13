import React, { Suspense } from "react";
import Loading from "../../loading";
import { notFound } from "next/navigation";

export const dynamicParams = true; // this 'true' is default state. This is a feature in Next.js that, when set to true, tells Next.js that dynamic routes are allowed for this page. This means that dynamic URL parameters (like id in this case) can be fetched at runtime. If this were false, the route would only be pre-generated during the build phase, with static paths generated ahead of time.

export async function generateStaticParams() {
  // This function generates static paths for dynamic routes during the build phase.
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id, // Each object contains a ticket ID. During the build phase, Next.js calls generateStaticParams() and gets: [{ id: '1' }, { id: '2' }, ... ]. Next.js uses these IDs to pre-generate pages for the following URLs: /tickets/1, /tickets/2
  }));
}

async function getTicket(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000)); // this is just a 3 second delay to excute below code. basicaly we try to late 3 second to fetch data.

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  return data;
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
