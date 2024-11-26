// src/app/profil/[id]/page.tsx

export const metadata = { title: 'Profile details | Insta 2.0' };

export default function ProfileDetails({ params }: {
    params: { id: string }
  }) {
  const { id } = params
  
  return (
    <h1>Detials about profile with id: {id} </h1>
  );
}