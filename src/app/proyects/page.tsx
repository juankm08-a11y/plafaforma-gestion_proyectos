"use client";

import React from "react";

export default function page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">All Proyects</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <h2 className="text-xl font-semibold mb-2">Proyect Tittle</h2>
        <p className="text-gray-600">proyect description</p>
      </section>
    </main>
  );
}
