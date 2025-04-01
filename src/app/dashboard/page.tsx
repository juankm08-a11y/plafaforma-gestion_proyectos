"use client";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const Proyects = [
    {
      name: "Proyect 1",
      description: "this is proyect 1",
    },
    {
      name: "Proyect 2",
      description: "this is proyect 2",
    },
    {
      name: "Proyect 3",
      description: "this is proyect 3",
    },
    {
      name: "Proyect 4",
      description: "this is proyect 4",
    },
    {
      name: "Proyect 5",
      description: "this is proyect 5",
    },
    {
      name: "Proyect 6",
      description: "this is proyect 6",
    },
    {
      name: "Proyect 7",
      description: "this is proyect 7",
    },
  ];

  interface Proyect {
    name: string;
    description: string;
  }

  const [showDropdown, setShowDropdown] = useState(false);

  const toogleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    switch (option) {
      case "build":
        router.push("/build");
        break;
      case "domain":
        router.push("/domain");
        break;
      case "store":
        router.push("/store");
        break;
      default:
        break;
    }
    setShowDropdown(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Proyect[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState(Proyects);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0) {
      const filtered = Proyects.filter((proyect) =>
        proyect.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setSearchResults(Proyects);
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults(Proyects);
      return;
    }

    const results = Proyects.filter((proyect) =>
      proyect.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setShowSuggestions(false);
  };

  const handleSelectSuggestion = (suggestion: Proyect) => {
    setSearchTerm(suggestion.name);
    setSearchResults([suggestion]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-orange-300 to-amber-400 shadow-lg">
        <section className="max-w-7xl mx-auto px-4">
          <section className="flex items-center space-x-6">
            <a
              href="#"
              className="text-xl font-bold text-red-800 hover:text-red-600 transition-colors"
            >
              OverView
            </a>
            <a
              href="/dashboard"
              className="text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/login"
              className="text-xl font-bold text-green-800 hover:text-green-600 transition-colors"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-xl font-bold text-orange-900 hover:text-orange-600 transition-colors"
            >
              Register
            </a>
            <button
              onClick={handleLogOut}
              className="text-xl font-bold text-purple-900 hover:text-purple 600 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </section>
          <section className="relative inline-block">
            <button
              onClick={toogleDropdown}
              className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="mr-1">Add New Proyect</span>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
            {showDropdown && (
              <section className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => handleOptionClick("build")}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Build Proyect
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleOptionClick("domain")}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Buy Domain
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleOptionClick("store")}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Store
                    </button>
                  </li>
                </ul>
              </section>
            )}
          </section>
        </section>
      </nav>
      <section>
        <section className="max-w-7xl mx-auto px-4 mt-8">
          <aside className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-700">
              My Plataform
            </h2>
            <a
              href="/proyects"
              className="text-lg text-blue-600 hover:text-blue-500 font-medium"
            >
              Proyects
            </a>
          </aside>
          <hr className="my-4 border-gray-300" />
        </section>
        <section className="max-w-7xl mx-auto px-4 mb-8">
          <aside className="flex items-start justify-start">
            <input
              type="text"
              className=" border border-gray-300 rounded-l px-4 py-2 w-[750px] focus:outline-none focus:ring-2 focus:ring-amber-400 "
              placeholder="Search your proyects..."
              value={searchTerm || ""}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-r transition-colors"
              onClick={handleSearch}
            >
              Search
            </button>
            {showSuggestions && filteredSuggestions.length > 0 && (
              <ul className="absolute top-[42px] left-0 bg-white w-[750px] border border-gray-300 rounded-b z-10">
                {filteredSuggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectSuggestion(item)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </section>

        <section className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.length === 0 ? (
            <p className="text-gray-700">No Projects found</p>
          ) : (
            searchResults.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <button className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
                  <Link href="/details">Details</Link>
                </button>
              </div>
            ))
          )}
        </section>
      </section>
    </main>
  );
}
