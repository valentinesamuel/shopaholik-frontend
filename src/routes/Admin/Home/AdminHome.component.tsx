import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { DisplayArea, Sidebar, StyledLink, Wrapper2 } from './AdminHome.styles';
import {
  cashierSideRoutes,
  managerSideRoutes,
  supervisorSideRoutes,
} from './sideroutes';
import SideLink from '../../../components/SideLink';
import logout from '../../../assets/icons/logout.svg';
import { Box, Modal } from '@mui/material';
import Navbar from '../../../components/Navbar';
import { useAppSelector } from '../../../Utils/StateDispatch';

const currentSideRoutes = {
  MANAGER: managerSideRoutes,
  SUPERVISOR: supervisorSideRoutes,
  CASHIER: cashierSideRoutes,
};

const AdminHome: FC = () => {
  const [showNav, setShowNav] = useState(false);
  const handleOpen = () => setShowNav(true);
  const role = useAppSelector((state) => state.userReducer.user?.role);

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
          position: 'fixed',
        }}
      >
        {showNav ? (
          <ViewHeadlineIcon color="action" />
        ) : (
          <ViewHeadlineIcon color="action" onClick={handleOpen} />
        )}
      </Box>
      <Modal keepMounted open={showNav} onClose={handleClose}>
        <Sidebar>
          <div className="routes">
            <StyledLink to="/manager">Shopaholik</StyledLink>
            {role &&
              currentSideRoutes[role].map((route) => {
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
            <SideLink destination="/signin" icon={logout} name="sign out" />
          </div>
        </Sidebar>
      </Modal>
      <DisplayArea>
        <Navbar />
        <Outlet />
      </DisplayArea>
    </Wrapper2>
  );
};

export default AdminHome;
