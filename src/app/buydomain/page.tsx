"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const domains = [
    { id: 1, name: "myapp.com", expires: "Expires in 1 year" },
    { id: 2, name: "mydomain.com", expires: "Expires in 2 years" },
    {
      id: 3,
      name: "plafaforma-gestion-proyectos.vercel.app",
      expires: "Expires in 12 months",
    },
  ];
  return (
    <main className="min-h-screen bg-blue-300">
      <section className="max-w-7xl mx-auto px-4 py-4">
        <aside className="mb-8">
          <input
            type="text"
            placeholder="Search domains..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </aside>
        <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push(`/domains/${domain.id}`)}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {domain.name}
              </h3>
              <p className="text-gray-600 text-sm">{domain.expires}</p>
            </div>
          ))}
          <div
            onClick={() => router.push("/buydomain")}
            className="flex items-center justify-center bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span className="text-gray-900 font-medium">Add a Domain</span>
          </div>
        </aside>
      </section>
    </main>
  );
}
