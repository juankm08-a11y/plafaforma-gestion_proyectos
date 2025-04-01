"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-green-200 flex flex-col">
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Domain
          </h2>
        </div>
        <section className="flex flex-col items-center justify-center flex-1">
          <aside className="bg-white shadow rounded-lg p-12 max-w-lg w-full text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Manage Your Domains
            </h3>
            <p className="text-gray-600 mb-8">
              Easily buy, manage, and connect your custom domain to your
              projects.
            </p>
            <button
              onClick={() => router.push("/buydomain")}
              className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
            >
              Buy Domain
            </button>
          </aside>
        </section>
      </section>
      <footer className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} UCC Pasto
      </footer>
    </main>
  );
}
