import { Add, Search } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Tab,
  Tabs,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import TabPanel from '../../../components/TabPanel.component';
import { orderTabs, personnelTabs } from '../../../Utils/OrderandShippinTab';
import PersonnelCard from './PersonnelCard';
import NewPersonnelModal from './NewPersonnelModal';

interface Props {}

const ManagerPersonnel: FC<Props> = () => {
  const [searchedPersonnel, setSearchedPersonnel] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTabChange = (_: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
  };

  const handleSearchPersonnel = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedPersonnel(event.target.value);
  };

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        // height: '100vh',
        overflowX: 'auto',
        padding: { desktop: '1% 3% 3% 3%', mobile: '1% 20px 20px 20px' },
      }}
    >
      <FormControl>
        <InputLabel htmlFor="searchPersonnel">Search Personnel</InputLabel>
        <OutlinedInput
          id="searchPersonnel"
          label="Search Personnel"
          onChange={handleSearchPersonnel}
          value={searchedPersonnel}
          placeholder="Search Personnel"
          sx={{
            width: '100%',
            outline: 'none',
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search button"
                onClick={() => console.log(searchedPersonnel)}
                edge="end"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          alignItems: { desktop: 'center', tablet: 'stretch' },
          justifyContent: 'space-between',

          flexDirection: {
            mobile: 'column',
            desktop: 'row',
          },
          margin: { mobile: '6% 0 6% 0', desktop: '1% 0 0% 0' },
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            margin: { mobile: '0 0 6% 0', desktop: '1% 0 1% 0' },
            width: { desktop: 'fit-content', mobile: '100%' },
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {personnelTabs.map((tab: (typeof orderTabs)[0]) => {
              return <Tab key={tab.id} label={tab.label} />;
            })}
          </Tabs>
        </Box>

        <Button variant="contained" onClick={handleOpen} startIcon={<Add />}>
          Add new Personnel
        </Button>
      </Box>

      <TabPanel value={currentTab} index={0}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              mobile: 'repeat(auto-fit, minmax(100%, 30%))',
              tablet: 'repeat(auto-fit, minmax(100%, 33%))',
              desktop: 'repeat(auto-fit, minmax(auto, 32%))',
            },
            justifyItems: 'stretch',
            justifyContent: 'space-between',
            rowGap: '5%',
            columnGap: '1%',
          }}
        >
          <PersonnelCard />
          <PersonnelCard />
          <PersonnelCard />
          <PersonnelCard />
          <PersonnelCard />
          <PersonnelCard />
          <PersonnelCard />
          <PersonnelCard />
          <PersonnelCard />
        </Box>
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <p>management</p>
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <p>floor worker</p>
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <p>sounter</p>
      </TabPanel>
      <TabPanel value={currentTab} index={4}>
        <p>security</p>
      </TabPanel>
      <NewPersonnelModal open={open} onClose={handleClose} />
    </Paper>
  );
};

export default ManagerPersonnel;
