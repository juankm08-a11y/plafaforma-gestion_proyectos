"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-amber-100">
      <h1>Details</h1>
      <p>Project Details</p>
      <Link href="/proyects"></Link>
    </main>
  );
}
