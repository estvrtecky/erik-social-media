// src/app/(private)/layout.tsx

import AuthGuard from "@/components/AuthGuard";

export const metadata = { title: "Protected | Insta 2.0" };

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
