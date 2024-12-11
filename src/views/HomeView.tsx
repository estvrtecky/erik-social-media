// src/components/HomeView.tsx

import React from "react";
import { Button, Container, Box, Paper, Typography } from "@mui/material";
import NextLink from "next/link";

export default function HomeView() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
          Vitajte na Insta 2.0!
        </Typography>

        <Typography variant="h6" sx={{ mb: 4, textAlign: "center" }}>
          Nezabudli sa prihlásiť! Registruj sa a začni zdieľať príspevky a zobraziť svoj profil.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
            component={NextLink}
            href="/auth/registracia"
          >
            Registrujte sa
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "primary.main",
              borderColor: "primary.main",
              "&:hover": {
                borderColor: "primary.dark",
                bgcolor: "primary.light",
              },
            }}
            component={NextLink}
            href="/auth/prihlasenie"
          >
            Už máte účet? Prihláste sa
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
