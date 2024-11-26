// src/app/prispevok/[postId]/page.tsx

export const metadata = { title: 'Post details | Insta 2.0' };

export default function PostDetails({ params }: {
    params: { postId: string }
  }) {
  const { postId } = params
  
  return (
    <h1>Detials about post with id: {postId} </h1>
  );
}