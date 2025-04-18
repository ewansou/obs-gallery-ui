import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export interface ZoomImageProps {
  image: ReactElement<StaticImageData>;
  className?: string;
  hightSrcResolution?: string;
}
