// src/app/(public)/about/page.tsx

import { Typography, Paper } from "@mui/material";

export const metadata = { title: "About Us | Echo" };

export default function AboutPage() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        margin: "auto",
        maxWidth: 800,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        bgcolor: "background.paper",
      }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center" }}>
        About Echo
      </Typography>

      <Typography
        variant="body1"
        sx={{ textAlign: "center", maxWidth: 600 }}>
        Echo is a modern social media platform that allows users to connect,
        share content, and engage with each other through posts and profiles.
        Our mission is to create a vibrant online community where creativity,
        communication, and connection come together in an exciting and
        user-friendly environment.
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ textAlign: "center", maxWidth: 600 }}>
        With Echo, you can create posts, explore the content shared by others,
        and build your online presence. Join us and become a part of our growing
        community today!
      </Typography>
    </Paper>
  );
}
