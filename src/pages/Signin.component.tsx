import { ChangeEvent, FC, MouseEventHandler, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  SelectChangeEvent,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material';
import { ADMINROLE, PersonnelLogin } from '../Utils/Types';
import SelectOptions from '../components/SelectOptions';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../store/slice/UserSlice/UserApiSlice';

const dummyPersonnel: PersonnelLogin = {
  name: '',
  workerID: '',
  password: '',
  role: '',
};

const SignIn: FC = () => {
  const [personnelDetails, setPersonnelDetails] = useState(dummyPersonnel);
  const [loginUser, { data, isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string | null>();

  const loggedInUser = data ? data : personnelDetails;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonnelDetails({ ...personnelDetails, [name]: value });
  };

  const handleDesignationChange = (event: SelectChangeEvent) => {
    setPersonnelDetails({
      ...personnelDetails,
      role: event.target.value,
    });
  };

  const onLogin = async () => {
    const res = await loginUser(personnelDetails).unwrap();
    console.log(res);
    if (res) {
      navigate(`/${loggedInUser.role}`);
    } else {
      setErrMsg('Network Problem. Please refresh the page and re-login');
    }
  };

  return (
    <Paper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
          },
          height: '100vh',
        }}
      >
        <Box
          sx={{
            width: { desktop: '50%', mobile: '100%' },
            padding: { desktop: '7% 5% 0 10%', mobile: '20px' },
          }}
        >
          {errMsg && <Alert severity="error">{errMsg}</Alert>}
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
              value={personnelDetails.role}
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
            <Box sx={{ position: 'relative' }}>
              <Button
                onClick={onLogin}
                color="success"
                disabled={isLoading}
                variant="contained"
                sx={{
                  marginTop: {
                    desktop: '0%',
                    mobile: '5%',
                  },
                  width: '100%',
                }}
              >
                Login
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'inherit',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
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
