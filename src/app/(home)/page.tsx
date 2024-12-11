// src/app/(home)/page.tsx

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import HomeView from "@/views/HomeView"; // Import the HomeView component

export const metadata = { title: "Domov | Insta 2.0" };

export default async function HomePage() {
  // Fetch session on the server
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect authenticated users to the feed page
    redirect("/prispevok");
  }

  // Show the unauthenticated home view for non-authenticated users
  return <HomeView />;
}
