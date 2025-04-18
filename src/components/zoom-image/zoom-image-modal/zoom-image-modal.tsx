import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { ZoomImageModalProps } from "./types";

const ZoomImageModal = ({
  src,
  width,
  height,
  transition,
  onClose,
  onChangeTransition,
}: ZoomImageModalProps) => {
  useEffect(() => {
    onChangeTransition(true);
  }, [onChangeTransition]);

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex h-dvh w-dvw"
      onClick={onClose(false)}
      onWheel={onClose(false)}
    >
      <div className="relative flex size-full items-center justify-center">
        <Image
          src={src}
          width={width}
          height={height}
          alt="preview"
          className={cn(
            "absolute origin-center cursor-zoom-out max-h-dvh transition duration-300 scale-50 opacity-20",
            {
              "scale-100 opacity-100": transition,
            }
          )}
          onClick={onClose(false)}
        />
      </div>
      <button
        aria-label="Minimize image"
        className="absolute right-[20px] top-[20px] size-[40px] cursor-zoom-out touch-manipulation appearance-none rounded-full border-0 bg-black/70 p-[9px] text-white"
        onClick={onClose(false)}
        type="button"
      >
        <svg
          aria-hidden="true"
          data-rmiz-btn-unzoom-icon="true"
          fill="currentColor"
          focusable="false"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ZoomImageModal;
