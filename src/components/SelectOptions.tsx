import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from '@mui/material';
import { FC } from 'react';

interface Props {
  width?: string;
  options?: { value: number | string; id: string; name?: number | string }[];
  label?: string;
  value: string;
  selectLabel: string;
  handleChange: (event: SelectChangeEvent) => void;
  sxStyles?: SxProps;
}

const SelectOptions: FC<Props> = ({
  width = 120,
  options,
  label,
  value,
  selectLabel,
  sxStyles,
  handleChange,
}) => {
  return (
    <Box sx={{ width: width, ...sxStyles }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{selectLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={''}>Select</MenuItem>
          {options?.map((option) => {
            return (
              <MenuItem key={option.id} value={option.value}>
                {option.name ? option.name : option.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOptions;
