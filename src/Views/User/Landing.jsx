import React from "react";
import InitialView from "./components/InitialView";
import AboutUS from "./components/AboutUS";
import Features from "./components/Features";
import { Box } from "@mui/material";
import arrowImage from '../../assets/arrow.png'

export const Landing = () => {
  return (
    <div>
      {/* Section 1: InitialView */}
      <Box
        sx={{
          backgroundColor: "#744BFE",
          mx: "-200px", // Counter the layout's margin
          px: "200px",  // Reapply padding to keep content aligned
        }}
      >
        <InitialView />
      </Box>
      {/* Section 2 and 3 */}
      <Box
        sx={{
          background: `linear-gradient(130deg, #01011B 40%, #2A1551 90%)`,
          mx: "-200px",
          px: "200px",  
        }}
      >
        <AboutUS />
        <Features />
      </Box>
    </div>
  );
};
