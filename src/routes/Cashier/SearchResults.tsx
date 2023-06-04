import { Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  searchProductString: string;
  searchProductCodeString: string;
}

const SearchResults: FC<Props> = ({
  searchProductCodeString,
  searchProductString,
}) => {
  const str = searchProductCodeString
    ? searchProductCodeString
    : searchProductString;

  return (
    <Box
      sx={{
        height: '2%',
        width: '100%',
        position: 'relative',
        padding: '2% 0',
      }}
    >
      sdfgsdfg {str}
    </Box>
  );
};

export default SearchResults;
