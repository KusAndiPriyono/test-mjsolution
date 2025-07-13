import styled from 'styled-components';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';

const StyledLastDraft = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  gap: 2.4rem;
  padding-top: 2.4rem;
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
`;

const TitleText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-800);
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostItem = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 1.6rem;
  align-items: center;
  padding: 2.4rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const DateText = styled.p`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  margin: 0;
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-grey-800);
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* batasi 2 baris */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function LastProject({ posts }) {
  return (
    <>
      <StyledLastDraft>
        <Row type='horizontal'>
          <Heading as='h2'>Last Project</Heading>
        </Row>
        {posts.slice(0, 2).map((post) => (
          <PostItem key={post.id}>
            <Img src={post.image_url} alt={post.title} />
            <Content>
              <TitleText>{post.title}</TitleText>
              <ContentText>{post.content}</ContentText>
              <DateText>
                {' '}
                {new Date(post.created_at).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </DateText>
            </Content>
          </PostItem>
        ))}
      </StyledLastDraft>
    </>
  );
}

export default LastProject;
