"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 bg-[url('background.jpg')]">
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-blue-800 mb-6">
            Start Managing Your Proyects
          </h1>
          <p className="text-3xl text-green-600 mb-8">
            Our platform provides you with the essential tools to manage,
            collaborate, and succeed in all your web proyects.
          </p>
          <section className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 border-transparent"
            >
              Request Demo
            </button>
          </section>
          <div className="mt-16 border-t-2 border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-white tracking-wide uppercase mb-6">
              Develop with your favorite tools
            </h3>
          </div>
          <section className="grid grid-cols-3 gap-8">
            {[
              "React",
              "NodeJs",
              "Python",
              "Angular",
              "Java",
              "JavaScript",
              "PHP",
              "TypeScript",
            ].map((tool) => (
              <section
                key={tool}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-900 font-medium">{tool}</span>
              </section>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
