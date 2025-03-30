// src/app/(private)/prispevok/page.tsx

import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";
import { Container, Typography, Box } from "@mui/material";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Feed | Echo" };

export default async function FeedPage() {
  // Fetch príspevkov s reláciami na používateľov a obrázky
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true, images: true },
  });

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}>
        Príspevky
      </Typography>

      {posts.length > 0 ? (
        posts.map((post) => {
          if (!post.user.name) {
            return null; // Skip posts with null user.name
          }
          return (
            <PostCard
              key={post.id}
              post={{
                ...post,
                caption: post.caption ?? undefined,
                createdAt: post.createdAt.toISOString(),
                user: {
                  ...post.user,
                  name: post.user.name!,
                  image: post.user.image ?? "",
                },
              }}
            />
          );
        }) // Každý príspevok je zobrazený pomocou PostCard
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              textAlign: "center",
              color: "text.secondary",
            }}>
            Žiadne príspevky na zobrazenie.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "text.primary" }}>
            Buďte prvý, kto zdieľa príspevok!{" "}
            <MuiLink
              component={NextLink}
              href="/pridat">
              Vytvoriť nový príspevok
            </MuiLink>
          </Typography>
        </Box>
      )}
    </Container>
  );
}
