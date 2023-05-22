import { Avatar, Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {}

const PersonnelCard: FC<Props> = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
      }}
      onClick={() => console.log('')}
    >
      <Avatar sx={{ width: 80, height: 80, marginRight: '8%' }}>OJ</Avatar>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: '600' }}>
          Osahon James
        </Typography>
        <Typography sx={{ margin: '10px 0' }}>
          38, Bori camp. Niger State Minna Nigeria
        </Typography>
        <Typography sx={{ margin: '10px 0' }}>+234 (1) 280 1300</Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Shift ends in:
          <span
            style={{
              color: '#4558FF',
              marginLeft: '2%',
              marginRight: '2%',
            }}
          >
            06:32
          </span>
          hrs
        </Typography>
      </Box>
    </Paper>
  );
};

export default PersonnelCard;
