// src/app/(private)/pridat/page.tsx

import NewPostForm from "@/components/NewPostForm";

export const metadata = {
  title: "New Post | Echo",
};

export default function NewPostPage() {
  return (
    <div>
      <h1>Create New Post</h1>
      <NewPostForm />
    </div>
  );
}
