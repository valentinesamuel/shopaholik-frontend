import { FC } from 'react';
import ManagerHome from './ManagerHome.component';
import SupervisorHome from './SupervisorHome.component';
import CashierHome from './CashierHome.component';
import { ADMINROLE } from '../../Utils/Types';
import { Outlet } from 'react-router-dom';

const userRoles = {
  MANAGER: <ManagerHome />,
  SUPERVISOR: <SupervisorHome />,
  CASHIER: <CashierHome />,
};

export const role: ADMINROLE = ADMINROLE.SUPERVISOR;

const Home: FC = () => {
  return (
    <>
      {userRoles[role]}
      <Outlet />
    </>
  );
};

export default Home;

Home.propTypes = {};
