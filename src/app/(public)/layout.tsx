// src/app/(public)/layout.tsx

export const metadata = { title: "Public | Insta 2.0" };

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children} {/* Render public pages */}
    </div>
  );
}
