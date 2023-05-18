import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const ManagerHome: FC = () => {
  return (
    <>
      <h2>ManagerHome route</h2>
      <Outlet />
    </>
  );
};

export default ManagerHome;

ManagerHome.propTypes = {};
