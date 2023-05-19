import { Box, Stack } from '@mui/material';

const TestColors = () => {
  return (
    <>
      <Stack direction="row">
        <Box
          sx={{
            height: '100px',
            width: '100px',
            marginRight: '50px',
            backgroundColor: 'primary.main',
          }}
        ></Box>
        <Box
          sx={{
            height: '100px',
            width: '100px',
            marginRight: '50px',
            backgroundColor: 'primary.light',
          }}
        ></Box>
        <Box
          sx={{
            height: '100px',
            width: '100px',
            marginRight: '50px',
            backgroundColor: 'primary.dark',
          }}
        ></Box>
      </Stack>
      <Stack direction="row" sx={{ marginBottom: '120px' }}>
        <Box
          sx={{
            height: '100px',
            width: '100px',
            marginRight: '50px',
            backgroundColor: 'secondary.main',
          }}
        ></Box>
        <Box
          sx={{
            height: '100px',
            width: '100px',
            marginRight: '50px',
            backgroundColor: 'secondary.light',
          }}
        ></Box>
        <Box
          sx={{
            height: '100px',
            width: '100px',
            marginRight: '50px',
            backgroundColor: 'secondary.dark',
          }}
        ></Box>
      </Stack>
    </>
  );
};

export default TestColors;
