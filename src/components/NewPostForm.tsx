"use client";

import { useState } from "react";
import { getSession } from "next-auth/react";

export default function NewPostForm() {
  const [caption, setCaption] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Kontrola, či existujú obrázky pred odoslaním formulára
    if (images.length === 0) {
      setError("Please upload at least one image.");
      setLoading(false);
      return; // Stop submission if no images are uploaded
    }

    try {
      const session = await getSession();
      if (!session?.user?.id) {
        setError("You must be logged in to create a post.");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("caption", caption);
      formData.append("userId", session.user.id);

      // Logovanie pred odoslaním formulára, aby sme overili obrázky
      console.log("Selected images:", images);
      images.forEach((image) => {
        formData.append("images", image); // Pridáme obrázky do FormData
      });

      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Post created successfully!");
        setCaption("");
        setImages([]);
      } else {
        setError(data.message || "Failed to create post.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="caption">Caption:</label>
        <textarea
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write your caption here (optional)..."
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="images">Upload Images:</label>
        <input
          type="file"
          id="images"
          multiple
          onChange={handleImageChange}
          className="block w-full mt-1 text-sm text-gray-600"
        />
        {images.length > 0 && (
          <p className="text-sm text-gray-500 mt-2">
            {images.length} image(s) selected.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Create Post"}
      </button>

      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
