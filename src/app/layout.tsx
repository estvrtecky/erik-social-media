import type { Metadata } from "next";
import "./globals.css";


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
      </body>
    </html>
  );
}
