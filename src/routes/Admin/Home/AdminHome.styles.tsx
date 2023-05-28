import { Link } from 'react-router-dom';
import { styled as Styled } from 'styled-components';
import { UserTheme } from '../../../Utils/UserTheme';
import { styled as MUIStyled, Paper } from '@mui/material';

export const Wrapper = Styled.section`
display:flex;
// position:relative;

.btn{
  // position: absolute;
}
`;

export const Wrapper2 = MUIStyled(Paper)(() => ({
  display: 'flex',
}));

export const Sidebar = MUIStyled('div')(({ theme }) => ({
  // minWidth: '18%',
  width: '300px',
  backgroundColor: theme.palette.primary.dark,
  padding: '0 .625rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  overflowX: 'auto',
}));

export const DisplayArea = Styled.main`
height: 100vh;
overflow-x: auto;
width:100%;

`;

export const StyledLink = Styled(Link)`
  text-decoration: none;
  font-size: ${UserTheme.fontSize.logo};
  color: ${UserTheme.color.primary100};
  font-family: ${UserTheme.fontFamily.flavor};
  width:100%;
  display:block;
  text-align:center;
  margin: 3.125rem 0 2.375rem 0;
`;
