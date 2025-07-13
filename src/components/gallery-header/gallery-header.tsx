
import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/obs-nyc-logo.png";

export const GalleryHeader = () => {

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-neutral-100 z-50 py-6 flex items-center justify-center">
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="OBS Brand Logo"
        loading="lazy"
        className="object-contain h-20"
      />
    </div>
  );
};