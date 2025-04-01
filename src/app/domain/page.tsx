"use client";

import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <main className=" flex justify-center items-center bg-amber-100">
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <aside className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-700">Build</h2>
        </aside>
        <hr className="my-4 border-gray-300" />
      </section>
      <section className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => router.push("/buydomain")}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
        >
          Buy domain
        </button>
      </section>
    </main>
  );
}
