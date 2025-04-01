"use client";

import Link from "next/link";

export default function page() {
  return (
    <main className=" flex justify-center items-center bg-amber-100">
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <aside className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-700">Details</h2>
          <Link className="font-semibold text-xl" href="/proyects">
            Proyects
          </Link>
        </aside>
        <hr className="my-4 border-gray-300" />
      </section>
    </main>
  );
}
