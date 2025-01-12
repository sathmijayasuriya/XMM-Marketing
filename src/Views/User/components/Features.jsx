import React from "react";
import { Box, Grid, Typography, Chip } from "@mui/material";
import featureIcon1 from "../../../assets/xmm-icon1.png";
import featureIcon2 from "../../../assets/xmm-icon2.png";
import featureIcon3 from "../../../assets/xmm-icon3.png";

export default function Features() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          py: 10,
          flexDirection: "column",
        }}
      >
        {/* Chip Section */}
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Chip
            label="FEATURES"
            variant="outlined"
            size="small"
            sx={{
              color: "white",
              fontSize: "11px",
              padding: "0px 7px",
              opacity: 0.7,
              alignSelf: "flex-start",
            }}
          />
        </Box>

        {/* Grid Section */}
        <Grid
          className="gridContainer"
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
          direction="row"
          wrap="nowrap"
        >
          {/* First Grid Item */}
          <Grid className="grid1" item xs={4}>
            <Typography
              variant="h2"
              color="white"
              sx={{ opacity: 0.8 }}
            >
              Features Of X
            </Typography>
            <Typography
              variant="h2"
              color="white"
              sx={{ mb: 3, opacity: 0.8 }}
            >
              MARKET MAKER
            </Typography>
            <Box sx={{ width: "63%" }}>
              <Typography
                variant="h5"
                color="white"
                sx={{ mb: 3, opacity: 0.8, mt: 25 }}
              >
                X Market Maker offers a comprehensive set of features tailored
                for market participants. Its core functionalities include
                real-time pricing, liquidity.
              </Typography>
            </Box>
          </Grid>

          {/* Other Grid Items */}
          {[{
            id: "01",
            title: "Benefits For Holders",
            description: `We aim to increase the value of our currency to benefit our community. Market Making will be key focus.`,
            imgSrc: featureIcon1,
          }, {
            id: "02",
            title: "Biggest Community",
            description: `XMM is the First ever Crypto with the market making objective that's being worked upon at such amazing level!`,
            imgSrc: featureIcon2,
          }, {
            id: "03",
            title: "Ecosystem-Redefined",
            description: `Our powerful token will protect our holders from the turbulence of the crypto market.`,
            imgSrc: featureIcon3,
          }].map((feature, index) => (
            <Grid
              key={index}
              className={`grid${index + 2}`}
              item
              xs={2.67}
              sx={{
                position: "relative",
                border: "0.1px solid rgba(255, 255, 255, 0.2)",
                borderTop: "none",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "50%", // Start in the middle vertically
                    left: "-1.5px", // Slightly shift left for alignment
                    transform: "translateY(-50%)", // Center align vertically
                    height: "5%", // Thickness height (adjust to your design)
                    width: "3px", // Thickness width
                    backgroundColor: "rgba(255, 255, 255, 0.4)", // Thicker, more opaque color
                  },
                "&:hover": {
                  borderTop: "0.1px solid rgba(255, 255, 255, 0.2)", // Thicker top border on hover
                },
              }}
            >   
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{ mb: 1, opacity: 0.8 }}
                >
                  {feature.id}
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  sx={{ mb: 20, opacity: 0.8, fontWeight: "600" }}
                >
                  {feature.title}
                </Typography>
                <img src={feature.imgSrc} alt={feature.title} />
                <Box sx={{ width: "100%" }}>
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ mb: 1, opacity: 0.8 ,width : "90%"}}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
