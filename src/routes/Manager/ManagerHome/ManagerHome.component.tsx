import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {
  DisplayArea,
  Sidebar,
  StyledLink,
  Wrapper,
  Wrapper2,
} from './ManagerHome.styles';
import { sideRoutes } from './sideroutes';
import SideLink from '../../../components/SideLink';
import logout from '../../../assets/icons/logout.svg';
import { Box, Modal } from '@mui/material';
import Navbar from '../../../components/Navbar';

const ManagerHome: FC = () => {
  const [showNav, setShowNav] = useState(false);
  const handleOpen = () => setShowNav(true);
  const handleClose = () => setShowNav(false);

  return (
    <Wrapper2>
      <Box
        className="btn"
        onClick={() => setShowNav(!showNav)}
        sx={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 1,
          borderColor: 'primary.dark',
          height: 'fit-content',
        }}
      >
        {showNav ? (
          <KeyboardDoubleArrowLeftIcon color="action" />
        ) : (
          <KeyboardDoubleArrowRightIcon color="action" onClick={handleOpen} />
        )}
      </Box>
      <Modal keepMounted open={showNav} onClose={handleClose}>
        <Sidebar>
          <div className="routes">
            <StyledLink to="/manager">Shopaholik</StyledLink>
            {sideRoutes.map((route) => {
              return (
                <SideLink
                  destination={route.destination}
                  icon={route.icon}
                  name={route.name}
                  key={route.id}
                />
              );
            })}
          </div>
          <div className="signout">
            <SideLink destination="signout" icon={logout} name="sign out" />
          </div>
        </Sidebar>
      </Modal>
      {/* {showNav && (
        <Sidebar>
          <div className="routes">
            <StyledLink to="/">Shopaholik</StyledLink>
            {sideRoutes.map((route) => {
              return (
                <SideLink
                  destination={route.destination}
                  icon={route.icon}
                  name={route.name}
                  key={route.id}
                />
              );
            })}
          </div>
          <div className="signout">
            <SideLink destination="signout" icon={logout} name="sign out" />
          </div>
        </Sidebar>
      )} */}
      <DisplayArea>
        <Navbar />
        <Outlet />
      </DisplayArea>
    </Wrapper2>
  );
};

export default ManagerHome;

ManagerHome.propTypes = {};
