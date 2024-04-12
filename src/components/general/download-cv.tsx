'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/cv.html', '_blank')}>
      View CV(old)
    </Button>
  );
};

export default DownloadCV;
