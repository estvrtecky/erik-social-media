// src/app/(home)/page.tsx

import NextLink from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { Button, Box, Paper, Typography } from "@mui/material";

import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function HomePage() {
  // Fetch session on the server
  const session = await getServerSession(authOptions);

  // Redirect authenticated users to the feed page
  if (session) {
    redirect("/prispevok");
  }

  // View for non-authenticated users
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "background.default",
        }}>
        <Paper
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "background.paper",
          }}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: "bold",
              textAlign: "center",
              color: "text.primary",
            }}>
            Welcome to Echo!
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "text.secondary",
            }}>
            Don&apos;t forget to log in! Sign up to start sharing posts and view
            your profile.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
              component={NextLink}
              href="/auth/register">
              Sign Up
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
              href="/auth/login">
              Already have an account? Log In
            </Button>
          </Box>
        </Paper>
      </Box>
    </main>
  );
}
