import React from "react";
import { Box, CssBaseline, Grid2 } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export const UserLayout = () => {
  return (
    <>
      <Header />
      <Grid2
        // container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        sx={{
          height: "100%",
          minHeight: "calc(100vh - 64px)",
          m: "0px 170px  0px 170px",
          // padding:"20px"
        }}
      >
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Grid2>
    </>
  );
};
