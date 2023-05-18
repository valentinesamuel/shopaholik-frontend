import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { UserTheme } from '../Utils/UserTheme';
import { Box, styled as MUIStyled } from '@mui/material';
import { shouldForwardProp } from '../Utils/ShouldForwardProp';

type Props = {
  icon: string;

  destination: string;
  name: string;
};

const StyledSideLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.625rem 0 0.625rem 1.25rem;
  margin-bottom: 1.3125rem;

  .text {
    margin-left: 1.25rem;
    text-transform: capitalize;
    color: ${UserTheme.color.primary100};
    font-size: ${UserTheme.fontSize.sm};
  }

  &:hover {
    background-color: rgba(186, 223, 233, 0.70);
    border-radius: 0.3125rem;
  }
`;

type MyComponentProps = {
  active: boolean;
};

const StyledSideLinkContainer = MUIStyled('div', {
  shouldForwardProp: (prop) =>
    shouldForwardProp<MyComponentProps>(['active'], prop),
})<MyComponentProps>(({ theme, active }) => ({
  backgroundColor: active ? theme.palette.primary.light : '',
  borderRadius: 5,
}));

const SideLink: FC<Props> = ({ icon, destination, name }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname.includes(`/${destination}`) ? true : false);
  }, [location]);

  return (
    <StyledSideLinkContainer active={active}>
      <StyledSideLink to={destination}>
        <img src={icon} alt="icon" />
        <p className="text">{name}</p>
      </StyledSideLink>
    </StyledSideLinkContainer>
  );
};

export default SideLink;
