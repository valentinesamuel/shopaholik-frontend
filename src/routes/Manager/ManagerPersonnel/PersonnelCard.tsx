import {
  Avatar,
  Box,
  Modal,
  Paper,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import SelectOptions from '../../../components/SelectOptions';
import { jobDesignationOptions } from '../categories';

interface Props {}

const PersonnelCard: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PersonnelDetailModal />
      </Modal>
    </>
  );
};

export default PersonnelCard;

const PersonnelDetailModal = () => {
  const [jobDesignation, setJobDesignation] = useState('');

  const handleJobDesignationChange = (event: SelectChangeEvent) => {
    setJobDesignation(event.target.value);
  };
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        width: { desktop: '40%', mobile: '80%' },
        padding: '30px',
        height: { desktop: 'auto', mobile: '90%' },
      overflowX: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          sx={{
            height: 218,
            width: 218,
            marginRight: '3%',
          }}
        >
          SM
        </Avatar>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ color: '#96989E', marginRight: '3%' }}>
              Staff ID:
            </Typography>
            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
              FLWK5UJ3UNT0D
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Typography sx={{ color: '#96989E', marginRight: '3%' }}>
              Job Desc.:
            </Typography>
            <SelectOptions
              selectLabel="Job Description"
              options={jobDesignationOptions}
              label="job-description"
              width={'60%'}
              handleChange={handleJobDesignationChange}
              value={jobDesignation}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#96989E', marginRight: '3%' }}>
              Pay rate:
            </Typography>
            <Typography sx={{ marginRight: '3%' }}>
              N 35,000 per month
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
          },
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Personal Info
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                mobile: 'repeat(auto-fit, minmax(100%, 100%))',
                tablet: 'repeat(auto-fit, minmax(100%, 30%))',
                desktop: 'repeat(auto-fit, minmax(130px, auto))',
              },
              justifyItems: 'stretch',
              justifyContent: 'space-between',
              rowGap: '5%',
              columnGap: '1%',
              width: '100%',
            }}
          >
            <div style={{ width: '100%' }}>
              <Typography color="gray">First Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Uwaila
              </Typography>
            </div>
            <div>
              <Typography color="gray">Last Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Jemila
              </Typography>
            </div>
            <div>
              <Typography color="gray">Middle Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Dora
              </Typography>
            </div>
            <div>
              <Typography color="gray">First Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Uwaila
              </Typography>
            </div>
            <div>
              <Typography color="gray">First Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Uwaila
              </Typography>
            </div>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Personal Info
          </Typography>
          <Box>
            <div>
              <Typography color="gray">First Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Uwaila
              </Typography>
            </div>
            <div>
              <Typography color="gray">First Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Uwaila
              </Typography>
            </div>
            <div>
              <Typography color="gray">First Name</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Uwaila
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
