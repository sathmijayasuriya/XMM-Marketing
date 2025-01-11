import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TelegramImageSet from "./TelegramImageSet";

export default function InitialView() {
  const theme = useTheme();

  const GradientTypography = styled(Typography)(({ theme }) => ({
    background: "linear-gradient(45deg, #fff 50%, rgba(197, 190, 190, 0.8) 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "11rem",
    fontWeight: "1000",
  }));

  return (
    <>
      <Box
        sx={{
            backgroundColor: "#744BFE",
          pt: 10,
          pb: 10,
          alignItems: "center",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <Box sx={{ mx: 0, px: 0 }}> 
          <GradientTypography variant="h1">
            MARKETING MAKING
          </GradientTypography>
          <GradientTypography variant="h1" gutterBottom>
            WITH XMM.
          </GradientTypography>
          <Box sx={{ width: "45%", mx: 0, px: 0 }}>
            <Typography variant="h6" color="white" sx={{ mb: 3 }}>
              XMM empowers businesses to create dynamic content, target specific demographics,
              and optimize their digital presence.
            </Typography>
            <TelegramImageSet />
            <Typography variant="h4" color="white" sx={{ mb: 3}}>
              OUR HAPPY CUSTOMERS
            </Typography>
            <Box sx={{ width: "70%", mx: 0, px: 0 }}>
              <Typography variant="h5" color="white" sx={{ mb: 3,}}>
                Our happy customers are at the heart of everything we do
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
