import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const TableModal: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper>{children}</Paper>
      </Modal>
    </div>
  );
};

export default TableModal;
