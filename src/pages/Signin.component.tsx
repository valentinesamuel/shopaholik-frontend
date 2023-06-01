import { ChangeEvent, FC, MouseEventHandler, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { ADMINROLE, AvailAbilityStatus, Personnel } from '../Utils/Types';
import SelectOptions from '../components/SelectOptions';
import { useNavigate } from 'react-router-dom';

const defaultPersonnel: Personnel = {
  personnel_id: 'ab8f4673',
  first_name: '',
  last_name: '',
  middle_name: '',
  date_of_birth: '',
  profile_picture_url: '',
  phone: '74535678467',
  email: '',
  religion: '',
  address: '',
  city: '',
  state: '',
  marital_status: '',
  gender: '',
  country: '',
  additional_info: '',
  guarantor: {
    name: '',
    date_of_birth: '',
    relationship_with_staff: '',
    phone: '23420803535',
    email: '',
    address: '',
    gender: '',
  },
  job_designation: ADMINROLE.MANAGER,
  availability_status: AvailAbilityStatus.ON_DUTY,
  monthly_salary: 70000,
};

const dummyPersonnel = {
  name: '',
  workerID: '',
  password: '',
  designation: '',
};

const SignIn: FC = () => {
  const [personnelDetails, setPersonnelDetails] = useState(dummyPersonnel);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonnelDetails({ ...personnelDetails, [name]: value });
  };

  const handleDesignationChange = (event: SelectChangeEvent) => {
    setPersonnelDetails({
      ...personnelDetails,
      designation: event.target.value,
    });
  };

  const onLogin = () => {
    console.log(personnelDetails);
    navigate('/');
  };

  return (
    <Paper sx={{ height: '100vh' }}>
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
        <Box
          sx={{
            width: { desktop: '50%', mobile: '100%' },
            padding: { desktop: '7% 5% 0 10%', mobile: '20px' },
          }}
        >
          <Box>
            <Typography variant="h3" color="primary">
              Welcome to
              <span style={{ fontFamily: 'Flavors' }}> Shopaholik</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: '2%', marginBottom: '5%' }}
            >
              Please sign in with your employee details
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', margin: '5% 0' }}
          >
            <TextField
              name="name"
              onChange={handleChange}
              value={personnelDetails.name}
              type="text"
              label="Name"
              variant="outlined"
            />
            <TextField
              name="workerID"
              onChange={handleChange}
              value={personnelDetails.workerID}
              type="text"
              label="Worker ID"
              variant="outlined"
              sx={{ margin: '3% 0' }}
            />
            <TextField
              name="password"
              onChange={handleChange}
              value={personnelDetails.password}
              type="password"
              label="Password"
              variant="outlined"
            />
            <SelectOptions
              handleChange={handleDesignationChange}
              selectLabel="Designation"
              value={personnelDetails.designation}
              label="Designation"
              options={[
                { value: ADMINROLE.MANAGER, id: '1', name: 'Manager' },
                { value: ADMINROLE.CASHIER, id: '2', name: 'Cashier' },
                { value: ADMINROLE.SUPERVISOR, id: '3', name: 'Supervisor' },
              ]}
              sxStyles={{
                width: '100%',
                margin: '3% 0',
              }}
            />
            <Button
              onClick={onLogin}
              color="success"
              variant="contained"
              sx={{
                marginTop: {
                  desktop: '0%',
                  mobile: '5%',
                },
                width: {
                  desktop: '100%',
                  mobile: '100%',
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: '50%',
            display: {
              desktop: 'inline',
              mobile: 'none',
            },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="header-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default SignIn;
