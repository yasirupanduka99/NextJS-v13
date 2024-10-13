import Link from "next/link";
import React from "react";
import { resolve } from "styled-jsx/css";

async function getTickets() {
  // imitate delay
  // await new Promise(resolve => setTimeout(resolve, 3000)) // this is just a 3 second delay to excute below code. basicaly we try to late 3 second to fetch data.

  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // when we add 0 second here then nextjs alwaays request and get data from db without using cache data. if you use any time frame(Ex: 30 s) then nextjs always give firstly rendered data(using cache memory) and after every 30 second nextjs request to db and getting the data
    },
  }); // fetch() returns a response object with raw data in the body.
  const data = await res.json(); // res.json() converts that raw data (if it's valid JSON) into a JavaScript object.

  return data;
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket._id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>{" "}
            {/* slice(0, 200): This extracts the first 200 characters from ticket.body. and show ... for there is more*/}
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
}
