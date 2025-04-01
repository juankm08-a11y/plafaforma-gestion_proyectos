"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleOption = (option: string) => {
    switch (option) {
      case "import":
        router.push("/proyects/import");
        break;
      case "clone":
        router.push("/proyects/clone");
        break;
      case "scratch":
        router.push("/proyects/scratch");
        break;
      default:
        break;
    }
  };
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <section className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Create a New Proyect
        </h3>
        <p className="text-gray-600 mb-8">
          Choose youd like to build your proyect
        </p>
        <aside className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => handleOption("import")}
            className="cursor-pointer border border-gray-200 hover:border-gray-400 rounded-lg p-6 text-center transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Import Git Repository
            </h2>
            <p className="text-gray-500 text-sm">
              Connect your Git repository to start building
            </p>
          </button>
          <button
            onClick={() => handleOption("clone")}
            className="cursor-pointer border border-gray-200 hover:border-gray-400 rounded-lg p-6 text-center transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Clone Template
            </h2>
            <p className="text-gray-500 text-sm">
              Start with a pre-built project template.
            </p>
          </button>
          <button
            onClick={() => handleOption("scratch")}
            className="cursor-pointer border border-gray-200 hover:border-gray-400 rounded-lg p-6 text-center transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Start from Scratch
            </h2>
            <p className="text-gray-500 text-sm">
              Begin a new project with a blank canvas.
            </p>
          </button>
        </aside>
      </section>
    </main>
  );
}
