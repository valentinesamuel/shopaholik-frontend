import { FC, useEffect } from 'react';
import { ADMINROLE } from '../../Utils/Types';
import { Outlet, useNavigate } from 'react-router-dom';

// const userRoles = {
//   MANAGER: <ManagerHome />,
//   SUPERVISOR: <SupervisorHome />,
//   CASHIER: <CashierHome />,
// };

export const role: ADMINROLE = ADMINROLE.MANAGER;

const RoleHome: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (role === String(ADMINROLE.MANAGER)) {
      navigate('/manager');
    } else if (role === String(ADMINROLE.SUPERVISOR)) {
      navigate('/supervisor');
    } else if (role === String(ADMINROLE.CASHIER)) {
      navigate('/cashier');
    }
  }, [role]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RoleHome;
