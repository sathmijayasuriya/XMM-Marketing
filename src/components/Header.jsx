import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import logo from '../assets/xmm-logo.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery hook
import { useTheme } from '@mui/material/styles'; // Import useTheme for theme-based breakpoints

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme(); // Get the theme object
  const isMd = useMediaQuery(theme.breakpoints.up('md')); // Detect if screen size is 'md' or larger

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledAppBar = styled(AppBar)({
    backgroundColor: '#744BFE',
    boxShadow: 'none',
  });
  const NavButton = styled(Button)({ 
    background: 'none',
    fontSize: '18px ',
    color: '#FFFFFF',
    border: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    position: 'relative', // Ensure the pseudo-elements are positioned correctly
    '&:hover': {
      background: 'none',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0, // Position the line at the bottom of the button
      left: '0',
      width: '100%', // Lin+
      // e spans the full width of the button
      height: '2px',
      backgroundColor: '#FFFFFF', // Line color
      transition: 'width 0.3s ease', // Smooth transition for the line
    },
    '&:hover:after': {
      width: '100%', // Line expands fully on hover (it's already at 100%, so no change needed)
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '0', // Position triangle directly on top of the line
      left: '50%',
      transform: 'translateX(-50%) rotate(360deg)', // Triangle points up at the top of the line
      width: 0,
      height: 0,
      borderLeft: '12px solid transparent', // Increase size of the triangle (left side)
      borderRight: '12px solid transparent', // Increase size of the triangle (right side)
      borderBottom: '12px solid #FFFFFF', // Increase size of the triangle (bottom)
      opacity: 0, // Initially hidden
      transition: 'opacity 0.3s ease', // Smooth appearance
    },
    '&:hover:before': {
      opacity: 1, // Triangle appears on hover
    },
  });
  
  

  useEffect(() => {
    // Close the menu when screen size is large enough
    if (isMd) {
      setAnchorElNav(null);
    }
  }, [isMd]); // Trigger when screen size changes

  return (
    <Box sx={{ backgroundColor: '#744BFE', padding: "5px 195px 0px 195px" }}>
      <StyledAppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
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

          {/* Menu for larger screens */}
          <Box sx={{ flex: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <NavButton>Home</NavButton>
            <NavButton>About Us</NavButton>
            <NavButton>Tokennomics</NavButton>
            <NavButton>Roadmap</NavButton>
            <NavButton>FAQ</NavButton>
          </Box>

          {/* Hamburger Menu for smaller screens */}
          <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>Home</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>About Us</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Tokennomics</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Roadmap</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>FAQ</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#00bfa5',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#008c7d',
                    },
                    width: '100%',
                  }}
                >
                  Buy Token
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Buy Token Button for larger screens */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00bfa5',
                color: '#fff',
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
