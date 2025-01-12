import React from "react";
import { Box, Grid2 } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export const UserLayout = () => {
  return (
    <>
      <Header />
      <Grid2
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        sx={{
          height: "100%",
          minHeight: "calc(100vh - 60px)",
          m: 0, // Remove global margin
          padding: 0, // No global padding
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Outlet />
        </Box>
      </Grid2>
    </>
  );
};
