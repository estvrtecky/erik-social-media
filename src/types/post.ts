// src/types/post.ts

export interface Post {
  user: {
    name: string;
    image: string;
  };
  images: { imageUrl: string }[];
  caption?: string;
  createdAt: string;
}
