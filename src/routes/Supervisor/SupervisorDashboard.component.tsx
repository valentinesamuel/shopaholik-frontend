import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const SupervisorDashboard: FC = () => {
  return (
    <>
      <h2>SupervisorDashboard route</h2>
      <Outlet />
    </>
  );
};

export default SupervisorDashboard;

SupervisorDashboard.propTypes = {};
