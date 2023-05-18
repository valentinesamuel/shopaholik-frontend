import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const SupervisorHome: FC = () => {
  return (
    <>
      <h2>Supervisor Home</h2>
      <Outlet />;
    </>
  );
};

export default SupervisorHome;

SupervisorHome.propTypes = {};
