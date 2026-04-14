
import DownloadsContent from '@/components/module/Download/DownloadsContent';
import { getInstruction } from '@/services/instruction/instruction.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Download | NativeWays",
  description: "Learn about the NativeWays story. We are bridging the gap between curious travelers and passionate local experts to create authentic, unforgettable journeys.",

};

const Download = async () => {
  const instructions = await getInstruction("page=1&limit=100");
  return (
    <DownloadsContent instructions={instructions?.data} />
  );
};

export default Download;