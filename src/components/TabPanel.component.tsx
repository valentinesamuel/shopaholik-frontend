import { Box } from '@mui/material';
import { FC } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index?: number;
  value: number;
  other?: any;
}

const TabPanel: FC<TabPanelProps> = ({ index, value, children, other }) => {
  return (
    <div
      role="tabpanel"
      hidden={false}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabPanel;
