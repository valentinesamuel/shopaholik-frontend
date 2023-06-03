import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useAddPersonnelMutation } from '../../../store/slice/PersonnelSlice/PersonnelApiSlice';
import {
  AvailAbilityStatus,
  Gender,
  JobDesignation,
  Personnel,
} from '../../../Utils/Types';
import SelectOptions from '../../../components/SelectOptions';
import { gender, personnelTabs } from '../../../Utils/OrderandShippinTab';

const defaultNewPersonnel: Personnel = {
  firstName: '',
  lastName: '',
  middleName: '',
  dateOfHire: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  jobDesignation: JobDesignation.FLOOR_WORKER,
  address: '',
  city: '',
  state: '',
  profilePicture: '',
  monthlySalary: 0,
  gender: Gender.MALE, //FIXME: Make a select for this
  availabilityStatus: AvailAbilityStatus.OFF_DUTY,
  guarantor: {
    name: '',
    relationshipWithStaff: '',
    phone: '',
    address: '',
    email: '',
  },
};

interface Props {
  open: boolean;
  onClose: () => void;
}

const NewPersonnelModal: FC<Props> = ({ onClose, open }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newPersonnel, setNewPersonnel] = useState(defaultNewPersonnel);
  const [addPersonnel] = useAddPersonnelMutation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPersonnel({ ...newPersonnel, [name]: value });
  };

  const handleAddNewPersonnel = () => {
    console.log(newPersonnel);
    addPersonnel(newPersonnel);
  };

  const handleButtonClick = () => {
    fileInputRef.current!.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewPersonnel({
          ...newPersonnel,
          profilePicture: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Modal
      keepMounted
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
          width: { desktop: '-webkit-fill-available', mobile: '80%' },
          padding: '30px',
          height: '90%',
          overflowX: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: {
              desktop: 'row',
              mobile: 'column',
            },
            padding: {
              desktop: '0 20%',
              mobile: '0',
            },
          }}
        >
          <Avatar
            sx={{ marginRight: '4%', height: '150px', width: '150px' }}
            alt="Remy Sharp"
            src={newPersonnel.profilePicture}
          />
          <Button
            sx={{
              margin: {
                desktop: '0 ',
                mobile: '3% 0',
              },
            }}
            variant="contained"
            onClick={handleButtonClick}
          >
            upload a picture
          </Button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              margin: {
                desktop: '5% 0 1% 0',
                mobile: '3% 0 2% 0',
              },
            }}
          >
            Personal Information
          </Typography>
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
              }}
            >
              <TextField
                name="firstName"
                onChange={handleChange}
                value={newPersonnel.firstName}
                type="text"
                label="First Name"
                variant="outlined"
              />
              <TextField
                name="lastName"
                onChange={handleChange}
                value={newPersonnel.lastName}
                type="text"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                name="middleName"
                onChange={handleChange}
                value={newPersonnel.middleName}
                type="text"
                label="Middle Name"
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
                margin: { mobile: '5% 0', desktop: '2% 0' },
              }}
            >
              <DatePicker
                label="Date of Birth"
                value={newPersonnel.dateOfBirth}
                onChange={(newDateOfBirth) =>
                  setNewPersonnel({
                    ...newPersonnel,
                    dateOfBirth: dayjs(newDateOfBirth).format(),
                  })
                }
              />
              <DatePicker
                label="Date of Hire"
                value={newPersonnel.dateOfHire}
                onChange={(newDateOfHire) =>
                  setNewPersonnel({
                    ...newPersonnel,
                    dateOfHire: dayjs(newDateOfHire).format(),
                  })
                }
              />
            </Box>
            <Box
              sx={{
                display: { desktop: 'grid' },
                gridTemplateColumns: ' minmax(200px, 1fr) minmax(300px, 2fr)',
                gap: '10px',
              }}
            >
              <TextField
                name="phoneNumber"
                onChange={handleChange}
                value={newPersonnel.phone}
                type="tel"
                label="Phone Number"
                variant="outlined"
                sx={{
                  width: '100%',
                  marginBottom: {
                    desktop: '0',
                    mobile: '5%',
                  },
                }}
              />

              <TextField
                name="email"
                onChange={handleChange}
                value={newPersonnel.email}
                type="text"
                label="Email"
                variant="outlined"
                sx={{
                  width: '100%',
                }}
              />
              <SelectOptions
                value={newPersonnel.gender}
                label="gender"
                sxStyles={{ width: '100%' }}
                selectLabel="Gender"
                options={gender}
                handleChange={(gender) => {
                  setNewPersonnel({
                    ...newPersonnel,
                    gender: gender.target.value as Gender,
                  });
                }}
              />
            </Box>
            <Box sx={{ marginTop: '2%' }}>
              <TextField
                name="address"
                onChange={handleChange}
                value={newPersonnel.address}
                label="Address"
                variant="outlined"
                sx={{
                  width: '100%',
                  marginBottom: {
                    desktop: '0',
                    mobile: '5%',
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
                marginTop: '2%',
              }}
            >
              <TextField
                name="city"
                onChange={handleChange}
                value={newPersonnel.city}
                label="City"
                variant="outlined"
              />
              <TextField
                name="state"
                onChange={handleChange}
                value={newPersonnel.state}
                label="State"
                variant="outlined"
              />
              <SelectOptions
                value={newPersonnel.jobDesignation}
                label="department"
                sxStyles={{ width: '100%' }}
                selectLabel="Department"
                options={personnelTabs.slice(1)}
                handleChange={(jobDesignation) => {
                  setNewPersonnel({
                    ...newPersonnel,
                    jobDesignation: jobDesignation.target
                      .value as JobDesignation,
                  });
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: {
              desktop: '5%',
              mobile: '2%',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              margin: {
                desktop: '5% 0 1% 0',
                mobile: '5% 0 2% 0',
              },
            }}
          >
            Guarantor's Information
          </Typography>
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
              }}
            >
              <TextField
                name="guarantorName"
                onChange={(newGuarantorName) =>
                  setNewPersonnel({
                    ...newPersonnel,
                    guarantor: {
                      ...newPersonnel.guarantor,
                      name: newGuarantorName.target.value,
                    },
                  })
                }
                value={newPersonnel.guarantor.name}
                type="text"
                label="Name"
                variant="outlined"
              />
              <FormControl>
                <InputLabel id="staff-relationship">
                  Staff Relationship
                </InputLabel>
                <Select
                  labelId="staff-relationship"
                  id="staff-relationship"
                  value={newPersonnel.guarantor.relationshipWithStaff}
                  label="relationship"
                  onChange={(newRel) =>
                    setNewPersonnel({
                      ...newPersonnel,
                      guarantor: {
                        ...newPersonnel.guarantor,
                        relationshipWithStaff: newRel.target.value,
                      },
                    })
                  }
                >
                  <MenuItem disabled value={''}>
                    Select
                  </MenuItem>
                  <MenuItem value={'father'}>Father</MenuItem>
                  <MenuItem value={'mother'}>Mother</MenuItem>
                  <MenuItem value={'brother'}>Brother</MenuItem>
                  <MenuItem value={'sister'}>Sister</MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: { desktop: 'grid' },
                gridTemplateColumns: ' minmax(200px, 1fr) minmax(300px, 2fr)',
                gap: '10px',
                marginTop: '2%',
              }}
            >
              <TextField
                name="guarantor-phoneNumber"
                onChange={(newGuarantorPhone) =>
                  setNewPersonnel({
                    ...newPersonnel,
                    guarantor: {
                      ...newPersonnel.guarantor,
                      phone: newGuarantorPhone.target.value,
                    },
                  })
                }
                value={newPersonnel.guarantor.phone}
                type="tel"
                label="Phone Number"
                variant="outlined"
                sx={{
                  width: '100%',
                  marginBottom: {
                    desktop: '0',
                    mobile: '5%',
                  },
                }}
              />

              <TextField
                name="guarantor-email"
                onChange={(newGuarantorEmail) =>
                  setNewPersonnel({
                    ...newPersonnel,
                    guarantor: {
                      ...newPersonnel.guarantor,
                      email: newGuarantorEmail.target.value,
                    },
                  })
                }
                value={newPersonnel.guarantor.email}
                type="text"
                label="Email"
                variant="outlined"
                sx={{
                  width: '100%',
                }}
              />
            </Box>
            <Box sx={{ marginTop: '2%' }}>
              <TextField
                name="gurantor-address"
                onChange={(newGuarantorAddress) =>
                  setNewPersonnel({
                    ...newPersonnel,
                    guarantor: {
                      ...newPersonnel.guarantor,
                      address: newGuarantorAddress.target.value,
                    },
                  })
                }
                value={newPersonnel.guarantor.address}
                label="Address"
                variant="outlined"
                sx={{
                  width: '100%',
                  marginBottom: {
                    desktop: '0',
                    mobile: '5%',
                  },
                }}
              />
            </Box>
          </Box>
        </Box>

        <Button
          color="success"
          startIcon={<DoneAllIcon />}
          onClick={handleAddNewPersonnel}
          variant="contained"
          sx={{
            marginTop: '7%',
            width: '100%',
          }}
        >
          Save Personnel
        </Button>
      </Paper>
    </Modal>
  );
};

export default NewPersonnelModal;
