import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export interface ZoomImageProps {
  fileName: string;
  image: ReactElement<StaticImageData>;
  className?: string;
  hightSrcResolution?: string;
}
