import personnel from '../../../assets/icons/personnel.svg';
import profit from '../../../assets/icons/income.svg';
import coins from '../../../assets/icons/coins.svg';
import tag from '../../../assets/icons/price-tag.svg';
import loss from '../../../assets/icons/stop.svg';

export const dashboardMetrics = [
  {
    id: 1,
    color: '#6FCF97',
    icon: profit,
    title: "today's profit",
    value: '₦ 120,170',
  },
  {
    id: 2,
    color: '#DEB03B',
    icon: tag,
    title: "today's purhcase amount",
    value: '₦ 220,265',
  },
  {
    id: 3,
    color: '#96999F',
    icon: loss,
    title: "today's loss",
    value: '₦ 2,340',
  },
  {
    id: 4,
    color: '#9B51E0',
    icon: coins,
    title: 'items sold since today',
    value: '110',
  },
  {
    id: 5,
    color: '#D635B2',
    icon: tag,
    title: 'total invemtory cost',
    value: '₦ 12,000,000',
  },
  {
    id: 6,
    color: '#5D16CF',
    icon: personnel,
    title: 'staff on duty',
    value: '12',
  },
];

