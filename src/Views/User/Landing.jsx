import React from "react";
import InitialView from "./components/InitialView";
import AboutUS from "./components/AboutUS";
import Features from "./components/Features";
import { Box } from "@mui/material";

export const Landing = () => {
  return (
    <div>
      {/* Section 1: InitialView */}
      <Box
        sx={{
          backgroundColor: "#744BFE",
          mx: 0, // Remove large margin
          px: { xs: "20px", sm: "200px" },  // Padding adjusted for small screens
        }}
      >
        <InitialView />
      </Box>
      {/* Section 2 and 3 */}
      <Box
        sx={{
          background: `linear-gradient(130deg, #01011B 40%, #2A1551 90%)`,
          mx: 0, // Remove large margin
          px: { xs: "20px", sm: "200px" },  // Padding adjusted for small screens
        }}
      >
        <AboutUS />
        <Features />
      </Box>
    </div>
  );
};
