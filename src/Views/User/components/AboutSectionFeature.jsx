import React from 'react'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { Box,Typography, } from '@mui/material';

export default function AboutSectionFeature() {

  const features = ['Market','Volume','Trend'];
  return (
    <>
      <Box
       sx={{
        display: 'flex', 
        alignItems: 'center', 
        gap: 5, // Add spacing between feature groups (icon + text)
        mb:"20px"
      }}
      >
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex', 
            alignItems: 'center', 
          }}
        >
          <TaskAltOutlinedIcon sx={{ fontSize: 28, color: 'white', mr: 1 }} />
          <Typography
            variant="h6"
            color="white"
            sx={{ opacity: 0.8, 
                // fontWeight: 300 
              }}
          >
            {feature}
          </Typography>
        </Box>
      ))}
      </Box>
    </>
  )
}
