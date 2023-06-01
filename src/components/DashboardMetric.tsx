import { Box, Paper } from '@mui/material';
import { styled as MUIStyled } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';
import { UserTheme } from '../Utils/UserTheme';
import personnel from '../assets/icons/personnel.svg';
import profit from '../assets/icons/income.svg';
import coins from '../assets/icons/coins.svg';
import tag from '../assets/icons/price-tag.svg';
import loss from '../assets/icons/stop.svg';
import { useAppSelector } from '../Utils/StateDispatch';
import {
  convertNumberToLocal,
  convertNumberToLocale,
} from '../Utils/Converter';

const DashboardMetricContainer = MUIStyled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: 16,
  borderRadius: 5,
  justifyContent: 'space-between',
  width: '100%',
}));

const Icon = styled.img`
  height: auto;
  width: 2.5rem;
  objectfit: contain;
`;

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

const DashboardMetric: FC = () => {
  const metrics = useAppSelector((state) => state.metricReducer);

  return (
    <Paper
      elevation={1}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          mobile: 'repeat(auto-fit, minmax(100%, 30%))',
          tablet: 'repeat(auto-fit, minmax(100%, 30%))',
          desktop: 'repeat(auto-fit, minmax(300px, 30%))',
        },
        justifyItems: 'stretch',
        justifyContent: 'space-between',
        rowGap: '1rem',
        padding: 3,
      }}
    >
      <DashboardMetricContainer style={{ backgroundColor: '#6FCF97' }}>
        <Content>
          <p className="title">{metrics.dailyProfit.name}</p>
          <p className="value">
            ₦ {convertNumberToLocale(metrics.dailyProfit.value as number)}
          </p>
        </Content>
        <Icon src={profit} alt="profit" />
      </DashboardMetricContainer>
      <DashboardMetricContainer style={{ backgroundColor: '#DEB03B' }}>
        <Content>
          <p className="title">{metrics.purchaseCount.name}</p>
          <p className="value">
            ₦ {convertNumberToLocale(metrics.purchaseCount.value as number)}
          </p>
        </Content>
        <Icon src={tag} alt="icon" />
      </DashboardMetricContainer>
      <DashboardMetricContainer style={{ backgroundColor: '#96999F' }}>
        <Content>
          <p className="title">{metrics.dailyLoss.name}</p>
          <p className="value">
            ₦ {convertNumberToLocale(metrics.dailyLoss.value as number)}
          </p>
        </Content>
        <Icon src={loss} alt="loss" />
      </DashboardMetricContainer>
      <DashboardMetricContainer style={{ backgroundColor: '#9B51E0' }}>
        <Content>
          <p className="title">{metrics.dailySales.name}</p>
          <p className="value">{metrics.dailySales.value}</p>
        </Content>
        <Icon src={coins} alt="coins" />
      </DashboardMetricContainer>
      <DashboardMetricContainer style={{ backgroundColor: '#D635B2' }}>
        <Content>
          <p className="title">{metrics.inventoryCost.name}</p>
          <p className="value">
            ₦ {convertNumberToLocale(metrics.inventoryCost.value as number)}
          </p>
        </Content>
        <Icon src={tag} alt="tag" />
      </DashboardMetricContainer>
      <DashboardMetricContainer style={{ backgroundColor: '#5D16CF' }}>
        <Content>
          <p className="title">{metrics.staffOnDuty.name}</p>
          <p className="value">{metrics.staffOnDuty.value}</p>
        </Content>
        <Icon src={personnel} alt="icon" />
      </DashboardMetricContainer>
    </Paper>
  );
};

export default DashboardMetric;
