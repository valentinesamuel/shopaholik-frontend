import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const defaultNewPersonnel = {
  firstName: '',
  lastName: '',
  middleName: '',
  dateOfHire: dayjs(new Date()),
  dateOfBirth: dayjs(new Date()),
  phoneNumber: '',
  email: '',
  address: '',
  city: '',
  state: '',
  country: '',
  guarantor: {
    name: '',
    relationship: '',
    phone: '',
    address: '',
    dateOfBirth: dayjs(new Date()),
  },
};

const NewPersonnelModal: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newPersonnel, setNewPersonnel] = useState(defaultNewPersonnel);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPersonnel({ ...newPersonnel, [name]: value });
  };

  const handleButtonClick = () => {
    fileInputRef.current!.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
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
      <button onClick={() => console.log(newPersonnel)}>sef</button>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
          sx={{ marginRight: '4%' }}
          alt="Remy Sharp"
          src={selectedImage as string}
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
        <Typography sx={{ fontSize: '.875rem', color: '#717687' }}>
          This is the name of the file.jpeg
        </Typography>
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
                  dateOfBirth: newDateOfBirth as Dayjs,
                })
              }
            />
            <DatePicker
              label="Date of Hire"
              value={newPersonnel.dateOfHire}
              onChange={(newDateOfHire) =>
                setNewPersonnel({
                  ...newPersonnel,
                  dateOfHire: newDateOfHire as Dayjs,
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
              value={newPersonnel.phoneNumber}
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
            <TextField
              name="country"
              onChange={handleChange}
              value={newPersonnel.country}
              label="Country"
              variant="outlined"
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
              name="guarantor-name"
              onChange={handleChange}
              value={newPersonnel.guarantor.name}
              type="text"
              label="Name"
              variant="outlined"
            />
            <DatePicker
              label="Date of Birth"
              value={newPersonnel.guarantor.dateOfBirth}
              onChange={(newDateOfBirth) =>
                setNewPersonnel({
                  ...newPersonnel,
                  guarantor: {
                    ...newPersonnel.guarantor,
                    dateOfBirth: newDateOfBirth as Dayjs,
                  },
                })
              }
            />
            <FormControl>
              <InputLabel id="relationship">Unit of Measurement</InputLabel>
              <Select
                labelId="relationship"
                id="relationship"
                value={newPersonnel.guarantor.relationship}
                label="relationship"
                onChange={(newRel) =>
                  setNewPersonnel({
                    ...newPersonnel,
                    guarantor: {
                      ...newPersonnel.guarantor,
                      relationship: newRel.target.value,
                    },
                  })
                }
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
              onChange={handleChange}
              value={newPersonnel.phoneNumber}
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
              onChange={handleChange}
              value={newPersonnel.email}
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
        </Box>
      </Box>

      <Button
        color="success"
        startIcon={<DoneAllIcon />}
        variant="contained"
        sx={{
          marginTop: '7%',
          width: '100%',
        }}
      >
        Save Personnel
      </Button>
    </Paper>
  );
};

export default NewPersonnelModal;
