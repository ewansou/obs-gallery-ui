"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { createPortal } from "react-dom";
import { ZoomImageProps } from "./types";
import useZoomImage from "./use-zoom-image";
import ZoomImageModal from "./zoom-image-modal";

const ZoomImage: FC<ZoomImageProps> = ({
  image,
  className,
  hightSrcResolution,
}) => {
  const { open, transition, toggleModal, setTransition } = useZoomImage();

  return (
    <>
      <span
        className={cn("cursor-zoom-in", className)}
        onClick={toggleModal(true)}
      >
        {image}
      </span>
      {open &&
        createPortal(
          <ZoomImageModal
            src={hightSrcResolution ?? image.props.src}
            width={image.props.width}
            height={image.props.height}
            transition={transition}
            onClose={toggleModal}
            onChangeTransition={setTransition}
          />,
          document.body
        )}
    </>
  );
};

export default ZoomImage;
