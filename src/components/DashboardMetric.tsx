import { Box } from '@mui/material';
import { styled as MUIStyled } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';
import { UserTheme } from '../Utils/UserTheme';
import { borderRadius } from '@mui/system';

const DashboardMetricContainer = MUIStyled('div')(({ theme }) => ({
  // maxWidth: '356px',
  display: 'flex',
  alignItems: 'center',
  padding: 16,
  borderRadius: 5,
  justifyContent: 'space-between',
}));

const Content = styled(Box)`
  .title {
    font-size: ${UserTheme.fontSize.base};
    color: ${UserTheme.color.primary100};
    font-weight: ${UserTheme.fontWeight.normal};
    text-transform: capitalize;
  }
  .value {
    font-size: ${UserTheme.fontSize.fourxl};
    color: ${UserTheme.color.primary100};
    font-weight: ${UserTheme.fontWeight.semiBold};
    margin-top: 0.875rem;
  }
`;

type Props = {
  color: string;
  icon: string;
  title: string;
  value: string;
};

const DashboardMetric: FC<Props> = ({ color, icon, title, value }) => {
  return (
    <DashboardMetricContainer style={{ backgroundColor: color }}>
      <Content>
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </Content>
      <img
        src={icon}
        alt="icon"
        className="icon"
        style={{ height: 'auto', width: '2.5rem', objectFit: 'contain' }}
      />
    </DashboardMetricContainer>
  );
};

export default DashboardMetric;
