import { Avatar, Box, Modal, Paper, Typography } from '@mui/material';
import { FC, useState } from 'react';

interface Props {}

const PersonnelCard: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
      }}
      onClick={handleOpen}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
          }}
        >
          <Avatar
            sx={{
              height: 218,
              width: 218,
            }}
          >
            SM
          </Avatar>
          <Box>
            <Typography sx={{ color: '#96989E' }}>
              Staff ID:{' '}
              <span style={{ color: 'black', fontWeight: 'bold' }}>
                FLWK5UJ3UNT0D
              </span>
            </Typography>
          </Box>
        </Box>
      </Modal>

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
