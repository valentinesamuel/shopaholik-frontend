import { FC, Fragment, useState } from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import PersonnelDetailModal from './PersonnelDetailModal';
import { Personnel } from './personnels';

interface Props {
  personnel: Personnel;
}

const PersonnelCard: FC<Props> = ({ personnel }) => {
  const { name, department } = personnel;
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
            {name}
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
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            Department:
            <span
              style={{
                color: '#4558FF',
                marginLeft: '2%',
                marginRight: '2%',
              }}
            >
              {department}
            </span>
          </Typography>
        </Box>
      </Paper>

      <PersonnelDetailModal open={open} onClose={handleClose} />
    </Fragment>
  );
};

export default PersonnelCard;
