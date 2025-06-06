"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    uploadId: string;
};

const DownloadAllButton: React.FC<Props> = ({ uploadId }) => {
const handleDownloadAll = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/gallery/public/download-all?uploadid=${uploadId}`;
  window.open(url, "_blank");
};

  return (
    <Button
      type="button"
      onClick={handleDownloadAll}
      className="h-13 px-10 text-sm font-semibold min-w-[140px] gap-3"
    >
      <Download className="w-7 h-7" />
      Download All
    </Button>
  );
};

export default DownloadAllButton;