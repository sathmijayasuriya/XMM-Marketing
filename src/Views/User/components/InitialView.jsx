import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TelegramImageSet from "./TelegramImageSet";
import xmmHero from '../../../assets/xmm-hero.png'

export default function InitialView() {
  const theme = useTheme();

  const GradientTypography = styled(Typography)(({ theme }) => ({
    background: "linear-gradient(45deg, #fff 50%, rgba(197, 190, 190, 0.8) 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "8rem",
    // letterSpacing: "-0.04em",
    fontWeight: "600",
  }));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#744BFE",
          pt: 15, 
          pb: 10, 
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mx: 15 }}>
          <GradientTypography variant="h1">
            MARKETING MAKING
          </GradientTypography>
          <GradientTypography variant="h1" gutterBottom>
            WITH XMM.
          </GradientTypography>
          <Box sx = {{width:"45%"}}>
          <Typography variant="h6" color="white" sx={{ mb: 3, opacity: 0.8,fontWeight:'400'}}>
            XMM empowers businesses to create dynamic content, target specific demographics, 
            and optimize their digital presence.
          </Typography>
        <   TelegramImageSet />
        <Typography variant="h4" color="white" sx={{ mb: 3, opacity: 0.8,fontWeight:'600'}}>
            OUR HAPPY CUSTOMERS
          </Typography> 
          <Box sx = {{width:"70%"}}> 
          <Typography variant="h5" color="white" sx={{ mb: 3, opacity: 0.6,fontWeight:'450'}}>
          Our happy customers are at the heart of everything we do
          </Typography> 
          </Box>
          </Box>
        </Box>
        
      </Box>
    </>
  );
}