import { Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { styled } from 'styled-components';
import { UserTheme } from '../Utils/UserTheme';
import blue from '@mui/material/colors/blue';
import { useAppSelector } from '../Utils/StateDispatch';

const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 1% 3% 0 3%;

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
  const name = useAppSelector((state) => state.userReducer.user.name);

  return (
    <NavbarContainer>
      <div className="role-greeting">
        <Typography>Good Morning,</Typography>
        <Typography
          sx={{
            marginTop: '10%',
            color: blue[500],
          }}
          variant="body1"
        >
          {name}
        </Typography>
      </div>
      <div className="image">
        {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
        <Avatar
          sx={{
            bgcolor: 'primary.light',
            color: 'secondary.dark',
            padding: 3,
            marginRight: 3,
          }}
        >
          {name.split(' ')[1][0]}
        </Avatar>
        <Typography
          sx={{
            color: 'primary.contrastText',
            marginRight: '8%',
            display: {
              mobile: 'none',
              tablet: 'block',
            },
          }}
          variant="body1"
        >
          {name.split(' ')[1]}
        </Typography>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
