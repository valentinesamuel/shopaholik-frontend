import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';

interface Props {
  width?: string;
  options?: { value: number | string; name: string; id: string }[];
  label?: string;
  value: string;
  selectLabel: string;
  handleChange: (event: SelectChangeEvent) => void;
}

const SelectOptions: FC<Props> = ({
  width = 120,
  options,
  label,
  value,
  selectLabel,
  handleChange,
}) => {
  return (
    <Box sx={{ width: width }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{selectLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={'  '}>Select</MenuItem>
          {options?.map((option) => {
            return (
              <MenuItem key={option.id} value={option.value}>
                {option.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOptions;
