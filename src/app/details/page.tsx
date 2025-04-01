"use client";

import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-amber-100">
      <h1>Details</h1>
      <p>Project Details</p>
      <Link href="/proyects"></Link>
    </main>
  );
}
