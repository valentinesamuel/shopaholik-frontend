import { Breadcrumbs, Typography } from '@mui/material';
import { FC } from 'react';
import { Link, Location } from 'react-router-dom';

interface Props {
  currentLocation: Location;
}

const BreadCrumbNavigation: FC<Props> = ({ currentLocation }) => {
  const breadcrumbPath = currentLocation.pathname.split('/').slice(0, -1);
  const currentPage = currentLocation.pathname.split('/').pop();
  return (
    <Breadcrumbs
      sx={{ margin: '.01% 0' }}
      separator="›"
      aria-label="breadcrumb"
    >
      {breadcrumbPath.map((path) => (
        <Link
          style={{ textDecoration: 'none' }}
          to={`/${path === 'order' ? 'manager/order' : path}`}
          key={path}
        >
          <Typography sx={{ textTransform: 'capitalize' }} color="#9b9a9a">
            {path}
          </Typography>
        </Link>
      ))}
      <Link style={{ textDecoration: 'none' }} to="">
        <Typography color="#007bf6" sx={{ textTransform: 'capitalize' }}>
          {currentPage}
        </Typography>
      </Link>
    </Breadcrumbs>
  );
};

export default BreadCrumbNavigation;
