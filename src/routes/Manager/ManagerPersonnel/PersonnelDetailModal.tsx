import { FC, useState } from 'react';
import SelectOptions from '../../../components/SelectOptions';
import { jobDesignationOptions } from '../../../Utils/categories';
import DeleteForever from '@mui/icons-material/DeleteForever';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {
  Avatar,
  Box,
  Button,
  Modal,
  Paper,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Personnel } from './personnels';

interface Props {
  open: boolean;
  onClose: () => void;
  personnel: Personnel;
}

const PersonnelDetailModal: FC<Props> = ({ onClose, open, personnel }) => {
  const [jobDesignation, setJobDesignation] = useState('');

  const handleJobDesignationChange = (event: SelectChangeEvent) => {
    setJobDesignation(event.target.value);
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          width: { desktop: 'fit-content', mobile: '80%' },
          padding: '30px',
          height: '90%',
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
          <Box
            sx={{ width: '100%', marginTop: { mobile: '5%', desktop: '0' } }}
          >
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ color: '#96989E', marginRight: '3%' }}>
                Staff ID:
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                {personnel.id.toUpperCase()}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', margin: '3% 0' }}>
              <Typography sx={{ color: '#96989E', marginRight: '3%' }}>
                Department:
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Management</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Typography sx={{ color: '#96989E', marginRight: '3%' }}>
                Job Desc.:
              </Typography>
              <SelectOptions
                selectLabel="Job Designation"
                options={jobDesignationOptions}
                label="job-desgination"
                width={'40%'}
                handleChange={handleJobDesignationChange}
                value={jobDesignation}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '3% 0' }}>
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
      </Paper>
    </Modal>
  );
};

export default PersonnelDetailModal;
