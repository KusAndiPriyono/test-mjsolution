import styled from 'styled-components';
import Stats from './Stats';
import AnalyticsBarChart from './AnalyticsBarChart';
import LastDraft from './LastDraft';
import LastProject from './LastProject';
import { usePosts } from './usePosts';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  padding-top: 2.4rem;
`;

function DashboardLayout() {
  const publishCount = Array(25).fill({});
  const viewsCount = Array(298).fill({});

  const { isLoading, posts } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <StyledDashboardLayout>
      <Stats publishCount={publishCount} viewsCount={viewsCount} />
      <AnalyticsBarChart />
      <LastDraft posts={posts} />
      <LastProject posts={posts} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
