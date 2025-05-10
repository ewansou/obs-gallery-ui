"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

const HomeButton = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        className="h-13 px-10 text-lg font-semibold min-w-[140px] gap-3"
        onClick={async () => {
          await fetch("/api/logout", {
            method: "GET",
            credentials: "include",
          });
          router.replace(ROUTES.LOGIN); // <- redirect happens here
        }}
      >
        <LogOut className="w-7 h-7" />
        Exit
      </Button>
    </div>
  );
};

export default HomeButton;