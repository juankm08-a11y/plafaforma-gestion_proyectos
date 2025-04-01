import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plataforma de Gestion de Proyectos",
  description: "Plataforma para la gestion de proyectos personales",
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
        <h1 className="p-4 text-gray-900 text-center">{pageTitle}</h1>
        <p className="mt-2 text-lg text-gray-700 text-center">
          {metadata.description}
        </p>
      </body>
      <header>{children}</header>
    </html>
  );
}
