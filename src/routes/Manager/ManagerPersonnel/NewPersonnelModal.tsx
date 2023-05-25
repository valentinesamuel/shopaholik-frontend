import { ChangeEventHandler, FC, MouseEventHandler, Ref } from 'react';

interface Props {
  onFileInputButtonClick: MouseEventHandler;
  fileInputRef: Ref<HTMLInputElement>;
  handleFileInputChange: ChangeEventHandler;
}

const NewPersonnelModal: FC<Props> = ({
  fileInputRef,
  handleFileInputChange,
  onFileInputButtonClick,
}) => {
  return (
    <div>
      <button onClick={onFileInputButtonClick}>Open File Dialog</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default NewPersonnelModal;
