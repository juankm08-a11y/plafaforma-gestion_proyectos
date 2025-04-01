export default function paget() {
  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <input
        type="text"
        className=" border border-gray-300 rounded-l px-4 py-2 w-[750px] focus:outline-none focus:ring-2 focus:ring-amber-400 "
      />
      <section className="grid grid-cols-3 gap-8"></section>
      <section>
        <section className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <span className="text-gray-900 font-medium">Add a Domain</span>
        </section>
      </section>
    </main>
  );
}
