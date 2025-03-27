// src/app/(private)/pridat/page.tsx

import NewPostForm from "@/components/NewPostForm";
import { Typography, Box, Container } from "@mui/material";

export const metadata = {
  title: "New Post | Echo",
};

export default function NewPostPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        mb: 8,
        padding: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "center", // Vycentrovanie nadpisu
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase", // Veľké písmená pre moderný vzhľad
            letterSpacing: 2, // Pridanie medzier medzi písmenami pre moderný vzhľad
          }}
        >
          Create New Post
        </Typography>
      </Box>

      <NewPostForm />
    </Container>
  );
}
