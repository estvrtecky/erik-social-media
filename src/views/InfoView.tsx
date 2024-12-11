// src/app/o-mne/AboutView.tsx

import { Box, Typography } from "@mui/material";

export default function AboutView() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        O Insta 2.0
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center", maxWidth: 600, mb: 4 }}>
        Insta 2.0 is a modern social media platform that allows users to connect, share content, and engage with each other through posts and profiles. Our mission is to create a vibrant online community where creativity, communication, and connection come together in an exciting and user-friendly environment.
      </Typography>

      <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center", maxWidth: 600 }}>
        With Insta 2.0, you can create posts, explore the content shared by others, and build your online presence. Join us and become a part of our growing community today!
      </Typography>
    </Box>
  );
}
