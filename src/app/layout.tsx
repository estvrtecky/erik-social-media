import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";


export const metadata: Metadata = {
  title: "Insta 2.0",
  description: "Created by Erik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
