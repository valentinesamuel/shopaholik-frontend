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
import { personnelTabs } from '../../../Utils/OrderandShippinTab';
import PersonnelCard from './PersonnelCard';
import NewPersonnelModal from './NewPersonnelModal';
import BreadCrumbNavigation from '../../../components/BreadCrumbNavigation';
import { useLocation } from 'react-router-dom';
import { useGetPersonnelsQuery } from '../../../store/slice/PersonnelSlice/PersonnelApiSlice';

interface Props {}

const ManagerPersonnel: FC<Props> = () => {
  const [searchedPersonnel, setSearchedPersonnel] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [open, setOpen] = useState(false);
  const { data: personnelList } = useGetPersonnelsQuery();
  const [personnels, setPersonnels] = useState(personnelList);
  const location = useLocation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTabChange = (_: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
    const currentPersonnelDesignation = personnelTabs[newTab].value;

    const filterPersonnels = personnelList?.filter((personnel) => {
      if (currentPersonnelDesignation === '') {
        return true;
      }
      return personnel.jobDesignation === currentPersonnelDesignation;
    });

    setPersonnels(filterPersonnels);
  };

  const handleSearchPersonnel = (event: ChangeEvent<HTMLInputElement>) => {
    const newPersonnel = event.target.value;
    setSearchedPersonnel(newPersonnel);
    const filterPersonnels = personnelList?.filter((personnel) => {
      if (newPersonnel === '') {
        return true;
      }
      return `${personnel.firstName} ${personnel.lastName}`
        .toLowerCase()
        .includes(newPersonnel.toLowerCase());
    });

    setPersonnels(filterPersonnels);
  };

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        padding: { desktop: '1% 3% 3% 3%', mobile: '1% 20px 20px 20px' },
      }}
    >
      <BreadCrumbNavigation currentLocation={location} />
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
            {personnelTabs.map((tab: { id: string; label: string }) => {
              return <Tab key={tab.id} label={tab.label} />;
            })}
          </Tabs>
        </Box>

        <Button variant="contained" onClick={handleOpen} startIcon={<Add />}>
          Add new Personnel
        </Button>
      </Box>

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
        {personnels &&
          personnels.map((personnel) => (
            <PersonnelCard personnel={personnel} key={personnel.personnelId} />
          ))}
      </Box>

      <NewPersonnelModal open={open} onClose={handleClose} />
    </Paper>
  );
};

export default ManagerPersonnel;
