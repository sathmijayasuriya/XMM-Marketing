import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import aboutUsImage from "../../../assets/xmm-img1.png";
import AboutSectionFeature from "./AboutSectionFeature";

export default function AboutUS() {
  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(135deg, #01011B 70%, #2A1551 100%)`, // Gradient with most of the color as #01011B
          width: "100%",
          py: 5,
        }}
      >
        <Grid
          container
          spacing={1}
          //   columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Center the image horizontally
              }}
            >
              <img
                src={aboutUsImage}
                alt="about us"
                style={{
                  maxWidth: "100%", // Make the image responsive
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              color="white"
              sx={{ opacity: 0.8, fontWeight: "600" }}
            >
              Best Ever Token Designed
            </Typography>
            <Typography
              variant="h3"
              color="white"
              sx={{ mb: 3, opacity: 0.8, fontWeight: "600" }}
            >
              For Remarkable Success
            </Typography>
            <Box sx={{ width: "63%" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 3, opacity: 0.8, fontWeight: "300" }}
              >
                The main advantage of supporting $XMM the project is focused on
                creating Volume and Market through. XMM empowers busniesses to
                creative dynamic content target specific
              </Typography>
            </Box>
            <AboutSectionFeature/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}