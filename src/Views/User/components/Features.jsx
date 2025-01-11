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
          px: 15,
          background: `linear-gradient(135deg, #01011B 70%, #2A1551 100%)`,
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
          <Grid className="grid1" item xs={3}>
            <Typography
              variant="h3"
              color="white"
              sx={{ opacity: 0.8, fontWeight: "600" }}
            >
              Features Of X
            </Typography>
            <Typography
              variant="h3"
              color="white"
              sx={{ mb: 3, opacity: 0.8, fontWeight: "600" }}
            >
              MARKET MAKER
            </Typography>
            <Box sx={{ width: "63%" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 3, opacity: 0.8, fontWeight: "100", mt: 30 }}
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
            xs={3}
            sx={{
              border: "0.1px solid rgba(255, 255, 255, 0.2)", // Semi-transparent white
              borderTop: "none",
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
                sx={{ mb: 1, opacity: 0.8, fontWeight: "300" }}
              >
                01
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 20, opacity: 0.8, fontWeight: "300" }}
              >
                Benifits For Holders
              </Typography>
              <img src={featureIcon1} alt="ecosystem" />
              <Box sx={{ width: "100%" }}>
              <Typography
                variant="h7"
                color="white"
                sx={{ mb: 1, opacity: 0.8, fontWeight: "300" }}
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
            xs={3}
            sx={{
              border: "0.1px solid rgba(255, 255, 255, 0.2)", // Semi-transparent white
              borderTop: "none",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 1, opacity: 0.8, fontWeight: "300" }}
              >
                02
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 20, opacity: 0.8, fontWeight: "300" }}
              >
                Biggest Community
              </Typography>
              <img src={featureIcon2} alt="ecosystem" />
              <Box sx={{ width: "100%" }}>
              <Typography
                variant="h7"
                color="white"
                sx={{ mb: 1, opacity: 0.8, fontWeight: "300" }}
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
            xs={3}
            sx={{
              border: "0.1px solid rgba(255, 255, 255, 0.2)", // Semi-transparent white
              borderTop: "none",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 1, opacity: 0.8, fontWeight: "300" }}
              >
                03
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 20, opacity: 0.8, fontWeight: "300" }}
              >
                Ecosystem-Redefined
              </Typography>
              <img src={featureIcon3} alt="ecosystem" />
              <Box sx={{ width: "100%" }}>
              <Typography
                variant="h7"
                color="white"
                sx={{ mb: 1, opacity: 0.8, fontWeight: "300" }}
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
