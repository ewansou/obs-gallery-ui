"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ZoomImage from "../zoom-image";
import DownloadAllButton from "../download-all-button";

type Props = {
  photos: PhotoType[] | undefined;
  uploadId: string;
};

export const Gallery: React.FC<Props> = ({ photos, uploadId }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center text-gray-500 text-base py-10">
        No photos
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end">
        <DownloadAllButton uploadId={uploadId} />
      </div>

      <ul
        className={`columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 transition-opacity duration-700 ease-in ${visible ? "opacity-100" : "opacity-0"
          }`}
      >
        {photos.map(({ publicUrl, fileName }) => (
          <li key={fileName} className="break-inside-avoid overflow-hidden rounded shadow relative">
            <ImageWithSkeleton src={publicUrl} alt={fileName} />
          </li>
        ))}
      </ul>
    </>
  );
};

const ImageWithSkeleton: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full">
      {!loaded && (
        <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse rounded" />
      )}
      <ZoomImage
        fileName={alt}
        hightSrcResolution={src}
        image={
          <Image
            src={src}
            alt={alt || "Gallery photo"}
            className={`w-full h-auto object-cover rounded transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        }
      />
    </div>
  );
};