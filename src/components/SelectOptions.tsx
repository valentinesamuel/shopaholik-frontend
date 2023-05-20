import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC, useState } from 'react';

interface Props {
  width?: string;
  options?: { value: number; name: string; id: string }[];
  label?:string
}

const SelectOptions: FC<Props> = ({ width = 120, options,label }) => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ width: width }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={''}>Select</MenuItem>
          {options?.map((option) => {
            return <MenuItem key={option.id} value={option.value}>{option.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOptions;
