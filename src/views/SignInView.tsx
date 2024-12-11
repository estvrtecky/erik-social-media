"use client";

import { Button, Container, Typography, Link as MuiLink } from "@mui/material";
import NextLink from "next/link"; // Import next/link separately for routing
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function SignInView() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}>
      {/* Logo / Title */}
      <Typography
        variant="h5"
        sx={{ mb: 3 }}>
        Prihlásenie
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Nemáte účet?{" "}
        <MuiLink component={NextLink} href="/auth/registracia">
          Registrujte sa
        </MuiLink>
      </Typography>

      {/* Google Sign In */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google")}
        sx={{ mb: 1 }}>
        Prihlásiť sa účtom Google
      </Button>

      {/* GitHub Sign In - Iconic button */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GitHubIcon />} // GitHub icon
        onClick={() => {
          // Placeholder function, replace with GitHub sign-in logic tomorrow
          console.log("GitHub sign-in (dummy) clicked");
        }}
        sx={{ mb: 1 }}>
        GitHub
      </Button>
    </Container>
  );
}
