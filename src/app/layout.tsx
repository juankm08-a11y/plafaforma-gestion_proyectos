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
  return (
    <html lang="es">
      <body className="bg-app-accent-foreground">{children}</body>
    </html>
  );
}
