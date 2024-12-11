"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BackButton({ sx = {} }) {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      onClick={() => router.back()}
      sx={{
        mt: 2,
        bgcolor: "#1976d2",
        color: "white",
        "&:hover": {
          bgcolor: "#1565c0",
        },
        ...sx,
      }}>
      Späť
    </Button>
  );
}
