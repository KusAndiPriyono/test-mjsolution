import { HiOutlineEye, HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';
import Stat from './Stat';

function Stats({ publishCount, viewsCount }) {
  // 1.
  const numPublish = publishCount.length;

  // 2.
  const numViews = viewsCount.length;

  return (
    <>
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
    </>
  );
}

export default Stats;
