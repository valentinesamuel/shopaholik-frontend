import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useRef, useState } from 'react';

const defaultNewPersonnel = {
  firstName: '',
  lastName: '',
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
        height: { desktop: 'auto', mobile: '80%' },
        overflowX: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
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
        <TextField
          name="firstName"
          onChange={handleChange}
          value={newPersonnel.firstName}
          type='text'
          label="First Name"
          variant="outlined"
        />
        <button onClick={() => console.log(newPersonnel)}>fwef</button>
      </Box>
    </Paper>
  );
};

export default NewPersonnelModal;
