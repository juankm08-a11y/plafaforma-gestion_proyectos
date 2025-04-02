import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proyect Management Platform",
  description: "Platform for Personal Proyect Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageTitle = typeof metadata.title === "string" ? metadata.title : "";

  return (
    <html lang="es">
      <body className="bg-app-accent-foreground bg-amber-300">
        <h1 className="p-4 text-gray-900 text-center text-5xl">{pageTitle}</h1>
        <p className="mt-2 text-gray-700 text-center text-2xl">
          {metadata.description}
        </p>
        <header>{children}</header>
      </body>
    </html>
  );
}
