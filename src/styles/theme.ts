import { createTheme } from "@mui/material/styles";

// Light theme
const lightPalette = {
  primary: {
    main: "#1976d2", // Blue for primary (trustworthy and calming)
  },
  secondary: {
    main: "#0288d1", // Slightly darker blue for secondary (complementary)
  },
  background: {
    default: "#f5f5f5", // Very light gray background (clean and minimal)
    paper: "#ffffff", // White paper background for containers
  },
  text: {
    primary: "#212121", // Dark gray text for better readability
    secondary: "#757575", // Subtle secondary text color
  },
  error: {
    main: "#f44336", // Bright red for error states
  },
};

// Dark theme
const darkPalette = {
  primary: {
    main: "#4caf50", // Green for primary in dark mode (fresh and vibrant)
  },
  secondary: {
    main: "#81c784", // Lighter green for secondary (complementary)
  },
  background: {
    default: "#121212", // Dark background (near black)
    paper: "#1d1d1d", // Dark paper background for elements
  },
  text: {
    primary: "#e0e0e0", // Light gray text for readability on dark background
    secondary: "#a0a0a0", // Slightly muted secondary text color
  },
  error: {
    main: "#f44336", // Red for error states
  },
};

// Create the light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light", // Set to light mode
    ...lightPalette, // Apply light palette colors
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // Remove underline
          color: "#1976d2", // Primary blue color for links
          fontWeight: 500,
          fontStyle: "italic", // Make the link italic
          "&:hover": {
            textDecoration: "underline", // Underline on hover
            color: "#1565c0", // Darker blue for hover effect
          },
        },
      },
    },
  },
});

// Create the dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set to dark mode
    ...darkPalette, // Apply dark palette colors
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // Remove underline
          color: "#4caf50", // Primary green color for links in dark mode
          fontWeight: 500,
          fontStyle: "italic", // Italicize the link
          "&:hover": {
            textDecoration: "underline", // Underline on hover
            color: "#388e3c", // Darker green for hover effect
          },
        },
      },
    },
  },
});
