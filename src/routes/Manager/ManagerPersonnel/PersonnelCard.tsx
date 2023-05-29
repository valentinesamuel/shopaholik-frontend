import { FC, Fragment, useState } from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import PersonnelDetailModal from './PersonnelDetailModal';

interface Props {}

const PersonnelCard: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
        }}
        onClick={handleOpen}
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
            Shift Duration:
            <span
              style={{
                color: '#4558FF',
                marginLeft: '2%',
                marginRight: '2%',
              }}
            >
              8 hours
            </span>
          </Typography>
        </Box>
      </Paper>

      <PersonnelDetailModal open={open} onClose={handleClose} />
    </Fragment>
  );
};

export default PersonnelCard;
