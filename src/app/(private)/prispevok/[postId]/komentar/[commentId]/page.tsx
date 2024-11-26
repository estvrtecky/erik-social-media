// src/app/prispevok/[postId]/komentar/[commentId]/page.tsx

export const metadata = { title: 'Detail komentara | Insta 2.0' };

export default function CommentDetails({ params }: {
        params: {
            postId: string;
            commentId: string;
        }
    }) {

    const { postId } = params
    const { commentId } = params
  
    return (
        <h1>Komentar #{commentId} prispevku #{postId} </h1>
    );
}