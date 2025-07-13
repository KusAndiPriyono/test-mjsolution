import styled from 'styled-components';
import DashboardBox from './DashboardBox';
import Heading from '../../ui/Heading';

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function AnalyticsBarChart() {
  return (
    <StyledSalesChart>
      <Heading as='h2'>Analytics Summary</Heading>
    </StyledSalesChart>
  );
}

export default AnalyticsBarChart;
