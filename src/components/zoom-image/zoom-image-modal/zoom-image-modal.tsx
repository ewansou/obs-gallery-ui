import Image from "next/image";
import { cn, handleDownload } from "@/lib/utils";
import React, { useEffect } from "react";
import { ZoomImageModalProps } from "./types";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const ZoomImageModal = ({
  src,
  fileName,
  transition,
  onClose,
  onChangeTransition,
}: ZoomImageModalProps) => {

  useEffect(() => {
    onChangeTransition(true);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [onChangeTransition]);

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="relative flex flex-col items-center justify-center gap-5 py-10 md:py-20 max-h-screen overflow-y-auto bg-white rounded-xl px-6">
        <Image
          src={src}
          alt="preview"
          width={0}
          height={0}
          sizes="100vw"
          className={cn(
            "w-auto h-auto object-contain cursor-zoom-out max-w-[80vw] max-h-[75vh] transition duration-300",
            {
              "scale-100 opacity-100": transition,
              "scale-95 opacity-0": !transition,
            }
          )}
          onClick={onClose(false)}
        />

        <p className="text-sm text-black text-center max-w-md mt-10">
          On some mobile devices, you can long-press the image to save it to your gallery. Give it a try!<br /><br />
          If that doesn't work, tap the button below to download and save the photo.
          Depending on your device, the photo may appear in your browser's downloads or photo gallery.
        </p>

        <Button
          onClick={() => handleDownload({ fileName, publicUrl: src })}
          className="px-4 py-2 text-sm mb-4 mt-4"
        >
          <DownloadIcon className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      <button
        aria-label="Minimize image"
        className="absolute right-5 top-5 size-10 cursor-zoom-out appearance-none rounded-full bg-black/70 p-2 text-white"
        onClick={onClose(false)}
        type="button"
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          focusable="false"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.144531 1.148438L9 6.292969V3H8v5h5V7H9.707031l5.148438-5.148437zM8 8H3v1h3.292969L1.148438 14.144531l.703125.710938L7 9.707031V13h1z" />
        </svg>
      </button>
    </div>
  );
};

export default ZoomImageModal;