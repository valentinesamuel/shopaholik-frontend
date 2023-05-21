import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { ChangeEvent, FC, MouseEventHandler } from 'react';
type Props = {
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: MouseEventHandler;
  searchValue: string;
  placeHolder: string;
};

const SearchInput: FC<Props> = ({
  handleSearchInputChange,
  onSearchClick,
  searchValue,
  placeHolder,
}) => {
  return (
    <OutlinedInput
      label="Search Product"
      onChange={handleSearchInputChange}
      value={searchValue}
      placeholder={placeHolder}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="search button"
            onClick={onSearchClick}
            edge="end"
          >
            <Search />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchInput;
