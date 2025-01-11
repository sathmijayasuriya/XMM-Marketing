import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xsm: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#D66C95",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    // fontFamily: `'Kanit', 'Oswald', 'Helvetica Neue', sans-serif`,
    button: {
        fontFamily: `'Google Sans', 'Roboto', 'Arial', 'sans-serif'`, // Button-specific fonts
        // fontWeight: 400,
        textTransform: 'none', // Optional: Disable uppercase transformation
      },
      h6: {
        fontFamily: `'Google Sans', 'Roboto', 'Arial', 'sans-serif'`, // Apply specific font to h6
        opacity: 0.8,  // If you want the opacity applied here instead
      },
  },
  shape: {
    borderRadius: 25,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "27px", // Round shape
          padding: "14px 30px", // Adjust padding
          background: "linear-gradient(91deg, #DD630D, #FFAA00)", // Gradient background
          color: "#FFFFFF", // White text color
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Subtle shadow
          textAlign: "center",
          "&:hover": {
            background: "linear-gradient(90deg, #FFAA00, #DD630D)", // Hover gradient reversal
          },
          outlined: {
            background: "none",
            color: "#FFFFFF",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
      },
    },


  },
});

export default Theme;
