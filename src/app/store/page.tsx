import { CircleStackIcon } from "@heroicons/react/20/solid";

export default function page() {
  return (
    <main className=" flex justify-center items-center bg-amber-100">
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <aside className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-700">Store</h2>
        </aside>
        <hr className="my-4 border-gray-300" />
      </section>
      <section className="flex justify-center gap-4 mb-12">
        <aside className="flex items-start justify-start">
          <CircleStackIcon className="w-5 h-5" />
        </aside>
      </section>
    </main>
  );
}
