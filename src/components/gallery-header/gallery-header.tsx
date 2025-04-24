"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ROUTES } from "@/lib/routes";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteAuthCredentials } from "@/lib/auth-utils";

export const GalleryHeader = () => {
  const router = useRouter();
  return (
    <div className="fixed container inset-0 w-full bg-white border-b border-neutral-100 h-fit items-center flex justify-center">
      <Button
        variant={"outline"}
        onClick={() => {
          deleteAuthCredentials();
          router.replace(ROUTES.LOGIN);
        }}
      >
        <HomeIcon className="w-12 h-12" />
      </Button>
      <Image
        src={"/assets/OBS_Brand.webp"}
        width={400}
        height={400}
        alt="OBS Brand Logo"
        loading="lazy"
        className="object-contain max-h-56 flex-1"
      />
    </div>
  );
};
