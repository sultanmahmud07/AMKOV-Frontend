
import DownloadsContent from '@/components/module/Download/DownloadsContent';
import { getInstruction } from '@/services/instruction/instruction.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AMKOV Camera Software & Manual Downloads",
  description: "Download official AMKOV camera user manuals, firmware updates, companion apps and product resources. Search by camera model for the correct files. Access technical specifications and support documentation.",
};

const Download = async () => {
  const instructions = await getInstruction("page=1&limit=100");
  return (
    <DownloadsContent instructions={instructions?.data} />
  );
};

export default Download;