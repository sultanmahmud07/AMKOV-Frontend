
import DownloadsContent from '@/components/module/Download/DownloadsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Download | NativeWays",
  description: "Learn about the NativeWays story. We are bridging the gap between curious travelers and passionate local experts to create authentic, unforgettable journeys.",

};

const Download = () => {
  return (
    <DownloadsContent />
  );
};

export default Download;