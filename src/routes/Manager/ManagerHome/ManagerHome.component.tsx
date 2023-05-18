import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { DisplayArea, Sidebar, StyledLink, Wrapper } from './ManagerHome.styles';
import { sideRoutes } from './sideroutes';
import SideLink from '../../../components/SideLink';
import logout from '../../../assets/icons/logout.svg';

const ManagerHome: FC = () => {
  return (
    <Wrapper>
      <Sidebar
      >
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
      <DisplayArea>
        <Outlet />
      </DisplayArea>
    </Wrapper>
  );
};

export default ManagerHome;

ManagerHome.propTypes = {};
