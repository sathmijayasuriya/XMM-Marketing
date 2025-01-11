import React from 'react';
import { Avatar } from '@mui/material';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import user1 from '../../../assets/user1.jpg';
import user2 from '../../../assets/user2.jpg';
import user3 from '../../../assets/user3.jpg';

export default function TelegramImageSet() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4,gap:5 }}>
        <Button>
          Join Telegram
        </Button>
        <AvatarGroup max={4}>
          <Avatar alt="User 1" src={user1} />
          <Avatar alt="User 2" src={user2} />
          <Avatar alt="User 3" src={user3} />
        </AvatarGroup>
      </Box>
    </>
  );
}
