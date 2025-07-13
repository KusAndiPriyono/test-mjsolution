import styled from 'styled-components';
import Stats from './Stats';
import AnalyticsBarChart from './AnalyticsBarChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  padding-top: 2.4rem;
`;

function DashboardLayout() {
  const publishCount = []; // Replace with actual data source
  const viewsCount = []; // Replace with actual data source

  return (
    <StyledDashboardLayout>
      <Stats publishCount={publishCount} viewsCount={viewsCount} />
      <AnalyticsBarChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
