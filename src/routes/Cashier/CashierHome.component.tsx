import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const CashierHome: FC = () => {
  return (
    <>
      <h2>CashierHome route</h2>
      <Outlet />
    </>
  );
};

export default CashierHome;

CashierHome.propTypes = {};
