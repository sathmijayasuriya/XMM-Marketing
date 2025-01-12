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
    fontFamily: "'Helvetica Neue', sans-serif", // Global font family
    button: {
      fontFamily: "'Google Sans', 'Roboto', 'Arial', sans-serif",
      textTransform: "none", 
    },
    h6: {
      fontFamily: "'Google Sans', 'Roboto', 'Arial', sans-serif", 
      fontWeight:"lighter"
    },
    h5: {
        fontFamily: "'Google Sans', 'Roboto', 'Arial', sans-serif",
        fontWeight:"100"
      },
      h4: {
        fontFamily: "'Google Sans', 'Roboto', 'Arial', sans-serif", 
        fontWeight:"500"
      },
      h2: {
        fontWeight:"500"
      },
      
  },
  shape: {
    borderRadius: 25,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "29px", 
          padding: "14px 35px",
          background: "linear-gradient(91deg, #DD630D, #FFAA00)", // Gradient background
          color: "#FFFFFF", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", 
          textAlign: "center",
          "&:hover": {
            background: "linear-gradient(90deg, #FFAA00, #DD630D)", // Hover gradient reversal
          },
          fontSize:"20px",
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
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Roboto', sans-serif", 
          fontWeight: "100", 
        },
      },
    },
  },
});

export default Theme;
