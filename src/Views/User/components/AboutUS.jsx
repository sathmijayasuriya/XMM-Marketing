import React from "react";
import { Box, Grid, Typography, Button, Chip } from "@mui/material";
import aboutUsImage from "../../../assets/xmm-img1.png";
import AboutSectionFeature from "./AboutSectionFeature";

export default function AboutUS() {
  return (
    <>
      <Box
        sx={{
          // background: `linear-gradient(135deg, #01011B 70%, #2A1551 100%)`, // Gradient with most of the color as #01011B
          width: "100%",
          py: { xs: 3, sm: 5 }, 
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left", 
              }}
            >
              <img
                src={aboutUsImage}
                alt="about us"
                style={{
                  maxWidth: "100%", 
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                justifyContent: "right", 
              }}
            >
            <Chip
              label="ABOUT US"
              variant="outlined"
              size="small"
              sx={{
                color: "white",
                fontSize: "11px",
                padding: "0px 7px",
                mb: { xs: 1, sm: 2 }, // Adjust margin for small screens
                opacity: 0.7,
              }}
            />
            <Typography
              variant="h2"
              color="white"
              sx={{
                opacity: 0.8,
                fontSize: { xs: "2rem", sm: "3rem" }, // Adjust font size for small screens
                mb: 1,
              }}
            >
              Best Ever Token Designed
            </Typography>
            <Typography
              variant="h2"
              color="white"
              sx={{
                mb: 3,
                opacity: 0.8,
                fontSize: { xs: "2rem", sm: "3rem" }, // Adjust font size for small screens
              }}
            >
              For Remarkable Success
            </Typography>
            <Box sx={{ width: { xs: "100%", sm: "63%" } }}>
              <Typography
                variant="h6"
                color="white"
                sx={{
                  mb: 3,
                  opacity: 0.8,
                  fontSize: { xs: "1rem", sm: "1.25rem" }, // Adjust font size for small screens
                }}
              >
                The main advantage of supporting $XMM is that the project is focused on
                creating volume and market. XMM empowers businesses to create dynamic content
                and target specific audiences effectively.
              </Typography>
            </Box>
            <AboutSectionFeature />
            <Button
              sx={{
                mt: 3,
                backgroundColor: "#744BFE",
                color: "white",
                "&:hover": {
                  backgroundColor: "#5338b3",
                },
              }}
            >
              Read Whitepaper
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
