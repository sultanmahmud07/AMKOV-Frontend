
import DownloadsContent from '@/components/module/Download/DownloadsContent';
import { getInstruction } from '@/services/instruction/instruction.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AMKOV Camera Software & Manual Downloads",
  description: "Get official AMKOV camera software, app files, and user guides in one place. Find quick downloads for setup, pairing, updates, and everyday camera support.Learn about the NativeWays story. We are bridging the gap between curious travelers and passionate local experts to create authentic, unforgettable journeys.",

};

const Download = async () => {
  const instructions = await getInstruction("page=1&limit=100");
  return (
    <DownloadsContent instructions={instructions?.data} />
  );
};

export default Download;