import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const MissingPage: React.FC = () => {
  return (
    <Paper
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Typography variant="h3">
          Sorry, that resource does not exist{' '}
        </Typography>
        <Button sx={{ marginTop: '10%' }} variant="outlined">
          <Link to="/" style={{ textDecoration: 'none' }}>
            Go back Home
          </Link>
        </Button>
      </Box>
    </Paper>
  );
};

export default MissingPage;
