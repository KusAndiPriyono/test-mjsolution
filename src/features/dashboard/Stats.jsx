import { HiOutlineEye, HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';
import Stat from './Stat';
import styled from 'styled-components';

const StatColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function Stats({ publishCount, viewsCount }) {
  const numPublish = publishCount.length;

  const numViews = viewsCount.length;

  return (
    <StatColumn>
      <Stat
        title='Total Publish'
        color='indigo'
        icon={<HiOutlineClipboardDocumentCheck />}
        value={numPublish}
      />
      <Stat
        title='Total Views'
        color='green'
        icon={<HiOutlineEye />}
        value={numViews}
      />
    </StatColumn>
  );
}

export default Stats;
