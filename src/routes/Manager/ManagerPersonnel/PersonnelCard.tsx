import {
  Avatar,
  Box,
  Button,
  Modal,
  Paper,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import SelectOptions from '../../../components/SelectOptions';
import { jobDesignationOptions } from '../categories';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForever from '@mui/icons-material/DeleteForever';
import DoneAllIcon from '@mui/icons-material/DoneAll';

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
        width: { desktop: 'fit-content', mobile: '80%' },
        padding: '30px',
        height: { desktop: 'auto', mobile: '90%' },
        overflowX: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
          },
          marginBottom: {
            desktop: '0',
            mobile: '5%',
          },
        }}
      >
        <Avatar
          sx={{
            height: 218,
            width: 218,
            marginRight: '3%',
            marginBottom: {
              desktop: '0',
              mobile: '4%',
            },
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
          flexDirection: 'column',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Personal Info
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                mobile: 'column',
                desktop: 'row',
              },
              alignItems: 'stretch',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '100%', marginRight: '40px' }}>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  First Name
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  Uwaila
                </Typography>
              </Box>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  First Name
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  Uwaila
                </Typography>
              </Box>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  First Name
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  Uwaila
                </Typography>
              </Box>
            </div>
            <div style={{ width: '100%', marginRight: '40px' }}>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  Phone No.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  +234 (1) 2850 1300
                </Typography>
              </Box>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  Email
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  priscillia4life@yahoo.com
                </Typography>
              </Box>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  Date of Birth
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  13, January, 1997
                </Typography>
              </Box>
            </div>
            <div style={{ width: '100%', marginRight: '40px' }}>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography color="gray">Date of Hire</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  23, March, 2020
                </Typography>
              </Box>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography color="gray">Date of Birth</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  13, January, 1997
                </Typography>
              </Box>
              <Box
                sx={{
                  margin: {
                    desktop: '2% 0',
                    mobile: '5% 0',
                  },
                }}
              >
                <Typography color="gray">Address</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
                >
                  38, Bori camp. Niger State, Minna
                </Typography>
              </Box>
            </div>
          </Box>
        </Box>
        <Box sx={{ marginTop: '6%' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Guarantor's Info
          </Typography>
          <Box>
            <Box
              sx={{
                margin: {
                  desktop: '2% 0',
                  mobile: '5% 0',
                },
              }}
            >
              <Typography variant="subtitle2" color="gray">
                Name
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
              >
                Rogers James
              </Typography>
            </Box>
            <Box
              sx={{
                margin: {
                  desktop: '2% 0',
                  mobile: '5% 0',
                },
              }}
            >
              <Typography variant="subtitle2" color="gray">
                Phone No.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
              >
                +234 (080) 4275 2486
              </Typography>
            </Box>
            <Box
              sx={{
                margin: {
                  desktop: '2% 0',
                  mobile: '5% 0',
                },
              }}
            >
              <Typography variant="subtitle2" color="gray">
                Address
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}
              >
                Upper Lawane. Benin City{' '}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: '10%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
          },
        }}
      >
        <Button
          color="error"
          variant="contained"
          startIcon={<DeleteForever />}
          sx={{
            marginTop: {
              desktop: '0%',
              mobile: '5%',
            },
            width: {
              desktop: 'fit-content',
              mobile: '100%',
            },
          }}
        >
          Delete Personnel
        </Button>
        <Button
          color="success"
          startIcon={<DoneAllIcon />}
          variant="contained"
          sx={{
            marginTop: {
              desktop: '0%',
              mobile: '5%',
            },
            width: {
              desktop: '30%',
              mobile: '100%',
            },
          }}
        >
          Save Personnel
        </Button>
      </Box>
    </Box>
  );
};
