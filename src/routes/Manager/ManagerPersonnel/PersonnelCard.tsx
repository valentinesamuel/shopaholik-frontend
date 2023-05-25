import { FC, useState, useRef, ChangeEvent } from 'react';
import { Avatar, Box, Modal, Paper, Typography } from '@mui/material';
import PersonnelDetailModal from './PersonnelDetailModal';
import NewPersonnelModal from './NewPersonnelModal';

interface Props {}

const PersonnelCard: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <>
      <NewPersonnelModal
        imageUrl={selectedImage}
        fileInputRef={fileInputRef}
        handleFileInputChange={handleFileChange}
        onFileInputButtonClick={handleButtonClick}
      />
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
