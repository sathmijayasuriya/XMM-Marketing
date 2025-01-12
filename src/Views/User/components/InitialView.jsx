import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TelegramImageSet from "./TelegramImageSet";
import arrow from "../../../assets/arrow.png";
import frame from "../../../assets/frame1.png";
import xmmHero from "../../../assets/xmm-hero.png";

export default function InitialView() {
  const theme = useTheme();

  const GradientTypography = styled(Typography)(({ theme }) => ({
    background:
      "linear-gradient(45deg, #fff 50%, rgba(197, 190, 190, 0.8) 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "11rem",
    fontWeight: "1000",
    letterSpacing: "-0.01em",
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#744BFE",
        pt: 7,
        pb: 10,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        position: "relative", // Ensure the section is positioned
        zIndex: 0, // Lower z-index for the section content
      }}
    >
      <Box sx={{ mx: 0, px: 0 }}>
        <GradientTypography variant="h1">MARKETING MAKING</GradientTypography>
        <Grid container>
          <Grid item xs={7}>
            <GradientTypography variant="h1" gutterBottom>
              WITH XMM.
            </GradientTypography>
            <Box sx={{ width: "70%", mx: 0, px: 0 }}>
              <Typography variant="h6" color="white" sx={{ mb: 3 }}>
                XMM empowers businesses to create dynamic content, target
                specific demographics, and optimize their digital presence.
              </Typography>
              <TelegramImageSet />
              <Typography variant="h4" color="white" sx={{ mb: 3 }}>
                OUR HAPPY CUSTOMERS
              </Typography>
              <Box sx={{ width: "70%", mx: 0, px: 0 }}>
                <Typography variant="h5" color="white" sx={{ mb: 3 }}>
                  Our happy customers are at the heart of everything we do
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{mb:"10px"}}>
            <img
              src={xmmHero}
              alt="Frame"
              style={{ width: "100%", height: "auto" }}
            />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Add the frame image centered with higher z-index */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <img
          src={frame}
          alt="Frame"
          style={{
            width: "100%",
            height: "auto",
            opacity: "0.1",
            transform: "rotate(-20deg) scaleX(-1)",
          }}
        />
      </Box>
    </Box>
  );
}
