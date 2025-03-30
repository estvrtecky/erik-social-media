import { createTheme } from "@mui/material/styles";

// Light theme
const lightPalette = {
  primary: {
    main: "#212121",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ff4081",
    contrastText: "#ffffff",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  text: {
    primary: "#212121",
    secondary: "#757575",
  },
  error: {
    main: "#f44336",
  },
  warning: {
    main: "#ff9800",
  },
  info: {
    main: "#2196f3",
  },
  success: {
    main: "#4caf50",
  },
};

// Dark theme
const darkPalette = {
  primary: {
    main: "#e0e0e0",
    contrastText: "#000000",
  },
  secondary: {
    main: "#f50057",
    contrastText: "#000000",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#e0e0e0",
    secondary: "#bdbdbd",
  },
  error: {
    main: "#ef5350",
  },
  warning: {
    main: "#ffa726",
  },
  info: {
    main: "#64b5f6",
  },
  success: {
    main: "#81c784",
  },
};

// Create the light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightPalette,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: lightPalette.primary.main,
          fontWeight: 500,
          "&:hover": {
            textDecoration: "underline",
            color: lightPalette.secondary.main,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `2px solid ${lightPalette.text.secondary}`,
          borderRadius: "8px",
        },
      },
    },
  },
});

// Create the dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkPalette,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: darkPalette.primary.main,
          fontWeight: 500,
          "&:hover": {
            textDecoration: "underline",
            color: darkPalette.secondary.main,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `2px solid ${darkPalette.text.secondary}`,
          borderRadius: "8px",
        },
      },
    },
  },
});
