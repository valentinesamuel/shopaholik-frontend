import { FC, Fragment, useState } from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import PersonnelDetailModal from './PersonnelDetailModal';
import { Personnel } from '../../../Utils/Types';
import { convertNumberToLocale } from '../../../Utils/Converter';
import { Phone } from '@mui/icons-material';

interface Props {
  personnel: Personnel;
}

const PersonnelCard: FC<Props> = ({ personnel }) => {
  const {
    firstName,
    lastName,
    jobDesignation,
    address,
    state,
    city,
    phone,
    monthlySalary,
  } = personnel;
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
        <Avatar sx={{ width: 80, height: 80, marginRight: '8%' }}>
          {firstName[0]}{lastName[0]}
        </Avatar>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: '600' }}>
            {firstName} {lastName}
          </Typography>
          <Typography sx={{ margin: '10px 0' }}>
            {address}, {city}. {state}
          </Typography>
          <Typography sx={{ margin: '10px 0' }}>{phone}</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            Salary:
            <span
              style={{
                color: '#4558FF',
                marginLeft: '2%',
                marginRight: '2%',
              }}
            >
              N {convertNumberToLocale(monthlySalary)}
            </span>
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            Designation:
            <span
              style={{
                color: '#4558FF',
                marginLeft: '2%',
                marginRight: '2%',
              }}
            >
              {jobDesignation}
            </span>
          </Typography>
        </Box>
      </Paper>

      <PersonnelDetailModal
        personnel={personnel}
        open={open}
        onClose={handleClose}
      />
    </Fragment>
  );
};

export default PersonnelCard;
