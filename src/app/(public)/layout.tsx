// src/app/(public)/layout.tsx

import { Box } from "@mui/material";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        px: 2,
      }}>
      {children}
    </Box>
  );
}
