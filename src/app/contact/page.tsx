"use client";
import {
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  GlobeAmericasIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help and answer any questions you might have.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <EnvelopeIcon className="h-8 w-8 text-amber-600" />,
              title: "Email Support",
              content: "juanexample@gmail.com",
              link: "juanexample@gmail.com",
            },
            {
              icon: <PhoneIcon className="h-8 w-8 text-amber-600" />,
              title: "Phone Support",
              content: "phone",
              link: "phone 2929292",
            },
            {
              icon: <ChatBubbleLeftIcon className="h-8 w-8 text-amber-600" />,
              title: "Live Chat",
              content: "Start live conversation",
              link: "/chat",
            },
            {
              icon: <GlobeAmericasIcon className="h-8 w-8 text-amber-600" />,
              title: "Social Media",
              content: "Connect with us online",
              link: "/social",
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <section className="mb-4"> {contact.icon} </section>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-600 mb-4">{contact.content}</p>
                <Link
                  href={contact.link}
                  className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  Contact via {contact.title.split("")[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <section className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <aside>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your name"
              />
            </aside>
            <aside>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your email"
              />
            </aside>
            <aside>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="How can we help you"
              ></textarea>
            </aside>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
