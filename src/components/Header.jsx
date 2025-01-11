import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import logo from '../assets/xmm-logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const StyledAppBar = styled(AppBar)({
    backgroundColor: '#744BFE',
    boxShadow: 'none',
  });
  const NavButton = styled(Button)({
    background: 'none',
    fontSize : '18px',
    color: '#FFFFFF',
    fontWeight: 'normal',
    border: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    "&:hover": {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  });
  return (
    <>
  <StyledAppBar position="static">
      <Toolbar sx={{padding:"14px"}}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'right', }}>
          <img alt="Logo" style={{ height: '60px', objectFit: 'contain', marginLeft:'190px'}}  src={logo} />
        </Box>

        {/* Center Box - Navigation Links */}
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <NavButton>Home</NavButton>
          <NavButton>About Us</NavButton>
          <NavButton>Tokennomics</NavButton>
          <NavButton>Roadmap</NavButton>
          <NavButton>FAQ</NavButton>
        </Box>

        {/* Right Box - Buy Token Button */}
        <Box sx={{ flex: 1, display: 'flex', jus012589tifyContent: 'flex-end',marginLeft:'190px'}}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00bfa5',
              color: '#fff',
              fontWeight: 'bold',
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
    </>
  )
}
