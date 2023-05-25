import { Avatar } from '@mui/material';
import { ChangeEventHandler, FC, MouseEventHandler, Ref } from 'react';

interface Props {
  imageUrl: string | null;
  onFileInputButtonClick: MouseEventHandler;
  fileInputRef: Ref<HTMLInputElement>;
  handleFileInputChange: ChangeEventHandler;
}

const NewPersonnelModal: FC<Props> = ({
  fileInputRef,
  handleFileInputChange,
  onFileInputButtonClick,
  imageUrl,
}) => {
  return (
    <div>
      <Avatar alt="Remy Sharp" src={imageUrl as string} />
      <button onClick={onFileInputButtonClick}>Open File Dialog</button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default NewPersonnelModal;
