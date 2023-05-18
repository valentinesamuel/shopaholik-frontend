import { Link } from 'react-router-dom';
import { styled as Styled } from 'styled-components';
import { UserTheme } from '../../../Utils/UserTheme';
import { styled as MUIStyled } from '@mui/material';

export const Wrapper = Styled.section`
display:flex;
align-items:top;
`;

export const Sidebar = MUIStyled('div')(({ theme }) => ({
  minWidth: '15%',
  height: '100vh',
  backgroundColor: theme.palette.primary.main,
  padding: '0 .625rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const DisplayArea = Styled.main``;

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
