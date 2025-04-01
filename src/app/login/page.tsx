"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        router.push("/");
      }
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    if (typeof window !== "undefined") {
      const storedUsers = localStorage.getItem("registeredUsers");
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const foundUser = users.find(
          (user: { email: string; password: string }) =>
            user.email.toLowerCase() === email.toLowerCase() &&
            user.password === password
        );
        if (foundUser) {
          localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
          router.push("/");
        } else {
          setError("Invalid email or password");
        }
      } else {
        setError("No registered users found");
      }
    }

    console.log(localStorage.getItem("loggedInUser"));
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-center text-3xl font-bold mb-6">LOGIN FORM</h1>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="passworf"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded transition-color hover:bg-gra-800 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <Link
            href="/forgotpassword"
            className="text-blue hover:text-blue-blue-500"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <a href="/register" className="text-blue hover:text-blue-500">
            Donapos;t have an account?
          </a>
        </div>
      </div>
    </main>
  );
}
