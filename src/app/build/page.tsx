"use client";

import { FolderPlus, GitBranch, LayoutTemplate, Search } from "lucide-react";
import { useState } from "react";

const localRepositories = [
  { name: "plataforma-gestion_proyectos", lastUpdated: "19m ago" },
  { name: "portfolio", lastUpdated: "14 de mar" },
];
const templates = [
  { name: "Next.js Boilerplate", type: "Framework" },
  { name: "AI Chatbot", type: "Aplication" },
  { name: "E-commerce", type: "Template" },
];

export default function page() {
  const [repoSearch, setRepoSearch] = useState("");
  const [templateSearch, setTemplateSearch] = useState("");

  const filteredRepos = localRepositories.filter((repo) =>
    repo.name.toLowerCase().includes(repoSearch.toLowerCase())
  );

  const filteredTemplates = templates.filter((template) =>
    template.name.toLowerCase().includes(repoSearch.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Lets build something new
      </h1>
      <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <aside className="flex items-center gap-3 mb-6">
          <GitBranch className="text-blue-600 w-6 h-6" />
          <h2 className="text-xl font-semibold">Import Git Repository</h2>
        </aside>
        <aside className="mb-4 relative">
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={repoSearch}
            onChange={(e) => setRepoSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
        </aside>
        <aside className="spacey-4">
          {filteredRepos.map((repo, index) => (
            <div
              key={index}
              className="flex-items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
            >
              <aside className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4" />
                <section>
                  <h3 className="font-medium">{repo.name}</h3>
                  <p className="text-sm text-gray-500">
                    Updated
                    {repo.lastUpdated}
                  </p>
                </section>
              </aside>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <FolderPlus className="w-4 h-4" />
                Import
              </button>
            </div>
          ))}
          <section className="my-8 border-t border-gray-200" />
          <section className="bg-white rounded-xl shadow-sm p-6">
            <aside className="flex items-center gap-3 mb-6">
              <LayoutTemplate className="text-purple-600 w-6 h-6" />
              <h2 className="text-xl font-semibold">Clone Template</h2>
            </aside>
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={templateSearch}
                onChange={(e) => setTemplateSearch(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTemplates.map((template, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <section className="flex items-center gap-4">
                    <input type="radio" name="template" className="w-4 h-4" />
                    <aside>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-gray-500">{template.type}</p>
                    </aside>
                  </section>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
