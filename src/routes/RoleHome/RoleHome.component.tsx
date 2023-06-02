import { FC, useEffect } from 'react';
import { ADMINROLE } from '../../Utils/Types';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../Utils/StateDispatch';

const RoleHome: FC = () => {
  const role = useAppSelector((state) => state.userReducer.user?.role);

  const navigate = useNavigate();

  useEffect(() => {
    if (role === String(ADMINROLE.MANAGER)) {
      navigate('/manager');
    } else if (role === String(ADMINROLE.SUPERVISOR)) {
      navigate('/supervisor');
    } else if (role === String(ADMINROLE.CASHIER)) {
      navigate('/cashier');
    }
    if (role === null) {
      navigate('/signin');
    }
  }, [role]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RoleHome;
