"use client";
import React from "react";
import Image from "next/image";
import ZoomImage from "../zoom-image";

type Props = {
  photos: PhotoType[] | undefined;
};

export const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <ul className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {photos?.map(({ publicUrl, fileName }) => (
        <li key={fileName} className="break-inside-avoid overflow-hidden rounded shadow">
          <ZoomImage
            key={fileName}
            fileName={fileName}
            hightSrcResolution={publicUrl} // Use original URL here
            image={
              <Image
                src={publicUrl}
                alt={fileName}
                className="w-full h-auto object-cover rounded"
                width={0}
                height={0}
                sizes="100vw"
              />
            }
          />
        </li>
      ))}
    </ul>
  );
};