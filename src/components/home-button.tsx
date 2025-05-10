"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { deleteAuthCredentials } from "@/lib/auth-utils";

const HomeButton = () => {
  return (
    <div>
      <form action={deleteAuthCredentials}>
        <Button
          type="submit"
          className="h-13 px-10 text-lg font-semibold min-w-[140px] gap-3"
        >
          <LogOut className="w-7 h-7" />
          Exit
        </Button>
      </form>
    </div>
  );
};

export default HomeButton;