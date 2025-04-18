"use client";
import React from "react";
import Image from "next/image";
import ZoomImage from "../zoom-image";

type Props = {
  photos: PhotoType[] | undefined;
};

export const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-5">
      {photos?.map(({ publicUrl, fileName }) => (
        <ZoomImage
          key={fileName}
          image={
            <Image
              src={publicUrl}
              alt={fileName}
              className="object-cover h-full"
              width={600}
              height={600}
            />
          }
        />
      ))}
    </ul>
  );
};
