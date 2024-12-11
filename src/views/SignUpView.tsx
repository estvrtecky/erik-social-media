"use client";

import { useState } from "react";
import { Button, Container, Typography, Checkbox, FormControlLabel, Box, Link as MuiLink, Snackbar, Alert } from "@mui/material";
import NextLink from "next/link"; // Import next/link separately for routing
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignUpView() {
  // State to manage checkbox checked state
  const [isChecked, setIsChecked] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state for error message

  // Function to handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // Function to handle Google sign-up
  const handleGoogleSignUp = () => {
    if (!isChecked) {
      setOpenSnackbar(true); // Show error message if checkbox is not checked
    } else {
      signIn("google");
    }
  };

  // Function to handle GitHub sign-up
  const handleGitHubSignUp = () => {
    if (!isChecked) {
      setOpenSnackbar(true); // Show error message if checkbox is not checked
    } else {
      console.log("GitHub sign-up clicked");
    }
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
        Registrácia
      </Typography>

      {/* Sign-in link */}
      <Typography
        variant="body1"
        sx={{ mb: 3 }}>
        Už máte účet?{" "}
        <MuiLink component={NextLink} href="/auth/prihlasenie">
          Prihláste sa
        </MuiLink>
      </Typography>

      {/* Terms and Conditions Checkbox */}
      <Box sx={{ mb: 3, textAlign: "left", width: "100%" }}>
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
          label={
            <Typography variant="body2">
              Súhlasím s{" "}
              <MuiLink component={NextLink} href="/podmienky">
                podmienkami používania
              </MuiLink>{" "}
              a{" "}
              <MuiLink component={NextLink} href="/gdpr">
                spracovaním údajov podľa GDPR
              </MuiLink>
              .
            </Typography>
          }
        />
      </Box>

      {/* Google Sign Up Button */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignUp} // Call the Google sign-up handler
        sx={{ mb: 1 }}
      >
        Registrovať sa účtom Google
      </Button>

      {/* GitHub Sign Up Button */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GitHubIcon />}
        onClick={handleGitHubSignUp} // Call the GitHub sign-up handler
        sx={{ mb: 1 }}
      >
        GitHub
      </Button>

      {/* Snackbar for error message */}
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000} // The Snackbar will automatically disappear after 4 seconds
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{
            backgroundColor: "#d32f2f", // Red background color for the error
            color: "white", // White text color
            "& .MuiAlert-icon": {
              color: "white", // White icon color
            },
            "& .MuiAlert-message": {
              fontSize: "1rem", // Adjust message font size for better readability
            },
          }}>
          You must agree to the terms and conditions to proceed.
        </Alert>
      </Snackbar>
    </Container>
  );
}
