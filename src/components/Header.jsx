import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import logo from '../assets/xmm-logo.png';

export default function Header() {
  const StyledAppBar = styled(AppBar)({
    backgroundColor: '#744BFE',
    boxShadow: 'none',
  });

  const NavButton = styled(Button)({
    background: 'none',
    fontSize: '18px',
    color: '#FFFFFF',
    // fontWeight: 'normal',
    border: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    "&:hover": {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: '#744BFE', // Ensures the entire root has the same background
        padding: "0px 130px", // Simulate margin with padding
      }}
    >
      <StyledAppBar
        position="static"
        sx={{
          backgroundColor: 'transparent', // Transparent to inherit Box background
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ padding: "14px" }}>
          {/* Logo Section */}
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <img
              alt="Logo"
              style={{ height: '60px', objectFit: 'contain' }}
              src={logo}
            />
          </Box>

          {/* Center Box - Navigation Links */}
          <Box
            sx={{
              flex: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <NavButton>Home</NavButton>
            <NavButton>About Us</NavButton>
            <NavButton>Tokennomics</NavButton>
            <NavButton>Roadmap</NavButton>
            <NavButton>FAQ</NavButton>
          </Box>

          {/* Right Box - Buy Token Button */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00bfa5',
                color: '#fff',
                // fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#008c7d',
                },
              }}
            >
              Buy Token
            </Button>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
