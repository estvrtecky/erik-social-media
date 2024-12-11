import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchView() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        px: 2, // Added padding to the sides for better responsiveness
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Vyhľadávanie
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          variant="outlined"
          label="Hľadaj príspevky alebo používateľov"
          fullWidth
          size="small"
          sx={{
            bgcolor: "background.paper",
            boxShadow: 2,
            borderRadius: 1, // Slight border-radius for modern look
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            height: "100%",
            borderRadius: 1, // Match the input field's border radius
            padding: "10px 20px", // Adjust padding for better button feel
            boxShadow: 2, // Add subtle shadow for button depth
            "&:hover": {
              bgcolor: "primary.dark", // Darken the button on hover
            },
            "&:active": {
              bgcolor: "primary.main", // Keep the color when clicked
            },
          }}
          startIcon={<SearchIcon />}
        >
          Hľadať
        </Button>
      </Box>

      {/* Placeholder for search results */}
      <Box sx={{ marginTop: 4, width: "100%", textAlign: "center" }}>
        <Typography variant="body1" color="textSecondary">
          Zatiaľ neexistujú žiadne výsledky. Skúste niečo iné.
        </Typography>
      </Box>
    </Box>
  );
}
