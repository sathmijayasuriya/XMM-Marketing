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
          py: 5,
        //   px: 23    ,
        //   background: `linear-gradient(135deg, #01011B 70%, #2A1551 100%)`,
          flexDirection: "column", // Align everything in column direction
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
              alignSelf: "flex-start", // Align Chip to the left
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
          <Grid className="grid1" item xs={3.5}>
            <Typography
              variant="h3"
              color="white"
              sx={{ opacity: 0.8 }}
            >
              Features Of X
            </Typography>
            <Typography
              variant="h3"
              color="white"
              sx={{ mb: 3, opacity: 0.8 }}
            >
              MARKET MAKER
            </Typography>
            <Box sx={{ width: "63%" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 3, opacity: 0.8, mt: 30 }}
              >
                X Market Maker offers a comprehensive set of features tailored
                for market participants. Its core functionalities include
                real-time pricing, liquidity.
              </Typography>
            </Box>
          </Grid>

          <Grid
            className="grid2"
            item
            xs={2.83}
            sx={{
                position: "relative",
                border: "0.1px solid rgba(255, 255, 255, 0.2)", // Regular border for the grid
                borderTop: "none",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%", // Start in the middle vertically
                  left: "-1.9px", // Slightly shift right for alignment
                  transform: "translateY(-50%)", // Center align vertically
                  height: "5%", // Thickness height (adjust to your design)
                  width: "3px", // Thickness width
                  backgroundColor: "rgba(255, 255, 255, 0.4)", // Thicker, more opaque color
                },
              }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 1, opacity: 0.8, }}
              >
                01
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 20, opacity: 0.8,fontWeight:"600" }}
              >
                Benifits For Holders
              </Typography>
              <img src={featureIcon1} alt="ecosystem" />
              <Box sx={{ width: "100%" }}>
              <Typography
                variant="h7"
                color="white"
                sx={{ mb: 1, opacity: 0.8}}
              >
                We aim to increase the value of 
                our currency to benefit our 
                community. Market Making will 
                be key focus. We aim to increase 
                the value of our currency to 
                benefit our community.
              </Typography>

            </Box>  
            </Box>
          </Grid>

          <Grid
            className="grid3"
            item
            xs={2.83}
            sx={{
                position: "relative",
                border: "0.1px solid rgba(255, 255, 255, 0.2)", // Regular border for the grid
                borderTop: "none",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%", // Start in the middle vertically
                  left: "-1.9px", // Slightly shift right for alignment
                  transform: "translateY(-50%)", // Center align vertically
                  height: "5%", // Thickness height (adjust to your design)
                  width: "3px", // Thickness width
                  backgroundColor: "rgba(255, 255, 255, 0.4)", // Thicker, more opaque color
                },
              }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 1, opacity: 0.8, }}
              >
                02
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 20, opacity: 0.8,fontWeight:"600"   }}
              >
                Biggest Community
              </Typography>
              <img src={featureIcon2} alt="ecosystem" />
              <Box sx={{ width: "100%" }}>
              <Typography
                variant="h7"
                color="white"
                sx={{ mb: 1, opacity: 0.8,  }}
              >
                XMM is the First ever Crypto with 
                the market making objective 
                that's being worked upon 
                at such amazing level! We will 
                focus on community building 
                a lot for that.
              </Typography>

            </Box>  
            </Box>
          </Grid>

          <Grid
            className="grid4"
            item
            xs={2.83}
            sx={{
                position: "relative",
                border: "0.1px solid rgba(255, 255, 255, 0.2)", // Regular border for the grid
                borderTop: "none",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%", // Start in the middle vertically
                  left: "-1.9px", // Slightly shift right for alignment
                  transform: "translateY(-50%)", // Center align vertically
                  height: "5%", // Thickness height (adjust to your design)
                  width: "3px", // Thickness width
                  backgroundColor: "rgba(255, 255, 255, 0.4)", // Thicker, more opaque color
                },
              }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 1, opacity: 0.8,  }}
              >
                03
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 20, opacity: 0.8,fontWeight:"600"}}
              >
                Ecosystem-Redefined
              </Typography>
              <img src={featureIcon3} alt="ecosystem" />
              <Box sx={{ width: "100%" }}>
              <Typography
                variant="h7"
                color="white"
                sx={{ mb: 1, opacity: 0.8,  }}
              >
                Our powerful token will protect 
                our holders from the turbulence 
                of the crypto market and help 
                them hold despite the 
                uncertainty of the market.
              </Typography>

            </Box>  
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}