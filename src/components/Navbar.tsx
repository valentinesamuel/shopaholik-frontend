import { Avatar, Box } from '@mui/material';
import { FC } from 'react';
import { styled } from 'styled-components';
import { UserTheme } from '../Utils/UserTheme';

const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;

  .role-greeting {
    .greeting {
      font-size: ${UserTheme.fontSize.regular};
      font-weight: ${UserTheme.fontWeight.normal};
      color: ${UserTheme.color.secondary600};
    }
    .role {
      font-size: ${UserTheme.fontSize.base};
      font-weight: ${UserTheme.fontWeight.bold};
      color: #2f80ed;
      margin-top: 27px;
    }
  }
  .image {
    display: flex;
    align-items: center;
    .name {
      margin-left: 20px;
      font-weight: ${UserTheme.fontWeight.bold};
      color: ${UserTheme.color.secondary600};
    }
  }
`;

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <div className="role-greeting">
        <p className="greeting">Good Morning,</p>
        <p className="role">Manager</p>
      </div>
      <div className="image">
        {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
        <Avatar sx={{ bgcolor: 'primary.dark', padding:3 }}>EM</Avatar>
        <p className="name">Emmauel</p>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
