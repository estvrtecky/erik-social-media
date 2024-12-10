// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Insta 2.0",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}>
              <main style={{ flexGrow: 1 }}>{children}</main>
            </div>
            <Navbar />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
