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
          mx: "-170px", // Counter the layout's margin
          px: "170px",  // Reapply padding to keep content aligned
        }}
      >
        <InitialView />
      </Box>

      {/* Combined Section 2 & 3: AboutUS + Features */}
      <Box
        sx={{
          background: `linear-gradient(100deg, #01011B 50%, #2A1551 80%)`,
          mx: "-170px", // Counter the layout's margin
          px: "170px",  // Reapply padding to keep content aligned
        }}
      >
        <AboutUS />
        <Features />
      </Box>
    </div>
  );
};
