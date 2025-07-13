import styled from 'styled-components';
import Heading from '../ui/Heading';
import { HiOutlineSquares2X2, HiOutlineChevronRight } from 'react-icons/hi2';
import { useEffect } from 'react';
import { getPosts } from '../services/apiPosts';
import DashboardLayout from '../features/dashboard/DashboardLayout';

const StyledDashboardLayout = styled.div`
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-grey-0);
  padding: 2rem 2.8rem;
  border-radius: 4px;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-green-500);
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledComponent = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

function Dashboard() {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        console.log(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <StyledDashboardLayout>
        <LayoutContainer>
          <StyledComponent>
            <HiOutlineSquares2X2 />
            <Heading as='h3'>Dashboard</Heading>
          </StyledComponent>
          <StyledComponent>
            <HiOutlineSquares2X2 />
            <HiOutlineChevronRight />
            <Heading as='h4'>Dashboard</Heading>
          </StyledComponent>
        </LayoutContainer>
      </StyledDashboardLayout>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
